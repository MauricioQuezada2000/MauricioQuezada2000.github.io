/* Certificates and technical toolkit. No build step or external runtime. */
const portfolioText = {
  es: {
    mod2Title: 'Certificaciones y formación', mod2Sub: 'Un recorrido por mi formación técnica, con acceso a los documentos originales.',
    mod3Title: 'Herramientas y ecosistemas industriales', card1Unit: 'certificados disponibles', card3Unit: 'herramientas de trabajo',
    certPrevious: 'Certificado anterior', certNext: 'Certificado siguiente', certPause: 'Pausar', certPlay: 'Reanudar', certOpen: 'Abrir PDF', certAll: 'Ver todos', certLess: 'Volver al carrusel', certRegion: 'Certificados y formación',
    professional: 'Certificación profesional', course: 'Formación técnica', attendance: 'Participación', language: 'Idiomas',
    certNote: 'Cada tarjeta indica el tipo de documento y su fecha. La certificación profesional de Autodesk fue obtenida en 2020.',
    techIntro: 'Del diseño y la programación a la integración de equipos en planta.', cad: 'CAD y diseño eléctrico', automation: 'Automatización, HMI y SCADA', electrical: 'Aparamenta e integración eléctrica', printing: 'Impresión 3D',
    cadNote: 'Mis herramientas principales de diseño.', automationNote: 'Programación, supervisión y seguridad funcional.', electricalNote: 'Marcas con las que trabajo en proyectos industriales.', printingNote: 'Preparación y laminado de modelos para fabricación.',
    expertise: 'Especialidad', certificateLink: 'Ver certificado', obtained: 'Obtenida en 2020', brandsNote: 'Los iconos identifican herramientas y fabricantes. Las credenciales se muestran en la sección de certificaciones.'
  },
  en: {
    mod2Title: 'Certifications and training', mod2Sub: 'My technical training, with access to the original documents.',
    mod3Title: 'Tools and industrial ecosystems', card1Unit: 'certificates available', card3Unit: 'working tools',
    certPrevious: 'Previous certificate', certNext: 'Next certificate', certPause: 'Pause', certPlay: 'Resume', certOpen: 'Open PDF', certAll: 'View all', certLess: 'Back to carousel', certRegion: 'Certificates and training',
    professional: 'Professional certification', course: 'Technical training', attendance: 'Participation', language: 'Languages',
    certNote: 'Each card shows the document type and date. The Autodesk professional certification was earned in 2020.',
    techIntro: 'From design and programming to on-site equipment integration.', cad: 'CAD and electrical design', automation: 'Automation, HMI and SCADA', electrical: 'Electrical equipment and integration', printing: '3D printing',
    cadNote: 'My main design tools.', automationNote: 'Programming, supervision and functional safety.', electricalNote: 'Brands I work with on industrial projects.', printingNote: 'Model preparation and slicing for manufacturing.',
    expertise: 'Core skill', certificateLink: 'View certificate', obtained: 'Earned in 2020', brandsNote: 'Icons identify tools and manufacturers. Credentials are shown in the certifications section.'
  },
  fr: {
    mod2Title: 'Certifications et formations', mod2Sub: 'Mon parcours de formation technique, avec accès aux documents originaux.',
    mod3Title: 'Outils et écosystèmes industriels', card1Unit: 'certificats disponibles', card3Unit: 'outils de travail',
    certPrevious: 'Certificat précédent', certNext: 'Certificat suivant', certPause: 'Pause', certPlay: 'Reprendre', certOpen: 'Ouvrir le PDF', certAll: 'Tout afficher', certLess: 'Revenir au carrousel', certRegion: 'Certificats et formations',
    professional: 'Certification professionnelle', course: 'Formation technique', attendance: 'Participation', language: 'Langues',
    certNote: 'Chaque carte indique le type de document et sa date. La certification professionnelle Autodesk a été obtenue en 2020.',
    techIntro: 'De la conception et la programmation à l’intégration d’équipements sur site.', cad: 'CAO et conception électrique', automation: 'Automatisation, IHM et SCADA', electrical: 'Appareillage et intégration électrique', printing: 'Impression 3D',
    cadNote: 'Mes principaux outils de conception.', automationNote: 'Programmation, supervision et sécurité fonctionnelle.', electricalNote: 'Marques utilisées dans mes projets industriels.', printingNote: 'Préparation et tranchage des modèles pour la fabrication.',
    expertise: 'Spécialité', certificateLink: 'Voir le certificat', obtained: 'Obtenue en 2020', brandsNote: 'Les icônes identifient les outils et fabricants. Les justificatifs figurent dans la section certifications.'
  }
};
Object.keys(portfolioText).forEach(lang => Object.assign(translations[lang], portfolioText[lang]));

