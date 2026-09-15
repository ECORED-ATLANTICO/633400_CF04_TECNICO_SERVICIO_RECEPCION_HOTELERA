<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-27.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente formativo Procedimientos de reservas constituye un eje fundamental en la formación del aprendiz del programa de operaciones de servicios de alojamiento, debido a que la gestión adecuada de las reservas influye directamente en la ocupación hotelera, la comercialización de habitaciones y la satisfacción del cliente. A través de este componente, el aprendiz fortalecerá conocimientos relacionados con los canales y tipos de reservas, los sistemas de codificación y las herramientas de control utilizadas en la administración eficiente de la información dentro del área de reservas.
    
    
    
    .row.align-items-center.justify-content-center.mb-3(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/intro/img01.svg").mx-auto
      .col-lg
        .bg-fondo-6.px-lg-5.py-lg-4.px-4.py-3.br-15
          .col-12.col-md-12.p-lg-3.p-0
            p.mb-0 Asimismo, se favorecerá la apropiación de competencias técnicas para la aplicación de procedimientos de confirmación, modificación, cancelación y anulación de reservas, de acuerdo con las políticas y condiciones establecidas por el establecimiento de alojamiento. De igual manera, el aprendiz comprenderá la importancia de herramientas operativas como <em>rooming list</em>, <em>waiting list</em>, <em>forecasting</em>, <em>overbooking</em> y <em>no show</em>, fortaleciendo habilidades para la organización, control de la ocupación y prestación eficiente del servicio en el contexto técnico profesional del sector hotelero.


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Procedimientos de reservas constituye un eje fundamental en la formación del aprendiz del programa de operaciones de servicios de alojamiento, debido a que la gestión adecuada de las reservas influye directamente en la ocupación hotelera, la comercialización de habitaciones y la satisfacción del cliente. A través de este componente, el aprendiz fortalecerá conocimientos relacionados con los canales y tipos de reservas, los sistemas de codificación y las herramientas de control utilizadas en la administración eficiente de la información dentro del área de reservas. Asimismo, se favorecerá la apropiación de competencias técnicas para la aplicación de procedimientos de confirmación, modificación, cancelación y anulación de reservas, de acuerdo con las políticas y condiciones establecidas por el establecimiento de alojamiento. De igual manera, el aprendiz comprenderá la importancia de herramientas operativas como rooming list, waiting list, forecasting, overbooking y no show, fortaleciendo habilidades para la organización, control de la ocupación y prestación eficiente del servicio en el contexto técnico profesional del sector hotelero.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
