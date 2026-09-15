<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reto operativo: domina los procedimientos de reservas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión del aprendiz de los conceptos clave relacionados con usuarios turísticos, servicio al cliente, comunicación, negociación, cotización y venta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,

          texto: '¿Cuál es una característica de un canal directo de reservas?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Permite reservar únicamente mediante agencias de viajes.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Facilita el contacto directo entre el cliente y el establecimiento.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Solo puede utilizarse para reservas grupales.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Requiere siempre la intervención de una OTA.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 2,

          texto:
            '¿Cuál es el propósito principal de una <em>waiting list</em>?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Confirmar reservas corporativas.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Registrar solicitudes cuando no hay disponibilidad inmediata.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Gestionar únicamente cancelaciones.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Clasificar huéspedes VIP.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 3,

          texto:
            '¿Para qué se utiliza el <em>forecasting</em> en el área de reservas?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Registrar pagos pendientes.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Calcular tarifas promocionales.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Estimar la ocupación futura del establecimiento.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Organizar el servicio de habitaciones.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 4,

          texto:
            '¿Qué describe correctamente el concepto de <em>overbooking</em>?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Bloquear habitaciones por mantenimiento.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Aceptar más reservas que habitaciones disponibles.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Cancelar reservas duplicadas.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Asignar habitaciones preferenciales.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 5,

          texto: '¿Qué caracteriza una reserva garantizada?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Puede cancelarse sin condiciones.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Cuenta con un respaldo económico o financiero.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Solo aplica para huéspedes frecuentes.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'No requiere confirmación.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 6,

          texto:
            '¿Qué función cumple un sistema PMS en la gestión de reservas?',

          imagen: require('@/assets/actividad/imagen2.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Diseñar campañas publicitarias.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Gestionar únicamente el servicio de restaurante.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Administrar la información y operación de las reservas.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Elaborar contratos laborales.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 7,

          texto:
            '¿En qué situación se utiliza principalmente un <em>rooming list</em>?',

          imagen: require('@/assets/actividad/imagen3.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'En reservas individuales.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'En reservas para grupos de huéspedes.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'En reservas canceladas.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'En solicitudes de mantenimiento.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 8,

          texto:
            '¿Por qué es importante informar las políticas de cancelación al cliente?',

          imagen: require('@/assets/actividad/imagen4.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Porque reemplazan el contrato de hospedaje.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Porque eliminan cualquier responsabilidad del hotel.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto:
                'Porque permiten conocer las condiciones aplicables a la reserva.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Porque únicamente benefician al establecimiento.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 9,

          texto: '¿Qué son las OTA (<em>Online Travel Agencies</em>)?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Empresas encargadas del transporte terrestre.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Plataformas de pago electrónico.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto:
                'Agencias de viajes en línea que comercializan servicios turísticos.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Sistemas internos de mantenimiento hotelero.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 10,

          texto: '¿Cuál puede ser una causa de la anulación de una reserva?',

          imagen: require('@/assets/actividad/imagen2.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'El registro del huésped.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'El pago anticipado.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Errores o inconsistencias detectadas en el sistema.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'La asignación de habitación.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,

          texto: '¿Qué ocurre en un caso de <em>no show</em>?',

          imagen: require('@/assets/actividad/imagen3.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'El huésped modifica su reserva.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'El huésped no se presenta en la fecha prevista sin cancelar previamente.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'El establecimiento cambia la tarifa.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'El huésped solicita una habitación diferente.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 12,

          texto: '¿Cuál es la función principal de los códigos IATA?',

          imagen: require('@/assets/actividad/imagen4.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Clasificar hoteles por categoría.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Identificar aeropuertos y ciudades mediante códigos estandarizados.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Codificar habitaciones.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Asignar tarifas hoteleras.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 13,

          texto: '¿Qué caracteriza una reserva provisional?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Está completamente garantizada.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Requiere una confirmación posterior para hacerse efectiva.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'No puede modificarse.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Solo aplica para agencias.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 14,

          texto:
            '¿Cuál de las siguientes actividades hace parte del tratamiento de una reserva?',

          imagen: require('@/assets/actividad/imagen2.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Diseñar promociones comerciales.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Elaborar presupuestos contables.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto:
                'Registrar, confirmar y hacer seguimiento a la información del huésped.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Realizar mantenimiento preventivo.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 15,

          texto: '¿Cuál es uno de los beneficios de las garantías de reserva?',

          imagen: require('@/assets/actividad/imagen3.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Eliminar la necesidad de confirmar reservas.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Reducir pérdidas económicas ocasionadas por cancelaciones o <em>no show</em>.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Incrementar el número de habitaciones.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Sustituir las políticas de cancelación.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 16,

          texto: '¿Qué información es indispensable al registrar una reserva?',

          imagen: require('@/assets/actividad/imagen4.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Solo el nombre del hotel.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Únicamente la tarifa.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto:
                'Datos del huésped, fechas y tipo de habitación solicitada.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'El historial laboral del cliente.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 17,

          texto:
            '¿Qué acción debe realizarse después de registrar correctamente una reserva?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Eliminar los datos del huésped.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Confirmar la reserva utilizando el canal establecido.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Asignar automáticamente cualquier habitación.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Esperar la llegada del cliente sin realizar seguimiento.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 18,

          texto:
            '¿Cuál es el principal objetivo de una adecuada gestión de reservas?',

          imagen: require('@/assets/actividad/imagen2.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Reducir el número de huéspedes.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto:
                'Optimizar la ocupación y garantizar un servicio organizado.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Incrementar las cancelaciones.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Limitar las ventas en línea.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 19,

          texto:
            '¿Qué ventaja ofrece mantener actualizada la información de las reservas?',

          imagen: require('@/assets/actividad/imagen3.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Disminuir la comunicación con el huésped.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Evitar el uso de sistemas tecnológicos.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Facilitar el seguimiento y reducir errores operativos.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Incrementar el tiempo de respuesta.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 20,

          texto:
            '¿Cuál es una buena práctica al gestionar una solicitud de reserva?',

          imagen: require('@/assets/actividad/imagen4.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Omitir las condiciones del servicio.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Registrar únicamente el nombre del cliente.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto:
                'Verificar la disponibilidad antes de confirmar la reserva.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Confirmar la reserva sin revisar la información.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
