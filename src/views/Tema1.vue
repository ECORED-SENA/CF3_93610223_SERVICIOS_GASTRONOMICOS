<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Planificación del <i>catering</i>

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            p(data-aos="fade-right")  Una empresa especializada en catering debe transformar un evento común en algo memorable, acorde con las expectativas del cliente. #[strong El evento debe reflejar la personalidad del cliente o la identidad corporativa de la empresa]. Es fundamental responder con rapidez, ajustarse al presupuesto, y presentar propuestas creativas que logren que el evento se distinga por su originalidad. Además, es crucial que todo se ejecute sin contratiempos, dejando una impresión duradera, de manera que días después se siga comentando sobre el evento. 

            p(data-aos="fade-right") El servicio de catering debe ir más allá de proporcionar comida y bebidas; debe incluir elementos como la decoración, ambientación, el menaje, la contratación de personal e incluso la animación. 

          .col-lg-5
            img.img-fluid(src="@/assets/curso/tema1/1.png", alt="", data-aos="fade-up") 

        .row.justify-content-center.align-items-center.mb-4
          .col-lg-10
            .bg-color-2.p-4.px-md-5.mb-4(data-aos="fade-left").brounded
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/2.png", alt="", data-aos="fade-up").mx-auto.mb-lg-0.mb-4
                .col-lg
                  p(data-aos="fade-up").mb-0 En un servicio gastronómico, el menú se adapta completamente al gusto del cliente. Cada evento será único, diferente y, sobre todo, personalizado. El objetivo es cumplir con lo que el cliente desea, brindando a sus invitados una experiencia a la altura de sus expectativas, mientras desarrollamos un plan gastronómico hecho a la medida.


        p(data-aos="fade-right") Los detalles, las texturas, las sensaciones y, por supuesto, los sabores, son los que convierten cualquier evento en una experiencia única e irrepetible. 


        Separador

    .titulo-segundo.color-secundario(data-aos='fade-right')
      h2 1.1 Organización administrativa 

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para la correcta realización de un catering, se debe presentar una organización administrativa eficaz, cuyo funcionamiento permita enfrentar todo tipo de servicios o banquetes de manera impecable, garantizando que el cliente reciba todo según lo pactado.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-5
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", alt="", data-aos="fade-up")
            .col-lg
              .p-3
                p(data-aos="fade-up").mb-0 La organización administrativa de un servicio de catering se apoya en un sistema de archivos e impresos que requieren especial atención, ya que estos facilitan el control preciso de cada aspecto del evento. 


    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4
        .tarjeta--boton.bg-color-4.p-4.text-center.h-100(data-aos="flip-up")
          img(src='@/assets/curso/tema1/5.svg', alt='', style="max-width: 90px").mx-auto.mb-4
          .tarjeta--boton__title.bg-color-10.d-inline-block.p-2.mb-3
            h6.text-center.mb-0 #[strong Reservas]
          p.text-center Se utiliza un formulario para registrar el evento, fecha, lugar, hora, cantidad de personas, y datos del cliente. La reserva se anota en el libro de control, ya sea tentativa o definitiva, para llevar un control de las fechas ocupadas. 

      .col-lg-4.mb-4
        .tarjeta--boton.bg-color-4.p-4.text-center.h-100(data-aos="flip-up")
          img(src='@/assets/curso/tema1/6.svg', alt='', style="max-width: 90px").mx-auto.mb-4
          .tarjeta--boton__title.bg-color-10.d-inline-block.px-2.py-1.mb-3
            h6.text-center.mb-0 #[strong Dirección del viento]
          p.text-center La planificación de los servicios confirmados debe realizarse al menos con dos días de antelación para que todos los departamentos involucrados puedan preparar sus actividades con tiempo. 

      .col-lg-4.mb-4
        .tarjeta--boton.bg-color-4.p-4.text-center.h-100(data-aos="flip-up")
          img(src='@/assets/curso/tema1/7.svg', alt='', style="max-width: 90px").mx-auto.mb-4
          .tarjeta--boton__title.bg-color-10.d-inline-block.px-2.py-1.mb-3
            h6.text-center.mb-0 #[strong Selección de árboles]
          p.text-center Al finalizar el servicio, se emite una factura que incluye el número de invitados, precio por cubierto y cualquier concepto adicional. El jefe de banquetes revisa la factura antes de presentarla al cliente, quien debe firmarla para aprobarla. 

    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Carta de evaluación 
    
    p Al día siguiente del evento, se envía una carta de evaluación al cliente para obtener retroalimentación sobre el servicio prestado, con el fin de mejorar futuros eventos. Esta carta tiene como propósito conocer la satisfacción del cliente respecto al servicio prestado, ya que su opinión servirá como una crítica constructiva para mejorar en futuros eventos. 


        //Separador
    //Separador
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
