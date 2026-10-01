"""Regenerate previews from manifests without modifying originals.
Optional dependencies: python -m pip install Pillow pypdfium2
"""
from pathlib import Path
import json
from PIL import Image
import pypdfium2 as pdf

ROOT = Path(__file__).resolve().parents[1]
def manifest(name):
    source = (ROOT / 'js' / name).read_text(encoding='utf-8')
    return json.loads(source.split('=', 1)[1].strip().removesuffix(';'))
def local(value):
    path = (ROOT / value).resolve()
    if not path.is_relative_to(ROOT):
        raise ValueError(f'Path outside project: {value}')
    return path

media = {}
for entry in manifest('gallery-data.js'):
    original = local(entry['src'])
    thumb = local('assets/thumbs/' + entry['category'] + '/' + original.stem + '.webp')
    thumb.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(original) as image:
        width, height = image.size
        image.thumbnail((720, 540))
        image.convert('RGB').save(thumb, 'WEBP', quality=85)
        media[entry['src']] = dict(thumb=thumb.relative_to(ROOT).as_posix(), width=width, height=height, thumbWidth=image.width, thumbHeight=image.height)
(ROOT / 'js/gallery-media.js').write_text('const galleryMedia = ' + json.dumps(media, indent=2) + ';\n', encoding='utf-8')
for entry in manifest('certificates-data.js'):
    target = local(entry['preview'])
    target.parent.mkdir(parents=True, exist_ok=True)
    with pdf.PdfDocument(str(local(entry['src']))) as document:
        page = document[0]
        image = page.render(scale=1.5).to_pil().convert('RGB')
        image.thumbnail((1000, 1000))
        image.save(target, 'WEBP', quality=86)
        page.close()
print('Gallery thumbnails and certificate previews updated.')
