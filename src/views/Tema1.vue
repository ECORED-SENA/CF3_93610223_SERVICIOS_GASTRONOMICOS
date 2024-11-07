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
        .row.justify-content-center.align-items-center.mb-4.mb-lg-5
          .col-lg-7.order-2.order-lg-1
            p(data-aos="fade-right")  Una empresa especializada en #[em catering] debe transformar un evento común en algo memorable, acorde con las expectativas del cliente. #[strong El evento debe reflejar la personalidad del cliente o la identidad corporativa de la empresa]. Es fundamental responder con rapidez, ajustarse al presupuesto, y presentar propuestas creativas que logren que el evento se distinga por su originalidad. Además, es crucial que todo se ejecute sin contratiempos, dejando una impresión duradera, de manera que días después se siga comentando sobre el evento. 

            p(data-aos="fade-right") El servicio de #[em catering] debe ir más allá de proporcionar comida y bebidas; debe incluir elementos como la decoración, ambientación, el menaje, la contratación de personal e incluso la animación. 

          .col-lg-5.order-1.order-lg-2
            img.img-fluid(src="@/assets/curso/tema1/1.png", alt="", data-aos="fade-up").mb-4.mb-lg-0

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

    .titulo-segundo.color-primario(data-aos='fade-right')#t_1_1
      h2 1.1 Organización administrativa 

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para la correcta realización de un #[em catering], se debe presentar una organización administrativa eficaz, cuyo funcionamiento permita enfrentar todo tipo de servicios o banquetes de manera impecable, garantizando que el cliente reciba todo según lo pactado.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-5
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", alt="", data-aos="fade-up").d-none.d-lg-block
            .col-lg
              .p-3
                p(data-aos="fade-up").mb-0 La organización administrativa de un servicio de #[em catering] se apoya en un sistema de archivos e impresos que requieren especial atención, ya que estos facilitan el control preciso de cada aspecto del evento. 


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
            h6.text-center.mb-0 #[strong Orden de servicio]
          p.text-center La planificación de los servicios confirmados debe realizarse al menos con dos días de antelación para que todos los departamentos involucrados puedan preparar sus actividades con tiempo.

      .col-lg-4.mb-4
        .tarjeta--boton.bg-color-4.p-4.text-center.h-100(data-aos="flip-up")
          img(src='@/assets/curso/tema1/7.svg', alt='', style="max-width: 90px").mx-auto.mb-4
          .tarjeta--boton__title.bg-color-10.d-inline-block.px-2.py-1.mb-3
            h6.text-center.mb-0 #[strong Facturación]
          p.text-center Al finalizar el servicio, se emite una factura que incluye el número de invitados, precio por cubierto y cualquier concepto adicional. El jefe de banquetes revisa la factura antes de presentarla al cliente, quien debe firmarla para aprobarla.

    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Carta de evaluación 
    
    p(data-aos="fade-up").mb-5 Al día siguiente del evento, se envía una carta de evaluación al cliente para obtener retroalimentación sobre el servicio prestado, con el fin de mejorar futuros eventos. Esta carta tiene como propósito conocer la satisfacción del cliente respecto al servicio prestado, ya que su opinión servirá como una crítica constructiva para mejorar en futuros eventos. 

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4
            img.img-fluid(src="@/assets/curso/tema1/8.png", alt="", data-aos="fade-up")
          .col-lg-8
            .tarjeta.bg-color-6.px-md-5.p-4.mb-4(data-aos="fade-left")
              p #[strong Los aspectos mínimos que deben incluirse en la carta son los siguientes: ]
              ul.custom-list.mb-0
                li.mb-2 Nombre del cliente u organización.
                li.mb-2 Tipo de banquete.
                li.mb-2 Número de personas, contratadas y reales en el evento.
                li.mb-2 Fecha de realización.

            .tarjeta.bg-color-6.px-md-5.p-4.mb-4(data-aos="fade-left")
              p #[strong Además, se solicita la evaluación del cliente en relación a los siguientes puntos:]
              ul.custom-list.mb-0
                li.mb-2 Funcionamiento de servicios técnicos (luces, sonido, aire acondicionado).
                li.mb-2 Presentación de la comida.
                li.mb-2 Prontitud del servicio.
                li.mb-2 Cortesía e higiene del personal.
                li.mb-2 Exactitud en el cumplimiento de los horarios establecidos para el servicio.

    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Política de reservaciones 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Las reservaciones generalmente se realizan a través de llamadas telefónicas o por escrito (WhatsApp, correos). Posteriormente, se registran en el #[strong libro de reservaciones de banquetes], bloqueando tentativamente una fecha y el salón. Para que este bloqueo sea efectivo, se requiere que el cliente haya solicitado verbalmente y por escrito, con anticipación, un anticipo del 50 % del costo total del evento. La reservación se considerará confirmada únicamente cuando el cliente haya realizado dicho anticipo. 

        p(data-aos="fade-right") En caso de cancelación con menos de 48 horas de antelación, se retendrá el 50 % del anticipo. Por este motivo, es crucial llevar un sistema de archivos que permita acceder rápidamente a la información de cualquier servicio ya realizado y los datos relevantes del mismo. 
      
      .col-lg-4
        img.img-fluid(src="@/assets/curso/tema1/9.png", alt="", data-aos="fade-up")


    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Departamentos 

    p(data-aos="fade-right") La comunicación fluida entre departamentos es esencial. Las órdenes de servicios, junto con sus apéndices y observaciones, deben ser distribuidas a todos los departamentos responsables en el desarrollo del evento, especialmente aquellos que colaboran directamente con el departamento de banquetes (alimentos y bebidas). 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo='b')
            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Recepción y conserjería 
                  p.mt-4 Se encargan de colocar carteles o pizarras con la información básica del evento y recibir a los invitados, guiándolos hacia el lugar correspondiente. 
              .col-lg-4
                img(src='@/assets/curso/tema1/10.png', style="max-width: 482px").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Servicios varios 
                  p.mt-4 Son responsables de la limpieza de los salones y zonas cercanas antes y después de cada servicio, prestando especial atención a los baños y áreas comunes. 
              .col-lg-4
                img(src='@/assets/curso/tema1/11.png', style="max-width: 482px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Servicio técnico - mantenimiento 
                  p.mt-4 Atiende las necesidades técnicas del evento, como luces, sonido, aire acondicionado, colocación de carteles, decoraciones, tarimas, pistas de baile, etc. 
              .col-lg-4
                img(src='@/assets/curso/tema1/12.png', style="max-width: 482px").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Compras 
                  p.mt-4 Responsable de adquirir cualquier material especial necesario para el evento, especialmente si se trata de personalidades o se requiere material especializado. 
              .col-lg-4
                img(src='@/assets/curso/tema1/13.png', style="max-width: 482px").mx-auto


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-2.py-4.px-5.brounded
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/14.svg", alt="", data-aos="fade-up", style="max-width: 90px").mx-auto.mb-4
            .col-lg
              p(data-aos="fade-up").mb-0 #[strong Importante]
              p(data-aos="fade-up").mb-0 Al confeccionar la orden de servicios, se debe tener especial cuidado en que figuren claramente todos los detalles del servicio, añadiendo los apéndices necesarios que puedan concernir a cada departamento. Es importante controlar hasta el más mínimo detalle del servicio desde el primer contacto con el cliente hasta la finalización del mismo.

    Separador


    .titulo-segundo.color-primario(data-aos='fade-right')#t_1_2
      h2 1.2 El personal 

    .bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/tema1/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cantidad de personal necesario varía según el tipo de servicio que se ofrecerá. El gerente de banquetes debe calcular el número de invitados y determinar la cantidad adecuada de personal para el evento, supervisando todos los aspectos especificados en la orden de servicio o presupuesto de banquetes. 

    p(data-aos="fade-right").mb-5 #[strong El tipo de comida y necesidades de personal son:]  

    .tarjeta--container.row.mb-0.mb-lg-4
     .col-md.tarjeta.bg-color-6.px-5.py-4.brounded-md.mb-4.mb-lg-0(data-aos="zoom-in-up")

      figure.mb-4
        img(src="@/assets/curso/tema1/16.png", alt="alt")

      .bg-color-11.p-3.py-2.d-inline-block.mb-4
        h5.mb-0.text-color-black #[i Buffet]

      p Se requiere un camarero por cada 25 personas, un #[em bartender] hasta para 150 personas (2 #[em bartender]s si el evento tiene más de 150 personas), y un supervisor para eventos con más de 50 personas.


     .col-md.tarjeta.bg-color-4.px-5.py-4.brounded-md.mb-4.mb-lg-0(data-aos="zoom-in-down")
      figure.mb-4
        img(src="@/assets/curso/tema1/17.png", alt="alt")

      .bg-color-11.p-3.py-2.d-inline-block.mb-4
        h5.mb-0.text-color-black Comida emplatada

      p Se requiere un camarero por cada 25 personas, un #[em bartender] hasta para 150 personas (2 #[em bartender]s si el evento tiene más de 150 personas), y un supervisor para eventos con más de 50 personas.

    Separador

    .titulo-segundo.color-primario(data-aos='fade-right')#t_1_3
      h2 1.3 El tipo de #[em catering]
    
    p(data-aos="fade-right").mb-5 Actualmente, los eventos son actos generalizados que se organizan por diversos motivos, principalmente para facilitar el contacto entre personas. Aunque las costumbres y los menús han evolucionado considerablemente, el factor comida ha pasado a ser secundario en muchos casos. El objetivo principal de muchos eventos es reunir a personas con el fin de fomentar contactos culturales y comerciales. 


    .bg-full-width.bg-fondo-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-fluid(src="@/assets/curso/tema1/18.png", alt="", data-aos="fade-up")
          .col-lg-8
            .tarjeta.bg-color-6.p-5.mb-4(data-aos="fade-left")
              p #[strong Entre los tipos de servicio gastronómico más comunes se encuentran:]
              .row.justify-content-center.align-items-center
                .col-lg-6
                  ul.custom-list.mb-0
                    li.mb-2 #[i Cocktail] 
                    li.mb-2 #[i Buffet] 
                    li.mb-2 Banquete 
                    li.mb-2 Desayuno de trabajo 
                    li.mb-2 #[i Brunch] 
                .col-lg-6
                  ul.custom-list.mb-0
                    li.mb-2 #[em Vermissage]
                    li.mb-2 Vino de honor 
                    li.mb-2 #[em Coffee break]
                    li.mb-2 Servicio infantil

    Separador

    .titulo-segundo.color-primario(data-aos='fade-right')#t_1_4
      h2 1.4  El menaje

    p(data-aos="fade-right").mb-5 El montaje de un evento requiere tiempo suficiente para llevar a cabo todos los detalles planificados con el cliente. La forma de realizar este montaje dependerá del local, sus dimensiones, el número de comensales a atender y el tipo de servicio que se ofrecerá. 

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es recomendable elaborar un croquis con la distribución de las mesas, lo que facilita la organización y asegura una planificación adecuada. Además, es esencial contar con una lista detallada del material (inventario), ya sea propiedad del local o alquilado. Esta lista debe incluir todos los elementos necesarios, como vajilla, cristalería y cubertería, así como el equipo requerido para la cocina, tales como fuentes, salseras, cafeteras, teteras, entre otros utensilios. 

    p(data-aos="fade-right").mb-4 Es crucial verificar que todo el material necesario para el montaje esté en perfectas condiciones y asegurarse de que se cuenta con la cantidad requerida y que está disponible para su uso. Esto evita imprevistos durante el evento y garantiza un funcionamiento fluido. 

    p(data-aos="fade-right").mb-4 #[strong La lista del material es:]

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg-color-6.px-5.py-4.brounded-md.mb-4.mb-lg-0(data-aos="zoom-in-up")
        ul.custom-list.mb-0
          li.mb-2 #[strong Sillas:] limpias y en buen estado. 
          li.mb-2 #[strong Mesas:] limpias y en buen estado. 
          li.mb-2 #[strong Manteles:] limpios, planchados y sin agujeros. 
          li.mb-2 #[strong Servilletas:] limpias, planchadas y sin agujeros. 
          li.mb-2 #[strong Cubertería:] limpia y brillante. 
          li.mb-2 #[strong Vajilla:] limpia, brillante y sin roturas. 
          li.mb-2 #[strong Saleros y pimenteros:] limpios y llenos. 
          li.mb-2 #[strong Ceniceros:] limpios. 
          li.mb-2 #[strong Cristalería:] limpia y brillante. 
          li.mb-2 #[strong Decoración:] acorde al evento. 


      .col-md.tarjeta.bg-color-4.px-5.py-4.brounded-md.mb-4.mb-lg-0(data-aos="zoom-in-down")
        ul.custom-list.mb-0
          li.mb-2 Carros transportadores de comida caliente y fría. 
          li.mb-2 Jarras para servir agua. 
          li.mb-2 Jarras para servir leche y café. 
          li.mb-2 Bandejas para servir comida. 
          li.mb-2 Bandejas para servir bebidas. 
          li.mb-2 Cubos para enfriar vino o #[em champagne]. 
          li.mb-2 #[strong Equipos auxiliares:] proyector, pantalla, pizarra, rotafolio, podio, pedestales y micrófonos, equipos de transmisión simultánea. 
          li.mb-2 #[strong Utensilios de servicio:] hieleras y pinzas. 
          li.mb-2 #[strong Suministros de papelería:] servilletas, removedores, fósforos.  

    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Clase de mobiliario 
    
    p(data-aos="fade-right").mb-4 El mobiliario utilizado en estos servicios suele ser de dimensiones mayores que las convencionales, con patas plegables o de roscas. Dependiendo del tipo de evento y la disposición prevista por el organizador, se pueden emplear diversas alternativas de mesas y sillas. 

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-fluid(src="@/assets/curso/tema1/20.png", alt="", data-aos="fade-up")
          .col-lg-8
            .tarjeta.bg-color-6.p-5.mb-4(data-aos="fade-left")
              p #[strong Algunas de las opciones incluyen:]
              ul.custom-list.mb-0
                li.mb-2 Tableros de 1.80 metros por 90 cm o mesas redondas de 1.20 a 1.40 metros de diámetro.
                li.mb-2 Mesas de entre dos y cuatro metros de largo y 0.80 metros de ancho (para comidas).
                li.mb-2 Tableros con los cantos ovalados para mesas imperiales o de gran prestigio.
                li.mb-2 Mesas de entre dos y cuatro metros de largo y 0.40 metros de ancho para apoyo de material.

    p(data-aos="fade-right").mb-4 Es importante asegurarse de que todo el mobiliario esté correctamente almacenado. Si no se cuenta con suficientes piezas, se puede recurrir al alquiler del mobiliario necesario. En el mercado existen empresas especializadas en el alquiler de menaje para banquetes, que a menudo incluyen el transporte del material. Se recomienda consultar el directorio de la ciudad para localizar estos servicios. 

    .bg-full-width.bg-fondo-slider.mb-2.mb-lg-4
      .p-4.p-md-5
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-down")
          LineaTiempoC.color-acento-contenido(text-small).px-4(data-aos="fade-up")
            .row(titulo="Sillas").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Sillas 
                p.mb-4 Cada invitado debe disponer de un espacio de 60 cm por silla, y de 70 cm en caso de utilizar sillones. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/21.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Manteles").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Manteles 
                p.mb-4 Según el tipo de mesa o #[em buffet], pueden requerirse medidas especiales. Los muletones se adaptan mejor a las mesas, excepto en mesas redondas, donde se ajustan mediante chinchetas. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/22.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Servilletas").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Servilletas 
                p.mb-4 Se prevé una servilleta por cada invitado, con un 10 % adicional de reserva para eventualidades. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/23.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Litos y guantes").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Litos y guantes 
                p.mb-4 Un lito por camarero y guantes para camareros, especialmente si el banquete es de gran prestigio.  
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/24b.png", style="max-width:100%", alt="").mx-auto.mb-4

    Separador

    .titulo-segundo.color-primario(data-aos='fade-right')#t_1_5
      h2 1.5 El servicio de bebidas 

    p(data-aos="fade-right").mb-4 Las bebidas son un elemento esencial en los servicios gastronómicos y, cuando se sirven en bandejas, es importante ampliar tanto la variedad como la calidad. Estas pueden ir desde opciones sencillas y conocidas hasta combinaciones más complejas y exóticas. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg-color-7.p-4.brounded
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/25.svg", alt="", data-aos="fade-up", style="max-width: 240px").m-auto.mb-4.mb-lg-0
            .col-lg
              h5 Pódcast

              TarjetaAudio.color-acento-contenido.mb-3(
                texto="Reglas de un barman"
                :audio="require('@/assets/componentes/audios/bebidas.mp3')"
                tiempo
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
      .col-lg-5
        img.img-fluid(src="@/assets/curso/tema1/26.png", alt="", data-aos="fade-up")

    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Tipo de servicio de bebidas 

    p(data-aos="fade-right").mb-5 Al igual que con el servicio de alimentos, la entrega de bebidas debe coordinarse con el cliente, respetando ciertos parámetros según el tipo de evento: 

    .row.justify-content-center.align-items-start.mb-2.mb-lg-4
      .col-lg-5
        img.img-fluid(src="@/assets/curso/tema1/27.png", alt="", data-aos="fade-up")

      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-8")
          .row(titulo="Situados en mesa")
            .col-md-6.mb-4.mb-md-0
              p.mb-0 #[strong Situados en mesa]
              p Se inicia con cócteles de aperitivo como Jerez o #[em Vermouth], seguido de vino tinto y blanco, cerveza y sangría, concluyendo con cócteles digestivos. 
            .col-md-6
              img(src='@/assets/curso/tema1/28.png', alt='', style='max-width: 138px').m-auto

          .row(titulo="Servidos en platos")
            .col-md-6.mb-4.mb-md-0
              p.mb-0 #[strong Servidos en platos]
              p Se ofrecen jaiboles, daiquirí, cervezas y sangrías. 
            .col-md-6
              img(src='@/assets/curso/tema1/29.png', alt='', style='max-width: 138px').m-auto

          .row(titulo="Pasados en fuentes")
            .col-md-6.mb-4.mb-md-0
              p.mb-0 #[strong Pasados en fuentes]
              p Coctelería general, jaiboles, vino blanco, y ocasionalmente, vino tinto.
            .col-md-6
              img(src='@/assets/curso/tema1/30.png', alt='', style='max-width: 138px').m-auto

          .row(titulo="Empacado en cajitas")
            .col-md-6.mb-4.mb-md-0
              p.mb-0 #[strong Empacado en cajitas]
              p Para cervezas, maltas, refrescos embotellados, jugos enlatados o leche en envases parafinados.
            .col-md-6
              img(src='@/assets/curso/tema1/31.png', alt='', style='max-width: 138px').m-auto

          .row(titulo="Pasados en bandejas")
            .col-md-6.mb-4.mb-md-0
              p.mb-0 #[strong Pasados en bandejas]
              p Se emplean bandejas medianas cubiertas con un paño absorbente para diferentes tipos de bebidas.
            .col-md-6
              img(src='@/assets/curso/tema1/32.png', alt='', style='max-width: 138px').m-auto

          .row(titulo="En bares")
            .col-md-6.mb-4.mb-md-0
              p.mb-0 #[strong En bares]
              p Se montan barras para que los asistentes puedan pedir sus bebidas.
            .col-md-6
              img(src='@/assets/curso/tema1/33.png', alt='', style='max-width: 138px').m-auto

          .row(titulo="Mesa rodante")
            .col-md-6.mb-4.mb-md-0
              p.mb-0 #[strong Mesa rodante]
              p Mesa con ruedas cubierta con un mantel sencillo, transportando botellas, refrescos, agua, vasos, hielo, pinzas, servilletas y mezcladores para llevar a distintos grupos.
            .col-md-6
              img(src='@/assets/curso/tema1/34.png', alt='', style='max-width: 138px').m-auto
    Separador

    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Elección del vino

    p(data-aos="fade-right").mb-5 La elección del vino es fundamental para el éxito del evento. Factores como el plato, la época del año y el tipo de evento influyen en la selección. Algunas recomendaciones: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-down")
          LineaTiempoC.color-acento-contenido(text-small).px-4(data-aos="fade-up")
            .row(titulo="<em>Sauvignon Blanc</em>").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 #[em Sauvignon Blanc]
                p.mb-4 Ideal para mariscos crudos o ceviche, por su frescura y acidez cítrica.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/35.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="<em>Chardonnay</em>").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 #[em Chardonnay]
                p.mb-4 Acompaña bien mariscos finos, con una textura elegante.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/36.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="<em>Pinot Noir</em>").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 #[em Pinot Noir]
                p.mb-4 Recomendado para pescados y mariscos suaves, sin requerir limón.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/37.png", style="max-width:100%", alt="").mx-auto.mb-4
            
            .row(titulo="<em>Merlot</em>").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 #[em Merlot]
                p.mb-4 Perfecto para pescados grasos como el salmón, así como carnes blancas y pastas con salsas suaves.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/38.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="<em>Malbec, Syrah y Cabernet Sauvignon</em>").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 #[em Malbec, Syrah y Cabernet Sauvignon]
                p.mb-4 Son vinos potentes, recomendados para alimentos más condimentados.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema1/39.png", style="max-width:100%", alt="").mx-auto.mb-4

    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Cómo servir el vino 

    p(data-aos="fade-right").mb-5 Servir el vino a la temperatura adecuada es crucial para resaltar todas sus características. El vino blanco debe servirse lo suficientemente frío para ser refrescante, mientras que el vino tinto se sirve a una temperatura ligeramente más alta. 
    
    .bg-full-width.bg-fondo-3.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-fluid(src="@/assets/curso/tema1/51.png", alt="", data-aos="fade-up")
          .col-lg-8
            .tarjeta.bg-color-6.p-5(data-aos="fade-left")
              ul.custom-list.mb-0
                li.mb-2 Para comenzar, coloque la botella sobre la mesa y retire la parte superior de la cápsula que cubre el corcho. Esto puede hacerse con un corta cápsulas, aunque lo ideal es usar la cuchilla que viene integrada en los sacacorchos “de camarero”, que permiten cortar la cápsula por debajo del segundo gollete.

                li.mb-2 Antes y después de descorchar, se debe limpiar el gollete de la botella.

                li.mb-2 Para abrir el vino, introduzca la punta del tirabuzón en el centro del corcho y gire el sacacorchos, no la botella.  

                li.mb-2 Retire el corcho lentamente y, antes de sacarlo completamente, realice movimientos circulares para facilitar la entrada de aire, permitiendo que el corcho salga suavemente, evitando ruidos innecesarios.
        
    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Cómo seleccionar la copa 

    p(data-aos="fade-right").mb-5 Es importante que el vino se sirva en una copa que resalte sus virtudes. Lo esencial es que la copa sea estrecha en la parte superior para concentrar los aromas. Además, debe ser de cristal fino, liso y transparente, con un pie largo para sostenerla sin tocar el cáliz. Hoy en día, existe un tipo de copa para cada estilo de vino, que dirige el flujo del líquido hacia una parte específica de la lengua, exaltando sus cualidades. 

    .row.justify-content-center.align-items-stretch.mb-2.mb-lg-4
      .col-lg-6
        img(src="@/assets/curso/tema1/40.png", alt="", data-aos="fade-up")

      .col-lg-3
        .bg-color-9.p-4.h-100
          p(data-aos="fade-left").mb-0 Lo ideal es disponer de tres tipos de copas: una para espumantes, otra para vinos tintos y otra para vinos blancos. 

      .col-lg-3
        .bg-color-8.p-4.h-100
          p(data-aos="fade-left").mb-0 En el caso del vino tinto, la copa debe llenarse hasta dos tercios de su capacidad, mientras que el vino blanco debe servirse en menor cantidad para evitar que se caliente en la copa. 
    
    Separador

    .titulo-segundo.color-primario(data-aos='fade-right')#t_1_6
      h2 1.6 La confección del menú 

    .bg-full-width.bg-fondo-4
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.order-2.order-lg-1
            p(data-aos="fade-right").mb-5 El gerente de banquetes es el encargado de preseleccionar los menús ofrecidos a los clientes, quienes, si lo desean, pueden personalizar el menú junto con el encargado. Los menús seleccionados son enviados al jefe de cocina para la elaboración de las recetas estándar de los platos elegidos, lo que permite calcular sus costos unitarios. 

            .titulo-tres.mb-4(data-aos="flip-up").mb-4
              h4 Receta estándar 

            p(data-aos="fade-right") Una receta estándar es una fórmula escrita que detalla cómo producir un plato o alimento de una calidad específica y cantidad deseada. Esta receta muestra la cantidad exacta de cada ingrediente, así como los pasos de preparación necesarios. 

          .col-lg-5.order-1.order-lg-2
            img(src="@/assets/curso/tema1/41.png", alt="", data-aos="fade-up").mb-4.mb-lg-0

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11
            .row.justify-content-center.align-items-center.bg-h80-p10
              .col-lg-10
                .bg-color-sm
                  .row.justify-content-center.align-items-center
                    .col-lg-3(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/42.png', style="max-width:210px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
                    .col-lg-9(data-aos="fade-left")
                      p.mb-0 Es fundamental utilizar los ingredientes correctos y seguir los procedimientos de cocción adecuados para garantizar la calidad del producto final. Las recetas estándar permiten controlar los costos unitarios de los alimentos y asegurar la consistencia en la preparación.

        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Precios del servicio 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            p(data-aos="fade-right") El éxito en la contratación de los servicios de banquetes depende en gran medida del precio de los menús. Es esencial ofrecer precios que se ajusten a las necesidades del cliente, sin comprometer la calidad del servicio. Es preferible mantener un equilibrio entre calidad y costo, en lugar de ofrecer precios bajos a expensas de una menor calidad. 
          .col-lg-5
            img(src="@/assets/curso/tema1/43.png", alt="", data-aos="fade-up")

        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Definición del costo del menú 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            p(data-aos="fade-right").mb-4 Los costos de los banquetes se calculan generalmente en porcentajes, obtenidos al dividir los costos unitarios de los componentes del menú entre el precio de venta al cliente. 

            p(data-aos="fade-right") #[strong Los aspectos a considerar para definir el costo son:]
          .col-lg-5
            img(src="@/assets/curso/tema1/44.png", alt="", data-aos="fade-up")


    .carousel-bg.mb-5

      SlyderF.mb-5(columnas="col-lg-4 col-xxl-3")(data-aos="zoom-in-up")
        .tarjeta.bg-color-4.p-4.shadow-top-left-right.text-center
          img(src='@/assets/curso/tema1/45.svg', style="max-width: 89px", alt='').mx-auto.mb-4
          .bg-color-2.d-inline-block.px-2.py-1.mb-3
            h6.text-center.mb-0.text-color-black Transporte
          p.text-center Gastos asociados a la movilización de alimentos y personal. 


        .tarjeta.bg-color-4.p-4.shadow-top-left-right.text-center
          img(src='@/assets/curso/tema1/46.svg', style="max-width: 89px", alt='').mx-auto.mb-4
          .bg-color-2.d-inline-block.px-2.py-1.mb-3
            h6.text-center.mb-0.text-color-black Servicios públicos 
          p.text-center Agua, luz, gas, entre otros. 

        .tarjeta.bg-color-4.p-4.shadow-top-left-right.text-center
          img(src='@/assets/curso/tema1/47.svg', style="max-width: 89px", alt='').mx-auto.mb-4
          .bg-color-2.d-inline-block.px-2.py-1.mb-3
            h6.text-center.mb-0.text-color-black Arriendos 
          p.text-center Alquiler de equipos o espacios, si es necesario.

        .tarjeta.bg-color-4.p-4.shadow-top-left-right.text-center
          img(src='@/assets/curso/tema1/48.svg', style="max-width: 89px", alt='').mx-auto.mb-4
          .bg-color-2.d-inline-block.px-2.py-1.mb-3
            h6.text-center.mb-0.text-color-black Mano de obra 
          p.text-center Costos del personal encargado de la preparación y servicio. 


        .tarjeta.bg-color-4.p-4.shadow-top-left-right.text-center
          img(src='@/assets/curso/tema1/49.svg', style="max-width: 89px", alt='').mx-auto.mb-4
          .bg-color-2.d-inline-block.px-2.py-1.mb-3
            h6.text-center.mb-0.text-color-black Gastos extras 
          p.text-center Compras de última hora o imprevistos. 


        .tarjeta.bg-color-4.p-4.shadow-top-left-right.text-center
          img(src='@/assets/curso/tema1/50.svg', style="max-width: 89px", alt='').mx-auto.mb-4
          .bg-color-2.d-inline-block.px-2.py-1.mb-3
            h6.text-center.mb-0.text-color-black Materia prima e insumos 
          p.text-center Costos de los alimentos y otros materiales necesarios.

    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4 Ejemplo de cálculo de precio unitario para 10 personas

    p(data-aos="fade-right").mb-5 Menú para 10 unidades de churrasco de 200 gramos, acompañado de papa cocida, ensalada verde, arepa y salsa chimichurri. Bebida: cerveza. 
        //Separador
    //Separador
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="flip-up").mb-4
          h5 Tabla 1.
          span Costo de ingredientes y servicios para #[em catering]  

        .tabla-a.color-acento-contenido.table-responsive--
          table
            thead
              tr
                th Concepto
                th Costo total
                th Costo por unidad
            tbody
              tr
                td Churrasco (200 g x 10 unidades)
                td $55,000
                td $5,500
              tr
                td 3 kg de papa
                td $6,500
                td $650
              tr
                td Ingredientes para ensalada
                td $14,000
                td $1,400
              tr
                td Salsas
                td $7,500
                td $750
              tr
                td Bebidas
                td $17,000
                td $1,700
              tr
                td Transporte
                td $35,000
                td $3,500
              tr
                td Mano de obra
                td $110,000
                td $11,000
              tr
                td Gastos extras
                td $25,000
                td $2,500
            tfoot
              tr
                th #[strong Total]
                td $270,000
                td $26,000


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    indicadorImagenZoom: true,
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    mostrarIndicadorAudio: true,
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
