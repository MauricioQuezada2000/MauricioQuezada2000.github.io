// ============================================================
// TRADUCCIONES — cada clave corresponde a un atributo data-i18n
// en index.html. Al duplicar tarjetas/filas de ejemplo (cert,
// proyecto, etc.) recuerda añadir su clave aquí en los 3 idiomas.
// ============================================================
const translations = {
  es: {
    nav1: '01 Perfil', nav2: '02 Certificaciones', nav3: '03 Competencias', nav4: '04 Galería Técnica', nav5: '05 Contacto',
    heroStatus: 'EN LÍNEA — abierto a prácticas y colaboraciones',
    heroRole: 'Ingeniería en Automatización & Control Industrial',
    heroSub: 'Ingeniero en automatización con experiencia profesional en Bolivia y Francia. Actualmente curso el Máster ARMAC en la Université Marie et Louis Pasteur.',

    card1Label: 'Cursos y Certificaciones', card1Unit: 'certificaciones oficiales',
    card1Breakdown: '4 Automatización/PLC · 4 CAD/Eléctrico · 3 Redes & SCADA · 4 especializadas',
    card2Label: 'Sectores de trabajo', card2Unit: 'sectores industriales',
    card2Breakdown: 'Agroalimentario · Agua · Energía · Bebidas · Plásticos · Oil & Gas · Inmótica',
    card3Label: 'Softwares', card3Unit: 'herramientas dominadas',
    card3Breakdown: '9 Automatización/SCADA · 8 CAD/Eléctrico · 2 Impresión 3D',
    card4Label: 'Curriculum Vitae', card4Unit: 'descargar CV completo', card4Breakdown: 'Actualizado 2026 · FR / EN / ES',
    card5Label: 'Redes', card5Unit: 'perfiles profesionales',
    card6Label: 'Proyectos resaltantes', card6Unit: 'proyectos documentados',
    card6Breakdown: '16 Siemens Solution Partner · 8 Rofer/Electrocapital · 2 Esdesur · 2 en Francia',

    mod1Tag: 'MOD-01 // PERFIL', mod1Title: 'Sobre mí',
    mod1Text1: 'Ingeniero en automatización con experiencia profesional en Bolivia y Francia. Actualmente curso el Máster ARMAC (Automatique, Robotique et Applications à la Mécatronique) en la Université Marie et Louis Pasteur, Besançon. Trabajé como Ingeniero de Proyectos de Automatización en Siemens Solution Partner / AF-Control, pilotando decenas de proyectos de control-comando de principio a fin: desde el diagnóstico en planta hasta la programación PLC y la puesta en marcha.',
    mod1Text2: 'Combino la capa de diseño — CAD mecánico, esquemas eléctricos EPLAN/AutoCAD — con la de programación, trabajando multi-marca (Siemens, Schneider, Allen-Bradley, Beckhoff) bajo el estándar IEC 61131-3 y buses de campo como EtherCAT, Profinet y Modbus.',
    sectorsLabel: 'Sectores de trabajo:',
    sector1: 'Agroalimentario', sector2: 'Tratamiento de agua', sector3: 'Energía (hidroeléctrica)',
    sector4: 'Bebidas', sector5: 'Plásticos', sector6: 'Oil & Gas', sector7: 'Inmótica / Terciario',

    mod2Tag: 'MOD-02 // CERTIFICACIONES', mod2Title: '15 certificaciones oficiales',
    mod2Sub: 'Selección de las más relevantes:',
    certHeadYear: 'AÑO', certHeadName: 'CERTIFICACIÓN',
    cert1: 'SITRAIN Siemens Partner Academy — TIA Portal, WinCC, PCS 7, SIMOTION, Safety',

    mod3Tag: 'MOD-03 // COMPETENCIAS', mod3Title: 'Stack técnico — 19 herramientas',
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
    filterCad: 'Planos CAD', filterPanel: 'Diseño de tableros', filter3d: 'Impresión 3D',

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
    heroSub: 'Automation engineer with professional experience in Bolivia and France. Currently pursuing the ARMAC Master\u2019s at Université Marie et Louis Pasteur.',

    card1Label: 'Courses & Certifications', card1Unit: 'official certifications',
    card1Breakdown: '4 Automation/PLC · 4 CAD/Electrical · 3 Networks & SCADA · 4 specialized',
    card2Label: 'Industry sectors', card2Unit: 'industrial sectors',
    card2Breakdown: 'Food & bev. · Water · Energy · Beverages · Plastics · Oil & Gas · Building automation',
    card3Label: 'Software', card3Unit: 'tools mastered',
    card3Breakdown: '9 Automation/SCADA · 8 CAD/Electrical · 2 3D printing',
    card4Label: 'Resume', card4Unit: 'download full CV', card4Breakdown: 'Updated 2026 · FR / EN / ES',
    card5Label: 'Networks', card5Unit: 'professional profiles',
    card6Label: 'Featured projects', card6Unit: 'documented projects',
    card6Breakdown: '16 Siemens Solution Partner · 8 Rofer/Electrocapital · 2 Esdesur · 2 in France',

    mod1Tag: 'MOD-01 // PROFILE', mod1Title: 'About me',
    mod1Text1: 'Automation engineer with professional experience in Bolivia and France. Currently pursuing the ARMAC Master\u2019s (Automatique, Robotique et Applications à la Mécatronique) at Université Marie et Louis Pasteur, Besançon. I worked as an Automation Project Engineer at Siemens Solution Partner / AF-Control, leading dozens of control system projects end to end: from on-site diagnostics to PLC programming and commissioning.',
    mod1Text2: 'I combine the design layer — mechanical CAD, EPLAN/AutoCAD electrical schematics — with the programming layer, working across brands (Siemens, Schneider, Allen-Bradley, Beckhoff) under the IEC 61131-3 standard and fieldbuses such as EtherCAT, Profinet and Modbus.',
    sectorsLabel: 'Industry sectors:',
    sector1: 'Food & beverage', sector2: 'Water treatment', sector3: 'Energy (hydroelectric)',
    sector4: 'Beverages', sector5: 'Plastics', sector6: 'Oil & Gas', sector7: 'Building automation',

    mod2Tag: 'MOD-02 // CERTIFICATIONS', mod2Title: '15 official certifications',
    mod2Sub: 'A selection of the most relevant:',
    certHeadYear: 'YEAR', certHeadName: 'CERTIFICATION',
    cert1: 'SITRAIN Siemens Partner Academy — TIA Portal, WinCC, PCS 7, SIMOTION, Safety',

    mod3Tag: 'MOD-03 // SKILLS', mod3Title: 'Technical stack — 19 tools',
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
    filterCad: 'CAD drawings', filterPanel: 'Panel design', filter3d: '3D printing',

    mod5Tag: 'MOD-05 // CONTACT', mod5Title: 'Let\u2019s talk',
    mod5Text: 'Open to internship, apprenticeship and professional contact opportunities.',
    labelEmail: 'Email', labelPhone: 'Phone', labelGithub: 'GitHub', labelLinkedin: 'LinkedIn',
    labelCV: 'Resume', labelCVValue: 'Download PDF',
    footerBuilt: 'Built with HTML & CSS',
  },
  fr: {
    nav1: '01 Profil', nav2: '02 Certifications', nav3: '03 Compétences', nav4: '04 Galerie Technique', nav5: '05 Contact',
    heroStatus: 'EN LIGNE — ouvert aux stages et collaborations',
    heroRole: 'Ingénierie en Automatisation & Contrôle Industriel',
    heroSub: 'Ingénieur automaticien avec expérience professionnelle en Bolivie et en France. Actuellement en Master ARMAC à l\u2019Université Marie et Louis Pasteur.',

    card1Label: 'Cours et Certifications', card1Unit: 'certifications officielles',
    card1Breakdown: '4 Automatisation/API · 4 CAO/Électrique · 3 Réseaux & SCADA · 4 spécialisées',
    card2Label: 'Secteurs d\u2019activité', card2Unit: 'secteurs industriels',
    card2Breakdown: 'Agroalimentaire · Eau · Énergie · Boissons · Plasturgie · Oil & Gas · Immotique',
    card3Label: 'Logiciels', card3Unit: 'outils maîtrisés',
    card3Breakdown: '9 Automatisation/SCADA · 8 CAO/Électrique · 2 Impression 3D',
    card4Label: 'Curriculum Vitae', card4Unit: 'télécharger le CV complet', card4Breakdown: 'Mis à jour 2026 · FR / EN / ES',
    card5Label: 'Réseaux', card5Unit: 'profils professionnels',
    card6Label: 'Projets marquants', card6Unit: 'projets documentés',
    card6Breakdown: '16 Siemens Solution Partner · 8 Rofer/Electrocapital · 2 Esdesur · 2 en France',

    mod1Tag: 'MOD-01 // PROFIL', mod1Title: 'À propos de moi',
    mod1Text1: 'Ingénieur automaticien avec expérience professionnelle en Bolivie et en France. Actuellement en Master ARMAC (Automatique, Robotique et Applications à la Mécatronique) à l\u2019Université Marie et Louis Pasteur, Besançon. J\u2019ai travaillé comme Ingénieur Projets d\u2019Automatisation chez Siemens Solution Partner / AF-Control, en pilotant des dizaines de projets de contrôle-commande de bout en bout : du diagnostic terrain à la programmation automate et la mise en service.',
    mod1Text2: 'Je combine la couche conception — CAO mécanique, schémas électriques EPLAN/AutoCAD — avec la couche programmation, en travaillant multi-marques (Siemens, Schneider, Allen-Bradley, Beckhoff) selon la norme IEC 61131-3 et des bus de terrain comme EtherCAT, Profinet et Modbus.',
    sectorsLabel: 'Secteurs d\u2019activité :',
    sector1: 'Agroalimentaire', sector2: 'Traitement de l\u2019eau', sector3: 'Énergie (hydroélectrique)',
    sector4: 'Boissons', sector5: 'Plasturgie', sector6: 'Oil & Gas', sector7: 'Immotique / Tertiaire',

    mod2Tag: 'MOD-02 // CERTIFICATIONS', mod2Title: '15 certifications officielles',
    mod2Sub: 'Sélection des plus pertinentes :',
    certHeadYear: 'ANNÉE', certHeadName: 'CERTIFICATION',
    cert1: 'SITRAIN Siemens Partner Academy — TIA Portal, WinCC, PCS 7, SIMOTION, Safety',

    mod3Tag: 'MOD-03 // COMPÉTENCES', mod3Title: 'Stack technique — 19 outils',
    regHeadReg: 'GROUPE', regHeadSkill: 'OUTILS', regHeadArea: 'QTÉ.',
    soft1Group: 'Automatisation & SCADA', soft2Group: 'CAO & Électrique', soft3Group: 'Impression 3D',
    softNote: 'Également : langages Ladder, FBD, CFC, Structured Text et Grafcet (IEC 61131-3), C++, Python et Visual Basic Macros. Protocoles Profinet, Profibus, Modbus TCP/RTU, EtherNet/IP, OPC UA et IEC-61850.',

    mod4Tag: 'MOD-04 // GALERIE TECHNIQUE', mod4Title: 'Par domaine de travail',
    mod4Sub: '',
    workAreasLabel: 'Domaines de travail :',
    wa1: 'Programmation API', wa2: 'Mise en service d\u2019installations', wa3: 'Démarrage de projets',
    wa4: 'Essais FAT/SAT', wa5: 'Paramétrage d\u2019équipements',
    filterAll: 'Toutes', filterPlc: 'Programmation API', filterHmi: 'IHM', filterScada: 'SCADA',
    filterVfd: 'Variateurs de fréquence', filterElec: 'Installations électriques',
    filterCad: 'Plans CAO', filterPanel: 'Conception de tableaux', filter3d: 'Impression 3D',

    mod5Tag: 'MOD-05 // CONTACT', mod5Title: 'Discutons',
    mod5Text: 'Ouvert aux opportunités de stage, d\u2019alternance et aux contacts professionnels.',
    labelEmail: 'Courriel', labelPhone: 'Téléphone', labelGithub: 'GitHub', labelLinkedin: 'LinkedIn',
    labelCV: 'Curriculum', labelCVValue: 'Télécharger le PDF',
    footerBuilt: 'Construit avec HTML & CSS',
  },
};

