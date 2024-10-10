<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-5
        p(data-aos="fade-right").mb-5 El servicio de #[em catering] desempeña un papel crucial en la organización de eventos, ya que el éxito de estos depende en gran medida de la creatividad y la eficiencia con las que se despliega el servicio gastronómico a lo largo de la jornada. Con el tiempo, el #[em catering] ha dejado de ser simplemente un servicio de comida y bebida, incorporando otros elementos como la decoración, ambientación, contratación de personal e incluso la animación.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7

            .tarjeta.bg-color-1.p-4.mb-4(data-aos="fade-left")
              p En este componente, abordaremos los diferentes aspectos que se deben considerar al planificar eventos, adaptándonos al tipo de servicio de #[em catering] que el cliente requiera, y asegurando siempre que se cumplan sus expectativas en cuanto al menú, servicio de bebidas, menaje, decoración, costo e intereses particulares. 

            .row.justify-content-center.align-items-center.mb-5
              .col-lg-auto
                img(src="@/assets/curso/bullets/icon-olas.svg", alt="", data-aos="fade-up").d-none.d-lg-block
              .col-lg
                p(data-aos="fade-up").mb-0 A lo largo del desarrollo del contenido, los temas se explicarán de manera dinámica mediante actividades interactivas, fomentando el análisis y la comprensión de los conceptos. Al finalizar cada lección, se llevará a cabo una actividad de aprendizaje como preparación para la evaluación final. 

          .col-lg-5
            img.img-fluid(src="@/assets/curso/intro/1.png", alt="Introducción", data-aos="fade-up")


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
