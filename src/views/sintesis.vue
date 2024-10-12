<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta la planificación integral del servicio de catering. Se divide en cinco secciones: planeación del catering, menaje, servicio de bebidas, costos del menú y coordinación logística. La sección de planeación del catering aborda la organización administrativa y tipos de servicio, como cocktail, buffet y banquete. La parte de menaje incluye el material necesario y la distribución de mesas. El servicio de bebidas contempla reglas del barman y la elección de vinos. Los costos del menú incluyen materia prima, transporte y mano de obra. Finalmente, la coordinación logística aborda la personalización del evento y las expectativas del cliente.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
