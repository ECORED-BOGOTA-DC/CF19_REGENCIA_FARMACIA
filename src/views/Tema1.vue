<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de las preparaciones magistrales no estériles

    .row.mb-5
      p Antes de iniciar con el desarrollo del tema, es importante conocer un poco de la historia de las preparaciones magistrales y cómo se ha avanzado hasta el día de hoy. 

    .row.justify-content-center.align-items-center.mb-5  
      .tarjeta.tarjeta--azul.p-4
        PasosB.color-acento-contenido.p-3
          .row(titulo="Mundo arcaico")
            .col-md-6.mb-4.mb-md-0
              h4 Mundo arcaico:
              p no existía separación entre el cuidado de la salud, las creencias religiosas y la magia. 
              p Así, la preparación de los remedios para la salud solía estar en manos de hechiceros o sacerdotes.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img1.svg', alt='alt')

          .row(titulo="Mundo clásico")
            .col-md-6.mb-4.mb-md-0
              h4 Mundo clásico:
              p poco a poco se produce una separación entre la medicina y los tratamientos mágico-religiosos. 
              p El cuidado de la salud es asumida por personas con una doble función, la de médico y la de farmacéutico preparando sus propios remedios curativos.          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='alt')

          .row(titulo="Edad media")
            .col-md-6.mb-4.mb-md-0
              h4 Edad media:
              p el farmacéutico empieza su actividad al margen del médico y se asocian en gremios. Realiza preparaciones magistrales en su botica.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img3.svg', alt='alt')

          .row(titulo="Edad moderna")
            .col-md-6.mb-4.mb-md-0
              h4 Edad moderna:
              p nacen y proliferan farmacopeas y formularios.
              
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-circle.color-vineta1
                  | La formulación magistral se constituye como base de la actividad farmacéutica junto con la formulación oficial.

                li 
                  i.fas.fa-circle.color-vineta1
                  | En la segunda mitad del siglo XIX, se crean los primeros medicamentos de síntesis y surgen los primeros laboratorios farmacéuticos.

                li 
                  i.fas.fa-circle.color-vineta1
                  | A partir de este momento, la fabricación industrial de medicamentos gana terreno a la formulación magistral.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', alt='alt')

          .row(titulo="Actualidad")
            .col-md-6.mb-4.mb-md-0
              h4 Actualidad:
              p la formulación magistral se mantiene como una actividad farmacéutica de notable interés a pesar de que el volumen de dispensaciones de fórmulas magistrales y de preparados oficinales en la oficina de farmacia y en los servicios farmacéuticos hospitalarios no es grande con respecto al número de medicamentos industriales dispensados y utilizados.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img5.svg', alt='alt')

































      
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
