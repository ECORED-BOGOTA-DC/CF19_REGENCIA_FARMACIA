<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Farmacopeas y referencias bibliográficas

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4
        figure.mb-4
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='alt')

      .col-lg-8
        p Es un documento donde se recopila la información de las materias primas y de medicamentos. La información que se incluye en ellas está relacionada con los parámetros de calidad. Las farmacopeas se editan desde hace muchos años atrás (Renacimiento) y luego se hicieron obligatorias en los establecimientos farmacéuticos.

        p Se puede definir como referencias oficiales, con peso legislativo, donde se consultan los estándares o requisitos de calidad de las materias primas farmacéuticas más utilizadas y las distintas formas farmacéuticas. Pone a disposición de todos los ciudadanos la información técnica sobre medicamentos.

    .row.mb-5
      p #[b Existen varias farmacopeas reconocidas y prestigiosas:] Farmacopea Norteamericana (USP), Farmacopea Británica (BP), Farmacopea Europea (Ph.Eur), Farmacopea Italiana (FU), Farmacopea Alemana (DAB), Farmacopea Belga (Ph. Belg), Farmacopea Francesa (Ph. Franc), Farmacopea Holandesa (Ph.Ned), y Farmacopea Suiza (Ph. Helv).

    .row.mb-5
      .cajon.color-acento-contenido.p-4
        .row.justify-content-center
          .col-lg-10
            p La Farmacopea se convierte en una herramienta básica para garantizar la calidad de los medicamentos y para el fortalecimiento del mercado farmacéutico. Cada país es autónomo para establecer su(s) farmacopea(s) oficial(es) y las especificaciones incluidas en ella(s).

            p En Colombia se ha tomado como referencia la farmacopea norteamericana.

          .col-6.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema4/img2.svg', alt='alt').img2-tm4

    .row.mb-5
      p La siguiente imagen es un ejemplo de la información que se encuentra en la farmacopea y su utilidad para la fabricación de los productos farmacéuticos.

    .bg5.mb-5
      ImagenInfografica.mb-3
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema4/img3.svg', alt='Texto que describa la imagen')

        .tarjeta.tarjeta--morada.p-3(x="23%" y="11%" numero="")
          p Identificación de la materia prima (Ácido Bórico) utilizado en preparaciones magistrales como antiséptico para el tratamiento del Acné.

        .tarjeta.tarjeta--morada.p-3(x="25.5%" y="53%" numero="")
          p Características organolépticas y descripción física de la materia prima.

        .tarjeta.tarjeta--morada.p-3(x="20%" y="74%" numero="")
          p Recomendaciones para su conservación.

      ImagenInfografica.mb-3
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema4/img4.svg', alt='Texto que describa la imagen')

        .tarjeta.tarjeta--morada.p-3(x="45%" y="14%" numero="")
          p Métodos de identificación cualitativos y cuantitativos.

      ImagenInfografica.mb-3
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema4/img5.svg', alt='Texto que describa la imagen')

        .tarjeta.tarjeta--morada.p-3(x="40.5%" y="10%" numero="")
          p Métodos de valoración (conocer el porcentaje de pureza de la materia prima).

        .tarjeta.tarjeta--morada.p-3(x="21%" y="85%" numero="")
          p Indicaciones para el rotulado.

    .row.mb-5
      p Con el objetivo de complementar el conocimiento adquirido y teniendo en cuenta que el alcance del Tecnólogo(a) en Regencia de Farmacia abarca las preparaciones magistrales no estériles, se propone al aprendiz consultar la guía con los requerimientos necesarios para el cumplimiento de las preparaciones magistrales estériles, presente en la sección de material complementario.



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
