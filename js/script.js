// ============================================================
// TRADUCCIONES 
// ============================================================
const translations = {
  es: {
    nav1: '01 Perfil', nav2: '02 Certificaciones', nav3: '03 Competencias', nav4: '04 Galería Técnica', nav5: '05 Contacto',
    heroStatus: 'EN LÍNEA — abierto a prácticas y colaboraciones',
    heroRole: 'Ingeniería en Automatización & Control Industrial',
    heroSub: 'Ingeniero en automatización con experiencia profesional en entornos industriales. Actualmente curso el Máster ARMAC en la Université Marie et Louis Pasteur.',

    card1Label: 'Cursos y Certificaciones', card1Unit: 'certificaciones oficiales',
    card1Breakdown: 'Automatización PLC · Sistemas de potencia · IEC 61131-3 · Subestaciones · Instalaciones eléctricas · Instrumentación de procesos',
    card2Label: 'Sectores de trabajo', card2Unit: 'sectores industriales',
    card2Breakdown: 'Agroalimentario · Agua · Energía · Bebidas · Plásticos · Oil & Gas · Inmótica',
    card3Label: 'Softwares', card3Unit: 'herramientas dominadas',
    card3Breakdown: 'Automatización/SCADA · Programación PLC · Impresión 3D · Diseño CAD',
    card4Label: 'Curriculum Vitae', card4Unit: 'descargar CV completo', card4Breakdown: 'Actualizado 2026 · FR / EN / ES',
    card5Label: 'Redes', card5Unit: 'perfiles profesionales',
    card6Label: 'Proyectos resaltantes', card6Unit: 'proyectos documentados',
    card6Breakdown: 'Proyectos as-built · Diseño desde cero · Mantenimiento de sistemas de control',

    mod1Tag: 'MOD-01 // PERFIL', mod1Title: 'Sobre mí',
    mod1Text1: 'Ingeniero en automatización con experiencia profesional en entornos industriales. Actualmente curso el Máster ARMAC (Automatique, Robotique et Applications à la Mécatronique) en la Université Marie et Louis Pasteur, Besançon. Trabajé como Ingeniero de Proyectos de Automatización en Siemens Solution Partner / AF-Control, pilotando decenas de proyectos de control-comando de principio a fin: desde el diagnóstico en planta hasta la programación PLC y la puesta en marcha.',
    mod1Text2: 'Combino la capa de diseño — CAD mecánico, esquemas eléctricos EPLAN/AutoCAD — con la de programación, trabajando multi-marca (Siemens, Schneider, Allen-Bradley, Beckhoff) bajo el estándar IEC 61131-3 y buses de campo como EtherCAT, Profinet y Modbus.',
    sectorsLabel: 'Sectores de trabajo:',
    sector1: 'Agroalimentario', sector2: 'Tratamiento de agua', sector3: 'Energía (hidroeléctrica)',
    sector4: 'Bebidas', sector5: 'Plásticos', sector6: 'Oil & Gas', sector7: 'Inmótica / Terciario',

    mod2Tag: 'MOD-02 // CERTIFICACIONES',
    mod2Title: '+20 certificaciones oficiales',
    mod2Sub: 'Selección de las más relevantes:',
    certHeadArea: 'ÁREA',
    certHeadName: 'CERTIFICACIÓN',
    certArea1: 'General',
    cert1: 'SITRAIN Siemens Partner Academy — TIA Portal, WinCC, PCS 7, SIMOTION, Safety',
    certArea2: 'Auto & PLC',
    cert2: 'Automatización Industrial y PLCs: Programación avanzada, desarrollo de lógica y arquitecturas de control (IEC 61131-3).',
    certArea3: 'Potencia',
    cert3: 'Sistemas de Potencia y Subestaciones: Diseño, diagnóstico y mantenimiento de sistemas de potencia e infraestructura de AT.',
    certArea4: 'Instalación',
    cert4: 'Instalaciones Eléctricas: Ejecución y supervisión de instalaciones y montajes eléctricos a nivel industrial y comercial.',
    certArea5: 'Procesos',
    cert5: 'Instrumentación de Procesos: Integración de sensores, telemetría continua y sistemas de instrumentación para control.',

    mod3Tag: 'MOD-03 // COMPETENCIAS', mod3Title: 'Stack técnico — +20 herramientas',
    regHeadReg: 'GRUPO', regHeadSkill: 'HERRAMIENTAS', regHeadArea: 'CANT.',
    soft1Group: 'Automatización & SCADA', soft2Group: 'CAD & Eléctrico', soft3Group: 'Impresión 3D',
    softNote: 'Además: lenguajes Ladder, FBD, CFC, Structured Text y Grafcet (IEC 61131-3), C++, Python y Visual Basic Macros. Protocolos Profinet, Profibus, Modbus TCP/RTU, EtherNet/IP, OPC UA e IEC-61850.',

    mod4Tag: 'MOD-04 // GALERÍA TÉCNICA', mod4Title: 'Por área de trabajo',
    mod4Sub: '',
    workAreasLabel: 'Áreas de trabajo:',
    wa1: 'Programación PLC', wa2: 'Comisionado de plantas', wa3: 'Puesta en marcha de proyectos',
    wa4: 'Pruebas FAT/SAT', wa5: 'Parametrización de equipos',
    filterAll: 'Todas', filterPlc: 'Programación PLC', filterHmi: 'HMI', filterScada: 'SCADA',
    filterVfd: 'Variadores de frecuencia', filterElec: 'Instalaciones eléctricas',
    filterCad: 'Planos CAD', filterPanel: 'Diseño de tableros', filterDesign: 'Diseño', filter3d: 'Impresión 3D',

    mod5Tag: 'MOD-05 // CONTACTO', mod5Title: 'Hablemos',
    mod5Text: 'Abierto a oportunidades de prácticas, alternancia y contacto profesional.',
    labelEmail: 'Correo', labelPhone: 'Teléfono', labelGithub: 'GitHub', labelLinkedin: 'LinkedIn',
    labelCV: 'Curriculum', labelCVValue: 'Descargar PDF',
    footerBuilt: 'Construido con HTML & CSS',
  },
  en: {
    nav1: '01 Profile', nav2: '02 Certifications', nav3: '03 Skills', nav4: '04 Technical Gallery', nav5: '05 Contact',
    heroStatus: 'ONLINE — open to internships and collaborations',
    heroRole: 'Automation & Industrial Control Engineering',
    heroSub: 'Automation engineer with professional experience in industrial environments. Currently pursuing the ARMAC Master’s at Université Marie et Louis Pasteur.',

    card1Label: 'Courses & Certifications', card1Unit: 'official certifications',
    card1Breakdown: 'PLC automation · Power systems · IEC 61131-3 · Substations · Electrical installations · Process instrumentation',
    card2Label: 'Industry sectors', card2Unit: 'industrial sectors',
    card2Breakdown: 'Food & bev. · Water · Energy · Beverages · Plastics · Oil & Gas · Building automation',
    card3Label: 'Software', card3Unit: 'tools mastered',
    card3Breakdown: 'Automation/SCADA · PLC programming · 3D printing · CAD design',
    card4Label: 'Resume', card4Unit: 'download full CV', card4Breakdown: 'Updated 2026 · FR / EN / ES',
    card5Label: 'Networks', card5Unit: 'professional profiles',
    card6Label: 'Featured projects', card6Unit: 'documented projects',
    card6Breakdown: 'As-built projects · Greenfield design · Control system maintenance',

    mod1Tag: 'MOD-01 // PROFILE', mod1Title: 'About me',
    mod1Text1: 'Automation engineer with professional experience in industrial environments. Currently pursuing the ARMAC Master’s (Automatique, Robotique et Applications à la Mécatronique) at Université Marie et Louis Pasteur, Besançon. I worked as an Automation Project Engineer at Siemens Solution Partner / AF-Control, leading dozens of control system projects end to end: from on-site diagnostics to PLC programming and commissioning.',
    mod1Text2: 'I combine the design layer — mechanical CAD, EPLAN/AutoCAD electrical schematics — with the programming layer, working across brands (Siemens, Schneider, Allen-Bradley, Beckhoff) under the IEC 61131-3 standard and fieldbuses such as EtherCAT, Profinet and Modbus.',
    sectorsLabel: 'Industry sectors:',
    sector1: 'Food & beverage', sector2: 'Water treatment', sector3: 'Energy (hydroelectric)',
    sector4: 'Beverages', sector5: 'Plastics', sector6: 'Oil & Gas', sector7: 'Building automation',

    mod2Tag: 'MOD-02 // CERTIFICATIONS',
    mod2Title: '+20 official certifications',
    mod2Sub: 'A selection of the most relevant:',
    certHeadArea: 'AREA',
    certHeadName: 'CERTIFICATION',
    certArea1: 'General',
    cert1: 'SITRAIN Siemens Partner Academy — TIA Portal, WinCC, PCS 7, SIMOTION, Safety',
    certArea2: 'Auto & PLC',
    cert2: 'Industrial Automation and PLCs: Advanced programming, logic development, and control architectures (IEC 61131-3).',
    certArea3: 'Power',
    cert3: 'Power Systems and Substations: Design, diagnostics, and maintenance of power systems and HV infrastructure.',
    certArea4: 'Installation',
    cert4: 'Electrical Installations: Execution and supervision of electrical installations and assemblies at industrial and commercial levels.',
    certArea5: 'Processes',
    cert5: 'Process Instrumentation: Sensor integration, continuous telemetry, and instrumentation systems for control.',

    mod3Tag: 'MOD-03 // SKILLS', mod3Title: 'Technical stack — +20 tools',
    regHeadReg: 'GROUP', regHeadSkill: 'TOOLS', regHeadArea: 'QTY.',
    soft1Group: 'Automation & SCADA', soft2Group: 'CAD & Electrical', soft3Group: '3D printing',
    softNote: 'Also: Ladder, FBD, CFC, Structured Text and Grafcet (IEC 61131-3) languages, C++, Python and Visual Basic Macros. Profinet, Profibus, Modbus TCP/RTU, EtherNet/IP, OPC UA and IEC-61850 protocols.',

    mod4Tag: 'MOD-04 // TECHNICAL GALLERY', mod4Title: 'By work area',
    mod4Sub: '',
    workAreasLabel: 'Work areas:',
    wa1: 'PLC programming', wa2: 'Plant commissioning', wa3: 'Project start-up',
    wa4: 'FAT/SAT testing', wa5: 'Equipment parametrization',
    filterAll: 'All', filterPlc: 'PLC programming', filterHmi: 'HMI', filterScada: 'SCADA',
    filterVfd: 'Variable frequency drives', filterElec: 'Electrical installations',
    filterCad: 'CAD drawings', filterPanel: 'Panel design', filterDesign: 'Design', filter3d: '3D printing',

    mod5Tag: 'MOD-05 // CONTACT', mod5Title: 'Let’s talk',
    mod5Text: 'Open to internship, apprenticeship and professional contact opportunities.',
    labelEmail: 'Email', labelPhone: 'Phone', labelGithub: 'GitHub', labelLinkedin: 'LinkedIn',
    labelCV: 'Resume', labelCVValue: 'Download PDF',
    footerBuilt: 'Built with HTML & CSS',
  },
  fr: {
    nav1: '01 Profil', nav2: '02 Certifications', nav3: '03 Compétences', nav4: '04 Galerie Technique', nav5: '05 Contact',
    heroStatus: 'EN LIGNE — ouvert aux stages et collaborations',
    heroRole: 'Ingénierie en Automatisation & Contrôle Industriel',
    heroSub: 'Ingénieur automaticien avec expérience professionnelle en environnements industriels. Actuellement en Master ARMAC à l’Université Marie et Louis Pasteur.',

    card1Label: 'Cours et Certifications', card1Unit: 'certifications officielles',
    card1Breakdown: 'Automatisation API · Systèmes de puissance · IEC 61131-3 · Sous-stations · Installations électriques · Instrumentation de procédés',
    card2Label: 'Secteurs d’activité', card2Unit: 'secteurs industriels',
    card2Breakdown: 'Agroalimentaire · Eau · Énergie · Boissons · Plasturgie · Oil & Gas · Immotique',
    card3Label: 'Logiciels', card3Unit: 'outils maîtrisés',
    card3Breakdown: 'Automatisation/SCADA · Programmation API · Impression 3D · Conception CAO',
    card4Label: 'Curriculum Vitae', card4Unit: 'télécharger le CV complet', card4Breakdown: 'Mis à jour 2026 · FR / EN / ES',
    card5Label: 'Réseaux', card5Unit: 'profils professionnels',
    card6Label: 'Projets marquants', card6Unit: 'projets documentés',
    card6Breakdown: 'Projets as-built · Conception à partir de zéro · Maintenance de systèmes de contrôle',

    mod1Tag: 'MOD-01 // PROFIL', mod1Title: 'À propos de moi',
    mod1Text1: 'Ingénieur automaticien avec expérience professionnelle en environnements industriels. Actuellement en Master ARMAC (Automatique, Robotique et Applications à la Mécatronique) à l’Université Marie et Louis Pasteur, Besançon. J’ai travaillé comme Ingénieur Projets d’Automatisation chez Siemens Solution Partner / AF-Control, en pilotant des dizaines de projets de contrôle-commande de bout en bout : du diagnostic terrain à la programmation automate et la mise en service.',
    mod1Text2: 'Je combine la couche conception — CAO mécanique, schémas électriques EPLAN/AutoCAD — avec la couche programmation, en travaillant multi-marques (Siemens, Schneider, Allen-Bradley, Beckhoff) selon la norme IEC 61131-3 et des bus de terrain comme EtherCAT, Profinet et Modbus.',
    sectorsLabel: 'Secteurs d’activité :',
    sector1: 'Agroalimentaire', sector2: 'Traitement de l’eau', sector3: 'Énergie (hydroélectrique)',
    sector4: 'Boissons', sector5: 'Plasturgie', sector6: 'Oil & Gas', sector7: 'Immotique / Tertiaire',

    mod2Tag: 'MOD-02 // CERTIFICATIONS',
    mod2Title: '+20 certifications officielles',
    mod2Sub: 'Sélection des plus pertinentes :',
    certHeadArea: 'DOMAINE',
    certHeadName: 'CERTIFICATION',
    certArea1: 'Général',
    cert1: 'SITRAIN Siemens Partner Academy — TIA Portal, WinCC, PCS 7, SIMOTION, Safety',
    certArea2: 'Auto & API',
    cert2: 'Automatisation Industrielle et API : Programmation avancée, développement logique et architectures de contrôle (IEC 61131-3).',
    certArea3: 'Puissance',
    cert3: 'Systèmes de Puissance et Sous-stations : Conception, diagnostic et maintenance des systèmes de puissance et infrastructures HT.',
    certArea4: 'Installation',
    cert4: 'Installations Électriques : Exécution et supervision d\'installations et de montages électriques aux niveaux industriel et commercial.',
    certArea5: 'Procédés',
    cert5: 'Instrumentation de Procédés : Intégration de capteurs, télémétrie continue et systèmes d\'instrumentation pour le contrôle.',

    mod3Tag: 'MOD-03 // COMPÉTENCES', mod3Title: 'Stack technique — +20 outils',
    regHeadReg: 'GROUPE', regHeadSkill: 'OUTILS', regHeadArea: 'QTÉ.',
    soft1Group: 'Automatisation & SCADA', soft2Group: 'CAO & Électrique', soft3Group: 'Impression 3D',
    softNote: 'Également : langages Ladder, FBD, CFC, Structured Text et Grafcet (IEC 61131-3), C++, Python et Visual Basic Macros. Protocoles Profinet, Profibus, Modbus TCP/RTU, EtherNet/IP, OPC UA et IEC-61850.',

    mod4Tag: 'MOD-04 // GALERIE TECHNIQUE', mod4Title: 'Par domaine de travail',
    mod4Sub: '',
    workAreasLabel: 'Domaines de travail :',
    wa1: 'Programmation API', wa2: 'Mise en service d’installations', wa3: 'Démarrage de projets',
    wa4: 'Essais FAT/SAT', wa5: 'Paramétrage d’équipements',
    filterAll: 'Toutes', filterPlc: 'Programmation API', filterHmi: 'IHM', filterScada: 'SCADA',
    filterVfd: 'Variateurs de fréquence', filterElec: 'Installations électriques',
    filterCad: 'Plans CAO', filterPanel: 'Conception de tableaux', filterDesign: 'Design', filter3d: 'Impression 3D',

    mod5Tag: 'MOD-05 // CONTACT', mod5Title: 'Discutons',
    mod5Text: 'Ouvert aux opportunités de stage, d’alternance et aux contacts professionnels.',
    labelEmail: 'Courriel', labelPhone: 'Téléphone', labelGithub: 'GitHub', labelLinkedin: 'LinkedIn',
    labelCV: 'Curriculum', labelCVValue: 'Télécharger le PDF',
    footerBuilt: 'Construit avec HTML & CSS',
  },
};

