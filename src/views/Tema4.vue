<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Políticas y tratamientos de reservas

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-1(data-aos="fade-right")
        .col-lg-7.p-4.order-2.order-lg-2
          p.mb-0 Las políticas y el tratamiento de reservas constituyen un conjunto de lineamientos y procedimientos que orientan la gestión adecuada de las solicitudes de alojamiento dentro de los establecimientos hoteleros. Su aplicación permite garantizar organización, control y claridad en la prestación del servicio, tanto para el hotel como para el huésped. A través de estas políticas se establecen condiciones relacionadas con confirmaciones, cancelaciones, garantías, tiempos de respuesta y manejo de información, contribuyendo a optimizar la operación y fortalecer la experiencia del cliente.
        .col-lg-5.p-0.order-1.order-lg-1
          img(src="@/assets/curso/tema4/img01.png", alt="")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto
        img.d-none.d-lg-flex(src="@/assets/curso/tema4/img02.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 En este contexto, el área de reservas debe aplicar procedimientos técnicos y administrativos que permitan brindar información clara y precisa sobre las condiciones del servicio, facilitando la toma de decisiones y reduciendo posibles inconsistencias operativas. Según Kotler, Bowen y Makens (2017), la transparencia en la comunicación de políticas y condiciones influye directamente en la percepción de calidad y confianza del cliente hacia el establecimiento hotelero.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Tratamiento de la reserva


    .row.justify-content-center.align-items-center.mb-5
      .bg-fondo-15.px-lg-5.py-lg-4.px-4.py-3.br-15(data-aos="fade-down")
        .row.align-items-center.justify-content-center
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema4/img04.svg")
          .col-lg-11
            p.mb-0 El tratamiento de la reserva corresponde al conjunto de acciones y procedimientos realizados desde el momento en que el cliente solicita alojamiento hasta la finalización o cierre de la reservación. Este proceso implica registrar correctamente la información del huésped, verificar disponibilidad, aplicar tarifas y garantizar que las condiciones del servicio sean comunicadas de manera clara y oportuna.
            
    .bg-full-width.bg-fondo-7.px-5.py-4.mb-5
      .container
        .tarjeta.row.justify-content-center.align-items-center.mb-0.p-2
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-8.mb-4.mb-lg-0.p-0
              img(src='@/assets/curso/tema4/img05.png', alt='')
            .col-lg-9.col-md-12
              p.mb-3 Durante el tratamiento de la reserva, el personal del área debe:
              SlyderF(columnas="col-lg-4 col-xl-4 col-md-6 col-sm-12")
                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img06.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Validar disponibilidad de habitaciones.
                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img06.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Registrar correctamente los datos del huésped.
                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img06.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Confirmar tarifas y condiciones.
                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img06.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Informar políticas de cancelación y garantía.
                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img06.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Actualizar cambios o modificaciones.
                .tarjeta.bg-white.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img06.svg' alt='', style="width: 100px;").mx-auto
                  p.text-center Mantener comunicación permanente con el cliente.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.bg-color-23.p-4
          p.mb-0 El adecuado tratamiento de las reservas contribuye a mejorar la organización operativa y reduce errores relacionados con disponibilidad, tarifas o asignación de habitaciones.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 6.
          span Etapas básicas del tratamiento de una reserva
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Etapa
                th Procedimiento
            tbody
              tr
                td Solicitud
                td El cliente consulta disponibilidad
              tr
                td Registro
                td Se ingresan los datos en el sistema
              tr
                td Confirmación
                td El hotel valida y confirma la reserva
              tr
                td Seguimiento
                td Se gestionan cambios o requerimientos
              tr
                td Cierre
                td Finaliza la reserva con <em>check-out</em> o cancelación

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Condiciones
    

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img07.png", data-aos="zoom-in")
      .col-lg-9.col-md-12

        p.mb-3 Las condiciones de reserva corresponden a los términos específicos establecidos por el hotel para la prestación del servicio de alojamiento. Estas condiciones deben ser informadas al cliente antes de confirmar la reserva y pueden variar según el tipo de tarifa, canal de venta o categoría del servicio contratado.
        p.mb-4 Entre las condiciones más comunes se encuentran:

        .row.justify-content-center
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img08.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Horarios de <em>check-in</em> y <em>check-out</em>.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img08.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Número máximo de huéspedes por habitación.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img08.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Restricciones para modificaciones.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img08.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Políticas de menores de edad.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img08.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Servicios incluidos y no incluidos.
          .col-xl-4.col-lg-4.col-md-6.col-sm-12.mb-3.mb-lg-3
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/img08.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Condiciones de pago.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .cajon.bg-color-74.p-4
          p.mb-0 La correcta comunicación de estas condiciones evita inconvenientes durante la estadía y fortalece la transparencia en la relación comercial entre el huésped y el establecimiento.


    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Políticas

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-12.mb-4.mb-lg-0
        p.mb-3(data-aos="fade-right") Las políticas hoteleras son normas y lineamientos internos establecidos por el hotel para regular la prestación de los servicios y garantizar una adecuada operación. Estas políticas orientan tanto al personal como a los huéspedes sobre los procedimientos y condiciones aplicables durante el proceso de reserva y alojamiento.
        p.mb-0 Las políticas más utilizadas en reservas hoteleras son:

      .col-lg-5.col-md-6.mb-4.mb-lg-0
        .bg-fondo-12.px-lg-5.py-lg-4.px-4.py-3.br-15(data-aos="fade-down")
          .row.align-items-center.justify-content-center
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema4/img09.svg", data-aos="zoom-in").mx-auto
            .col-lg
              ul.lista-ul.mb-0  
                li
                  i.lista-ul__vineta
                  | Política de cancelación.
                li
                  i.lista-ul__vineta
                  | Política de garantía.
                li
                  i.lista-ul__vineta
                  | Política de&nbsp; <em>no show</em>.
                li
                  i.lista-ul__vineta
                  | Política de mascotas.
                li
                  i.lista-ul__vineta
                  | Política de modificaciones.
                li
                  i.lista-ul__vineta
                  | Política de pagos y reembolsos.

      .col-lg-3.col-md-6
        .row.align-items-center
          .col-lg-auto.col-12.mb-3.mb-lg-3.d-none.d-lg-flex.d-md-flex
            img(src="@/assets/curso/tema4/img10.svg", style="max-width: 100px;" data-aos="zoom-in")
          .col-lg-12
            p.mb-0(data-aos="fade-left") La implementación de políticas claras y accesibles favorece la organización operativa y contribuye a reducir conflictos o reclamaciones por parte de los clientes.

    .bg-full-width.bg-fondo-3.px-5.py-4.mb-3
      .container(data-aos="fade-right")
        .tarjeta.tarjeta--blanca.row.justify-content-center.align-items-center.mb-0.p-4
          .col-lg-9.order-2.order-lg-1
            h4.mb-3 Caso práctico

            p.mb-3 Un huésped realiza una reserva con tarifa promocional no reembolsable y posteriormente solicita la devolución del dinero por cancelación. El hotel informa que, según las políticas aceptadas durante el proceso de reserva, dicha tarifa no admite reembolso.
            p.mb-0 Este caso evidencia la importancia de comunicar adecuadamente las políticas antes de confirmar la reserva.

          .col-lg-3.col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
            img(src="@/assets/curso/tema4/img11.png", alt="").img-fluid


    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Garantía de reserva

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema4/img12.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") La garantía de reserva corresponde al mecanismo utilizado por el hotel para asegurar la disponibilidad de la habitación solicitada y reducir riesgos asociados a cancelaciones o no presentación del huésped. Generalmente, esta garantía se realiza mediante tarjeta de crédito, depósito anticipado, transferencia bancaria o convenios empresariales.
        p.mb-0 Cuando una reserva se encuentra garantizada, el hotel mantiene la habitación disponible para el cliente incluso fuera de los horarios habituales de llegada. Además, las garantías permiten aplicar políticas de cobro en casos de <em>no show</em> o cancelaciones fuera del tiempo permitido.


    .row.justify-content-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 7.
          span Tipos e importancia de la garantía de reserva
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Tipo de garantía
                th Característica
                th Importancia en la gestión de reservas
            tbody
              tr
                td Tarjeta de crédito
                td Respaldo electrónico de pago asociado a la reserva.
                td Permite asegurar la habitación y aplicar cobros en caso de <em>no show</em> o cancelación tardía.
              tr
                td Depósito anticipado
                td Pago parcial o total realizado antes de la llegada del huésped
                td Reduce riesgos financieros y garantiza compromiso del cliente con la reserva.
              tr
                td Transferencia bancaria
                td Garantía mediante consignación o pago electrónico
                td Facilita la validación anticipada de pagos y mejora el control administrativo.
              tr
                td Convenio empresarial
                td Respaldo realizado por empresas, agencias o entidades aliadas
                td Favorece acuerdos comerciales y asegura reservas corporativas o grupales.

</template>

<script>
export default {
  name: 'Tema4',
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
