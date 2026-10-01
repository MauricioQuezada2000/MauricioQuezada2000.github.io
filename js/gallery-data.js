// Content manifest. Paths are relative to index.html.
const galleryData = [
  {
    "category": "cad",
    "src": "assets/gallery/cad/01-esquema-unifilar-principal-del-proyecto-inti.png",
    "caption": {
      "es": "Esquema unifilar principal del proyecto Inti",
      "en": "Main single-line diagram — Inti project",
      "fr": "Schéma unifilaire principal — projet Inti"
    }
  },
  {
    "category": "cad",
    "src": "assets/gallery/cad/02-diagramas-unifilares-de-tableros-de-distribucion.png",
    "caption": {
      "es": "Diagramas unifilares de tableros de distribución",
      "en": "Distribution panel single-line diagrams",
      "fr": "Schémas unifilaires des tableaux de distribution"
    }
  },
  {
    "category": "cad",
    "src": "assets/gallery/cad/03-planos-electricos-generales.png",
    "caption": {
      "es": "Planos eléctricos generales",
      "en": "General electrical drawings",
      "fr": "Plans électriques généraux"
    }
  },
  {
    "category": "cad",
    "src": "assets/gallery/cad/04-diagrama-de-proceso.png",
    "caption": {
      "es": "Diagrama de proceso",
      "en": "Process flow diagram",
      "fr": "Schéma de procédé"
    }
  },
  {
    "category": "cad",
    "src": "assets/gallery/cad/05-diagrama-de-tuberias-e-instrumentacion-p-id.png",
    "caption": {
      "es": "Diagrama de tuberías e instrumentación P&ID",
      "en": "Piping and instrumentation diagram (P&ID)",
      "fr": "Schéma de tuyauterie et instrumentation (P&ID)"
    }
  },
  {
    "category": "design",
    "src": "assets/gallery/design/01-diseno-de-centro-de-control-de-motores.png",
    "caption": {
      "es": "Diseño de centro de control de motores",
      "en": "Motor control center design",
      "fr": "Conception de centre de commande de moteurs"
    }
  },
  {
    "category": "design",
    "src": "assets/gallery/design/02-tableros-y-comunicaciones-multiprotocolo-para-motores.png",
    "caption": {
      "es": "Tableros y comunicaciones multiprotocolo para motores",
      "en": "Motor panels and multiprotocol communications",
      "fr": "Tableaux moteurs et communications multiprotocoles"
    }
  },
  {
    "category": "design",
    "src": "assets/gallery/design/03-esquemas-de-tablero-de-distribucion.png",
    "caption": {
      "es": "Esquemas de tablero de distribución",
      "en": "Distribution panel schematics",
      "fr": "Schémas de tableau de distribution"
    }
  },
  {
    "category": "design",
    "src": "assets/gallery/design/04-diseno-de-tableros-de-control.png",
    "caption": {
      "es": "Diseño de tableros de control",
      "en": "Control panel design",
      "fr": "Conception de tableaux de commande"
    }
  },
  {
    "category": "design",
    "src": "assets/gallery/design/05-esquemas-electricos-de-control-y-fuerza.png",
    "caption": {
      "es": "Esquemas eléctricos de control y fuerza",
      "en": "Control and power electrical schematics",
      "fr": "Schémas électriques de commande et de puissance"
    }
  },
  {
    "category": "design",
    "src": "assets/gallery/design/06-tablero-de-control-de-potencia-y-motores.png",
    "caption": {
      "es": "Tablero de control de potencia y motores",
      "en": "Power and motor control panel",
      "fr": "Tableau de commande de puissance et de moteurs"
    }
  },
  {
    "category": "hmi",
    "src": "assets/gallery/hmi/01-lineas-de-proceso-de-aglomerado-de-madera.png",
    "caption": {
      "es": "Líneas de proceso de aglomerado de madera",
      "en": "Wood particleboard process lines",
      "fr": "Lignes de fabrication de panneaux de particules"
    }
  },
  {
    "category": "hmi",
    "src": "assets/gallery/hmi/02-pantalla-hmi-de-control-de-motores.png",
    "caption": {
      "es": "Pantalla HMI de control de motores",
      "en": "Motor control HMI screen",
      "fr": "Écran IHM de commande de moteurs"
    }
  },
  {
    "category": "hmi",
    "src": "assets/gallery/hmi/03-centro-de-control-de-valvulas.png",
    "caption": {
      "es": "Centro de control de válvulas",
      "en": "Valve control center",
      "fr": "Centre de commande de vannes"
    }
  },
  {
    "category": "hmi",
    "src": "assets/gallery/hmi/04-linea-de-inyeccion-de-aceite-para-alimento-animal.png",
    "caption": {
      "es": "Línea de inyección de aceite para alimento animal",
      "en": "Oil injection line for animal feed",
      "fr": "Ligne d’injection d’huile pour alimentation animale"
    }
  },
  {
    "category": "hmi",
    "src": "assets/gallery/hmi/05-control-de-pesaje-de-alimento.png",
    "caption": {
      "es": "Control de pesaje de alimento",
      "en": "Feed weighing control",
      "fr": "Commande de pesage d’aliments"
    }
  },
  {
    "category": "hmi",
    "src": "assets/gallery/hmi/06-limpieza-cip-en-planta-de-bebidas.png",
    "caption": {
      "es": "Limpieza CIP en planta de bebidas",
      "en": "Beverage plant CIP cleaning",
      "fr": "Nettoyage CIP en usine de boissons"
    }
  },
  {
    "category": "hmi",
    "src": "assets/gallery/hmi/07-pesaje-y-dosificacion-de-alimento.png",
    "caption": {
      "es": "Pesaje y dosificación de alimento",
      "en": "Feed weighing and dosing",
      "fr": "Pesage et dosage d’aliments"
    }
  },
  {
    "category": "panel",
    "src": "assets/gallery/panel/01-tableros-et-200sp-para-caudal-y-nivel-en-tanques-y-pozos.png",
    "caption": {
      "es": "Tableros ET 200SP para caudal y nivel en tanques y pozos",
      "en": "ET 200SP panels for tank and well flow and level",
      "fr": "Tableaux ET 200SP pour débit et niveau de réservoirs et puits"
    }
  },
  {
    "category": "panel",
    "src": "assets/gallery/panel/02-tablero-de-banco-de-capacitores.png",
    "caption": {
      "es": "Tablero de banco de capacitores",
      "en": "Capacitor bank panel",
      "fr": "Tableau de batterie de condensateurs"
    }
  },
  {
    "category": "panel",
    "src": "assets/gallery/panel/03-tablero-de-caudal-con-et-200sp-g120x-y-mag-6000.png",
    "caption": {
      "es": "Tablero de caudal con ET 200SP, G120X y MAG 6000",
      "en": "Flow control panel with ET 200SP, G120X and MAG 6000",
      "fr": "Tableau de débit avec ET 200SP, G120X et MAG 6000"
    }
  },
  {
    "category": "panel",
    "src": "assets/gallery/panel/04-tablero-de-control-de-planta-de-agua-potable.png",
    "caption": {
      "es": "Tablero de control de planta de agua potable",
      "en": "Drinking water plant control panel",
      "fr": "Tableau de commande de station d’eau potable"
    }
  },
  {
    "category": "panel",
    "src": "assets/gallery/panel/05-tablero-de-control-de-envasado-con-s7-300.png",
    "caption": {
      "es": "Tablero de control de envasado con S7-300",
      "en": "S7-300 packaging control panel",
      "fr": "Tableau de commande de conditionnement S7-300"
    }
  },
  {
    "category": "panel",
    "src": "assets/gallery/panel/06-migracion-de-tablero-de-control-y-potencia-de-omron-a-siemens.png",
    "caption": {
      "es": "Migración de tablero de control y potencia de Omron a Siemens",
      "en": "Control and power panel migration from Omron to Siemens",
      "fr": "Migration de tableau de commande et de puissance d’Omron vers Siemens"
    }
  },
  {
    "category": "plc",
    "src": "assets/gallery/plc/01-programacion-plc-en-tia-portal.png",
    "caption": {
      "es": "Programación PLC en TIA Portal",
      "en": "PLC programming in TIA Portal",
      "fr": "Programmation API dans TIA Portal"
    }
  },
  {
    "category": "plc",
    "src": "assets/gallery/plc/02-control-de-motores-en-step-7.png",
    "caption": {
      "es": "Control de motores en STEP 7",
      "en": "Motor control in STEP 7",
      "fr": "Commande de moteurs dans STEP 7"
    }
  },
  {
    "category": "plc",
    "src": "assets/gallery/plc/03-comunicaciones-modbus-tcp-en-tia-portal.jpeg",
    "caption": {
      "es": "Comunicaciones Modbus TCP en TIA Portal",
      "en": "Modbus TCP communications in TIA Portal",
      "fr": "Communications Modbus TCP dans TIA Portal"
    }
  },
  {
    "category": "plc",
    "src": "assets/gallery/plc/04-programacion-de-plc-y-hmi-en-tia-portal.png",
    "caption": {
      "es": "Programación de PLC y HMI en TIA Portal",
      "en": "PLC and HMI programming in TIA Portal",
      "fr": "Programmation API et IHM dans TIA Portal"
    }
  },
  {
    "category": "plc",
    "src": "assets/gallery/plc/05-sistemas-de-pesaje-en-step-7.png",
    "caption": {
      "es": "Sistemas de pesaje en STEP 7",
      "en": "Weighing systems in STEP 7",
      "fr": "Systèmes de pesage dans STEP 7"
    }
  },
  {
    "category": "plc",
    "src": "assets/gallery/plc/06-programacion-de-plc-s7-200.png",
    "caption": {
      "es": "Programación de PLC S7-200",
      "en": "S7-200 PLC programming",
      "fr": "Programmation d’API S7-200"
    }
  },
  {
    "category": "scada",
    "src": "assets/gallery/scada/01-redes-scada-de-planta-de-energia.png",
    "caption": {
      "es": "Redes SCADA de planta de energía",
      "en": "Power plant SCADA networks",
      "fr": "Réseaux SCADA de centrale électrique"
    }
  },
  {
    "category": "scada",
    "src": "assets/gallery/scada/02-supervision-de-planta-de-energia-ende-andina.png",
    "caption": {
      "es": "Supervisión de planta de energía ENDE Andina",
      "en": "ENDE Andina power plant monitoring",
      "fr": "Supervision de centrale électrique ENDE Andina"
    }
  },
  {
    "category": "scada",
    "src": "assets/gallery/scada/03-vista-general-de-planta.png",
    "caption": {
      "es": "Vista general de planta",
      "en": "Plant overview",
      "fr": "Vue générale de l’installation"
    }
  },
  {
    "category": "scada",
    "src": "assets/gallery/scada/04-pantallas-de-sistemas-scada.png",
    "caption": {
      "es": "Pantallas de sistemas SCADA",
      "en": "SCADA system screens",
      "fr": "Écrans de systèmes SCADA"
    }
  },
  {
    "category": "scada",
    "src": "assets/gallery/scada/05-ubicacion-del-control-distribuido-en-planta.png",
    "caption": {
      "es": "Ubicación del control distribuido en planta",
      "en": "Distributed plant control overview",
      "fr": "Vue du contrôle distribué de l’installation"
    }
  },
  {
    "category": "scada",
    "src": "assets/gallery/scada/06-vistas-de-supervision-de-plantas-de-agua.png",
    "caption": {
      "es": "Vistas de supervisión de plantas de agua",
      "en": "Water treatment plant monitoring views",
      "fr": "Vues de supervision de stations de traitement d’eau"
    }
  },
  {
    "category": "scada",
    "src": "assets/gallery/scada/07-topologia-de-dispositivos-en-sistemas-scada.png",
    "caption": {
      "es": "Topología de dispositivos en sistemas SCADA",
      "en": "SCADA device topology",
      "fr": "Topologie des équipements SCADA"
    }
  }
];
