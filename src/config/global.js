export default {
  global: {
    componenteFormativo: 'Conceptos generales y normatividad magistrales',
    descripcionCurso:
      'En este componente formativo abarca temas relacionados con las generalidades de las preparaciones magistrales, sus formas farmacéuticas, las buenas prácticas de elaboración, requisitos del Sistema de Gestión de Calidad (SGC) documentos involucrados y los controles que se deben realizar al proceso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de las preparaciones magistrales no estériles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Formas farmacéuticas de los preparados magistrales tópicos no estériles',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Unidades básicas de medidas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Prescripción médica: concepto, interpretación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Concentraciones',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Buenas prácticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistema de garantía de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Requisitos del sistema de garantía de calidad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Etiquetado preparaciones magistrales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Fechas de vencimiento',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Control de calidad de las preparaciones magistrales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Entes reguladores',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Farmacopeas y referencias bibliográficas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Buenas prácticas',
      referencia:
        'Decreto 0780 de 2016. (2016). <i>Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social</i>.',
      tipo: 'Decreto',
      descarga: '/downloads/Anexo_4_CF019_decreto_0780_de_2016.pdf',
    },
    {
      tema: 'Buenas prácticas',
      referencia:
        'Red de autoridades de medicamentos de Iberoamérica. (2016). <i>Guía de buenas prácticas de elaboración y control de calidad de preparaciones magistrales y oficinales.</i>',
      tipo: 'Documento',
      descarga: '/downloads/Anexo_6_CF019_guia_de_buenas_practicas.pdf',
    },
    {
      tema: 'Buenas prácticas',
      referencia:
        'Correa, O. <i>Preparados magistrales y oficinales no estériles.</i>',
      tipo: 'Documento',
      descarga:
        '/downloads/Anexo_5_CF019_documento_magistrales_no_esteriles.pdf',
    },
    {
      tema: 'Buenas prácticas',
      referencia:
        'Amaya, A. (2020). <i>Guía de gestión de la calidad en el proceso de elaboración de magistrales estériles con base en la estructura de alto nivel.</i>',
      tipo: 'Documento',
      descarga:
        '/downloads/Anexo_3_CF019_guia_preparaciones_magistrales_esteriles.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Buenas prácticas de elaboración magistral (B.P.E.M.)',
      significado:
        'Conjunto de normas, procesos y procedimientos de carácter técnico que aseguran la correcta elaboración y el control de calidad de los Medicamentos Magistrales y los Preparados Oficinales.',
    },
    {
      termino: 'Buenas prácticas de manufactura (B.P.M.)',
      significado:
        'Son las normas, procesos y procedimientos de carácter técnico que aseguran la calidad de los medicamentos, los cosméticos y las preparaciones farmacéuticas a base de recursos naturales.',
    },
    {
      termino: 'Droga (O.M.S)',
      significado:
        'El nombre de droga resulta aplicable a toda sustancia terapéutica o no, que introducida al cuerpo por medio de los mecanismos clásicos (Inhalación, ingestión, fricción, administración parenteral, endovenosa) de administración, es capaz de actuar sobre el sistema nervioso central del individuo hasta generar en él una alteración física e intelectual, la experimentación de nuevas sensaciones o la modificación de su estado psíquico.',
    },
    {
      termino: 'Droga blanca',
      significado:
        'Es la materia prima para preparar las fórmulas magistrales, tales como: Aceite de almendras, aceite de manzanilla, Azufre, Glicerina pura, ácido Bórico, Bórax, Bicarbonato de sodio, entre otros. Este tipo de productos no requiere registro INVIMA para su comercialización.',
    },
    {
      termino: 'Excipiente',
      significado:
        'Producto más o menos inerte que determina la consistencia, forma o volumen de las preparaciones farmacéuticas.',
    },
    {
      termino: 'Fórmula magistral tipificada',
      significado: 'Aquella fórmula magistral definida en un formulario.',
    },
    {
      termino: 'Garantía de la calidad',
      significado:
        'Es un concepto amplio que cubre todos los aspectos que individual o colectivamente influyen en la calidad de un producto. Comprende la totalidad de las gestiones llevadas a cabo con el objeto de asegurar que los productos elaborados en la oficina de farmacia o servicio de farmacia hospitalario son de la calidad requerida para su uso.',
    },
    {
      termino: 'INVIMA',
      significado:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos.',
    },
    {
      termino: 'Monografía de preparado farmacéutico',
      significado:
        'Documento que describe detalladamente el método de elaboración, especificaciones, propiedades farmacológicas, control de calidad, condiciones de almacenamiento y requerimientos en el etiquetado del preparado farmacéutico.',
    },
    {
      termino: 'POS',
      significado: 'Procedimiento Operativo Standard.',
    },
    {
      termino: 'PQRS',
      significado: 'Peticiones, Quejas, Reclamos y Sugerencias.',
    },
    {
      termino: 'Preparación magistral',
      significado:
        'Es la atención farmacéutica que se hace por parte del Químico Farmacéutico una o un grupo de personas en especial, teniendo en cuenta su perfil fármaco terapéutico y son de distribución inmediata.',
    },
    {
      termino: 'Preparación magistral no estéril',
      significado:
        'Es una preparación farmacéutica que se puede formular y elaborar en condiciones ambientales controladas, pero no estériles.',
    },
    {
      termino: 'Preparación o preparado oficinal',
      significado:
        'Es el medicamento destinado a su dispensación directa a los pacientes atendidos por las oficinas de farmacia o servicios de farmacia hospitalarios, preparado por un farmacéutico o químico farmacéutico o bajo su dirección, descrito en un formulario oficial, preparado según las buenas prácticas de elaboración y control de calidad establecidas al efecto y con la debida información al paciente.',
    },
    {
      termino: 'Preparado magistral',
      significado:
        'Es el preparado o producto farmacéutico para atender una prescripción médica, de un paciente individual, que requiere de algún tipo de intervención técnica de variada complejidad.',
    },
    {
      termino: 'Principio activo',
      significado:
        'Es todo compuesto biológicamente activo que se extrae de la droga de un ser vivo utilizado por sus propiedades terapéuticas y que se comercializa sin alterar su estructura química.',
    },
    {
      termino: 'SGC',
      significado: 'Sistema de Gestión de Calidad.',
    },
    {
      termino: 'SI',
      significado: 'Sistema Internacional de Unidades.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 0780 de 2016. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. 6 de mayo de 2016.',
      link: '',
    },
    {
      referencia:
        'FARMACOPEA ARGENTINA (Séptima edición). Buenos Aires, 12 de junio de 2003.',
      link: '',
    },
    {
      referencia:
        'Manual de Laboratorio de Farmacia Magistral. Universidad de Antioquia. Facultad de Química Farmacéutica. Tecnología en Regencia de Farmacia. Gómez Betancurt, Sergio; 2004.',
      link: '',
    },
    {
      referencia:
        'Pharmaceutical Compounding - Nonsterile Preparations; USP42-NF37',
      link: '',
    },
    {
      referencia:
        'REMINGTON FARMACIA (T. II) (20ª ED.) de Gennaro, Alfonso R., EDITORIAL Médica Panamericana.',
      link: '',
    },
    {
      referencia:
        'Resolución 1403 de 2007. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras Disposiciones.',
      link: '',
    },
    {
      referencia:
        'Resolución 444 del 2008 “por la cual se adopta el instrumento de verificación de cumplimiento de Buenas Prácticas de Elaboración de preparaciones magistrales y se dictan otras disposiciones”. Febrero de 2008',
      link: '',
    },
    {
      referencia:
        'Rosales, Z. JM y Muñoz, B. JC. Formulación magistral en atención primaria. En Medicina de Familia (And) Vol. 2, N.º 1, marzo 2001, p. 53.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo Fullstack-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
