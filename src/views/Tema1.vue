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
      .tarjeta.tarjeta--azul1.p-4
        PasosB.color-secundario.p-3
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

    .row.mb-5
      p Tanto los métodos como la infraestructura han tenido cambios significativos, en las siguientes figuras se indica de manera general dicha evolución hacia el perfeccionamiento de los procesos y los controles que se deben realizar:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5   
        .position-relative(@mouseover="indicadorImagenZoom = false")
          Zoom(
            lente="200" 
            :baja-resolucion="require('@/assets/curso/temas/tema1/img6.svg')" 
            :alta-resolucion="require('@/assets/curso/temas/tema1/img6-1.svg')"
          )
          .indicador--hover(v-if="indicadorImagenZoom")

      .col-lg-5
        .position-relative(@mouseover="indicadorImagenZoom = false")
          Zoom(
            lente="200" 
            :baja-resolucion="require('@/assets/curso/temas/tema1/img7.svg')" 
            :alta-resolucion="require('@/assets/curso/temas/tema1/img7-1.svg')"
          )
          .indicador--hover(v-if="indicadorImagenZoom")

    .row.mb-5
      p En los establecimientos y servicios farmacéuticos, existen los procesos generales y los procesos especiales, donde están ubicadas las preparaciones magistrales, como se muestra a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='alt')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img9.svg', alt='alt')      

      .col-lg-11.mt-4
        p Para el desarrollo de la temática relacionada con las preparaciones magistrales, se enfocará en aquellas que son tópicas no estériles, de uso en humanos y veterinario, porque en este tipo de preparaciones (no estériles) podrá intervenir el Tecnólogo en Regencia de Farmacia. 

    .bg1
      .row.mb-5
        p A continuación, se presentarán algunas definiciones de términos relacionados con las preparaciones magistrales, los cuales siempre debemos tener presentes.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .tabla-a.color-acento-contenido.mb-lg-5 
            table(style="width:100%")
              thead
                tr
                  th(style="width:30%") Términos
                  th(style="width:70%") Definición
              tbody
                tr
                  td #[b 1. Preparación magistral]
                  td Es la atención farmacéutica que se hace por parte del Químico Farmacéutico una o un grupo de personas en especial, teniendo en cuanta su perfil fármaco terapéutico y son de distribución inmediata.
                tr
                  td #[b 2. Droga blanca]
                  td Es la materia prima para preparar las fórmulas magistrales, tales como: aceite de almendras, aceite de manzanilla, azufre, glicerina pura, ácido bórico, bórax, bicarbonato de sodio, entre otros. Este tipo de productos no requiere registro INVIMA para su comercialización.
                tr
                  td #[b 3. Principio activo]
                  td Es todo compuesto biológicamente activo que se extrae de la droga de un ser vivo utilizado por sus propiedades terapéuticas y que se comercializa sin alterar su estructura química.
                tr
                  td #[b 4. Droga (O.M.S)]
                  td El nombre de droga resulta aplicable a toda sustancia terapéutica o no, que introducida al cuerpo por medio de los mecanismos clásicos (Inhalación, ingestión, fricción, administración parenteral, endovenosa) de administración, es capaz de actuar sobre el sistema nervioso central del individuo hasta generar en él una alteración física e intelectual, la experimentación de nuevas sensaciones o la modificación de su estado psíquico.
                tr
                  td #[b 5. Preparado magistral]
                  td Es el preparado o producto farmacéutico para atender una prescripción médica, de un paciente individual, que requiere de algún tipo de intervención técnica de variada complejidad.
                tr
                  td #[b 6. Buenas prácticas de manufactura]
                  td Son las normas, procesos y procedimientos de carácter técnico que aseguran la calidad de los medicamentos, los cosméticos y las preparaciones farmacéuticas a base de recursos naturales
                tr
                  td #[b 7. Buenas prácticas de elaboración magistral]
                  td Conjunto de normas, procesos y procedimientos de carácter técnico que aseguran la correcta elaboración y el control de calidad de los Medicamentos Magistrales y los Preparados Oficinales.
                tr
                  td #[b 8. Excipiente]
                  td Producto más o menos inerte que determina la consistencia, forma o volumen de las preparaciones farmacéuticas.
                tr
                  td #[b 9. Preparación magistral no estéril]
                  td Es una preparación farmacéutica que se puede formular y elaborar en condiciones ambientales controladas, pero no estériles.


    .tarjeta--morada.p-4
      .row.justify-content-center
        .col-8.col-lg-4.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img10.svg', alt='alt').img10-tm1 

        .col-lg-8
          p Con respecto a las preparaciones magistrales, hay que tener en cuenta los siguientes aspectos:

          ul.lista-ul--color.fa-ul2
            li 
              i.fas.fa-check
              | Las etapas generales del proceso.
            li 
              i.fas.fa-check
              | Objetivos específicos.
            li 
              i.fas.fa-check
              | Establecimientos donde se deben preparar.
            li 
              i.fas.fa-check
              | Quienes pueden realizar las preparaciones.

    .row.my-lg-5
      p.mt-lg-3 A continuación, ampliaremos la información sobre cada uno de ellos.









      
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
