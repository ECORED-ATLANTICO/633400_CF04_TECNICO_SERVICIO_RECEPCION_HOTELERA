<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión y control de reservas

    .bg-full-width.bg-fondo-2.px-5.py-4
      img(src="@/assets/curso/tema2/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text La gestión y control de reservas constituye un proceso estratégico dentro de la operación hotelera, ya que permite administrar la disponibilidad de habitaciones, prever niveles de ocupación y garantizar una adecuada coordinación entre las diferentes áreas del establecimiento. A través de herramientas y procedimientos técnicos, el área de reservas organiza la información relacionada con llegadas, salidas, grupos, cancelaciones y comportamiento de la demanda, contribuyendo a optimizar la ocupación y la rentabilidad del hotel. Según Kasavana y Cahill (2017), el control eficiente de las reservas facilita la toma de decisiones operativas y reduce riesgos asociados a sobreocupación, pérdidas económicas o fallas en la prestación del servicio.

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img02.svg").mx-auto
      .col-lg
        p.mb-0 En este contexto, conceptos como <em>rooming list</em>, <em>waiting list</em>, <em>forecasting</em>, <em>overbooking</em> y <em>no show</em> forman parte de las herramientas fundamentales para la planificación y control de la operación hotelera. Su correcta interpretación y aplicación permite al personal anticiparse a situaciones que afectan la disponibilidad de habitaciones y mejorar la experiencia del huésped mediante una gestión organizada y eficiente de las reservas.


    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 <em>Rooming list</em>

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-4(data-aos="fade-right") El <em>rooming list</em> es un documento utilizado principalmente en reservas grupales, donde se registra la información detallada de los huéspedes que harán parte de una reserva colectiva. Este listado es enviado generalmente por agencias de viajes, empresas u organizadores de eventos y contiene datos como nombres de los huéspedes, tipo de habitación, fechas de llegada y salida, requerimientos especiales y distribución de habitaciones.

        .bg-fondo-9.px-lg-5.py-lg-4.px-4.py-3.br-15
          p.mb-0 La finalidad del <em>rooming list</em> es facilitar la organización operativa del hotel antes de la llegada del grupo, permitiendo coordinar procesos de <em>check-in</em>, asignación de habitaciones, alimentación y servicios complementarios. Además, este documento mejora la comunicación entre las áreas de reservas, recepción y <em>housekeeping</em>, optimizando la atención al cliente y reduciendo errores en la operación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Figura 1.
          span Reserva grupal o <em>rooming list</em> en <em>software</em> hotelero
        img(data-aos="fade-down", src="@/assets/curso/tema2/img05.png", alt="La figura 1 detalla una sección del formato utilizado en las reservas grupales o rooming list, en el cual se registran datos básicos de los huéspedes tales como, nombres, fecha de llegada y salida, tipo y número de habitaciones requeridas; para facilitar la logística  del hotel en la asignación de espacios, servicios y mejorra la atención al cliente.").mx-auto
        figcaption Nota. ORACLE, (2026).

    .row.justify-content-center.mb-3
      .col-lg-12
        p.mb-0(data-aos="fade-down") La finalidad del <em>rooming list</em> es facilitar la organización operativa del hotel antes de la llegada del grupo, permitiendo coordinar procesos de <em>check-in</em>, asignación de habitaciones, alimentación y servicios complementarios. Además, este documento mejora la comunicación entre las áreas de reservas, recepción y <em>housekeeping</em>, optimizando la atención al cliente y reduciendo errores en la operación.
        
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 <em>Waiting list</em>

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-21.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 La <em>waiting list</em> o lista de espera es una herramienta utilizada cuando el hotel no cuenta con disponibilidad inmediata de habitaciones, pero registra las solicitudes de clientes interesados ante posibles cancelaciones o modificaciones de reservas existentes.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Figura 2.
          span Lista de espera o <em>waiting list</em> en <em>software</em> hotelero
        img(data-aos="fade-down", src="@/assets/curso/tema2/img07.png", alt="La figura 2 presenta una sección de la waiting list o lista de espera, herramienta que permite al hotel registrar las solicitudes de clientes potenciales interesados en acceder a los servicios de alojamiento en caso de que se liberen cupos en las reservas existentes.").mx-auto
        figcaption Nota. ORACLE, (2026).

    
      
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-5 Este procedimiento permite mantener oportunidades de venta y facilita la reorganización de la ocupación cuando se liberan habitaciones. Las listas de espera suelen organizarse según orden de solicitud, tipo de cliente o prioridad comercial.

        .cajon.bg-color-74.p-4
          p.mb-0 La adecuada gestión de la <em>waiting list</em> contribuye a maximizar la ocupación y mantener comunicación con clientes potenciales, evitando pérdidas de ingresos por habitaciones vacías.

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 <em>Forecasting</em> (pronóstico de ocupación)
      
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema2/img08.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") El <em>forecasting</em> corresponde al pronóstico o estimación de ocupación hotelera basado en el análisis de reservas actuales, comportamiento histórico de la demanda, temporadas y tendencias del mercado. Esta herramienta permite anticipar niveles de ocupación y planificar estrategias comerciales y operativas.
        p.mb-0 Este proceso se basa en la analítica de datos que en esencia permite calcular para una fecha futura el estimado de la demanda, de esta forma el establecimiento hotelero puede determinar casi que con exactitud la ocupación que tendrá en una fecha futura.

        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Figura 3.
          span Análisis del pronóstico de ocupación en <em>software</em> hotelero
        img(data-aos="fade-down", src="@/assets/curso/tema2/img10.png", alt="La figura 3 registra el detalle de un panel de control hotelero con indicadores de ocupación, reservas, habitaciones disponibles, gráficos de distribución y estado de habitaciones que facilitan el análisis adecuado para el pronóstico de la ocupación del establecimiento hotelero.").mx-auto
        figcaption Nota. SENA, (2026).

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.col-md-12.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 3.
          span Variables utilizadas en el <em>forecasting</em>
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th.tabla3 Variable
                th.tabla3 Aplicación
            tbody
              tr
                td.tabla3 Temporada
                td.tabla3 Alta, media o baja
              tr
                td.tabla3 Historial de ocupación
                td.tabla3 Comportamiento de años anteriores
              tr
                td.tabla3 Eventos especiales
                td.tabla3 Ferias, conciertos, congresos
              tr
                td.tabla3 Reservas confirmadas
                td.tabla3 Nivel actual de ocupación
              tr
                td.tabla3 Cancelaciones
                td.tabla3 Ajuste de proyecciones

      .col-lg-5.mb-0.mb-lg-0.col-md-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12.col-md-auto.mb-4.d-none.d-lg-flex
            img(src="@/assets/curso/tema2/img09.svg", style="max-width: 100px")
          .col-lg
            p.mb-0 El <em>forecasting</em> es fundamental para la toma de decisiones relacionadas con tarifas, promociones, personal operativo y disponibilidad de habitaciones. Según la Organización Mundial del Turismo (OMT, 2008), el análisis de datos y proyecciones de demanda constituye una práctica clave para la sostenibilidad y competitividad de los establecimientos turísticos.
        



    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 <em>Overbooking</em>

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-9(data-aos="fade-right")
        .col-lg-7.p-4.order-2.order-lg-1
          p.mb-0 El <em>overbooking</em> o sobreventa ocurre cuando el hotel vende más habitaciones de las realmente disponibles, anticipando cancelaciones o no presentaciones de huéspedes. Esta práctica se utiliza como estrategia para evitar pérdidas económicas derivadas de habitaciones vacías.
        .col-lg-5.p-0.order-1.order-lg-2
          img(src="@/assets/curso/tema2/img11.png")

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema2/img12.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") Aunque el <em>overbooking</em> puede contribuir a maximizar ingresos, también representa un riesgo operativo y de servicio si todos los huéspedes se presentan al mismo tiempo. En estos casos, el hotel debe aplicar protocolos de reubicación o compensación para evitar afectar la experiencia del cliente.
        p.mb-3 El manejo del <em>overbooking</em> requiere un análisis cuidadoso del comportamiento histórico de cancelaciones y <em>no show</em>, así como una adecuada coordinación operativa.
        p.mb-0 A continuación, se presentan las ventajas y riesgos del <em>overbooking</em> en hotelería:

    .row.justify-content-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 4.
          span Ventajas y riesgos del <em>overbooking</em>
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2016).</span>
            thead
              tr
                th Aspecto
                th Ventajas del <em>overbooking</em>
                th Riesgos del <em>overbooking</em>
            tbody
              tr
                td Ocupación hotelera
                td Permite maximizar la ocupación del hotel y reducir habitaciones vacías.
                td Puede generar sobreocupación si todos los huéspedes se presentan.
              tr
                td Rentabilidad.
                td Incrementa los ingresos del establecimiento al compensar cancelaciones y <em>no show</em>.
                td Puede generar costos adicionales por reubicación de huéspedes.
              tr
                td Gestión de reservas.
                td Optimiza el aprovechamiento de la disponibilidad mediante proyecciones de demanda.
                td Requiere análisis constante y control preciso de las reservas.
              tr
                td Servicio al cliente.
                td Bien administrado, evita pérdidas de ventas por cancelaciones inesperadas.
                td Una mala gestión afecta la satisfacción y experiencia del huésped.
              tr
                td Imagen del hotel.
                td Puede fortalecer la competitividad y eficiencia operativa.
                td El exceso de sobreventa puede afectar la reputación del establecimiento.
              tr
                td Operación hotelera.
                td Facilita estrategias de <em>revenue management</em> y control de ocupación.
                td Incrementa la presión operativa sobre recepción y reservas.
              tr
                td Planeación.
                td Permite prever comportamientos históricos de cancelación y no presentación.
                td Un error en el pronóstico puede generar conflictos operativos.
              tr
                td Relación con el cliente.
                td Posibilita mantener altos niveles de ocupación en temporadas de alta demanda.
                td Puede ocasionar reclamaciones, compensaciones o pérdida de fidelización.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-fondo-10.px-lg-5.py-lg-4.px-4.py-3.br-15
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema2/img13.svg").mx-auto
            .col-lg
              p.mb-0 El <em>overbooking</em> es una estrategia utilizada en hotelería para optimizar la ocupación y maximizar los ingresos del establecimiento, especialmente en temporadas de alta demanda. Sin embargo, su implementación requiere un análisis cuidadoso de las tendencias de cancelación y <em>no show</em>, así como un control permanente de la disponibilidad. Una adecuada gestión del <em>overbooking</em> permite equilibrar rentabilidad y calidad del servicio, mientras que un manejo inadecuado puede afectar la experiencia del huésped y la imagen del hotel.

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 <em>No show</em>

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El término <em>no show</em> hace referencia a la situación en la cual un huésped no se presenta en el hotel durante la fecha de llegada prevista y tampoco realiza la cancelación de la reserva. Este tipo de situación genera afectaciones operativas y económicas para el establecimiento, especialmente cuando las habitaciones permanecen bloqueadas y no pueden ser comercializadas nuevamente.

    
    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img15.svg").mx-auto
      .col-lg
        p.mb-3 Para reducir el impacto del <em>no show</em>, muchos hoteles implementan políticas de garantía mediante tarjeta de crédito o cobro anticipado, aplicando penalizaciones cuando el cliente no cumple con la reserva confirmada.
        p.mb-0 El análisis de los índices de <em>no show</em> también resulta importante para el <em>forecasting</em> y la aplicación de estrategias de <em>overbooking</em>.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-fondo-11.px-lg-5.py-lg-4.px-4.py-3.br-15
          p.mb-0 La gestión y control de reservas permite organizar de manera eficiente la ocupación hotelera y optimizar la comercialización de habitaciones mediante herramientas operativas y procedimientos técnicos. Elementos como el <em>rooming list</em>, <em>waiting list</em>, <em>forecasting</em>, <em>overbooking</em> y <em>no show</em> facilitan el análisis de la demanda, el control de disponibilidad y la toma de decisiones estratégicas dentro del establecimiento. En este sentido, el dominio de estas herramientas fortalece las competencias del personal del área de reservas y contribuye a garantizar una operación hotelera organizada, rentable y orientada a la satisfacción del cliente.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