const interfaceText = {
  es: { skip: 'Saltar al contenido', menu: 'Menú', ctaProjects: 'Ver proyectos', ctaCV: 'Descargar CV', ctaContact: 'Contactar', galleryHelp: 'Explora por especialidad. Pulsa una imagen para ver sus detalles a tamaño completo.', images: 'imágenes', enlarge: 'Ampliar', original: 'Original', close: 'Cerrar visor', previous: 'Imagen anterior', next: 'Imagen siguiente', zoomIn: 'Acercar', zoomOut: 'Alejar', zoomReset: 'Ajustar a la ventana', viewerHelp: '← → cambiar · + − zoom · 0 ajustar · Esc cerrar · Arrastra la imagen ampliada para ver los detalles.', navLabel: 'Navegación principal', langLabel: 'Selector de idioma', filterLabel: 'Filtros de categoría', title: 'Mauricio Quezada — Ingeniería en Automatización', description: 'Portafolio de Mauricio Quezada, ingeniero en automatización y control industrial.', unavailable: 'No se pudo cargar la imagen. Puedes intentar abrir el original.', loading: 'Cargando imagen…', imageArea: 'Imagen ampliada; utiliza las barras de desplazamiento o arrastra con zoom', backTop: 'Volver al inicio' },
  en: { skip: 'Skip to content', menu: 'Menu', ctaProjects: 'View projects', ctaCV: 'Download CV', ctaContact: 'Get in touch', galleryHelp: 'Explore by specialty. Select an image to view its details at full size.', images: 'images', enlarge: 'Enlarge', original: 'Original', close: 'Close viewer', previous: 'Previous image', next: 'Next image', zoomIn: 'Zoom in', zoomOut: 'Zoom out', zoomReset: 'Fit to window', viewerHelp: '← → navigate · + − zoom · 0 fit · Esc close · Drag the zoomed image to explore details.', navLabel: 'Main navigation', langLabel: 'Language selector', filterLabel: 'Category filters', title: 'Mauricio Quezada — Automation Engineering', description: 'Mauricio Quezada’s portfolio: automation and industrial control engineering.', unavailable: 'The image could not be loaded. You can try opening the original.', loading: 'Loading image…', imageArea: 'Enlarged image; use scrollbars or drag when zoomed in', backTop: 'Back to top' },
  fr: { skip: 'Aller au contenu', menu: 'Menu', ctaProjects: 'Voir les projets', ctaCV: 'Télécharger le CV', ctaContact: 'Me contacter', galleryHelp: 'Explorez par spécialité. Cliquez sur une image pour voir ses détails en grand format.', images: 'images', enlarge: 'Agrandir', original: 'Original', close: 'Fermer la visionneuse', previous: 'Image précédente', next: 'Image suivante', zoomIn: 'Agrandir', zoomOut: 'Réduire', zoomReset: 'Adapter à la fenêtre', viewerHelp: '← → naviguer · + − zoom · 0 adapter · Échap fermer · Faites glisser l’image agrandie pour voir les détails.', navLabel: 'Navigation principale', langLabel: 'Sélecteur de langue', filterLabel: 'Filtres de catégorie', title: 'Mauricio Quezada — Ingénierie en automatisation', description: 'Portfolio de Mauricio Quezada, ingénieur en automatisation et contrôle industriel.', unavailable: 'Impossible de charger l’image. Vous pouvez essayer d’ouvrir l’original.', loading: 'Chargement de l’image…', imageArea: 'Image agrandie ; utilisez les barres de défilement ou faites glisser avec le zoom', backTop: 'Retour en haut' }
};
Object.keys(translations).forEach(lang => Object.assign(translations[lang], interfaceText[lang]));
const LANG_KEY = 'site-lang';
const $ = id => document.getElementById(id);
const SVG_NS = 'http://www.w3.org/2000/svg';
const categoryKeys = { plc: 'filterPlc', hmi: 'filterHmi', scada: 'filterScada', vfd: 'filterVfd', elec: 'filterElec', cad: 'filterCad', panel: 'filterPanel', design: 'filterDesign', '3d': 'filter3d' };
let currentLang = 'fr';
let currentGalleryFilter = 'all';
let activeIndex = 0;
let zoom = 1;
let returnFocus = null;
let loadSequence = 0;
let imageReady = false;
let activeLoader = null;
let gesture = null;
const cards = [];
const visibleImages = () => galleryData.filter(item => currentGalleryFilter === 'all' || item.category === currentGalleryFilter);
const labelFor = item => item.caption?.[currentLang]?.trim() || item.caption?.es?.trim() || `${translations[currentLang][categoryKeys[item.category]] || item.category} · ${galleryData.filter(x => x.category === item.category).indexOf(item) + 1}`;
function makeIcon(name) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.classList.add('icon');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  const use = document.createElementNS(SVG_NS, 'use');
  use.setAttribute('href', `#ix-${name}`);
  svg.append(use);
  return svg;
}
function updateFilter() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    const category = chip.dataset.filter;
    const count = galleryData.filter(item => category === 'all' || item.category === category).length;
    chip.classList.toggle('is-active', category === currentGalleryFilter);
    chip.setAttribute('aria-pressed', String(category === currentGalleryFilter));
    chip.hidden = count === 0;
    chip.querySelector('.filter-chip__count').textContent = count;
  });
  cards.forEach(({ item, figure }) => { figure.hidden = currentGalleryFilter !== 'all' && item.category !== currentGalleryFilter; });
  $('galleryCount').textContent = `${visibleImages().length} ${translations[currentLang].images}`;
}
function translateGallery() {
  cards.forEach(({ item, media, img, caption, hintText }) => {
    caption.textContent = labelFor(item);
    img.alt = labelFor(item);
    media.setAttribute('aria-label', `${translations[currentLang].enlarge}: ${labelFor(item)}`);
    hintText.textContent = translations[currentLang].enlarge;
  });
  updateFilter();
}
function buildGallery() {
  const fragment = document.createDocumentFragment();
  galleryData.forEach(item => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-item';
    figure.dataset.category = item.category;
    const media = document.createElement('button');
    media.type = 'button';
    media.className = 'gallery-item__media';
    media.setAttribute('aria-haspopup', 'dialog');
    media.setAttribute('aria-controls', 'imageViewer');
    const img = document.createElement('img');
    const metadata = typeof galleryMedia === 'undefined' ? {} : galleryMedia[item.src] || {};
    img.loading = 'lazy';
    img.decoding = 'async';
    img.src = metadata.thumb || item.src;
    if (metadata.thumbWidth) { img.width = metadata.thumbWidth; img.height = metadata.thumbHeight; }
    // A newly added original still works before its thumbnail has been generated.
    img.addEventListener('error', () => {
      if (!img.dataset.usedOriginal) {
        img.dataset.usedOriginal = 'true';
        img.src = item.src;
      } else {
        img.hidden = true;
        if (!media.querySelector('.gallery-item__error')) {
          const fallback = makeIcon('no-image');
          fallback.classList.add('gallery-item__error');
          media.prepend(fallback);
        }
      }
    });
    const hint = document.createElement('span');
    hint.className = 'gallery-item__zoom';
    hint.setAttribute('aria-hidden', 'true');
    const hintText = document.createElement('span');
    hint.append(makeIcon('zoom-in'), hintText);
    media.append(img, hint);
    const caption = document.createElement('figcaption');
    figure.append(media, caption);
    media.addEventListener('click', () => {
      const viewer = $('imageViewer');
      if (typeof viewer.showModal !== 'function') { window.open(item.src, '_blank', 'noopener'); return; }
      returnFocus = media;
      activeIndex = visibleImages().indexOf(item);
      viewer.showModal();
      document.body.classList.add('viewer-open');
      showImage();
      $('viewerClose').focus();
    });
    cards.push({ item, figure, media, img, caption, hintText });
    fragment.append(figure);
  });
  $('galleryGrid').replaceChildren(fragment);
}
function applyLanguage(lang) {
  currentLang = Object.hasOwn(translations, lang) ? lang : 'fr';
  const dict = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (dict[el.dataset.i18n] !== undefined) el.textContent = dict[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', dict[el.dataset.i18nAria]);
    el.title = dict[el.dataset.i18nAria];
  });
  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === currentLang);
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
  });
  $('mainNav').setAttribute('aria-label', dict.navLabel);
  document.querySelector('.lang-switch').setAttribute('aria-label', dict.langLabel);
  document.querySelector('.filter-row').setAttribute('aria-label', dict.filterLabel);
  document.querySelector('#certificaciones .reg-table').setAttribute('aria-label', dict.mod2Title);
  document.querySelector('#competencias .reg-table').setAttribute('aria-label', dict.mod3Title);
  document.documentElement.lang = currentLang;
  document.title = dict.title;
  document.querySelector('meta[name="description"]').content = dict.description;
  try { localStorage.setItem(LANG_KEY, currentLang); } catch { /* Preference is optional. */ }
  translateGallery();
}
function updateZoomControls() {
  $('zoomValue').textContent = `${Math.round(zoom * 100)}%`;
  $('zoomOut').disabled = !imageReady || zoom <= 1;
  $('zoomIn').disabled = !imageReady || zoom >= 4;
  $('zoomReset').disabled = !imageReady;
  $('viewerStage').classList.toggle('is-zoomed', imageReady && zoom > 1);
}
function fitImage() {
  updateZoomControls();
  if (!imageReady) return;
  const img = $('viewerImage');
  const stage = $('viewerStage');
  if (!img.naturalWidth || !img.naturalHeight) return;
  const ratio = Math.max(0.01, Math.min((stage.clientWidth - 24) / img.naturalWidth, (stage.clientHeight - 24) / img.naturalHeight, 1));
  img.style.width = `${img.naturalWidth * ratio * zoom}px`;
  img.style.height = `${img.naturalHeight * ratio * zoom}px`;
}
function setZoom(value) {
  if (!imageReady) return;
  const stage = $('viewerStage');
  const img = $('viewerImage');
  const oldWidth = img.getBoundingClientRect().width;
  const centerX = stage.scrollLeft + stage.clientWidth / 2;
  const centerY = stage.scrollTop + stage.clientHeight / 2;
  zoom = Math.max(1, Math.min(4, value));
  fitImage();
  if (zoom === 1) stage.scrollTo(0, 0);
  else {
    const ratio = img.getBoundingClientRect().width / oldWidth;
    stage.scrollLeft = centerX * ratio - stage.clientWidth / 2;
    stage.scrollTop = centerY * ratio - stage.clientHeight / 2;
  }
}
function showImage() {
  const items = visibleImages();
  const item = items[activeIndex];
  if (!item) return;
  const sequence = ++loadSequence;
  imageReady = false;
  zoom = 1;
  const img = $('viewerImage');
  img.hidden = true;
  img.removeAttribute('src');
  img.style.width = img.style.height = '';
  img.alt = labelFor(item);
  $('viewerOriginal').href = item.src;
  $('viewerCaption').textContent = labelFor(item);
  $('viewerCounter').textContent = `${activeIndex + 1} / ${items.length}`;
  $('viewerPrev').disabled = $('viewerNext').disabled = items.length < 2;
  $('viewerMessage').textContent = translations[currentLang].loading;
  $('viewerMessage').hidden = false;
  $('viewerStage').setAttribute('aria-busy', 'true');
  $('viewerStage').scrollTo(0, 0);
  updateZoomControls();
  activeLoader = new Image();
  activeLoader.onload = () => {
    if (sequence !== loadSequence || !$('imageViewer').open) return;
    img.src = item.src;
    img.hidden = false;
    imageReady = true;
    $('viewerMessage').hidden = true;
    $('viewerStage').setAttribute('aria-busy', 'false');
    fitImage();
  };
  activeLoader.onerror = () => {
    if (sequence !== loadSequence) return;
    $('viewerMessage').textContent = translations[currentLang].unavailable;
    $('viewerStage').setAttribute('aria-busy', 'false');
  };
  activeLoader.src = item.src;
}
function navigateImage(delta) {
  const count = visibleImages().length;
  if (!count) return;
  activeIndex = (activeIndex + delta + count) % count;
  showImage();
}

