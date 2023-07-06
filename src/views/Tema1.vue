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
      .col-lg-5.mb-4
        .position-relative(@mouseover="indicadorImagenZoom = false")
          Zoom(
            lente="200" 
            :baja-resolucion="require('@/assets/curso/temas/tema1/img6.svg')" 
            :alta-resolucion="require('@/assets/curso/temas/tema1/img6-1.svg')"
          )
          .indicador--hover(v-if="indicadorImagenZoom")

      .col-lg-5.mb-4
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
      .col-4.col-lg-1
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

    .row.justify-content-center.align-items-center.mb-5  
      .tarjeta.tarjeta--azul1
        PasosB.color-secundario.p-4
          .row(titulo="Etapas")
            .col-lg-7
              h4 Etapas
              p En el esquema se puede observar las etapas generales del proceso, en donde se elabora la preparación magistral a partir de una prescripción médica y finalmente se realiza la intervención técnica dependiendo del nivel de complejidad del servicio farmacéutico o de establecimiento.

              figure.mb-4
                img(src='@/assets/curso/temas/tema1/img11.svg', alt='alt')  

            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/img12.svg', alt='alt')

          .row(titulo="Objetivo")
            .col-lg-11
              h4 Objetivo
              p En el diagrama se evidencia el objetivo principal de las preparaciones y un ejemplo donde se muestra la preparación de un producto a partir de las necesidades individuales de un paciente.

              p Ejemplo

              figure
                img(src='@/assets/curso/temas/tema1/img13.svg', alt='alt')

          .row(titulo="Lugares")
            .col-lg-7
              h4 Lugares
              p.mb-5 Los lugares donde se deben hacer las preparaciones magistrales, establecimientos y servicios farmacéuticos de mediana y alta complejidad son:

              .row.mb-3
                .col-3.col-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img14.svg', alt='alt')

                .col-9.col-lg-10.mt-3
                  p Establecimientos farmacéuticos.

              .row 
                .col-3.col-lg-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img15.svg', alt='alt')  

                .col-9.col-lg-10.mt-3
                  p Servicios farmacéuticos (clínicas de mediana y alta complejidad).            

            .col-lg-5.mt-4
              figure
                img(src='@/assets/curso/temas/tema1/img16.svg', alt='alt')

          .row(titulo="Personal")
            .col-lg-7
              h4 Personal
              p El personal autorizado por la normatividad vigente para la realización de las preparaciones magistrales son:

              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-angle-right.color-vineta2
                  p #[b Tecnólogo en regencia de farmacia:] Podrá elaborar preparaciones de uso tópico como cremas, polvos, geles, ungüentos, pomadas y orales líquidos no estériles.
                li 
                  i.fas.fa-angle-right.color-vineta2
                  p #[b Químico farmacéutico:] Podrá elaborar  preparaciones estériles, nutriciones parenterales, mezcla de medicamentos oncológicos, adecuación y ajuste de concentraciones de dosis de medicamentos oncológicos y radiofármacos. 

            .col-lg-5.mt-4
              figure
                img(src='@/assets/curso/temas/tema1/img17.svg', alt='alt')

          .row(titulo="Campos")
            .col-lg-7
              h4 Campos
              p.mb-4 Es importante identificar los campos de acción de las preparaciones magistrales, con el objetivo de conocer cuál es su alcance.

              p Dentro de su campo de actividad se encuentran las áreas de:

              .row
                .col-lg-7
                  ul.lista-ul--color.fa-ul2
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | #[b Dermatología.]
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | #[b Formulación cosmética de prescripción.]
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | #[b Pediatría.]
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | #[b Geriatría.]

                .col-lg-5
                  ul.lista-ul--color.fa-ul2
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | #[b Psiquiatría.]
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | #[b Oftalmología.]
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | #[b Atención primaria.]
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | #[b Hospital.]          
          
            .col-lg-5.mt-4
              figure
                img(src='@/assets/curso/temas/tema1/img18.svg', alt='alt')

          .row(titulo="Ventajas / Desventajas")

            h4 Ventajas / Desventajas
            p Todo proceso tiene ventajas y desventajas en su ejecución y campo de acción. Las preparaciones magistrales no son ajenas a estos.
        
            .col-lg-6.mb-4
              .tarjeta--blanca2.p-2.p-lg-4
                .row 
                  .col-3.col-lg-2.mb-3
                    figure
                      img(src='@/assets/curso/temas/tema1/img19.svg', alt='alt')
                  .col-9.col-lg-10.mt-3
                    h4 Ventajas

                  ul.lista-ul--color.fa-ul2
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | Tratamiento personalizado. 
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | Sólo está disponible a ciertas dosis, y se necesita otra dosis distinta.
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | Se necesita en una forma de administración que no está disponible comercialmente.
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | Se ha dejado de fabricar por razones comerciales.
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | Asociación de fármacos no disponibles.
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | Puede recetarse mayor cantidad del producto.
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | Producto de estabilidad limitada.

            .col-lg-6.mb-4
              .tarjeta--blanca2.p-2.p-lg-4
                .row 
                  .col-3.col-lg-2.mb-3
                    figure
                      img(src='@/assets/curso/temas/tema1/img20.svg', alt='alt')
                  .col-9.col-lg-10.mt-3
                    h4 Desventajas
                  ul.lista-ul--color.fa-ul2
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | Productos son extemporáneos. 
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | No es de dispensación inmediata.
                    li 
                      i.fas.fa-angle-right.color-vineta2
                      | Control de calidad no se compara con la industria farmacéutica. 

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
       h2 1.1 Formas farmacéuticas de los preparados magistrales tópicos no estériles

    .row.mb-5
      p Las preparaciones magistrales tópicas no estériles se pueden presentar en diferentes formas:

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--morada.p-3.p-lg-5
        h4.text-center.mb-5 Formas farmacéuticas
        .row.justify-content-center
          .col-lg-4.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')(style="width:40%")

              .tarjeta.tarjeta--blanca3.p-4
                h4.text-center.mt-3 Semisólidas
                ul.lista-ul--color.fa-ul2
                  li 
                    i.fas.fa-check
                    | Crema.
                  li 
                    i.fas.fa-check
                    | Gel.
                  li 
                    i.fas.fa-check
                    | Ungüento.
                  li 
                    i.fas.fa-check
                    | Pasta.
                  li 
                    i.fas.fa-check
                    | Pomadas.

          .col-lg-4.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')(style="width:40%")

              .tarjeta.tarjeta--blanca3.p-4
                h4.text-center.mt-3 Líquidas
                ul.lista-ul--color.fa-ul2
                  li 
                    i.fas.fa-check
                    | Soluciones orales.
                  li 
                    i.fas.fa-check
                    | Soluciones tópicas (piel).

          .col-lg-4.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img23.svg' alt='AvatarTop')(style="width:40%")

              .tarjeta.tarjeta--blanca3.p-4
                h4.text-center.mt-3 Sólidas
                ul.lista-ul--color.fa-ul2
                  li 
                    i.fas.fa-check
                    | Polvos.

    .row.mb-5
      p Observemos algunos ejemplos de las formas farmacéuticas de las preparaciones magistrales:

    .row.justify-content-center.align-items-center
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta--azul2.p-4
          .row.justify-content-center.mb-3
            img(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')

          p #[b Indicación:] piel seca.
          p #[b Forma farmacéutica:] líquida - gotas.

        .tarjeta--azul2.p-4
          .row.justify-content-center.mb-3
            img(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')

          p #[b Indicación:] tratamiento de la dermatitis y la soriasis.
          p #[b Forma farmacéutica:] semisólida - crema.

        .tarjeta--azul2.p-4
          .row.justify-content-center.mb-3
            img(src='@/assets/curso/temas/tema1/img26.svg' alt='AvatarTop')

          p #[b Indicación:] cicatrización.
          p #[b Forma farmacéutica:] semisólida - ungüento.

        .tarjeta--azul2.p-4
          .row.justify-content-center.mb-3
            img(src='@/assets/curso/temas/tema1/img27.svg' alt='AvatarTop')

          p #[b Indicación:] piel seca y comezón.
          p #[b Forma farmacéutica:] líquida - tónico facial.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
       h2 1.2 Unidades básicas de medidas

    .row.justify-content-center.align-items-center.mb-5
      .col-5.col-lg-1.mb-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img28.svg', alt='alt')      

      .col-lg-11.mt-4.mb-lg-5
        p A medida que ha pasado la historia, se han utilizado distintas unidades y sistemas de medida, pero actualmente dichas normas se han estandarizado gracias a organizaciones reconocidas a nivel internacional. Se conoce que durante la undécima Conferencia Internacional de Pesas y Medidas que tuvo lugar en 1960, fue aprobado el Sistema Internacional de Unidades (SI).

    .tarjeta--morada.p-4.mb-5
      .row.justify-content-center
        .col-8.col-lg-4.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img29.svg', alt='alt').img29-tm1 

        .col-lg-8.mt-4
          p En todo lo relacionado con los nombres y símbolos de las unidades se determinaron algunas normas:

          ul.lista-ul--color.fa-ul2
            li 
              i.fas.fa-check
              | Los nombres de las unidades se deben escribir con minúscula.
            li 
              i.fas.fa-check
              | El símbolo de cada unidad es único.
            li 
              i.fas.fa-check
              | No se debe poner punto final a los símbolos.
            li 
              i.fas.fa-check
              | Los símbolos de las unidades cuyo nombre proviene de un nombre propio son mayúsculas; cuando no es así, son minúsculas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Es así como, para el contexto de la atención al cliente de servicios farmacéuticos, las respuesLas formas farmacéuticas sólidas (polvos, comprimidos, etc.) se deben medir en peso y las formas farmacéuticas líquidas en unidades de volumen. Para estas mediciones se debe utilizar el sistema métrico decimal.tas y acciones deben ser claras, veraces y, sobre todo, humanizadas.    

        p Las soluciones como los jarabes, las cuales se administran por vía oral, pueden venir acompañados de cucharas para su dosificación, las cuales pueden llenarse más o menos, no son muy exactas, por eso en algunos casos se prefiere el uso de jeringas para su medición. Si el medicamento no cuenta con la cuchara dosificadora, pueden utilizarse las medidas domésticas que se plantean en la siguiente tabla. Si la dosis viene definida en gotas, el tamaño puede variar dependiendo de la viscosidad de la solución, del cuentagotas, etc. Si con el medicamento no se proporciona ningún cuentagotas o especifica una equivalencia diferente, se asume la equivalencia planteada en la tabla.

      .col-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img30.svg', alt='alt')      

    .row.justify-content-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1
        br
        i Unidades de medida y equivalencias. 

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tabla-a.color-secundario
          table
            thead(style='background-color: #E5DFF9')
              tr
                th 
                th Unidad
                th Abreviatura
                th Unidad equivalente
                th Abreviatura
            tbody
              tr
                <td rowspan="3">Peso</td> 
                td 1 kilogramo
                td 1 k
                td 1000 gramos
                td 1000 g
              tr
                td 1gr
                td 1 g
                td 1000 miligramos
                td 1000 mg

              tr
                td 1 miligramo
                td 1 mg
                td 1000 microgramos
                td 1000 μg / mcg

              tr
                <td rowspan="4">Volumen</td> 
                td 1 litro
                td 1 l
                td 1000 mililitros
                td 1000 ml
              tr
                td 1 litro
                td 1 l
                td 1000 centímetros cúbicos
                td 1 cc / cm3

              tr
                td 1 mililitro
                td 1 ml
                td 1 centímetro cúbico
                td 1 cc / cm3

              tr
                td 1 mililitro
                td 1 ml
                td 1000 microlitros
                td 1000 μl

              tr
                <td rowspan="7">Doméstico</td> 
                td 1 cucharada café
                td
                td 2,5 mililitros
                td 2,5 ml
              tr
                td 1 cucharada postre
                td 
                td 5 mililitros
                td 5 ml

              tr
                td 1 cucharada sopera
                td 
                td 10 – 15 mililitros
                td 10 – 15 ml

              tr
                td 1 gota
                td 
                td 0,05 mililitros
                td 0,05 ml
              tr
                td 1 gota
                td 
                td 3 microgotas
                td 3 μgotas
              tr
                td 20 gotas
                td 
                td 1 mililitros
                td 1 ml
              tr
                td 60 microgotas
                td 60 μgotas
                td 1 mililitros
                td 1 ml


    separador
    #t_1_3.titulo-segundo.color-acento-contenido
       h2 1.3 Prescripción médica: concepto, interpretación

    .row.mb-5
      p A continuación, se presenta la información y elementos relacionados con fórmulas de preparaciones magistrales:

    .row.justify-content-center.mb-5
      .tarjeta.tarjeta--morada.px-5.py-3
        SlyderA(tipo="b")
          .row
            .col-lg-7
              p De acuerdo con la normatividad colombiana, los formatos utilizados para las fórmulas de las preparaciones magistrales deben contener, por lo menos, los siguientes datos, cuando apliquen:

              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Nombre de prestador de servicios de salud o profesional de la salud que prescribe, dirección y número telefónico o dirección de correo electrónica.
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Lugar y fecha de la prescripción.
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Nombre del paciente y documento de identificación.
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Número de la historia clínica. 
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Tipo de usuario (contributivo, subsidiado o particular).
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Nombre del medicamento expresado en la denominación común internacional (nombre genérico). 
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Concentración y forma farmacéutica.
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Vía de administración. 
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Dosis y frecuencia de administración. 
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Período de duración del tratamiento. 
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Cantidad total de unidades farmacéuticas requeridas para el tratamiento, en números y letras.
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Indicaciones que a su juicio considere el prescriptor. 
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Vigencia de la prescripción.
                li 
                  i.fas.fa-angle-right.color-vineta2
                  | Nombre y firma del prescriptor con su respectivo número de registro profesional.

            .col-10.col-lg-5
              figure.mt-5
                img(src='@/assets/curso/temas/tema1/img31.svg', alt='alt')

          .row
            p Formato ejemplo del contenido de una fórmula magistral.
            .col-lg-9
              h4.text-center Componentes fórmula magistral
              .tabla-a
                table
                  tbody
                    tr
                      td #[h4 Componentes]
                      td #[h4 Función de la fórmula]
                      td #[h4 Acción en la piel]
                    tr
                      td #[b Cera de abejas]
                      td Parte grasosa para formar la emulsión.
                      td Hidratación
                    tr
                      td #[b Alcohol cetílico]
                      td Espesante y emulsionante.
                      td Acción emoliente
                    tr
                      td #[b Aceite de almendras]
                      td Parte grasosa para formar la emulsión.
                      td Humectante
                    tr
                      td #[b Bórax]
                      td Emulsionante (permite la mezcla de grasas y agua).
                      td Limpia y exfolia
                    tr
                      td #[b Agua de rosas]
                      td Parte acuosa para formar la emulsión.
                      td Regenera, propiedades antiinflamatorias, antibacterianas

              .row.mt-3
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                    span.texto-negro Fórmula Magistral
                    .indicador--click(v-if="mostrarIndicador")
              
  

            .col-10.col-lg-3
              figure.mt-5
                img(src='@/assets/curso/temas/tema1/img32.svg', alt='alt')
              

          .row
            .col-lg-7
              p En el ejemplo previo, el médico definió que la cantidad a preparar es de 100g, por lo que el químico farmacéutico o el regente de farmacia deberán calcular los porcentajes basados en esta cantidad de la siguiente forma:

              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-check
                  p #[b Cera de abejas:]   21.1 %, para 100 g de producto, se debe pesar 21.1 gramos.
                li 
                  i.fas.fa-check
                  p #[b Alcohol cetílico:]   12.6 %, pesar 12.5 gramos.
                li 
                  i.fas.fa-check
                  p #[b Aceite de almendras:]   46.0 %, pesa 46 gramos.
                li 
                  i.fas.fa-check
                  p #[b Bórax:]   0.5 %, pesar 0,5 gramos.

              p Hasta aquí, la suma de los componentes es de 80.1 gramos. Al final dice que el agua de rosas es C.S.P (Cantidad suficiente para), con esta materia prima se deben completar los 100 gramos, es decir restar a los 100g los 80.1g

              p La cantidad de agua de rosas sería de 19.9 gramos.

            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/img33.svg', alt='alt')

          .row
            .col-lg-7
              p La cantidad de agua de rosas sería de 19.9 gramos.

              figure.mb-4
                img(src='@/assets/curso/temas/tema1/img34.svg', alt='alt')

            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema1/img35.svg', alt='alt')

    .row
      .col-lg-8
        ModalA(:abrir-modal.sync="modal1")
          .row
            .col-lg-10
              figure.mt-5
                img(src='@/assets/curso/temas/tema1/img32-1.svg', alt='alt')(style="width:80%")


    separador
    #t_1_4.titulo-segundo.color-acento-contenido
       h2 1.4 Concentraciones

    .row.justify-content-center-mb-5
      p En las preparaciones magistrales, las concentraciones de los productos farmacéuticos se pueden expresar de dependiendo de las formas farmacéuticas, como se presenta a continuación:

    .row.justify-content-center.mb-5
      TabsB.color-primario
        .py-4.py-md-5(titulo="Masa/Volumen" :icono="require('@/assets/curso/temas/tema1/img36.svg')")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Masa/Volumen
              p Es una forma fácil de expresar una concentración.
              p Cuando se dice que un medicamento tiene una concentración de 5 mg/ml, quiere decir que hay 5 mg de fármaco (soluto) por cada ml de volumen de la disolución. 
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img37.svg', alt='Texto que describa la imagen')

        .py-4.py-md-5(titulo="Porcentaje (%)" :icono="require('@/assets/curso/temas/tema1/img38.svg')")
          .row
            .col-md-6
              h4 Porcentaje (%)
              p Es un indicador de las cantidades de soluto (fármaco) que hay en 100 unidades de la disolución. 
              p Se expresa de diferentes maneras:

              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-circle.color-vineta1
                  | #[b Porcentaje peso en peso:] g de soluto/100 g de disolución.
                li 
                  i.fas.fa-circle.color-vineta1
                  | #[b Porcentaje peso en volumen:] g de soluto/100 ml de disolución.  
                li 
                  i.fas.fa-circle.color-vineta1
                  | #[b Porcentaje volumen en volumen:] ml de soluto/100 ml de disolución. Siempre que no se especifique, se sobreentiende que se trata de concentración de peso en volumen (g/100 ml).

            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img39.svg', alt='Texto que describa la imagen')


        .py-4.py-md-5(titulo="Razón" :icono="require('@/assets/curso/temas/tema1/img40.svg')")
          .row
            .col-md-6
              h4 Razón
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-circle.color-vineta1
                  | Determina las relaciones existentes entre las cantidades de soluto que hay en una cantidad determinada de disolución.
                li 
                  i.fas.fa-circle.color-vineta1
                  | Se expresa de la siguiente forma (5:10) o como una fracción (5/10). En caso de expresarlo como fracción, siempre se especifican las unidades de medida utilizadas.
                li 
                  i.fas.fa-circle.color-vineta1
                  | Cuando se expresa como razón, si no se especifican las unidades, se sobreentiende que se refiere a g de soluto por ml de volumen. 
            
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img41.svg', alt='Texto que describa la imagen')



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
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
