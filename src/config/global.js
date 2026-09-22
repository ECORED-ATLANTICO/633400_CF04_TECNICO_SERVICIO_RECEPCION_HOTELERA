export default {
  global: {
    Name: 'Procedimientos de reservas',
    Description:
      'El componente formativo Procedimientos de reservas, desarrolla los procesos técnicos relacionados con la gestión de reservas en establecimientos de alojamiento. En él se abordan los procedimientos para consultar disponibilidad, registrar y confirmar reservas, aplicando correctamente políticas, condiciones y estados de la reservación. Asimismo, permite fortalecer habilidades en el manejo de sistemas de gestión hotelera y en la elaboración de reportes de reservas, contribuyendo al control de la ocupación y a la prestación eficiente del servicio al cliente dentro del contexto operativo hotelero.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
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
        titulo: 'Canales y tipos de reserva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Canales de reserva',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de canales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ventajas y desventajas de los canales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de reservas hoteleras',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Codificación de reservas',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión y control de reservas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '<em>Rooming list</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<em>Waiting list</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<em>Forecasting</em> (pronóstico de ocupación)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: '<em>Overbooking</em>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: '<em>No show</em>',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procedimientos técnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Confirmación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modificación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Cancelación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Anulación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Políticas y tratamientos de reservas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tratamiento de la reserva',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Condiciones',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Políticas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Garantía de reserva',
            hash: 't_4_4',
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/633400_CF04_CFA.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<em>Allotment</em>',
      significado:
        'Cupo de habitaciones asignado por el hotel a agencias o empresas para su comercialización durante un periodo determinado.',
    },
    {
      termino: 'Anulación',
      significado:
        'Procedimiento mediante el cual se elimina una reserva creada por error o inconsistencia en el sistema.',
    },
    {
      termino: '<em>Booking engine</em>',
      significado:
        'Motor de reservas integrado a páginas web que permite realizar reservas <em>online</em>.',
    },
    {
      termino: 'Canal de reserva',
      significado:
        'Medio utilizado para comercializar y gestionar reservas hoteleras.',
    },
    {
      termino: 'Cancelación',
      significado:
        'Suspensión de una reserva antes de la fecha de llegada del huésped.',
    },
    {
      termino: '<em>Channel manager</em>',
      significado:
        '<em>Software</em> que sincroniza tarifas y disponibilidad en diferentes canales de venta.',
    },
    {
      termino: '<em>Check-in</em>',
      significado:
        'Proceso de registro e ingreso del huésped al establecimiento de alojamiento.',
    },
    {
      termino: '<em>Check-out</em>',
      significado:
        'Proceso de salida del huésped y cierre de cuenta en el hotel.',
    },
    {
      termino: 'Código de reserva',
      significado:
        'Identificador alfanumérico asignado a una reserva dentro del sistema hotelero.',
    },
    {
      termino: 'Confirmación',
      significado:
        'Proceso mediante el cual el hotel valida y acepta oficialmente una reserva.',
    },
    {
      termino: '<em>Forecasting</em>',
      significado:
        'Pronóstico de ocupación hotelera basado en análisis de demanda y reservas.',
    },
    {
      termino: 'Garantía de reserva',
      significado:
        'Respaldo económico que asegura la disponibilidad de la habitación para el huésped.',
    },
    {
      termino: 'GDS (<em>Global Distribution System</em>)',
      significado:
        'Sistema global de distribución utilizado para comercializar servicios turísticos y hoteleros.',
    },
    {
      termino: 'Habitación estándar',
      significado:
        'Tipo básico de habitación ofrecida por un establecimiento hotelero.',
    },
    {
      termino: 'Huésped',
      significado:
        'Persona que utiliza el servicio de alojamiento en un establecimiento hotelero.',
    },
    {
      termino: 'Inventario hotelero',
      significado:
        'Disponibilidad total de habitaciones que posee un establecimiento.',
    },
    {
      termino: 'Lista de espera (<em>waiting list</em>)',
      significado:
        'Registro de clientes pendientes de disponibilidad de habitaciones.',
    },
    {
      termino: 'Modificación de reserva',
      significado: 'Cambio realizado sobre una reserva previamente confirmada.',
    },
    {
      termino: '<em>No show</em>',
      significado:
        'Situación en la cual el huésped no se presenta sin cancelar la reserva.',
    },
    {
      termino: 'Ocupación hotelera',
      significado:
        'Porcentaje de habitaciones vendidas respecto al total disponible.',
    },
    {
      termino: 'OTA <em>(Online Travel Agency)</em>',
      significado:
        'Agencia de viajes online que comercializa servicios turísticos y hoteleros.',
    },
    {
      termino: '<em>Overbooking</em>',
      significado:
        'Venta de habitaciones por encima de la disponibilidad real del hotel.',
    },
    {
      termino: 'PMS <em>(Property Management System)</em>',
      significado:
        'Sistema informático utilizado para gestionar operaciones hoteleras y reservas.',
    },
    {
      termino: 'Política de cancelación',
      significado:
        'Condiciones establecidas por el hotel para cancelar una reserva.',
    },
    {
      termino: 'Pronóstico de ocupación',
      significado:
        'Estimación futura del nivel de ocupación del establecimiento.',
    },
    {
      termino: 'Reserva garantizada',
      significado:
        'Reserva respaldada mediante pago anticipado o tarjeta de crédito.',
    },
    {
      termino: 'Reserva provisional',
      significado: 'Reserva pendiente de confirmación definitiva.',
    },
    {
      termino: '<em>Rooming list</em>',
      significado:
        'Documento que contiene la distribución y datos de huéspedes de una reserva grupal.',
    },
    {
      termino: 'Tarifa hotelera',
      significado: 'Valor económico asignado al servicio de alojamiento.',
    },
    {
      termino: '<em>Upgrade</em>',
      significado:
        'Mejora de categoría de habitación sin incremento en la tarifa para el huésped.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, E. A. (2021, enero 7). Recepción y reservas. Unidad de trabajo 6. [Web log post]. Emilio Alonso Álvarez - Blog Profesional.',
      link:
        'https://emilioalonsoalvarez.files.wordpress.com/2012/10/ut6-reservas.pdf',
    },
    {
      referencia:
        'Ateortua, K. S. [ksateortua]. (2013, noviembre, 13). Reserva hotelera [Presentación]. Slideshare.',
      link: 'https://es.slideshare.net/ksateortua/421-reserva-de-hotel',
    },
    {
      referencia:
        'Códigos IATA. (17 de diciembre de 2015). Agencia de Viajes I.',
      link: 'http://av1germainebatson.blogspot.com/2015/12/codigos-iata.html',
    },
    {
      referencia:
        'Duran, W. (2018, mayo, 9). Tarifas dinámicas en hoteles, tendencia que ya existe en los viajes de negocios. [Publicación en perfil]. Linkedin.',
    },
    {
      referencia:
        'eZee Technosys Pvt. Ltd. (s.f) How to Assign Bookings/Rooms in eZee Absolute. [Video].',
      link: 'https://www.youtube.com/watch?v=Mayp7yo-g0s&t=3s',
    },
    {
      referencia: 'Hytar. (2013) Código de aeropuertos de OACI. Wikipedia.',
      link:
        'https://es.wikipedia.org/wiki/C%C3%B3digo_de_aeropuertos_de_OACI#/media/Archivo:ICAO_FirstLetter.svg',
    },
    {
      referencia:
        'Kasavana, M. L., & Cahill, J. J. (2017). Managing computers in the hospitality industry. AHLEI.',
    },
    {
      referencia:
        'Kotler, P., Bowen, J., & Makens, J. (2017). Marketing for hospitality and tourism (7th ed.).',
    },
    {
      referencia:
        'Marrero, F. J. (2016, Noviembre 1). Glosario de términos hoteleros, turísticos y relacionados. Obtenido de Hosteltur:',
      link: 'https://www.hosteltur.com/files/web/templates/term/wikitur.pdf',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2008). Introducción al turismo.',
    },
    {
      referencia: 'Oracle Corporation. (s.f.). Group Rooming List. oracle.com',
      link:
        'https://docs.oracle.com/cd/E53547_01/opera_5_04_03_core_help/grprmlist_help.htm',
    },
    {
      referencia: 'Oracle Corporation. (s.f.). Waitlist Screen. oracle.com',
      link:
        'https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/waitlist_options.htm',
    },
    {
      referencia:
        'Soler, J. R. (2.000). Técnicas de Gestión y Dirección Hotelera. Barcelona: Ediciones Gestión 2.000 S.A.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Amparo Virginia Moreno Cantero',
          cargo: 'Experta temática',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Harbey Castelblanco',
          cargo: 'Experto temático',
          centro: 'Centro Colombo Alemán - Regional Atlántico',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