document.addEventListener('DOMContentLoaded', () => {
  buildGallery();
  let savedLang;
  try { savedLang = localStorage.getItem(LANG_KEY); } catch { /* Optional preference. */ }
  applyLanguage(savedLang || 'fr');
  document.querySelectorAll('.lang-switch__btn').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
  document.querySelectorAll('.filter-chip').forEach(chip => chip.addEventListener('click', () => {
    currentGalleryFilter = chip.dataset.filter;
    updateFilter();
  }));

  const menu = document.querySelector('.menu-toggle');
  const header = document.querySelector('.topbar');
  const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); header.classList.remove('menu-open'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    header.classList.toggle('menu-open', open);
  });
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
    closeMenu();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
  }));
  document.addEventListener('click', event => { if (!header.contains(event.target)) closeMenu(); });
  header.addEventListener('focusout', event => { if (!header.contains(event.relatedTarget)) closeMenu(); });
  window.matchMedia('(min-width: 1001px)').addEventListener('change', closeMenu);

  const viewer = $('imageViewer');
  const stage = $('viewerStage');
  $('viewerClose').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => {
    ++loadSequence;
    imageReady = false;
    gesture = null;
    stage.classList.remove('is-dragging');
    document.body.classList.remove('viewer-open');
    returnFocus?.focus({ preventScroll: true });
  });
  $('viewerPrev').addEventListener('click', () => navigateImage(-1));
  $('viewerNext').addEventListener('click', () => navigateImage(1));
  $('zoomIn').addEventListener('click', () => setZoom(zoom + 0.5));
  $('zoomOut').addEventListener('click', () => setZoom(zoom - 0.5));
  $('zoomReset').addEventListener('click', () => setZoom(1));
  $('viewerImage').addEventListener('load', fitImage);
  $('viewerImage').addEventListener('dblclick', () => setZoom(zoom === 1 ? 2 : 1));
  window.addEventListener('resize', () => { if (viewer.open) fitImage(); });
  document.addEventListener('keydown', event => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (viewer.open) {
      if (event.key === 'Tab') {
        const focusable = [...viewer.querySelectorAll('button:not(:disabled), a[href], [tabindex="0"]')].filter(el => el.getClientRects().length);
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && (document.activeElement === first || !viewer.contains(document.activeElement))) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !viewer.contains(document.activeElement))) {
          event.preventDefault(); first?.focus();
        }
        return;
      }
      const actions = { ArrowLeft: () => navigateImage(-1), ArrowRight: () => navigateImage(1), '+': () => setZoom(zoom + 0.5), '=': () => setZoom(zoom + 0.5), '-': () => setZoom(zoom - 0.5), '0': () => setZoom(1) };
      if (actions[event.key]) { event.preventDefault(); actions[event.key](); }
    } else if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
  });
  stage.addEventListener('pointerdown', event => {
    if (!event.isPrimary) { gesture = null; return; }
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    gesture = { id: event.pointerId, type: event.pointerType, x: event.clientX, y: event.clientY, left: stage.scrollLeft, top: stage.scrollTop };
    if (zoom > 1 && event.pointerType === 'mouse') {
      stage.setPointerCapture(event.pointerId);
      stage.classList.add('is-dragging');
      event.preventDefault();
    }
  });
  stage.addEventListener('pointermove', event => {
    if (!gesture || event.pointerId !== gesture.id || zoom === 1 || event.pointerType !== 'mouse') return;
    stage.scrollLeft = gesture.left - (event.clientX - gesture.x);
    stage.scrollTop = gesture.top - (event.clientY - gesture.y);
  });
  stage.addEventListener('pointerup', event => {
    if (gesture?.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    if (zoom === 1 && gesture.type === 'touch' && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) navigateImage(dx < 0 ? 1 : -1);
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    gesture = null;
    stage.classList.remove('is-dragging');
  });
  stage.addEventListener('pointercancel', () => { gesture = null; stage.classList.remove('is-dragging'); });

  const sections = [...document.querySelectorAll('.module[id]')];
  const navLinks = [...document.querySelectorAll('#mainNav a')];
  let scheduled = false;
  function updateNavigation() {
    let active = null;
    sections.forEach(section => { if (section.getBoundingClientRect().top <= 160) active = section.id; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = sections.at(-1)?.id;
    navLinks.forEach(link => {
      if (link.hash === `#${active}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    document.querySelector('.back-top').hidden = window.scrollY < 600;
    scheduled = false;
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); } }, { passive: true });
  updateNavigation();
});