const toolkit = [
  {group:'cad', icon:'drawing-document', items:[
    ['Autodesk Inventor','autodesk','3D CAD',true], ['AutoCAD','autodesk','2D CAD',true], ['SOLIDWORKS','solidworks','3D CAD',true], ['EPLAN','eplan','Electrical engineering',true], ['AutoCAD Electrical','autodesk','Electrical CAD',true],
    ['DIALux evo',null,'Lighting'], ['SIMARIS','siemens','Electrical planning'], ['e-Design','abb','Electrical planning'], ['EcoStruxure Power Design – Ecodial','schneider','Electrical planning']
  ]},
  {group:'automation',icon:'plc-device',items:[
    ['STEP 7 Classic','siemens','SIMATIC'], ['TIA Portal / STEP 7','siemens','SIMATIC'], ['WinCC Classic','siemens','SCADA'], ['WinCC en TIA Portal','siemens','HMI'], ['WinCC Unified','siemens','HMI / SCADA'], ['Safety Integrated','siemens','STEP 7 Safety / F-CPU'],
    ['EcoStruxure','schneider','Automation'], ['Vijeo Designer','schneider','HMI'], ['AVEVA Plant SCADA','aveva','Citect SCADA'], ['AVEVA / Wonderware','aveva','HMI / SCADA'],
    ['RSLogix 500','rockwell','Allen-Bradley'], ['Studio 5000 Logix Designer','rockwell','RSLogix 5000'], ['FactoryTalk','rockwell','HMI / SCADA'],
    ['TwinCAT 3','beckhoff','Automation'], ['Ignition','ignition','SCADA'], ['C-more',null,'HMI'], ['Productivity Suite',null,'PLC'], ['Kinco',null,'HMI']
  ]},
  {group:'electrical',icon:'hardware-cabinet',items:[
    ['Siemens','siemens'], ['Schneider Electric','schneider'], ['WEG Automation','weg'], ['Phoenix Contact','phoenix-contact'], ['Weidmüller','weidmuller'], ['Delta Electronics','delta'], ['ABB','abb'], ['Eaton','eaton'], ['Rittal','rittal']
  ]},
  {group:'printing',icon:'pen',items:[['PrusaSlicer','prusa','Slicing'],['UltiMaker Cura','ultimaker','Slicing']]}
];

