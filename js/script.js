// ============================================================
// TRADUCCIONES — cada clave corresponde a un atributo data-i18n
// en index.html. Edita aquí el texto en cada idioma.
// ============================================================
const translations = {
  es: {
    nav1: '01 Perfil', nav2: '02 Competencias', nav3: '03 Proyectos', nav4: '04 Contacto',
    heroStatus: 'EN LÍNEA — abierto a prácticas y colaboraciones',
    heroRole: 'Ingeniería en Automatización & Control Industrial',
    heroSub: 'Estudiante del Máster ARMAC en la Université Marie et Louis Pasteur. Diseño, programo y pongo en marcha sistemas de control — del esquema CAD al PLC en planta.',
    btnProjects: 'Ver proyectos', btnContact: 'Contactar',
    mod1Tag: 'MOD-01 // PERFIL', mod1Title: 'Sobre mí',
    mod1Text1: 'Curso el Máster ARMAC (Automatique, Robotique et Applications à la Mécatronique) en la Université Marie et Louis Pasteur, con formación previa en automatización industrial y sistemas de control. Trabajo tanto en la capa de diseño — CAD mecánico y esquemas eléctricos — como en la capa de programación, con PLC bajo el estándar IEC 61131-3 y buses de campo EtherCAT.',
    mod1Text2: 'Me interesa la parte donde el software se encuentra con la máquina real: migrar arquitecturas de control antiguas a plataformas modernas, verificar que la lógica responde como debe en campo, y documentar el proceso para que otros puedan mantenerlo después.',
    mod2Tag: 'MOD-02 // COMPETENCIAS', mod2Title: 'Stack técnico',
    regHeadReg: 'REG', regHeadSkill: 'COMPETENCIA', regHeadArea: 'ÁREA',
    skill1: 'Programación PLC — IEC 61131-3 (Structured Text)', area1: 'Control',
    skill2: 'TwinCAT 3 · islas de control EtherCAT (Beckhoff)', area2: 'Buses de campo',
    skill3: 'Diseño CAD — AutoCAD, Autodesk Inventor', area3: 'Mecánico',
    skill4: 'EPLAN — esquemas eléctricos', area4: 'Eléctrico',
    skill5: 'Cura — preparación e impresión 3D', area5: 'Prototipado',
    mod3Tag: 'MOD-03 // PROYECTOS', mod3Title: 'Trabajo en curso',
    prj1Status: 'en curso', prj1Title: 'Migración de control — Plataforma S.mart',
    prj1Text: 'Proyecto de prácticas orientado a la migración y modernización de sistemas de control industrial en la plataforma S.mart. Incluye islas de control basadas en EtherCAT (Beckhoff) programadas en TwinCAT 3, con lógica en Structured Text conforme a IEC 61131-3.',
    prj2Status: 'próximamente', prj2Title: 'Espacio reservado',
    prj2Text: 'Aquí puedes añadir tu próximo proyecto: un repositorio, un TP destacado o un trabajo de investigación.',
    mod4Tag: 'MOD-04 // CONTACTO', mod4Title: 'Hablemos',
    mod4Text: 'Abierto a oportunidades de prácticas, proyectos de automatización y contacto profesional.',
    labelEmail: 'Correo', labelGithub: 'GitHub', labelLinkedin: 'LinkedIn',
    footerBuilt: 'Construido con HTML & CSS',
  },
  en: {
    nav1: '01 Profile', nav2: '02 Skills', nav3: '03 Projects', nav4: '04 Contact',
    heroStatus: 'ONLINE — open to internships and collaborations',
    heroRole: 'Automation & Industrial Control Engineering',
    heroSub: 'ARMAC Master\u2019s student at Université Marie et Louis Pasteur. I design, program, and commission control systems — from the CAD drawing to the PLC on the plant floor.',
    btnProjects: 'View projects', btnContact: 'Get in touch',
    mod1Tag: 'MOD-01 // PROFILE', mod1Title: 'About me',
    mod1Text1: 'I\u2019m studying the ARMAC Master\u2019s (Automatique, Robotique et Applications à la Mécatronique) at Université Marie et Louis Pasteur, with a background in industrial automation and control systems. I work both on the design layer — mechanical CAD and electrical schematics — and the programming layer, with PLCs under the IEC 61131-3 standard and EtherCAT fieldbuses.',
    mod1Text2: 'What interests me most is where software meets the real machine: migrating older control architectures to modern platforms, verifying the logic behaves correctly on the floor, and documenting the process so others can maintain it afterwards.',
    mod2Tag: 'MOD-02 // SKILLS', mod2Title: 'Technical stack',
    regHeadReg: 'REG', regHeadSkill: 'SKILL', regHeadArea: 'AREA',
    skill1: 'PLC programming — IEC 61131-3 (Structured Text)', area1: 'Control',
    skill2: 'TwinCAT 3 · EtherCAT control islands (Beckhoff)', area2: 'Fieldbus',
    skill3: 'CAD design — AutoCAD, Autodesk Inventor', area3: 'Mechanical',
    skill4: 'EPLAN — electrical schematics', area4: 'Electrical',
    skill5: 'Cura — 3D print preparation', area5: 'Prototyping',
    mod3Tag: 'MOD-03 // PROJECTS', mod3Title: 'Current work',
    prj1Status: 'in progress', prj1Title: 'Control system migration — S.mart platform',
    prj1Text: 'Internship project focused on migrating and modernizing industrial control systems on the S.mart platform. Includes EtherCAT-based control islands (Beckhoff) programmed in TwinCAT 3, with logic written in Structured Text under IEC 61131-3.',
    prj2Status: 'coming soon', prj2Title: 'Reserved slot',
    prj2Text: 'Add your next project here: a repository, a standout coursework, or research work.',
    mod4Tag: 'MOD-04 // CONTACT', mod4Title: 'Let\u2019s talk',
    mod4Text: 'Open to internship opportunities, automation projects, and professional contact.',
    labelEmail: 'Email', labelGithub: 'GitHub', labelLinkedin: 'LinkedIn',
    footerBuilt: 'Built with HTML & CSS',
  },
  fr: {
    nav1: '01 Profil', nav2: '02 Compétences', nav3: '03 Projets', nav4: '04 Contact',
    heroStatus: 'EN LIGNE — ouvert aux stages et collaborations',
    heroRole: 'Ingénierie en Automatisation & Contrôle Industriel',
    heroSub: 'Étudiant du Master ARMAC à l\u2019Université Marie et Louis Pasteur. Je conçois, programme et mets en service des systèmes de contrôle — du schéma CAO à l\u2019automate en atelier.',
    btnProjects: 'Voir les projets', btnContact: 'Me contacter',
    mod1Tag: 'MOD-01 // PROFIL', mod1Title: 'À propos de moi',
    mod1Text1: 'Je suis actuellement le Master ARMAC (Automatique, Robotique et Applications à la Mécatronique) à l\u2019Université Marie et Louis Pasteur, avec une formation antérieure en automatisation industrielle et systèmes de contrôle. Je travaille aussi bien sur la couche conception — CAO mécanique et schémas électriques — que sur la couche programmation, avec des automates selon la norme IEC 61131-3 et des bus de terrain EtherCAT.',
    mod1Text2: 'Ce qui m\u2019intéresse, c\u2019est l\u2019endroit où le logiciel rencontre la machine réelle : migrer d\u2019anciennes architectures de contrôle vers des plateformes modernes, vérifier que la logique répond correctement sur le terrain, et documenter le processus pour que d\u2019autres puissent le maintenir ensuite.',
    mod2Tag: 'MOD-02 // COMPÉTENCES', mod2Title: 'Stack technique',
    regHeadReg: 'REG', regHeadSkill: 'COMPÉTENCE', regHeadArea: 'DOMAINE',
    skill1: 'Programmation automate — IEC 61131-3 (Structured Text)', area1: 'Contrôle',
    skill2: 'TwinCAT 3 · îlots de contrôle EtherCAT (Beckhoff)', area2: 'Bus de terrain',
    skill3: 'Conception CAO — AutoCAD, Autodesk Inventor', area3: 'Mécanique',
    skill4: 'EPLAN — schémas électriques', area4: 'Électrique',
    skill5: 'Cura — préparation d\u2019impression 3D', area5: 'Prototypage',
    mod3Tag: 'MOD-03 // PROJETS', mod3Title: 'Travail en cours',
    prj1Status: 'en cours', prj1Title: 'Migration de contrôle — Plateforme S.mart',
    prj1Text: 'Projet de stage portant sur la migration et la modernisation de systèmes de contrôle industriel sur la plateforme S.mart. Comprend des îlots de contrôle EtherCAT (Beckhoff) programmés sous TwinCAT 3, avec une logique en Structured Text conforme à IEC 61131-3.',
    prj2Status: 'à venir', prj2Title: 'Emplacement réservé',
    prj2Text: 'Ajoutez ici votre prochain projet : un dépôt, un TP marquant ou un travail de recherche.',
    mod4Tag: 'MOD-04 // CONTACT', mod4Title: 'Discutons',
    mod4Text: 'Ouvert aux opportunités de stage, aux projets d\u2019automatisation et aux contacts professionnels.',
    labelEmail: 'Courriel', labelGithub: 'GitHub', labelLinkedin: 'LinkedIn',
    footerBuilt: 'Construit avec HTML & CSS',
  },
};

const LANG_KEY = 'site-lang';

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