const LANG_KEY = 'site-lang';

// ============================================================
// GALERÍA — genera las tarjetas de foto desde js/gallery-data.js
// ============================================================
let currentGalleryFilter = 'all';

function renderGallery(lang) {
  const grid = document.getElementById('galleryGrid');
  if (!grid || typeof galleryData === 'undefined') return;

  grid.innerHTML = '';

  galleryData.forEach((item) => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-item';
    figure.dataset.category = item.category;
    if (currentGalleryFilter !== 'all' && item.category !== currentGalleryFilter) {
      figure.hidden = true;
    }

    const media = document.createElement('div');
    media.className = 'gallery-item__media';
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = (item.caption && item.caption[lang]) || '';
    media.appendChild(img);

    const caption = document.createElement('figcaption');
    caption.textContent = (item.caption && (item.caption[lang] || item.caption.es)) || '';

    figure.appendChild(media);
    figure.appendChild(caption);
    grid.appendChild(figure);
  });
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.es;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  document.documentElement.setAttribute('lang', lang);
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }

  renderGallery(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  // --- Selector de idioma ---
  const savedLang = (() => {
    try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
  })();
  const browserLang = (navigator.language || 'es').slice(0, 2);
  const initialLang = savedLang || (translations[browserLang] ? browserLang : 'es');

  applyLanguage(initialLang);

  document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // --- Filtro de galería por categoría ---
  const filterChips = document.querySelectorAll('.filter-chip');

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      currentGalleryFilter = chip.dataset.filter;

      document.querySelectorAll('.gallery-item').forEach((item) => {
        const show = currentGalleryFilter === 'all' || item.dataset.category === currentGalleryFilter;
        item.hidden = !show;
      });
    });
  });

  // --- Scrollspy: resalta el módulo activo en la línea/spine ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.topbar__nav a');

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.topbar__nav a[href="#${id}"]`);
        const node = entry.target.querySelector('.node');

        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.style.color = '');
          if (link) link.style.color = 'var(--amber)';
          if (node) node.style.borderColor = 'var(--amber)';
        } else if (node) {
          node.style.borderColor = 'var(--cyan)';
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
});