let certificateUI;
function element(tag, className, text) {
  const el=document.createElement(tag);
  if(className) el.className=className;
  if(text) el.textContent=text;
  return el;
}
function brandIcon(brand, fallback) {
  const box=element('span','brand-icon');
  const src=typeof brandAssets !== 'undefined' && brandAssets[brand]?.file;
  if(src){
    const img=element('img');img.src=src;img.alt='';img.loading='lazy';img.width=36;img.height=36;
    img.addEventListener('error',()=>box.replaceChildren(makeIcon(fallback)),{once:true});box.append(img);
  }else box.append(makeIcon(fallback));
  return box;
}
function initPortfolio() {
  const featured=certificatesData.find(c=>c.featured);
  const badge=$('autodeskBadge');badge.href=featured.src;
  badge.prepend(brandIcon('autodesk','certificate'));
  const viewport=$('certificateTrack');
  certificatesData.forEach(cert=>{
    const card=element('article','certificate-card'+(cert.featured?' certificate-card--featured':''));
    const a=element('a','certificate-card__preview');a.href=cert.src;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label',cert.title+' (PDF)');
    const img=element('img');img.src=cert.preview;img.alt=cert.title;img.loading='lazy';img.decoding='async';img.width=1000;img.height=750;
    a.append(img);
    const body=element('div','certificate-card__body');
    const meta=element('div','certificate-card__meta');
    const kind=element('span','certificate-card__kind');kind.dataset.i18n=cert.kind;
    const time=element('time');time.dateTime=cert.date;time.dataset.certDate=cert.date;
    meta.append(kind,time);
    const h=element('h3',null,cert.title);const issuer=element('p','certificate-card__issuer',cert.issuer);
    const link=element('a','certificate-card__link');link.href=cert.src;link.target='_blank';link.rel='noopener';
    const label=element('span');label.dataset.i18n='certOpen';link.append(label,makeIcon('open-external'));
    body.append(meta,h,issuer,link);card.append(a,body);viewport.append(card);
  });
  toolkit.forEach(({group,icon,items})=>{
    const section=element('section','tool-group');
    const header=element('div','tool-group__header');const heading=element('h3');heading.dataset.i18n=group;
    const note=element('p');note.dataset.i18n=group+'Note';header.append(makeIcon(icon),heading,note);
    const list=element('ul','tool-grid');
    items.forEach(([name,brand,detail,strong])=>{
      const li=element('li','tool-card'+(strong?' tool-card--core':''));li.append(brandIcon(brand,icon));
      const body=element('div','tool-card__body');body.append(element('span','tool-card__name',name));
      if(detail)body.append(element('span','tool-card__detail',detail));
      if(strong){const flag=element('span','tool-card__flag');flag.dataset.i18n='expertise';body.append(flag);}
      li.append(body);list.append(li);
    });
    section.append(header,list);$('toolkit').append(section);
  });
  document.querySelector('[href="#certificaciones"] .bento-card__number').textContent=certificatesData.length;
  const softwareCount=toolkit.filter(t=>t.group!=='electrical').reduce((sum,t)=>sum+t.items.length,0);
  document.querySelector('.bento-card[href="#competencias"] .bento-card__number').textContent=softwareCount;
  initCertificateCarousel();
}
function initCertificateCarousel(){
  const track=$('certificateTrack'), region=$('certificateCarousel'), reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const state={paused:reduce.matches,all:false,hover:false,inView:false,timer:null};certificateUI=state;
  const position=()=>Math.max(0,Math.round(track.scrollLeft/(track.firstElementChild.getBoundingClientRect().width+20)));
  const update=()=>{
    $('certificatePosition').textContent=state.all?String(certificatesData.length):`${Math.min(position()+1,certificatesData.length)} / ${certificatesData.length}`;
    $('certificatePause').textContent=translations[currentLang][state.paused?'certPlay':'certPause'];
    $('certificatePause').setAttribute('aria-pressed',String(state.paused));
    $('certificateAll').textContent=translations[currentLang][state.all?'certLess':'certAll'];
    $('certificateAll').setAttribute('aria-expanded',String(state.all));
    ['certificatePrev','certificateNext','certificatePause'].forEach(id=>$(id).hidden=state.all);
  };
  function move(direction){
    const max=track.scrollWidth-track.clientWidth;
    const step=track.firstElementChild.getBoundingClientRect().width+20;
    const next=direction>0?(track.scrollLeft>=max-2?0:Math.min(max,(position()+1)*step)):(track.scrollLeft<=2?max:Math.max(0,(position()-1)*step));
    track.scrollTo({left:next,behavior:reduce.matches?'instant':'smooth'});
  }
  function schedule(){
    clearInterval(state.timer);
    if(state.paused||state.all||state.hover||document.hidden||!state.inView||region.contains(document.activeElement))return;
    state.timer=setInterval(()=>move(1),5500);
  }
  $('certificatePrev').addEventListener('click',()=>{state.paused=true;move(-1);update();schedule();});
  $('certificateNext').addEventListener('click',()=>{state.paused=true;move(1);update();schedule();});
  $('certificatePause').addEventListener('click',()=>{state.paused=!state.paused;update();schedule();});
  $('certificateAll').addEventListener('click',()=>{state.all=!state.all;track.classList.toggle('is-expanded',state.all);track.scrollLeft=0;update();schedule();});
  region.addEventListener('mouseenter',()=>{state.hover=true;schedule();});region.addEventListener('mouseleave',()=>{state.hover=false;schedule();});
  region.addEventListener('focusin',schedule);region.addEventListener('focusout',()=>setTimeout(schedule,0));
  track.addEventListener('pointerdown',()=>{state.paused=true;update();schedule();});
  track.addEventListener('scroll',update,{passive:true});
  document.addEventListener('visibilitychange',schedule);
  reduce.addEventListener('change',()=>{state.paused=reduce.matches;update();schedule();});
  new IntersectionObserver(entries=>{state.inView=entries[0].isIntersecting;schedule();},{threshold:.15}).observe(region);
  state.update=update;update();
}
function translatePortfolio(){
  document.querySelectorAll('[data-cert-date]').forEach(el=>{
    const value=el.dataset.certDate,parts=value.split('-');
    el.textContent=new Intl.DateTimeFormat(currentLang,{year:'numeric',month:'short',...(parts.length===3?{day:'numeric'}:{})}).format(new Date(Number(parts[0]),Number(parts[1])-1,Number(parts[2]||1)));
  });
  certificateUI?.update();
}
