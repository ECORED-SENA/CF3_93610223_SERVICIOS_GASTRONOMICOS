<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo:
        'Cuestionario: Planificación integral de servicios de <em>catering</em>',
      introduccion:
        '<b> Objetivo:</b> Desarrollar habilidades en la organización y gestión de eventos de <i>catering</i>, a través de la identificación y aplicación de los elementos clave en la planificación.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué incluye la planeación del <em>catering</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organización administrativa y personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organización administrativa y tipos de servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Personal y costos del menú.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tipos de servicio y coordinación logística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un tipo de servicio en el <em>catering</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Vajillas y cristalería.', esCorrecta: false },
            { id: 'b', texto: 'Elección de vinos.', esCorrecta: false },
            { id: 'c', texto: 'Banquete.', esCorrecta: true },
            { id: 'd', texto: 'Mano de obra.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué abarca el concepto de menaje en la planificación del <em><em>catering</em></em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Material necesario y reglas del barman.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personalización del evento y mano de obra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tipos de servicio y elección de vinos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Material necesario y distribución de mesas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué elemento es parte del servicio de bebidas en un evento de <em>catering</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Costos de transporte.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Personal y expectativas del cliente.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Reglas del barman.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Distribución de mesas y vajillas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué se incluye en los costos del menú para un servicio de <em>catering</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Materia prima y mano de obra.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Material necesario y reglas del barman.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tipos de servicio y reglas del barman.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Expectativas del cliente y personalización del evento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un elemento clave de la coordinación logística en el <em>catering</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Elección de vinos.', esCorrecta: false },
            { id: 'b', texto: 'Personalización del evento.', esCorrecta: true },
            { id: 'c', texto: 'Tipos de servicio.', esCorrecta: false },
            { id: 'd', texto: 'Distribución de mesas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué incluye la organización administrativa en la planeación del <em>catering</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tipos de servicio.', esCorrecta: false },
            { id: 'b', texto: 'Elección de vinos.', esCorrecta: false },
            { id: 'c', texto: 'Personal.', esCorrecta: true },
            { id: 'd', texto: 'Materia prima.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es uno de los tipos de servicio que se puede ofrecer en un evento de <em>catering</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Personal.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Reglas del barman.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Materia prima.', esCorrecta: false },
            { id: 'd', texto: '<em>Cocktail</em>.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué abarca la elección de vinos en el servicio de bebidas de un evento de <em>catering</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un aspecto clave del servicio de bebidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un componente de la logística.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Parte de la planeación del menú.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Relacionado con la organización administrativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se incluye en la distribución de mesas dentro de la planificación del <em>catering</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Costos del menú.', esCorrecta: false },
            { id: 'b', texto: 'Parte del menaje.', esCorrecta: true },
            { id: 'c', texto: 'Materia prima.', esCorrecta: false },
            { id: 'd', texto: 'Coordinación logística.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
