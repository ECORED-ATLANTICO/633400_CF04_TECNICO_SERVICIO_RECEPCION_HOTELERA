<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        p El componente formativo Procedimientos de reservas es fundamental en la operación de los establecimientos de alojamiento, ya que una adecuada gestión de las reservas influye en la ocupación, la comercialización de habitaciones y la satisfacción del cliente. En este componente se estudian los diferentes canales y tipos de reservas, así como herramientas operativas como <em>rooming list</em>, <em>waiting list</em>, <em>forecasting</em>, <em>overbooking</em> y <em>no show</em>, que permiten controlar la ocupación y apoyar la toma de decisiones en el área de reservas.
    
    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-1
        .col-lg-7.p-4.order-2.order-lg-1(data-aos="fade-right")
          p.mb-0 Asimismo, se fortalecen competencias relacionadas con la aplicación de procedimientos técnicos para la confirmación, modificación, cancelación y anulación de reservas, de acuerdo con las políticas del establecimiento. De esta manera, se promueve el uso adecuado de herramientas tecnológicas y procedimientos operativos orientados a optimizar los procesos de reservas y mejorar la atención al cliente en los servicios de alojamiento.
        .col-lg-5.p-0.order-1.order-lg-2
          img(src="@/assets/curso/intro/img01.png")


      

</template>

<script>
export default {
  name: 'Introduccion',
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
