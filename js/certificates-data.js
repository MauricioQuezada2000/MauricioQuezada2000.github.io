// Content manifest. Paths are relative to index.html.
const certificatesData = [
  {
    "id": "autodesk-certified-professional-autocad",
    "title": "Autodesk Certified Professional: AutoCAD",
    "issuer": "Autodesk",
    "date": "2020-12-28",
    "kind": "professional",
    "src": "assets/certificates/autodesk/2020-12-28-autodesk-certified-professional-autocad.pdf",
    "preview": "assets/thumbs/certificates/2020-12-28-autodesk-certified-professional-autocad.webp",
    "featured": true
  },
  {
    "id": "automatizacion-sistemas-electricos-potencia",
    "title": "Automatización de sistemas eléctricos de potencia",
    "issuer": "REDELCOM",
    "date": "2025-04-24",
    "kind": "course",
    "src": "assets/certificates/2025-04-24-automatizacion-sistemas-electricos-potencia.pdf",
    "preview": "assets/thumbs/certificates/2025-04-24-automatizacion-sistemas-electricos-potencia.webp",
    "featured": false
  },
  {
    "id": "siemens-s7-1500-r-h",
    "title": "S7-1500R/H · TIA Portal V17",
    "issuer": "Siemens · SITRAIN",
    "date": "2025-03-24",
    "kind": "course",
    "src": "assets/certificates/2025-03-24-siemens-s7-1500-r-h.pdf",
    "preview": "assets/thumbs/certificates/2025-03-24-siemens-s7-1500-r-h.webp",
    "featured": false
  },
  {
    "id": "siemens-wincc-unified-v19",
    "title": "WinCC Unified 1 V19 · Basic Course",
    "issuer": "Siemens · SITRAIN",
    "date": "2025-03-24",
    "kind": "course",
    "src": "assets/certificates/2025-03-24-siemens-wincc-unified-v19.pdf",
    "preview": "assets/thumbs/certificates/2025-03-24-siemens-wincc-unified-v19.webp",
    "featured": false
  },
  {
    "id": "siemens-tia-safety-integrated",
    "title": "TIA Safety Integrated",
    "issuer": "Siemens · SITRAIN",
    "date": "2025-02-09",
    "kind": "course",
    "src": "assets/certificates/2025-02-09-siemens-tia-safety-integrated.pdf",
    "preview": "assets/thumbs/certificates/2025-02-09-siemens-tia-safety-integrated.webp",
    "featured": false
  },
  {
    "id": "siemens-simaris-certified-program",
    "title": "SIMARIS Certified Program 2025",
    "issuer": "Siemens",
    "date": "2024-11",
    "kind": "attendance",
    "src": "assets/certificates/2024-11-siemens-simaris-certified-program.pdf",
    "preview": "assets/thumbs/certificates/2024-11-siemens-simaris-certified-program.webp",
    "featured": false
  },
  {
    "id": "ef-set-ingles-c1",
    "title": "EF SET · English C1 · 64/100",
    "issuer": "EF SET",
    "date": "2024-11-28",
    "kind": "language",
    "src": "assets/certificates/2024-11-28-ef-set-ingles-c1.pdf",
    "preview": "assets/thumbs/certificates/2024-11-28-ef-set-ingles-c1.webp",
    "featured": false
  },
  {
    "id": "redes-industriales-nivel-2",
    "title": "Redes industriales · Nivel 2",
    "issuer": "Revelsa & Control Industrial",
    "date": "2024-01-24",
    "kind": "course",
    "src": "assets/certificates/2024-01-24-redes-industriales-nivel-2.pdf",
    "preview": "assets/thumbs/certificates/2024-01-24-redes-industriales-nivel-2.webp",
    "featured": false
  },
  {
    "id": "selectividad-coordinacion-protecciones",
    "title": "Selectividad y coordinación de protecciones en baja tensión",
    "issuer": "NORELUXX-EDUCA",
    "date": "2023-12-18",
    "kind": "course",
    "src": "assets/certificates/2023-12-18-selectividad-coordinacion-protecciones.pdf",
    "preview": "assets/thumbs/certificates/2023-12-18-selectividad-coordinacion-protecciones.webp",
    "featured": false
  },
  {
    "id": "ignition-scada-avanzado",
    "title": "SCADA Ignition avanzado",
    "issuer": "Contrologic",
    "date": "2023-10-22",
    "kind": "course",
    "src": "assets/certificates/2023-10-22-ignition-scada-avanzado.pdf",
    "preview": "assets/thumbs/certificates/2023-10-22-ignition-scada-avanzado.webp",
    "featured": false
  },
  {
    "id": "electricidad-basica-avanzada-home-smart",
    "title": "Electricidad básica y avanzada Home Smart",
    "issuer": "Ingeniería Total BIM · Mayor Consultores",
    "date": "2023-09-25",
    "kind": "course",
    "src": "assets/certificates/2023-09-25-electricidad-basica-avanzada-home-smart.pdf",
    "preview": "assets/thumbs/certificates/2023-09-25-electricidad-basica-avanzada-home-smart.webp",
    "featured": false
  },
  {
    "id": "instrumentacion-plantas-proceso",
    "title": "Instrumentación en plantas de proceso",
    "issuer": "UTEPSA · P&G",
    "date": "2023-04-12",
    "kind": "course",
    "src": "assets/certificates/2023-04-12-instrumentacion-plantas-proceso.pdf",
    "preview": "assets/thumbs/certificates/2023-04-12-instrumentacion-plantas-proceso.webp",
    "featured": false
  },
  {
    "id": "abb-electrification-baja-tension",
    "title": "Electrification Service · Baja tensión",
    "issuer": "ABB",
    "date": "2023-04-02",
    "kind": "course",
    "src": "assets/certificates/2023-04-02-abb-electrification-baja-tension.pdf",
    "preview": "assets/thumbs/certificates/2023-04-02-abb-electrification-baja-tension.webp",
    "featured": false
  },
  {
    "id": "schneider-plc-pac-redes-industriales",
    "title": "PLC/PAC gama alta y redes industriales",
    "issuer": "Schneider Electric · Ideas Automation",
    "date": "2023-03",
    "kind": "course",
    "src": "assets/certificates/2023-03-schneider-plc-pac-redes-industriales.pdf",
    "preview": "assets/thumbs/certificates/2023-03-schneider-plc-pac-redes-industriales.webp",
    "featured": false
  },
  {
    "id": "schneider-automatizacion-industrial",
    "title": "Automatización industrial con Schneider Electric",
    "issuer": "Schneider Electric · Schneider Electric V2.0",
    "date": "2022-11",
    "kind": "course",
    "src": "assets/certificates/2022-11-schneider-automatizacion-industrial.pdf",
    "preview": "assets/thumbs/certificates/2022-11-schneider-automatizacion-industrial.webp",
    "featured": false
  },
  {
    "id": "siemens-logo-nivel-3",
    "title": "LOGO! · Nivel III",
    "issuer": "Control+",
    "date": "2022-11-23",
    "kind": "course",
    "src": "assets/certificates/2022-11-23-siemens-logo-nivel-3.pdf",
    "preview": "assets/thumbs/certificates/2022-11-23-siemens-logo-nivel-3.webp",
    "featured": false
  },
  {
    "id": "siemens-s7-1200-hmi-avanzado",
    "title": "S7-1200 y HMI · Nivel avanzado",
    "issuer": "Control+",
    "date": "2022-11-16",
    "kind": "course",
    "src": "assets/certificates/2022-11-16-siemens-s7-1200-hmi-avanzado.pdf",
    "preview": "assets/thumbs/certificates/2022-11-16-siemens-s7-1200-hmi-avanzado.webp",
    "featured": false
  },
  {
    "id": "workflow-electrical-inventor",
    "title": "Workflow entre Electrical e Inventor",
    "issuer": "CAPSOFT · Autodesk Academic Partner",
    "date": "2021-08-21",
    "kind": "attendance",
    "src": "assets/certificates/autodesk/2021-08-21-workflow-electrical-inventor.pdf",
    "preview": "assets/thumbs/certificates/2021-08-21-workflow-electrical-inventor.webp",
    "featured": false
  },
  {
    "id": "inventor-especializacion-n2",
    "title": "Inventor · Especialización N2",
    "issuer": "CAPSOFT · Autodesk ATC",
    "date": "2021-05-04",
    "kind": "course",
    "src": "assets/certificates/autodesk/2021-05-04-inventor-especializacion-n2.pdf",
    "preview": "assets/thumbs/certificates/2021-05-04-inventor-especializacion-n2.webp",
    "featured": false
  },
  {
    "id": "inventor-especializacion-n3",
    "title": "Inventor · Especialización N3",
    "issuer": "CAPSOFT · Autodesk ATC",
    "date": "2021-04-29",
    "kind": "course",
    "src": "assets/certificates/autodesk/2021-04-29-inventor-especializacion-n3.pdf",
    "preview": "assets/thumbs/certificates/2021-04-29-inventor-especializacion-n3.webp",
    "featured": false
  },
  {
    "id": "inventor-especializacion-n1",
    "title": "Inventor · Especialización N1",
    "issuer": "CAPSOFT · Autodesk ATC",
    "date": "2021-04-01",
    "kind": "course",
    "src": "assets/certificates/autodesk/2021-04-01-inventor-especializacion-n1.pdf",
    "preview": "assets/thumbs/certificates/2021-04-01-inventor-especializacion-n1.webp",
    "featured": false
  },
  {
    "id": "autocad-especializacion-n3",
    "title": "AutoCAD · Especialización N3",
    "issuer": "CAPSOFT · Autodesk ATC",
    "date": "2020-12-04",
    "kind": "course",
    "src": "assets/certificates/autodesk/2020-12-04-autocad-especializacion-n3.pdf",
    "preview": "assets/thumbs/certificates/2020-12-04-autocad-especializacion-n3.webp",
    "featured": false
  },
  {
    "id": "autocad-especializacion-n2",
    "title": "AutoCAD · Especialización N2",
    "issuer": "CAPSOFT · Autodesk ATC",
    "date": "2020-11-24",
    "kind": "course",
    "src": "assets/certificates/autodesk/2020-11-24-autocad-especializacion-n2.pdf",
    "preview": "assets/thumbs/certificates/2020-11-24-autocad-especializacion-n2.webp",
    "featured": false
  },
  {
    "id": "autocad-especializacion-n1",
    "title": "AutoCAD · Especialización N1",
    "issuer": "CAPSOFT · Autodesk ATC",
    "date": "2020-11-03",
    "kind": "course",
    "src": "assets/certificates/autodesk/2020-11-03-autocad-especializacion-n1.pdf",
    "preview": "assets/thumbs/certificates/2020-11-03-autocad-especializacion-n1.webp",
    "featured": false
  }
];
