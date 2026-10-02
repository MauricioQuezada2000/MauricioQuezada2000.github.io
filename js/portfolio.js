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
const refinementText = {
  es: {
    card1Focus: 'Especialización', card1Unit: 'formación técnica continua', card4Breakdown: 'CV actualizado · PDF en francés',
    heroBrands: 'Herramientas principales', trainingHeading: 'Áreas de formación', trainingArea: 'Área', trainingScope: 'Conocimientos y especialización',
    trainingPlc: 'Automatización y seguridad', trainingPlcText: 'Programación PLC, arquitecturas de control y seguridad funcional: S7-1200, S7-1500R/H, LOGO!, TIA Safety y Schneider PLC/PAC.',
    trainingScada: 'Supervisión y redes', trainingScadaText: 'Interfaces HMI, SCADA y comunicaciones industriales: WinCC Unified, Ignition, Modbus TCP, Profibus, Profinet y EtherNet/IP.',
    trainingCad: 'CAD y diseño', trainingCadText: 'Dibujo técnico en AutoCAD, diseño mecánico en Inventor e integración entre AutoCAD Electrical e Inventor.',
    trainingPower: 'Potencia e instalaciones', trainingPowerText: 'Automatización de sistemas eléctricos de potencia, selección de equipos de baja tensión, SIMARIS, selectividad y coordinación de protecciones.',
    trainingProcess: 'Instrumentación', trainingProcessText: 'Instrumentación de plantas de proceso, medición e integración de señales para el control industrial.',
    trainingVision: 'Visión por ordenador', trainingVisionText: 'Aprendizaje y trabajos de máster en visión por ordenador y redes neuronales, con OpenCV y YOLO.',
    instrumentation: 'Instrumentación, sensores y seguridad', instrumentationSummary: 'Familiaridad con marcas de instrumentación de procesos, pesaje, sensores y seguridad de máquinas.',
    vision: 'Visión por ordenador', visionSummary: 'En desarrollo: OpenCV, YOLO y redes neuronales en trabajos del máster. Familiaridad con fabricantes de visión industrial.',
    instrumentationDetails: 'Ver marcas conocidas', visionDetails: 'Ver herramientas y fabricantes',
    techIntro: 'Herramientas, fabricantes y áreas de aprendizaje, agrupados por especialidad.',
    card3Breakdown: 'CAD · Automatización/SCADA · Visión por ordenador · Impresión 3D',
    certNote: 'Una selección de mi formación. Abre cada PDF para consultar el documento original.',
    toolDetails: 'Ver herramientas',
    automationSummary: 'Siemens: STEP 7, TIA Portal, WinCC y Safety · Schneider Electric · AVEVA / Citect / Wonderware · Rockwell: RSLogix, Studio 5000 y FactoryTalk.',
    galleryScope: 'Una selección de ejemplos de mis trabajos de diseño, implementación, puesta en marcha y mantenimiento de sistemas industriales. Esta galería muestra parte de los proyectos y servicios que he realizado.'
  },
  en: {
    card1Focus: 'Specialization', card1Unit: 'continuing technical training', card4Breakdown: 'Updated CV · PDF in French',
    heroBrands: 'Main tools', trainingHeading: 'Training areas', trainingArea: 'Area', trainingScope: 'Knowledge and specialization',
    trainingPlc: 'Automation and safety', trainingPlcText: 'PLC programming, control architectures and functional safety: S7-1200, S7-1500R/H, LOGO!, TIA Safety and Schneider PLC/PAC.',
    trainingScada: 'Supervision and networks', trainingScadaText: 'HMI interfaces, SCADA and industrial communications: WinCC Unified, Ignition, Modbus TCP, Profibus, Profinet and EtherNet/IP.',
    trainingCad: 'CAD and design', trainingCadText: 'Technical drawing in AutoCAD, mechanical design in Inventor and integration between AutoCAD Electrical and Inventor.',
    trainingPower: 'Power and installations', trainingPowerText: 'Power system automation, low-voltage equipment selection, SIMARIS, selectivity and protection coordination.',
    trainingProcess: 'Instrumentation', trainingProcessText: 'Process plant instrumentation, measurement and signal integration for industrial control.',
    trainingVision: 'Computer vision', trainingVisionText: 'Learning and master’s coursework in computer vision and neural networks, using OpenCV and YOLO.',
    instrumentation: 'Instrumentation, sensors and safety', instrumentationSummary: 'Familiarity with manufacturers of process instrumentation, weighing equipment, sensors and machine safety systems.',
    vision: 'Computer vision', visionSummary: 'Developing skills: OpenCV, YOLO and neural networks through master’s coursework. Familiarity with industrial vision manufacturers.',
    instrumentationDetails: 'View familiar brands', visionDetails: 'View tools and manufacturers',
    techIntro: 'Tools, manufacturers and learning areas, grouped by specialty.',
    card3Breakdown: 'CAD · Automation/SCADA · Computer vision · 3D printing',
    certNote: 'A selection of my training. Open each PDF to read the original document.',
    toolDetails: 'View tools',
    automationSummary: 'Siemens: STEP 7, TIA Portal, WinCC and Safety · Schneider Electric · AVEVA / Citect / Wonderware · Rockwell: RSLogix, Studio 5000 and FactoryTalk.',
    galleryScope: 'Selected examples of my industrial system design, implementation, commissioning and maintenance work. This gallery presents a sample of the projects and services I have delivered.'
  },
  fr: {
    card1Focus: 'Spécialisation', card1Unit: 'formation technique continue', card4Breakdown: 'CV actualisé · PDF en français',
    heroBrands: 'Principaux outils', trainingHeading: 'Domaines de formation', trainingArea: 'Domaine', trainingScope: 'Connaissances et spécialisation',
    trainingPlc: 'Automatisation et sécurité', trainingPlcText: 'Programmation d’automates, architectures de commande et sécurité fonctionnelle : S7-1200, S7-1500R/H, LOGO!, TIA Safety et Schneider PLC/PAC.',
    trainingScada: 'Supervision et réseaux', trainingScadaText: 'Interfaces IHM, SCADA et communications industrielles : WinCC Unified, Ignition, Modbus TCP, Profibus, Profinet et EtherNet/IP.',
    trainingCad: 'CAO et conception', trainingCadText: 'Dessin technique avec AutoCAD, conception mécanique avec Inventor et intégration entre AutoCAD Electrical et Inventor.',
    trainingPower: 'Puissance et installations', trainingPowerText: 'Automatisation des systèmes électriques de puissance, choix d’équipements basse tension, SIMARIS, sélectivité et coordination des protections.',
    trainingProcess: 'Instrumentation', trainingProcessText: 'Instrumentation des installations de procédés, mesure et intégration de signaux pour le contrôle industriel.',
    trainingVision: 'Vision par ordinateur', trainingVisionText: 'Apprentissage et travaux de master en vision par ordinateur et réseaux de neurones, avec OpenCV et YOLO.',
    instrumentation: 'Instrumentation, capteurs et sécurité', instrumentationSummary: 'Connaissance de fabricants d’instrumentation de procédés, de systèmes de pesage, de capteurs et de sécurité des machines.',
    vision: 'Vision par ordinateur', visionSummary: 'Compétences en développement : OpenCV, YOLO et réseaux de neurones dans le cadre du master. Connaissance de fabricants de vision industrielle.',
    instrumentationDetails: 'Voir les marques connues', visionDetails: 'Voir les outils et fabricants',
    techIntro: 'Outils, fabricants et domaines d’apprentissage, regroupés par spécialité.',
    card3Breakdown: 'CAO · Automatisation/SCADA · Vision par ordinateur · Impression 3D',
    certNote: 'Une sélection de mes formations. Ouvrez chaque PDF pour consulter le document original.',
    toolDetails: 'Voir les outils',
    automationSummary: 'Siemens : STEP 7, TIA Portal, WinCC et Safety · Schneider Electric · AVEVA / Citect / Wonderware · Rockwell : RSLogix, Studio 5000 et FactoryTalk.',
    galleryScope: 'Quelques exemples de mes travaux de conception, d’intégration, de mise en service et de maintenance de systèmes industriels. Cette galerie présente une partie des projets et prestations que j’ai réalisés.'
  }
};
Object.keys(portfolioText).forEach(lang => Object.assign(translations[lang], portfolioText[lang], refinementText[lang]));

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
  {group:'instrumentation',icon:'asset-network',items:[
    ['Endress+Hauser','endress-hauser'], ['ABB','abb'], ['Siemens','siemens'], ['Pepperl+Fuchs','pepperl-fuchs'],
    ['EUROMAG',null], ['METTLER TOLEDO',null], ['LAUMAS',null], ['ReeR',null], ['Pilz',null], ['NOVUS',null],
    ['SICK','sick'], ['ifm',null], ['OMRON',null], ['Rosemount (Emerson)',null], ['Phoenix Contact','phoenix-contact'], ['Weidmüller','weidmuller']
  ]},
  {group:'vision',icon:'image',items:[
    ['KEYENCE','keyence'], ['IDS Imaging Development Systems','ids'], ['Beckhoff','beckhoff'], ['SICK','sick'],
    ['Cognex',null], ['OMRON',null], ['OpenCV',null], ['YOLO',null]
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
  ['siemens','autodesk','solidworks','eplan','schneider','aveva','rockwell'].forEach(brand=>{
    const icon=brandIcon(brand,'apps');icon.title={siemens:'Siemens',autodesk:'Autodesk',solidworks:'SOLIDWORKS',eplan:'EPLAN',schneider:'Schneider Electric',aveva:'AVEVA',rockwell:'Rockwell Automation'}[brand];
    $('heroBrands').append(icon);
  });
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
    const brands=element('div','tool-group__brands');brands.setAttribute('aria-hidden','true');
    [...new Set(items.map(item=>item[1]).filter(Boolean))].slice(0,4).forEach(brand=>brands.append(brandIcon(brand,icon)));
    header.append(heading,brands);
    const body=element('div','tool-group__content');
    const summary=element('p','tool-summary');
    const brief=group==='cad'?items.filter(item=>item[3]):items;
    if(['automation','instrumentation','vision'].includes(group))summary.dataset.i18n=group+'Summary';
    else summary.textContent=brief.map(item=>item[0]).join(' · ');
    body.append(summary);
    if(['cad','automation','instrumentation','vision'].includes(group)){
      const details=element('details','tool-details');const toggle=element('summary');toggle.dataset.i18n=['instrumentation','vision'].includes(group)?group+'Details':'toolDetails';
      const list=element('ul','tool-list');
      items.forEach(([name])=>list.append(element('li',null,name)));
      details.append(toggle,list);body.append(details);
    }
    section.append(header,body);$('toolkit').append(section);
  });
  const softwareCount=toolkit.filter(t=>['cad','automation','printing'].includes(t.group)).reduce((sum,t)=>sum+t.items.length,0)
    + toolkit.find(t=>t.group==='vision').items.filter(([name])=>['OpenCV','YOLO'].includes(name)).length;
  document.querySelector('.bento-card[href="#competencias"] .bento-card__number').textContent=softwareCount;
  initCertificateCarousel();
}
function initCertificateCarousel(){
  const track=$('certificateTrack'), region=$('certificateCarousel'), reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const state={paused:reduce.matches,all:false,hover:false,inView:false,timer:null};certificateUI=state;
  const position=()=>Math.max(0,Math.round(track.scrollLeft/(track.firstElementChild.getBoundingClientRect().width+20)));
  const update=()=>{
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
