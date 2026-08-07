// ============================================================
// DONNÉES DE LA GALERIE TECHNIQUE
// ============================================================
// Chaque catégorie est prévue pour ~6 photos (assets/gallery/<cat>/1.png à 6.png).
// Les entrées ACTIVES ci-dessous correspondent aux photos déjà uploadées.
// Les entrées EN COMMENTAIRE sont des emplacements réservés : dès que tu
// uploades la photo correspondante (ex: assets/gallery/hmi/4.png), retire
// les "//" au début de chaque ligne du bloc et modifie la légende.
//
// category : plc, hmi, scada, vfd, elec, cad, panel, 3d
// ============================================================

const galleryData = [

  // ---------- PLC ----------
  {
    category: 'plc',
    src: 'assets/gallery/plc/1.png',
    caption: { es: 'Programación PLC', en: 'PLC programming', fr: 'Programmation API' },
  },
  { category: 'plc', src: 'assets/gallery/plc/2.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'plc', src: 'assets/gallery/plc/3.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'plc', src: 'assets/gallery/plc/4.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'plc', src: 'assets/gallery/plc/5.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'plc', src: 'assets/gallery/plc/6.png', caption: { es: '...', en: '...', fr: '...' } },

  // ---------- HMI ----------
  {
    category: 'hmi',
    src: 'assets/gallery/hmi/1.png',
    caption: { es: 'HMI encoladora — vista general', en: 'HMI — gluing machine, overview', fr: 'IHM — encolleuse, vue générale' },
  },
  {
    category: 'hmi',
    src: 'assets/gallery/hmi/2.png',
    caption: { es: 'HMI encoladora — programación', en: 'HMI — gluing machine, programming', fr: 'IHM — encolleuse, programmation' },
  },
  {
    category: 'hmi',
    src: 'assets/gallery/hmi/3.png',
    caption: { es: 'HMI encoladora — válvulas', en: 'HMI — gluing machine, valves', fr: 'IHM — encolleuse, vannes' },
  },
  { category: 'hmi', src: 'assets/gallery/hmi/4.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'hmi', src: 'assets/gallery/hmi/5.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'hmi', src: 'assets/gallery/hmi/6.png', caption: { es: '...', en: '...', fr: '...' } },

  // ---------- SCADA ----------
  {
    category: 'scada',
    src: 'assets/gallery/scada/1.png',
    caption: { es: 'Red de dispositivos — proyecto Beni', en: 'Device network — Beni project', fr: 'Réseau de dispositifs — projet Beni' },
  },
  { category: 'scada', src: 'assets/gallery/scada/2.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'scada', src: 'assets/gallery/scada/3.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'scada', src: 'assets/gallery/scada/4.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'scada', src: 'assets/gallery/scada/5.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'scada', src: 'assets/gallery/scada/6.png', caption: { es: '...', en: '...', fr: '...' } },

  // ---------- VARIADORES DE FRECUENCIA (vfd) ----------
  // { category: 'vfd', src: 'assets/gallery/vfd/1.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'vfd', src: 'assets/gallery/vfd/2.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'vfd', src: 'assets/gallery/vfd/3.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'vfd', src: 'assets/gallery/vfd/4.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'vfd', src: 'assets/gallery/vfd/5.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'vfd', src: 'assets/gallery/vfd/6.png', caption: { es: '...', en: '...', fr: '...' } },

  // ---------- INSTALACIONES ELÉCTRICAS (elec) ----------
  // { category: 'elec', src: 'assets/gallery/elec/1.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'elec', src: 'assets/gallery/elec/2.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'elec', src: 'assets/gallery/elec/3.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'elec', src: 'assets/gallery/elec/4.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'elec', src: 'assets/gallery/elec/5.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'elec', src: 'assets/gallery/elec/6.png', caption: { es: '...', en: '...', fr: '...' } },

  // ---------- PLANOS CAD (cad) ----------
  { category: 'cad', src: 'assets/gallery/cad/1.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'cad', src: 'assets/gallery/cad/2.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'cad', src: 'assets/gallery/cad/3.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'cad', src: 'assets/gallery/cad/4.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'cad', src: 'assets/gallery/cad/5.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'cad', src: 'assets/gallery/cad/6.png', caption: { es: '...', en: '...', fr: '...' } },

  // ---------- DISEÑO DE TABLEROS (panel) ----------
  { category: 'panel', src: 'assets/gallery/panel/1.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'panel', src: 'assets/gallery/panel/2.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'panel', src: 'assets/gallery/panel/3.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'panel', src: 'assets/gallery/panel/4.png', caption: { es: '...', en: '...', fr: '...' } },
  { category: 'panel', src: 'assets/gallery/panel/5.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: 'panel', src: 'assets/gallery/panel/6.png', caption: { es: '...', en: '...', fr: '...' } },

  // ---------- IMPRESIÓN 3D (3d) ----------
  // { category: '3d', src: 'assets/gallery/3d/1.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: '3d', src: 'assets/gallery/3d/2.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: '3d', src: 'assets/gallery/3d/3.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: '3d', src: 'assets/gallery/3d/4.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: '3d', src: 'assets/gallery/3d/5.png', caption: { es: '...', en: '...', fr: '...' } },
  // { category: '3d', src: 'assets/gallery/3d/6.png', caption: { es: '...', en: '...', fr: '...' } },

];
