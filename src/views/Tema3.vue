<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procedimientos técnicos


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-21.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los procedimientos técnicos de reservas corresponden al conjunto de acciones operativas y administrativas que permiten gestionar de manera organizada las solicitudes de alojamiento dentro de un establecimiento hotelero. Estos procedimientos garantizan el correcto registro, actualización y control de la información relacionada con las reservas, contribuyendo a mantener la disponibilidad real de habitaciones y a brindar una atención eficiente al cliente. Según Kasavana y Cahill (2017), la estandarización de procesos en el área de reservas facilita la coordinación operativa y reduce errores asociados al manejo manual o desactualizado de la información.

    .row.align-items-center.mb-5
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/tema3/img02.svg", data-aos="zoom-in").mx-auto
      .col-lg
        p.mb-0(data-aos="fade-right") Dentro de estos procedimientos se encuentran actividades fundamentales como la confirmación, modificación, cancelación y anulación de reservas, las cuales hacen parte del ciclo operativo de la gestión hotelera. Cada uno de estos procesos requiere el cumplimiento de políticas, tiempos de respuesta y protocolos específicos que permiten garantizar claridad en la comunicación con el huésped y un adecuado control de la ocupación.

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Confirmación


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-12.mb-4.mb-lg-0
        p.mb-0(data-aos="fade-right") La confirmación de una reserva es el procedimiento mediante el cual el hotel informa al cliente que la solicitud de alojamiento ha sido aceptada y registrada correctamente dentro del sistema. Este proceso garantiza la disponibilidad de la habitación de acuerdo con las fechas, tarifas y condiciones previamente acordadas entre el establecimiento y el huésped.
      .col-lg-5.col-md-6.mb-4.mb-lg-0
        .bg-fondo-12.px-lg-5.py-lg-4.px-4.py-3.br-15(data-aos="fade-down")
          p.mb-2 Durante la confirmación se verifican aspectos como:
          ul.lista-ul.mb-0  
            li
              i.lista-ul__vineta
              | Tipo de habitación.
            li
              i.lista-ul__vineta
              | Fechas de ingreso y salida.
            li
              i.lista-ul__vineta
              | Número de huéspedes.
            li
              i.lista-ul__vineta
              | Tarifas aplicadas.
            li
              i.lista-ul__vineta
              | Garantías de reserva.
            li
              i.lista-ul__vineta
              | Políticas de cancelación.
      .col-lg-4.col-md-6
        .row.align-items-center.justify-content-center
          .col-lg-auto.col-12.mb-4.mb-lg-3
            img(src="@/assets/curso/tema3/img04.png", data-aos="zoom-in").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-left") Una vez validada la información, el hotel genera un número o código de confirmación que sirve como soporte y referencia para el cliente y para el establecimiento.


    
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.png")
          h3.titulo-con-imagen__texto Etapas del proceso de confirmación


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-6.col-lg-3.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/tema3/img05.png")
      .col-lg-9.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-23")
          div(titulo="Recepción de solicitud")
            p.ms-5 El proceso inicia cuando el cliente realiza la solicitud de reserva a través de un canal de atención como teléfono, correo electrónico, página web o plataforma digital. En esta etapa se recopila información básica como fechas de alojamiento, número de huéspedes y tipo de habitación requerida.

          div(titulo="Verificación de disponibilidad")
            p.ms-5 El personal de reservas consulta en el sistema PMS la disponibilidad de habitaciones y las tarifas aplicables para las fechas solicitadas. Además, se validan condiciones especiales, promociones, políticas y posibles restricciones de ocupación.

          div(titulo="Registro de la reserva")
            p.ms-5 Una vez validada la disponibilidad, se procede a ingresar la información del huésped en el sistema de gestión hotelera. En esta etapa se registran datos personales, forma de pago, requerimientos especiales y condiciones de la reserva.

          div(titulo="Confirmación al cliente")
            p.ms-5 El hotel comunica al huésped que la reserva ha sido aceptada y registrada correctamente. La confirmación puede realizarse por correo electrónico, mensaje o llamada telefónica, incluyendo detalles de la estadía y políticas del servicio.

          div(titulo="Generación del código de reserva")
            p.ms-5 El sistema asigna automáticamente un código o número de confirmación que identifica la reserva dentro del PMS. Este código sirve como soporte para consultas, modificaciones o seguimiento posterior de la reservación.


    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Modificación



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-md-12.mb-4.mb-lg-0
        .row.mb-0.justify-content-center.align-items-center
          .col-lg-8.col-md-12.order-2.order-lg-1 
            p.mb-3(data-aos="fade-right") La modificación de una reserva ocurre cuando el cliente solicita cambios sobre una reserva previamente confirmada. Estos cambios pueden estar relacionados con fechas, tipo de habitación, número de huéspedes, servicios adicionales o tarifas.
            p.mb-0 Antes de realizar cualquier modificación, el personal del área de reservas debe verificar nuevamente la disponibilidad y validar las condiciones tarifarias o políticas aplicables. Toda modificación debe quedar registrada en el sistema para evitar inconsistencias operativas y garantizar una correcta actualización de la información.
          .col-lg-4.col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/img06.png", data-aos="zoom-in")
      
      .col-lg-5.col-md-12.mb-4.mb-lg-0
        .bg-fondo-12.px-lg-5.py-lg-4.px-4.py-3.br-15(data-aos="fade-down")
          p.mb-3 Las modificaciones más frecuentes incluyen:
          ul.lista-ul.mb-0  
            li
              i.lista-ul__vineta
              | Cambio de fechas.
            li
              i.lista-ul__vineta
              | Cambio de categoría de habitación.
            li
              i.lista-ul__vineta
              | Ajuste en cantidad de huéspedes.
            li
              i.lista-ul__vineta
              | Inclusión de servicios complementarios.
            li
              i.lista-ul__vineta
              | Cambios en forma de pago.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Figura 4.
          span Modificación de reservas en <em>software</em> hotelero PMS
        img(data-aos="fade-down", src="@/assets/curso/tema3/img10.png", alt="La figura 4 detalla la interfaz del sistema PMS para la modificación de reservas hoteleras. El administrador visualiza la información del huésped y actualiza datos de la reserva, como fechas de estadía, número de noches y tipo de habitación, mientras el sistema calcula automáticamente los cambios en la tarifa y el valor total de la reserva.").mx-auto
        figcaption Nota. SENA, (2026).
    
    
    .bg-full-width.bg-fondo-3.px-5.py-4.mb-3
      .container(data-aos="fade-right")
        .tarjeta.tarjeta--blanca.row.justify-content-center.align-items-center.mb-0.p-4
          .col-lg-9.order-2.order-lg-1
            h4.mb-3 Caso práctico
            p.mb-0 Un huésped tiene una reserva confirmada para dos noches en habitación estándar. Dos días antes de su llegada solicita ampliar la estadía y cambiar a habitación superior. El área de reservas verifica disponibilidad, ajusta la tarifa y actualiza la información en el sistema PMS.

          .col-lg-3.col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
            img(src="@/assets/curso/tema3/img08.png", alt="").img-fluid


    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Cancelación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-md-12.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-3 La cancelación corresponde al procedimiento mediante el cual el cliente o el establecimiento suspenden una reserva antes de la fecha de llegada. Este proceso debe realizarse de acuerdo con las políticas definidas por el hotel, especialmente en lo relacionado con tiempos límite, devoluciones y penalizaciones.
        p.mb-0 Cuando una reserva es cancelada, el sistema libera automáticamente la habitación para su nueva comercialización, actualizando la disponibilidad del establecimiento.

      .col-lg-5.col-md-12.mb-4.mb-lg-0
        .bg-fondo-13.px-lg-5.py-lg-4.px-4.py-3.br-15(data-aos="fade-down")
          p.mb-3 Las cancelaciones pueden clasificarse en:
          ul.lista-ul.mb-0  
            li
              i.lista-ul__vineta
              | Cancelación sin penalidad.
            li
              i.lista-ul__vineta
              | Cancelación con cargo o penalización.
            li
              i.lista-ul__vineta
              | Cancelación por causas operativas.
            li
              i.lista-ul__vineta
              | Cancelación por fuerza mayor.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img12.svg", data-aos="zoom-in", alt="").mx-auto
      .col-lg(data-aos="fade-right")
        p.mb-3 Es importante que toda cancelación quede registrada y documentada dentro del sistema de reservas. 

        p.mb-0 Adicionalmente es importante que en ese registro queden consignados datos como el código de reserva, la fecha de cancelación, el motivo de la cancelación, si esto generó penalidad para el cliente y el cobro aplicable y quién fue el responsable de dicha cancelación, bien sea el cliente o el establecimiento. 

    
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Anulación

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-1(data-aos="fade-right")
        .col-lg-7.p-4.order-2.order-lg-1
          p.mb-3 La anulación de una reserva consiste en la eliminación o invalidación de una reserva que fue creada por error, duplicidad o inconsistencia en la información registrada. A diferencia de la cancelación, la anulación generalmente ocurre antes de que la reserva sea confirmada formalmente o cuando se detectan errores administrativos dentro del sistema.
          p.mb-0 Este procedimiento requiere autorización y control por parte del personal encargado, ya que afecta directamente la disponibilidad y trazabilidad de la información en el PMS.

        .col-lg-5.p-0.order-1.order-lg-2
          img(src="@/assets/curso/tema3/img13.png", alt="")


    .row.justify-content-center.align-items-center.mb-5

      .col-lg-5.col-md-12.mb-4.mb-lg-0
        .bg-fondo-14.px-lg-5.py-lg-4.px-4.py-3.br-15(data-aos="fade-down")
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-flex.col-12.mb-3
              img(src="@/assets/curso/tema3/img14.svg", alt="").mx-auto
            .col-lg-12
              p.mb-3 Las anulaciones más comunes ocurren por:

              ul.lista-ul.mb-0  
                li
                  i.lista-ul__vineta
                  | Duplicidad de reservas.
                li
                  i.lista-ul__vineta
                  | Error en digitación.
                li
                  i.lista-ul__vineta
                  | Registro incorrecto de fechas.
                li
                  i.lista-ul__vineta
                  | Datos incompletos.
                li
                  i.lista-ul__vineta
                  | Fallas del sistema.

      

      .col-lg-7.col-md-12.mb-4.mb-lg-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 5.
          span Diferencia entre cancelación y anulación de una reserva
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th.tabla3 Cancelación
                th.tabla3 Anulación
            tbody
              tr
                td.tabla3 La reserva existía y era válida
                td.tabla3 La reserva presenta errores o inconsistencias
              tr
                td.tabla3 Puede generar penalidad
                td.tabla3 Generalmente no genera cobros
              tr
                td.tabla3 La solicita el cliente o el hotel
                td.tabla3 Normalmente es un ajuste administrativo
              tr
                td.tabla3 Afecta políticas de reserva
                td.tabla3 Corrige errores del sistema

    .row.mb-0.justify-content-center.align-items-center
      .col-lg-2.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema3/img16.png", data-aos="zoom-in")
      .col-lg-10
        p.mb-0(data-aos="fade-right") Los procedimientos técnicos de reservas permiten garantizar el control y actualización permanente de la información relacionada con la ocupación hotelera y la atención al cliente. Procesos como confirmación, modificación, cancelación y anulación facilitan la organización operativa y contribuyen a mantener la disponibilidad real del establecimiento, optimizando la prestación del servicio. En este sentido, el dominio de estos procedimientos fortalece las competencias técnicas del personal del área de reservas y favorece una gestión eficiente, organizada y orientada a la satisfacción del huésped.


</template>

<script>
export default {
  name: 'Tema3',
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
