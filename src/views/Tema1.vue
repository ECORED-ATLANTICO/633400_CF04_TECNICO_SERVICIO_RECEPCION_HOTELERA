<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Canales y tipos de reserva

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img01.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-0(data-aos="fade-right") La gestión de reservas constituye uno de los procesos más importantes dentro de la operación hotelera, debido a que permite controlar la ocupación, organizar la disponibilidad de habitaciones y facilitar la comercialización de los servicios del establecimiento. En la actualidad, los hoteles utilizan diferentes canales y sistemas tecnológicos para recibir y administrar reservas, respondiendo a las dinámicas del mercado turístico y a las nuevas formas de consumo de los clientes. Según Kotler, Bowen y Makens (2017), la transformación digital del sector hotelero ha fortalecido el uso de plataformas tecnológicas y canales de distribución que permiten ampliar el alcance comercial y mejorar la experiencia del huésped. En este contexto, resulta fundamental comprender cómo funcionan los canales de reserva, sus tipos, ventajas y limitaciones, así como la clasificación y codificación de las reservas dentro de los sistemas de gestión hotelera.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Canales de reserva

    p.mb-4 Los canales de reserva son los medios o mecanismos utilizados por los establecimientos de alojamiento para comercializar habitaciones y recibir solicitudes de hospedaje por parte de los clientes. Estos canales permiten establecer comunicación entre el huésped y el hotel, facilitando procesos como la consulta de disponibilidad, la cotización de tarifas, la confirmación de reservas y el pago de servicios. Su adecuada administración es clave para garantizar una distribución eficiente de la oferta hotelera y optimizar los niveles de ocupación.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img02.png", data-aos="zoom-in")
      .col-lg-9.col-md-12
        .row.align-items-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/img03.svg", style="max-width: 100px").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-right") Tradicionalmente, las reservas hoteleras se realizaban de manera presencial o telefónica; sin embargo, el desarrollo tecnológico y la expansión del comercio electrónico han permitido la aparición de nuevos canales digitales que facilitan la comercialización de servicios turísticos a nivel global.
  
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/img04.svg", style="max-width: 100px").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-right") La Organización Mundial del Turismo (OMT, 2008) señala que el uso de tecnologías de información y comunicación en el turismo ha transformado la manera en que los usuarios acceden y adquieren servicios de alojamiento, aumentando la competitividad y el alcance de los establecimientos hoteleros.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Tipos de canales

    .row.align-items-center.mb-5
      .col-lg-8
        p.mb-0 Los canales de reserva pueden clasificarse en directos e indirectos, dependiendo de la forma en que el cliente accede al servicio de alojamiento y de la participación o no de intermediarios en el proceso comercial.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto Canales directos

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img05.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-3 Son aquellos en los cuales el cliente realiza la reserva directamente con el hotel, sin intervención de terceros. Este tipo de canal favorece una comunicación más cercana con el huésped y permite al establecimiento mantener mayor control sobre las tarifas, políticas y condiciones de venta.
        p.mb-0 A continuación, se describen cuáles son los canales de reserva directos más comunes: 

    .bg-full-width.bg-fondo-1.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4 Solicitud directa o personal
              p.mb-0 Son las solicitudes que el hotel recibe de sus propios visitantes, esta clase de reservas deben ser motivadas por los recepcionistas y otros funcionarios del hotel, toda vez que son las más rentables.
              
            .col-md-10.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img06.png", alt="Imagen de solicitud directa o personal").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4 Telefónicas
              p.mb-0 Las reservas telefónicas fueron el medio más utilizado por los clientes individuales, incluso por empresas y agencias de viajes. Hoy en día los establecimientos hoteleros disponen de medios técnicos a través de internet y las diferentes redes sociales, que resultan más accesibles, lo que ha hecho desaparecer gradualmente las líneas telefónicas gratuitas para usuarios.
              
            .col-md-10.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img07.png", alt="Imagen de reservas telefónicas").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4 Correo electrónico
              p.mb-0 Es un método de reservas sencillo y muy utilizado, porque permite el contacto directo entre el cliente y el hotel. Consiste en reservar, confirmar y cancelar respectivamente una solicitud de reserva, de manera que el cliente puede disponer de un documento de confirmación. Es la evolución de sistemas como el fax o télex que en otra época eran muy comunes.
              
            .col-md-10.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img08.png", alt="Imagen de correo electrónico").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4 Página web
              p.mb-0 La página web en los hoteles es la mejor forma de mostrar los productos y servicios, pero en esencia es la mejor herramienta de ventas que tiene el hotel. En las páginas web se integran aplicativos conocidos como motores de reserva (<em>IBE</em>), que además de mostrar información, permiten que a través de la web se pueda vender en tiempo real, 24 horas al día, 7 días a la semana y 365 días al año.
              
            .col-md-10.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img09.png", alt="Imagen de página web").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4 Mensajería y <em>chatbots</em>
              p.mb-0 Casi siempre están asociadas a la página web o a las redes sociales, son aplicaciones que permiten un contacto rápido y directo con los clientes para resolver dudas, pero en la actualidad tienen gran capacidad de venta directa, un ejemplo es WhatsApp en su versión <em>business</em>.
              
            .col-md-10.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img10.png", alt="Imagen de mensajería y chatbots").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4 Redes Sociales
              p.mb-0 Hoy en un mundo hiperconectado, las redes sociales han ganado un lugar importante en el comportamiento cotidiano y por ende son una buena forma de llegar a los clientes para presentar el producto, compartir experiencias, interactuar con personas que siguen la marca. En el caso de los hoteles y con un adecuado manejo, las redes sociales se han convertido en una importante fuente de reservas directas, en algunas de estas también es posible conectar el motor de reservas para que el proceso de reserva sea más expedito. Algunos ejemplos son: Facebook o Instagram.
              
            .col-md-10.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img11.png", alt="Imagen de redes sociales").mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4 Centrales de Reservas – <em>CRS</em>
              p.mb-0 Las centrales de reservaciones son normalmente potestad de las grandes cadenas hoteleras que pueden concentrar una cuota de personal y tecnología para este fin. En los hoteles más pequeños e independientes, esta función se cubre en el departamento de teléfonos o recepción, haciendo muy importante el desempeño del personal de estas secciones.
              
            .col-md-10.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img12.png", alt="Imagen de centrales de reservas").mx-auto


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto Canales Indirectos

    .row.mb-5
      .col-lg-12
        p.mb-0 Son aquellos en los que intervienen terceros o intermediarios encargados de comercializar los servicios hoteleros. Estos canales permiten ampliar el alcance comercial del establecimiento y acceder a mercados nacionales e internacionales.


    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-4.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img13.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Agencias de viajes tradicionales")
            p.mb-0 Con la aparición de las agencias de viajes en línea (OTA) a finales de los años noventa, estas entidades empezaron a desaparecer. Hoy día se mantienen algunas que se dedican más al sector corporativo y al segmento <em>tour and travel</em>, donde la organización de viajes es imperativa. Algunos ejemplos son: Aviatur, Viajar Ltda.
            
          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Agencias de viajes en línea (OTA)")
            p.mb-0 Son plataformas web dedicadas a la comercialización de servicios turísticos y hoteleros. Representan la evolución digital de las agencias tradicionales y dominan gran parte del mercado gracias a fuertes inversiones en <em>marketing</em>. Ejemplo: Booking.com.

          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Bancos de camas")
            p.mb-0 Operan como mayoristas turísticos, negociando grandes volúmenes de servicios con proveedores como hoteles, transportes, excursiones y eventos. Posteriormente, redistribuyen esta oferta a agencias de viajes. Ejemplo: Hotelbeds.

          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Sistemas de distribución global (GDS)")
            p.mb-0 Originados en la industria aérea, los <em>GDS</em> facilitan la comercialización de múltiples productos turísticos, como vuelos, hoteles, cruceros y alquiler de vehículos. Han evolucionado hacia plataformas digitales más eficientes y conectadas a internet. Ejemplo: Amadeus.

          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Buscadores y metabuscadores")
            p.mb-0 Son plataformas que comparan precios y monetizan a través de publicidad. Redirigen a los usuarios hacia las <em>OTA</em> para concretar la reserva. Ejemplo: Trivago.

          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="Sitios de reputación social")
            p.mb-0 Estas plataformas se centran en la gestión de comentarios y valoraciones de los usuarios, convirtiéndose en una fuente clave de información para la toma de decisiones y la generación de ventas. En el sector hotelero destaca Tripadvisor.

          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="<em>Vacation Rentals</em>")
            p.mb-0 Surgieron como alternativa a los hoteles, permitiendo el alquiler de propiedades para estancias cortas a precios competitivos. Actualmente, además de competir, funcionan como aliados estratégicos en la comercialización de alojamiento. Ejemplo: Airbnb.

          .tarjeta.color-acento-botones--borde.p-4.align-content-center(titulo="<em>Blogs</em>")
            p.mb-0 Son sitios web independientes que generan contenido informativo y recomendaciones. Atraen tráfico orgánico que las marcas aprovechan mediante estrategias de <em>marketing</em> digital y <em>remarketing</em> para promocionar sus productos y servicios.
            
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        p.mb-0 Aunque estos canales generan una amplia visibilidad para el hotel, también implican costos por comisiones y una menor relación directa con el cliente.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Ventajas y desventajas de los canales
            
    .bg-full-width.bg-fondo-2.px-5.py-4
      img(src="@/assets/curso/tema1/img14.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text La evolución tecnológica y el crecimiento de la comercialización digital han transformado significativamente la gestión de reservas en el sector hotelero. Actualmente, los establecimientos de alojamiento utilizan múltiples canales de distribución para comercializar habitaciones y servicios turísticos, permitiendo ampliar su alcance comercial y facilitar el acceso de los clientes a la información y a la compra de servicios. Sin embargo, esta diversificación de canales también implica desafíos operativos y estratégicos relacionados con la administración de tarifas, inventarios y relaciones comerciales. Según Kotler, Bowen y Makens (2017), la transformación digital en hotelería ha generado nuevas oportunidades de posicionamiento y ventas, pero también exige una gestión más especializada de la distribución y comercialización de servicios.

    .row.justify-content-center.mb-5
      .col-lg-12.mb-4
        p.mb-0 Algunas de las ventajas y desventajas de los canales de gestión de reservas hoteleras son las siguientes: 
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 1.
          span Cuadro comparativo: ventajas y desventajas de los canales de reserva
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Aspecto
                th Ventajas
                th Desventajas
            tbody
              tr
                td Comunicación
                td Facilita el contacto inmediato con el cliente.
                td Requiere atención permanente y rápida respuesta.
              tr
                td Comercialización
                td Amplía el alcance y visibilidad del hotel.
                td Incrementa la competencia entre establecimientos.
              tr
                td Reservas en línea
                td Mayor facilidad y acceso global.
                td Dependencia de plataformas digitales.
              tr
                td <em>OTA</em> y agencias
                td Alta capacidad de distribución.
                td Pago de comisiones.
              tr
                td Tarifas
                td Posibilidad de precios dinámicos.
                td Mayor dificultad para controlar tarifas.


    .bg-full-width.bg-fondo-3.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Caso práctico
              p.mb-0 El hotel “Mar Azul” comercializa sus habitaciones mediante reservas telefónicas, página web, agencias de viajes y plataformas en línea. Durante una temporada alta, el establecimiento recibe múltiples reservas desde diferentes canales, lo que provoca inconsistencias en la disponibilidad de habitaciones debido a la falta de actualización inmediata del inventario. Como consecuencia, se genera una sobreventa que afecta la experiencia de varios huéspedes.              
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema1/img17.png", alt="",).mx-auto.w-75

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-3 Ante esta situación, el hotel implementa un sistema <em>channel manager</em> conectado al PMS, permitiendo sincronizar automáticamente la disponibilidad y tarifas en todos los canales. Esto mejora el control operativo, reduce errores y optimiza la comercialización del servicio.
              p.mb-0 Este caso evidencia que el uso de múltiples canales puede aumentar significativamente las oportunidades de venta, pero también exige una adecuada gestión tecnológica y operativa para garantizar la eficiencia del proceso de reservas.

            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema1/img18.png", alt="",).mx-auto.w-75

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 En conclusión, los canales de reserva se han convertido en herramientas fundamentales para la comercialización de los servicios hoteleros y la gestión eficiente de la ocupación. Su adecuada utilización permite ampliar el alcance del establecimiento, mejorar la atención al cliente y optimizar los procesos de venta; sin embargo, también exige una administración estratégica de tarifas, disponibilidad y tecnología para evitar errores operativos y mantener la competitividad en el mercado. Por ello, el personal del área de reservas debe desarrollar competencias técnicas y digitales que le permitan adaptarse a las dinámicas actuales de distribución y comercialización en la industria hotelera.
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema1/img19.png", alt="",).mx-auto.w-75


    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Tipos de reservas hoteleras

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img20.png", data-aos="zoom-in")
      .col-lg-10
        p.mb-3(data-aos="fade-right") Una reserva representa el inicio del acuerdo entre un hotel y una persona natural o jurídica, a partir del cual se establece el contrato de alojamiento. En este, el establecimiento se compromete a prestar el servicio bajo condiciones previamente definidas y el cliente a hacer uso del mismo en la fecha acordada, efectuando el pago correspondiente.
        p.mb-3(data-aos="fade-right") Las reservas hoteleras pueden clasificarse según el tipo de servicio solicitado, el perfil del cliente o la forma de garantía, lo que facilita la gestión operativa y permite ajustar el servicio a las necesidades del huésped.
        p.mb-0(data-aos="fade-right") Entre los tipos de reservas más comunes se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-xl-4 col-md-12 col-sm-12")
          .tarjeta.bg-fondo-4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img22.svg' alt='Imagen de reserva confirmada', style="width: 100px;").mx-auto
            h4.text-center #[b Reserva confirmada (no garantizada)]
            p.text-center El hotel confirma la disponibilidad de la habitación sin exigir pago anticipado o garantía económica. La reserva se mantiene hasta una hora límite de llegada establecida por el hotel.

          .tarjeta.bg-fondo-4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img23.svg' alt='Imagen de reserva garantizada', style="width: 100px;").mx-auto
            h4.text-center #[b Reserva garantizada]
            p.text-center Es una reserva respaldada mediante tarjeta de crédito, depósito o pago anticipado. Garantiza la disponibilidad de la habitación durante toda la fecha acordada.

          .tarjeta.bg-fondo-4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img24.svg' alt='Imagen de reserva provisional', style="width: 100px;").mx-auto
            h4.text-center #[b Reserva provisional (tentativa)]
            p.text-center Corresponde a una reserva pendiente de confirmación definitiva. Se mantiene por un tiempo determinado mientras el cliente confirma o realiza el pago.

          .tarjeta.bg-fondo-4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img25.svg' alt='Imagen de reserva en lista de espera', style="width: 100px;").mx-auto
            h4.text-center #[b Reserva en lista de espera]
            p.text-center Se registra cuando no hay disponibilidad inmediata, pero el cliente queda pendiente ante posibles cancelaciones o cambios de otros huéspedes.

          .tarjeta.bg-fondo-4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img26.svg' alt='Imagen de reserva V.I.P.', style="width: 100px;").mx-auto
            h4.text-center #[b Reservas V.I.P.]
            p.text-center Son reservas realizadas para huéspedes de alta importancia para el hotel, quienes reciben atención preferencial y servicios personalizados.

          .tarjeta.bg-fondo-4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img27.svg' alt='Imagen de reservas de grupos', style="width: 100px;").mx-auto
            h4.text-center #[b Reservas de grupos]
            p.text-center Incluyen varias habitaciones para empresas, agencias, eventos o grupos turísticos. Requieren coordinación especial de servicios y logística.

          .tarjeta.bg-fondo-4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img28.svg' alt='Imagen de reservas anuladas o canceladas', style="width: 100px;").mx-auto
            h4.text-center #[b Reservas anuladas o canceladas]
            p.text-center Son reservas suspendidas antes de la llegada del huésped, ya sea por decisión del cliente o del establecimiento, según políticas definidas.

          .tarjeta.bg-fondo-4.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img29.svg' alt='Imagen de reservas con cupo o allotment', style="width: 100px;").mx-auto
            h4.text-center <b>Reservas con cupo o <em>allotment</em></b>
            p.text-center Consisten en habitaciones bloqueadas previamente para agencias o empresas durante un periodo determinado para su comercialización.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12
        p(data-aos="fade-right") La clasificación de las reservas hoteleras permite organizar de manera eficiente la operación del establecimiento y adaptar los procedimientos de atención según las características y necesidades del cliente. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-fondo-5.px-lg-5.py-lg-4.px-4.py-3.br-15
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema1/img30.svg").mx-auto
            .col-lg
              p.mb-0 Cada tipo de reserva implica condiciones específicas relacionadas con disponibilidad, garantías, políticas y niveles de servicio, por lo que su correcta identificación facilita el control de la ocupación y mejora la gestión operativa del área de reservas. En este sentido, el conocimiento de las diferentes modalidades de reserva constituye una competencia fundamental para el personal encargado de la comercialización y administración de los servicios de alojamiento.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bg-color-1-degrade.p-3.mb-0.rounded-2.br-15.align-items-center
          .row.justify-content-center.align-items-center
            .col-lg-10.col-md-12.mb-4.mb-lg-0
              .row.align-items-center.mb-0
                .col-lg-auto.mb-4.mb-lg-0
                  img(src="@/assets/curso/tema1/img06.svg", style="max-width: 100px;").mx-auto
                .col-lg
                  p.mb-0 Para profundizar en los diferentes tipos de reservas hoteleras, lo invitamos a consultar el siguiente video:
            .col-lg-2.col-md-12(style="text-align: center !important;")
              a.boton.color-acento-botones(href="https://youtu.be/WhV3jC4u880" target="_blank", style="text-align: center !important;")
                span Consultar video
                i.fas.fa-play

    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Codificación de reservas

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-9(data-aos="fade-right")
        .col-lg-7.p-4.order-2.order-lg-1
          p.mb-0 La codificación de reservas corresponde al conjunto de códigos, siglas y convenciones utilizados en los sistemas de gestión hotelera para registrar, identificar y controlar la información relacionada con las reservaciones. Debido al alto volumen de operaciones que manejan los establecimientos de alojamiento y al uso de plataformas tecnológicas como los PMS <em>(Property Management System)</em>, resulta necesario emplear códigos estandarizados que permitan agilizar los procesos operativos, facilitar la comunicación interna y reducir errores en la gestión de la información.
        .col-lg-5.p-0.order-1.order-lg-2
          img(src="@/assets/curso/tema1/img32.png")

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.mb-3.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img33.png", data-aos="zoom-in")
      .col-lg-10
        p.mb-0(data-aos="fade-right") Generalmente, estos códigos son alfanuméricos y representan estados, condiciones o características específicas de la reserva. Su utilización permite identificar rápidamente aspectos como el estado de confirmación, el tipo de garantía, las listas de espera o las cancelaciones. Según Kasavana y Cahill (2017), la estandarización de códigos y convenciones facilita la operación hotelera y mejora la precisión en la administración de reservas y ocupación.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto Códigos más utilizados en reservas hoteleras

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img34.svg", style="max-width: 90px").mx-auto
      .col-lg-11
        p.mb-0(data-aos="fade-right") En hotelería existen códigos de uso frecuente que permiten identificar el estado o condición de una reserva dentro del sistema. Estos códigos son ampliamente utilizados por hoteles, agencias de viajes y operadores turísticos.
    
    .row.justify-content-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 2.
          span Códigos básicos de reservas hoteleras
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Código
                th Significado
                th Aplicación
            tbody
              tr
                td INQ
                td <em>Inquiry</em> (consulta)
                td Solicitud inicial de información
              tr
                td TEN
                td Tentativa
                td Reserva provisional
              tr
                td DEF
                td Definitiva
                td Reserva confirmada
              tr
                td CC
                td Garantizada con tarjeta de crédito
                td Reserva con respaldo económico
              tr
                td COM
                td Garantizada por compañía
                td Reserva corporativa garantizada
              tr
                td PEN
                td Pendiente
                td Información incompleta o en proceso
              tr
                td CXL
                td Cancelada
                td Reserva anulada
              tr
                td NS
                td <em>No show</em>
                td Cliente no se presentó
              tr
                td WAIT
                td Lista de espera
                td Pendiente por disponibilidad
              tr
                td 4PM
                td Mantener hasta las 4:00 p. m
                td Hora límite de garantía
              tr
                td 6PM
                td Mantener hasta las 6:00 p. m
                td Hora límite extendida
              
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto Importancia de la codificación en hotelería


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img35.png", data-aos="zoom-in")
      .col-lg-9.col-md-12
        p.mb-3(data-aos="fade-right") El uso de códigos permite agilizar la operación del área de reservas y mejorar la interpretación de la información dentro del sistema hotelero. Gracias a estas convenciones, el personal puede identificar rápidamente el estado de una reserva y tomar decisiones relacionadas con disponibilidad, tarifas, confirmaciones o cancelaciones.
        p.mb-0 Por ejemplo, cuando el sistema registra una reserva con código <em>“NS”</em>, el personal identifica inmediatamente que el huésped no se presentó, permitiendo liberar la habitación o aplicar las políticas correspondientes. De igual forma, los códigos <em>“WAIT”</em> o <em>“TEN”</em> facilitan el control de solicitudes pendientes y reservas provisionales.
           
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto Convenciones y códigos complementarios en reservas

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.mb-4.mb-lg-4
        p.mb-0(data-aos="fade-right") En los procesos de reservas hoteleras es frecuente la interacción con agencias de viajes, aerolíneas, operadores turísticos y plataformas internacionales de distribución, lo que hace necesario el uso de convenciones y sistemas de codificación que faciliten la comunicación y reduzcan errores en el manejo de la información. En este contexto, el personal del área de reservas debe familiarizarse con algunos códigos complementarios utilizados en la industria turística, especialmente aquellos relacionados con la identificación de destinos, aeropuertos y confirmaciones de servicio.
      .col-lg-2.mb-3.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img36.png", data-aos="zoom-in")
      .col-lg-10.col-md-12
        .bg-fondo-6.px-lg-5.py-lg-4.px-4.py-3.br-15
          p.mb-0 Uno de los recursos más utilizados es el alfabeto aeronáutico o alfabeto fonético internacional, implementado por la Organización de Aviación Civil Internacional (OACI) para mejorar la comunicación verbal en situaciones donde pueden presentarse interferencias o dificultades auditivas. Este sistema asigna una palabra específica a cada letra del abecedario, permitiendo deletrear nombres, códigos o referencias de manera clara y precisa. En hotelería, su aplicación resulta útil cuando el personal de reservas debe confirmar telefónicamente códigos de reserva, nombres de huéspedes o referencias alfanuméricas, evitando errores en el registro de la información.
    
    .bg-full-width.bg-fondo-7.px-5.py-4.mb-5(data-aos="fade-right")
      .container
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-8.mb-4.mb-lg-0
            img(src='@/assets/curso/tema1/img39.png', alt='Alfabeto Aeronáutico').mx-auto
          .col-lg-9.col-md-12
            SlyderF(columnas="col-lg-12 col-xl-12 col-md-12 col-sm-12")
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center
                  .col-6.col-md-4.col-lg.mb-2
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold A - Alfa
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold B - Bravo
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold C - Charlie
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold D - Delta
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold E - Eco
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold F - <em>Foxtrot</em>
                  
                  .col-6.col-md-4.col-lg.mb-2
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E5E9D3; height: 50px;")
                      p.mb-0.text-bold G - Golf
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E5E9D3; height: 50px;")
                      p.mb-0.text-bold H - Hotel
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E5E9D3; height: 50px;")
                      p.mb-0.text-bold I - India
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E5E9D3; height: 50px;")
                      p.mb-0.text-bold J - Juliet
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E5E9D3; height: 50px;")
                      p.mb-0.text-bold K - Kilo
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E5E9D3; height: 50px;")
                      p.mb-0.text-bold L - Lima

                  .col-6.col-md-4.col-lg.mb-2
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #F5ECE4; height: 50px;")
                      p.mb-0.text-bold M - Mike
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #F5ECE4; height: 50px;")
                      p.mb-0.text-bold N - <em>November</em>
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #F5ECE4; height: 50px;")
                      p.mb-0.text-bold O - Oscar
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #F5ECE4; height: 50px;")
                      p.mb-0.text-bold P - Papa
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #F5ECE4; height: 50px;")
                      p.mb-0.text-bold Q - Quebec
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #F5ECE4; height: 50px;")
                      p.mb-0.text-bold R - Romeo

                  .col-6.col-md-4.col-lg.mb-2
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold S - Sierra
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold T - Tango
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold U - <em>Uniform</em>
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold V - Víctor
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold W - <em>Whiskey</em>
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #E8F2F8; height: 50px;")
                      p.mb-0.text-bold X - <em>X-Ray</em>

                  .col-6.col-md-4.col-lg.mb-2
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #F5ECE4; height: 50px;")
                      p.mb-0.text-bold Y - <em>Yankee</em>
                    .br-15.text-center.align-content-center.mb-2(style="background-color: #F5ECE4; height: 50px;")
                      p.mb-0.text-bold Z - <em>Zulu</em>

              .tarjeta.bg-white.p-4.h-100
                h4.mb-3 Ejemplo práctico
                p.mb-3 Código de reserva: <b>BCF-204</b>
                p.mb-3 Comunicación telefónica:
                  ul.mb-3
                    li 
                      i.lista-ul__vineta
                      | Bravo
                    li 
                      i.lista-ul__vineta
                      | Charlie
                    li 
                      i.lista-ul__vineta
                      | Foxtrot
                    li 
                      i.lista-ul__vineta
                      | Dos
                    li 
                      i.lista-ul__vineta
                      | Cero
                    li 
                      i.lista-ul__vineta
                      | Cuatro
                p.mb-0 Este procedimiento facilita que la información sea comprendida correctamente por el receptor, especialmente en comunicaciones internacionales o en entornos con alto flujo operativo.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto Códigos internacionales de identificación


    .row.align-items-center.justify-content-center.mb-5
      .col-lg-9.col-md-12.order-2.order-lg-1
        p.mb-3 Dentro de la actividad turística también es común el uso de códigos internacionales para identificar aeropuertos y destinos turísticos. Los más conocidos son los códigos <em>IATA</em>, establecidos por la <em>International Air Transport Association</em>, los cuales están conformados por tres letras que identifican ciudades o aeropuertos específicos. Estos códigos aparecen frecuentemente en tiquetes aéreos, itinerarios de viaje y sistemas globales de distribución (<em>GDS</em>), por lo que el personal hotelero debe reconocerlos para interpretar correctamente información relacionada con reservas y desplazamientos de huéspedes.
        .row.align-items-center.mb-0
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/img40.svg", data-aos="zoom-in")
          .col-lg
            p.mb-0 Algunos ejemplos que se pueden observar en los aeropuertos son:
            ul.list-a.ms-0.ps-3
              li
                i.lista-ul__vineta
                | Aeropuerto internacional El Dorado (BOG)
              li
                i.lista-ul__vineta
                | Aeropuerto Internacional Madrid-Barajas (MAD)
              li
                i.lista-ul__vineta
                | Aeropuerto Internacional John F. Kennedy (JFK)
            

      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img41.png", data-aos="zoom-in")

    .row.justify-content-center.align-items-center
      .col-lg-12.col-md-12
        .bg-fondo-8.px-lg-5.py-lg-4.px-4.py-3.br-15
          p.mb-0 El uso de convenciones y códigos complementarios en reservas fortalece la precisión y eficiencia de la comunicación dentro de la industria hotelera y turística. Aunque estos sistemas provienen principalmente del sector aeronáutico, su aplicación práctica en el área de reservas permite mejorar el manejo de información y facilitar la interacción con clientes, agencias y plataformas internacionales. Por ello, el conocimiento básico de estas herramientas constituye un apoyo importante para el desarrollo de competencias técnicas en la gestión de reservas hoteleras.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
