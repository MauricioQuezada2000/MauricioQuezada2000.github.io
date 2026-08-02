// ============================================================
// DONNÉES DE LA GALERIE TECHNIQUE
// ============================================================
// Pour ajouter une photo : copie un bloc {...}, colle-le dans le
// tableau, et modifie category / src / caption.
//
// category : doit correspondre à un data-filter du HTML
//   (plc, hmi, scada, vfd, elec, cad, panel, 3d)
// src      : chemin de l'image -> assets/gallery/<categoria>/<numero>.png
// caption  : légende dans les 3 langues (tu peux mettre le même texte
//            dans les 3 si tu ne veux pas traduire pour l'instant)
// ============================================================

const galleryData = [
  {
    category: 'hmi',
    src: 'assets/gallery/hmi/1.png',
    caption: {
      es: 'HMI encoladora — vista general',
      en: 'HMI — gluing machine, overview',
      fr: 'IHM — encolleuse, vue générale',
    },
  },
  {
    category: 'hmi',
    src: 'assets/gallery/hmi/2.png',
    caption: {
      es: 'HMI encoladora — programación',
      en: 'HMI — gluing machine, programming',
      fr: 'IHM — encolleuse, programmation',
    },
  },
  {
    category: 'hmi',
    src: 'assets/gallery/hmi/3.png',
    caption: {
      es: 'HMI encoladora — válvulas',
      en: 'HMI — gluing machine, valves',
      fr: 'IHM — encolleuse, vannes',
    },
  },
  {
    category: 'hmi',
    src: 'assets/gallery/hmi/4.png',
    caption: {
      es: 'HMI encoladora — motores',
      en: 'HMI — gluing machine, motors',
      fr: 'IHM — encolleuse, moteurs',
    },
  },
  {
    category: 'scada',
    src: 'assets/gallery/scada/1.png',
    caption: {
      es: 'Red de dispositivos — proyecto Beni',
      en: 'Device network — Beni project',
      fr: 'Réseau de dispositifs — projet Beni',
    },
  },

  // EJEMPLO — duplica este bloque para cada foto nueva:
  // {
  //   category: 'cad',
  //   src: 'assets/gallery/cad/1.png',
  //   caption: { es: '...', en: '...', fr: '...' },
  // },
];
