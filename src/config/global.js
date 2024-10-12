export default {
  global: {
    componenteFormativo: 'Planeación del <em>catering</em>',
    descripcionCurso:
      'El componente formativo sobre la planeación del catering abarca desde la organización administrativa, contratación de personal, tipos de servicios (<i>cocktail</i>, <i>buffet</i>, banquete), hasta el montaje y menaje. Se destacan los aspectos clave del servicio de bebidas, incluyendo recomendaciones para seleccionar vinos según el menú. También se describe cómo calcular costos de menús y coordinar la logística del evento, garantizando una experiencia personalizada y ajustada a las necesidades del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Planificación del <i>catering</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Organización administrativa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El personal',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'El tipo de <em>catering</em>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'El menaje',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'El servicio de bebidas',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'La confección del menú',
            hash: 't_1_6',
          },
        ],
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
      tema: 'Planificación del <em>catering</em>',
      referencia:
        'INA VIRTUAL. (2023). Técnicas de montaje en el servicio de alimentos y bebidas - VIDEO 1 – <em>Buffet</em>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Gt1CdLxgH0o',
    },
    {
      tema: 'Organización administrativa',
      referencia:
        'Germán De Bonis - <em>Coach</em> Gastronómico. (2023). Servicios de <em>Catering</em> para Empresas 3 Consejos y 3 Recomendaciones Esenciales. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kPuqzrWx2ms',
    },
    {
      tema: 'El personal',
      referencia:
        'Bodega y Cocina. (2015). ¿Cómo ofrecer un servicio de <em>Catering</em> para 4.500 personas en dos días? B&C - PROCOLOMBIA. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hJ2juujzvj4',
    },
    {
      tema: 'El tipo de catering',
      referencia:
        'GeDiscovery - Gastronomía, Hotelería y Turismo (2019). Todo lo que necesitas saber sobre el servicio de <em>catering</em>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EfZhxYKVyVk',
    },
    {
      tema: 'El servicio de bebidas',
      referencia:
        'Vineros por excelencia. (2015). Aprende a servir vino a tus invitados. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=t9tgTFjQ-cg',
    },
  ],
  glosario: [
    {
      termino: '<em>Catering</em>',
      significado:
        'servicio de provisión de alimentos y bebidas en eventos o reuniones, ajustado a las necesidades específicas del cliente.',
    },
    {
      termino: 'Coordinación',
      significado:
        'acción de organizar y sincronizar las diversas tareas y personal para garantizar que el evento se desarrolle de forma fluida.',
    },
    {
      termino: 'Costos',
      significado:
        'gastos asociados a la planificación y ejecución del servicio de <em>catering</em>, incluyendo materias primas, personal, transporte y logística.',
    },
    {
      termino: 'Eventos',
      significado:
        'reuniones sociales, corporativas o de otro tipo donde se ofrece el servicio de <em>catering</em>, ajustado a las necesidades de la ocasión.',
    },
    {
      termino: 'Logística',
      significado:
        'organización y gestión eficiente de recursos, transporte y personal necesarios para garantizar el éxito del evento.',
    },
    {
      termino: 'Materia prima',
      significado:
        'insumos básicos como alimentos y bebidas que se utilizan en la elaboración de los menús ofrecidos en el evento.',
    },
    {
      termino: 'Menaje',
      significado:
        'conjunto de utensilios, vajillas y cristalería necesarios para la presentación y el servicio de alimentos y bebidas.',
    },
    {
      termino: 'Personalización',
      significado:
        'adaptación de los servicios y productos a las preferencias y necesidades específicas del cliente o del evento.',
    },
    {
      termino: 'Servicio',
      significado:
        'conjunto de acciones y atenciones proporcionadas a los clientes durante el evento, incluyendo la entrega de alimentos, bebidas y asistencia en general.',
    },
    {
      termino: 'Transporte',
      significado:
        'movilización de equipos, personal y materias primas necesarias para el evento desde el lugar de preparación hasta el lugar de celebración.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alecreu Ginés, J. (2012). Planificación y dirección de servicios y eventos en restauración. Editorial Síntesis.',
      link: '',
    },
    {
      referencia:
        'Fagor Professional. (2015). La receta para una buena planificación y el éxito de un <em>catering</em>.',
      link:
        'https://www.fagorprofessional.com/blog/es/organizacion-catering-receta-buena-planificacion-exito/',
    },
    {
      referencia:
        'Robalino Vallejo, J. A., Zurita Gallegos, R. M., Ordóñez Bravo, E. F., & Fierro Ricaurte, A. E. (2018). La planificación estratégica en las empresas de <em>catering</em>: Análisis de las barreras. Revista Observatorio de la Economía Latinoamericana.',
      link:
        'https://www.eumed.net/rev/oel/2018/05/planificacion-empresas-catering.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Roberto Bernal Duque',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
