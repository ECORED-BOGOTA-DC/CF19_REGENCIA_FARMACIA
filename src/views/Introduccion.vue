<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-4
      p(data-aos="fade-right") De manera general, el proceso de las preparaciones magistrales inicia cuando el médico una vez que realiza el diagnóstico respectivo, realiza la prescripción de la fórmula magistral, que luego se prepara y dispensa por el personal farmacéutico. Se define la fórmula magistral como el medicamento orientado a un paciente de manera individual, cuya preparación se lleva a cabo por un farmacéutico, o dicho proceso está bajo su responsabilidad y dirección, cumpliendo de manera exacta con la información de la prescripción facultativa donde se detallan principios activos y excipientes. Todo este proceso se debe seguir en las Buenas Prácticas de Elaboración (B.P.E.) controles de calidad y la dispensación en el establecimiento o servicio farmacéutico.
      p(data-aos="fade-right") Según lo expresado anteriormente, se deben tener muy presente las siguientes consideraciones:
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-8.col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/introduccion/img1.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul1
            .p-3
              br
              p Las preparaciones magistrales no se deben preparar a gran escala.
      .col-md-8.col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/introduccion/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul1
            .p-3
              p.mb-0 Las exigencias con respecto a parámetros de calidad, seguridad y eficacia son las mismas que deben cumplir los laboratorios fabricantes.
    .row.mb-5(data-aos="fade-right")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/ES1lTtpTx8g?si=T_efGYsEModFC99P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row(data-aos="fade-left")
      p Las fórmulas magistrales son unos de los testimonios más importantes de los orígenes de la profesión farmacéutica, representan la base fundamental de este profesional. A pesar del dominio de los laboratorios farmacéuticos a nivel nacional y global, esta práctica de la formulación magistral continúa siendo muy importante para el tratamiento de patologías en casos muy puntuales.

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
