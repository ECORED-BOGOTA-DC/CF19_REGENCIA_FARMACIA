<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Buenas prácticas
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='alt')
      .col-lg-8(data-aos="fade-left")
        p Es el conjunto de acciones coherentes que han demostrado ser eficaces y eficientes en algún periodo de tiempo en un contexto determinado y de las cuales se esperan resultados sostenibles en el tiempo.
        p La estandarización de las buenas prácticas en un factor importante para garantizar su éxito.
        .cajon.color-acento-contenido.p-4.mb-4
          p En el marco de las preparaciones magistrales, se habla de las Buenas Prácticas de Elaboración. (B.P.E.), mediante las cuales se garantizará que el producto elaborado cumpla con todos los requisitos que estas exigen y que se entregará un preparado que cumpla con parámetros de calidad y satisfaga las necesidades del usuario.   
        p Las BPE buscan, que en todo momento se tenga la posibilidad de revisar cada etapa del proceso, para poder identificar errores, y las causas que lo generaron para así poder corregirlo.
      p(data-aos="fade-right") Durante el monitoreo también se pueden evidenciar oportunidades de mejora que permitan optimizar cada uno de los procesos. Un monitoreo adecuado se logra si hay un sistema de registro de información ordenado y tomado a tiempo.
      p(data-aos="fade-right") Los requisitos generales de las B.P.E. abarcan varios aspectos importantes y cada uno de ellos tienen unos requisitos específicos que cumplir. Dichos aspectos son los siguientes:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Imagen que contiene un esquema de los requisitos generales de las B.P.E.')      
    .row.mb-5
      p(data-aos="fade-right") Las buenas prácticas de elaboración se rigen por medio del cumplimiento de los siguientes ejes:
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.tarjeta--morada2.p-4
          .row.justify-content-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img3.svg', alt='')
          h3.text-center.mt-4 Instalaciones
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.tarjeta--morada2.p-4
          .row.justify-content-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img4.svg', alt='')
          h3.text-center.mt-4 Personal
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.tarjeta--morada2.p-4
          .row.justify-content-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img5.svg', alt='')
          h3.text-center.mt-4 Equipos y utensilios
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.tarjeta--morada2.p-4
          .row.justify-content-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', alt='')
          h3.text-center.mt-4 Materias primas
      .col-sm-6.col-lg-3
        .tarjeta--boton.tarjeta--morada2.p-4
          .row.justify-content-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img7.svg', alt='')
          h3.text-center.mt-4 Documentación
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .tarjeta.color-secundario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/tema2/img8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.texto-blanco.mt-3 Con el propósito de tener claro cuáles son las normativas de las buenas prácticas de elaboración, se invita al aprendiz a consultar el capítulo III - numeral 2 de la Resolución 1403 de 2007 de la sección de material complementario.
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_CF019_Resolución_1403_de_2007.pdf')" target="_blank")
                  span.texto-negro Descargar
                  i.fas.fa-file-download.texto-negro
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .tarjeta.color-secundario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-auto
            img(src="@/assets/curso/temas/tema2/img8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.texto-blanco.mt-3 Es importante conocer cuáles son los instrumentos de verificación para las B.P.E., por ello se invita al aprendiz a consultarlos en la Resolución 444 de 2008 de la sección de material complementario
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_CF019_Resolución_444_de_2008.pdf')" target="_blank")
                  span.texto-negro Descargar
                  i.fas.fa-file-download.texto-negro
    .row.mb-4
      p A continuación, se podrán conocer los requisitos de las B.P.E
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-titulo1.py-2.ps-2.pe-4
        h4.mb-0 Requisitos de las instalaciones
    .bg3.mb-5
      .row.mb-5
        p.mt-4(data-aos="fade-right") Las instalaciones del establecimiento o servicio farmacéutico donde se vayan a realizar las preparaciones magistrales deben cumplir con los siguientes requisitos:
      .row.justify-content-center.align-items-center.mb-5  
        .tarjeta.tarjeta--morada.p-4(data-aos="fade-down")
          PasosB.color-secundario.p-5
            .row(titulo="Requisitos instalaciones")
              .col-lg-7.mb-4.mb-lg-0
                h4 Requisitos instalaciones
                p El área destinada a la preparación de fórmulas magistrales debe disponer de:
                .row.justify-content-center 
                  .col-auto.col-lg-2
                    figure.mt-4
                      img(src='@/assets/curso/temas/tema2/img9.svg', alt='alt')
                  .col-lg-10
                    ol.lista-ol--cuadro
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span A
                        | Una oficina.                        
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span B
                        | Área independiente de dispensación y elaboración. 
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span C
                        | Bodega independiente.
                      li.d-flex
                        .lista-ol--cuadro__vineta
                          span D
                        | Área independiente de vestier e instalaciones sanitarias.
                    .row.justify-content-center
                      .col-auto.mb-3
                        .tarjeta.color-secundario.px-3.py-2
                          p.texto-blanco.mb-0 Laboratorio
                      .col-auto.mb-3
                        .tarjeta.color-secundario.px-3.py-2
                          p.texto-blanco.mb-0 Secuencia lógica
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema2/img10.svg', alt='alt')
            .row(titulo="Funcionamiento del proceso")
                h4 Funcionamiento del proceso
                p Para un correcto funcionamiento del proceso, las instalaciones deben garantizar lo siguiente:
                figure.mt-5
                  img(src='@/assets/curso/temas/tema2/img11.svg', alt='alt')
            .row(titulo="Control temperatura")
              .col-lg-7.mb-4.mb-lg-0
                h4 Control temperatura
                p Organización de las instalaciones con el objetivo de garantizar el correcto funcionamiento de los procesos.
                p Según los requerimientos específicos de cada producto, se debe tener la temperatura controlada (aire acondicionado) para evitar deterioro de las materias primas, producto a granel y terminado.
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema2/img12.svg', alt='alt')
            .row(titulo="Control humedad")
              .col-lg-7.mb-4.mb-lg-0
                h4 Control humedad
                p Según los requerimientos específicos de cada producto, se debe tener la humedad controlada para evitar deterioro de las materias primas, producto a granel y terminado.
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema2/img13.svg', alt='alt')
            .row(titulo="Pisos y paredes ")
              .col-lg-7.mb-4.mb-lg-0
                h4 Pisos y paredes 
                p Todas las superficies (techos, paredes y pisos), deben ser lisas y sin grietas para facilitar la limpieza, desinfección y evitar la acumulación de suciedades. Es importante contar con protección frente a insectos y roedores.
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema2/img14.svg', alt='alt')
            .row(titulo="Prevención de riesgos")
              .col-lg-7.mb-4.mb-lg-0
                h4 Prevención de riesgos 
                p Contar con elementos para hacer frente a posibles accidentes, teniendo en cuenta que se manejan productos químicos.
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema2/img15.svg', alt='alt')
            .row(titulo="Iluminación adecuada")
              .col-lg-7.mb-4.mb-lg-0
                h4 Iluminación adecuada
                p Una iluminación adecuada que permita la correcta visualización de las materias primas, documentos y el desplazamiento por las áreas.
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema2/img16.svg', alt='alt')
            .row(titulo="Separación áreas")
              .col-lg-7.mb-4.mb-lg-0
                h4 Separación áreas
                p Con el objetivo de evitar la contaminación cruzada y la confusión, las áreas deben estar separadas (área administrativa, pesaje, recepción, almacenamiento, preparación, etc.).
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema2/img17.svg', alt='alt')
            .row(titulo="Mesa de trabajo")
              .col-lg-7.mb-4.mb-lg-0
                h4 Mesa de trabajo
                p El material debe ser resistente, de fácil limpieza, amplio, cómodo, ya que en este lugar se realizan las preparaciones.
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema2/img18.svg', alt='alt')
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-titulo1.py-2.ps-2.pe-4
        h4.mb-0 Requisitos del personal
    .row.mb-2
      p(data-aos="fade-right") Los requisitos para el personal involucrado en las preparaciones magistrales son:
      ul.lista-ul--color.fa-ul2(data-aos="fade-right")
        li 
          i.fas.fa-circle.color-vineta1
          | El director técnico debe ser un profesional químico farmacéutico quien sea responsable de los procesos de fabricación de fórmulas magistrales.
        li 
          i.fas.fa-circle.color-vineta1
          | El director técnico podrá delegar funciones al personal y estas deben ser explícitas, específicas y no tan numerosas de tal forma que se cumplan los objetivos de calidad y se eviten riesgos.
        li 
          i.fas.fa-circle.color-vineta1
          | El delegar funciones no lo exime de la responsabilidad.
    .row.justify-content-center.align-items-center.mb-5
      ImagenInfografica(data-aos="fade-down")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/img19.svg', alt='')
        .tarjeta.tarjeta--blanca.p-3(x="17%" y="22%" numero="")
          h3.text-center Calificación del personal
          figure.mb-4
            img(src='@/assets/curso/temas/tema2/img20.svg')
          ul.lista-ul--color.fa-ul2
            li 
              i.fas.fa-circle.color-vineta1
              | Todo el personal debe tener la calificación, competencia y experiencia.
            li 
              i.fas.fa-circle.color-vineta1
              | Seleccionar las personas que cumplan con el perfil.
            li 
              i.fas.fa-circle.color-vineta1
              | Capacitar muy bien al personal y hacer acompañamiento luego de esto.
            li 
              i.fas.fa-circle.color-vineta1
              | Recapacitar constantemente.
        .tarjeta.tarjeta--blanca.p-3(x="52%" y="17%" numero="")
          h3.text-center Capacitación
          figure.mb-4
            img(src='@/assets/curso/temas/tema2/img21.svg')
          ul.lista-ul--color.fa-ul2
            li 
              i.fas.fa-circle.color-vineta1
              | El proceso de capacitación inicia en el momento de la inducción al personal nuevo, cada vez que haya cambios en el listado básico de medicamentos, políticas de la empresa o temas de interés.
            li 
              i.fas.fa-circle.color-vineta1
              | Todo el material utilizado en las capacitaciones debe ser archivado (documentos, diapositivas, etc.).
        .tarjeta.tarjeta--blanca.p-3(x="77%" y="33%" numero="")
          h3.text-center Higiene y seguridad personal
          figure.mb-4
            img(src='@/assets/curso/temas/tema2/img22.svg')
          ul.lista-ul--color.fa-ul2
            li 
              i.fas.fa-circle.color-vineta1
              | El personal debe ingresar sin maquillaje, joyas o perfumes.
            li 
              i.fas.fa-circle.color-vineta1
              | Las uñas deben estar cortas para evitar la contaminación.
            li 
              i.fas.fa-circle.color-vineta1
              p.mb-0 Usar los <i>lockers</i> correctamente.
            li 
              i.fas.fa-circle.color-vineta1
              | Usar correctamente el uniforme y los EPP durante el ingreso y la permanencia dentro de las instalaciones.
            li 
              i.fas.fa-circle.color-vineta1
              | Si presenta enfermedades infectocontagiosas no hará parte del proceso productivo.
            li 
              i.fas.fa-circle.color-vineta1
              | No manipular materias primas ni equipos que no conozca.
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-titulo1.py-2.ps-2.pe-4
        h4.mb-0 Requisitos de los materiales y utensilios
    .row.mb-5
      p(data-aos="fade-right") Los requisitos para los materiales y utensilios involucrados en las preparaciones magistrales son:
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
      .col-md-6.col-xl-3.mb-4
        .tarjeta--boton2.p-4
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img23.svg', alt='')
          p Deben ser de tamaño adecuado a los fines de uso al que está destinado. Ha de estar sometido a una #[b revisión periódica y adecuada calibración.] Se verificará, cada vez, previo al inicio de un proceso de elaboración.
      .col-md-6.col-xl-3.mb-4
        .tarjeta--boton2.p-4
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img24.svg', alt='')
          p Deben ser elaborados en materiales que #[b se puedan lavar, sanitizar y esterilizar fácilmente.] Se tendrá presente que ninguna de las superficies que estarán en contacto con el producto, puedan afectar la calidad de este o de sus componentes.
      .col-md-6.col-xl-3.mb-4
        .tarjeta--boton2.p-4
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img25.svg', alt='')
          p Verificar que ningún #[b elemento que se utilice para el adecuado funcionamiento o mantención del equipo], instrumento o accesorio pueda reaccionar o contaminar el producto o sus componentes.
      .col-md-6.col-xl-3.mb-4
        .tarjeta--boton2.p-4
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img26.svg', alt='')
          p El instrumental y otros accesorios que intervienen en la elaboración y el control de calidad deben mantenerse limpios y en buenas condiciones de funcionamiento. Tanto las #[b operaciones de limpieza como su mantenimiento deben estar caracterizadas por su efectividad], se realizará según procedimientos que se especificarán por escrito. Se dispondrá que la limpieza se realice inmediatamente después del uso.
    .row.mb-4
      p(data-aos="fade-right") Algunos de los materiales necesarios para el proceso de producción, son
    .row.justify-content-center.align-items-center
      SlyderF.mb-5(columnas="col-md-6 col-xl-4")(data-aos="fade-down")
        .tarjeta--azul3.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img27.svg' alt='AvatarTop')
            b.text-center.mt-4 Microondas y placas de inducción
        .tarjeta--azul3.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img28.svg' alt='AvatarTop')
            b.text-center.mt-4 Emulsionador
        .tarjeta--azul3.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img29.svg' alt='AvatarTop')
            b.text-center.mt-4 Mesas para balanza antivibración
        .tarjeta--azul3.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img30.svg' alt='AvatarTop')
            b.text-center.mt-4 Campana de extracción
        .tarjeta--azul3.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img31.svg' alt='AvatarTop')
            b.text-center.mt-4 Agua desionizada
        .tarjeta--azul3.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img32.svg' alt='AvatarTop')
            b.text-center.mt-4 Balanza
        .tarjeta--azul3.p-4
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img33.svg' alt='AvatarTop')
            b.text-center.mt-4 Programa informático
    .bg4
      .row.mb-4(data-aos="fade-right")
        .col-auto.bg-titulo1.py-2.ps-2.pe-4
          h4.mb-0 Requisitos de las materias primas    
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-4(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema2/img34.svg')
        .col-lg-8.mt-4(data-aos="fade-left")
          p Uno de los componentes más importantes en el proceso, son las materias primas que se utilizan para la elaboración de las preparaciones magistrales, porque de estas depende la calidad del preparado, el cumplimiento con los parámetros de calidad y la eficacia del tratamiento.
          p Se debe tener mucho cuidado con la procedencia de las materias primas y material de acondicionamiento, estos deben cumplir con las especificaciones definidas por el establecimiento o servicio farmacéutico.
        p.mt-3 Toda materia prima, envase y empaque que ingrese, debe pasar por las siguientes etapas:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-8.col-lg-4
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema2/img35.svg')
            .tarjeta.tarjeta--morada
              .p-2.py-3
                p.mb-0 Recepción y cuarentena.
        .col-md-8.col-lg-4
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema2/img36.svg')
            .tarjeta.tarjeta--morada
              .p-2.py-3
                p.mb-0 Aprobación y rechazo.
        .col-md-8.col-lg-4
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema2/img37.svg')
            .tarjeta.tarjeta--morada
              .p-2.py-3
                p.mb-0 Identificación y almacenamiento.
      .row.mb-5
        p(data-aos="fade-right") A continuación, se amplía la explicación de cada una de las etapas.
    .row.mb-1
      .titulo-sexto.color-acento-contenido.mb-3
        p.mb-0 #[b Tabla 2]. Etapas materias primas y material de acondicionamiento.
    .row.justify-content-center.align-items-center 
      .col-lg-10
        .tabla-a.color-secundario.mb-5(data-aos="fade-right")
          table
            thead
              tr
                <th style="background-color: #E5DFF9 !important">Materias primas - bases</th>
                <th style="background-color: #E5DFF9 !important">Material de envase o acondicionamiento</th>
            tbody
              tr.text-center
                <td colspan="2" style="background-color: #DCFBFF !important"><b>Recepción y cuarentena</b></td>
              tr
                <td colspan="2"> En la etapa de recepción se debe verificar la integridad, aspecto y etiquetado de los envases. Como etapa siguiente, deberán registrarse y poner en cuarentena en espacio determinado para ello, hasta su aprobación o rechazo. Este lugar está separado, delimitado y señalizado por este fin.</td>
              tr.text-center
                <td colspan="2" style="background-color: #DCFBFF !important"><b>Aprobación o rechazo</b></td>
              tr
                td En esta etapa se envía una muestra laboratorio externo contratado quien analiza las muestras de acuerdo con especificaciones internas o según USP, y emite el certificado, con el cual se aprueba o rechazan las materias primas o bases. Y aseguramiento de calidad emite los rótulos de aprobado o rechazo.
                td Aseguramiento de calidad realiza el análisis de los materiales de envase o acondicionamiento, y emite los rótulos de aprobado o rechazo.
              tr.text-center
                <td colspan="2" style="background-color: #DCFBFF !important"><b>Identificación y almacenamiento</b></td>
              tr
                <td colspan="2"> Cada una de las materias primas, bases o material de envase y acondicionamiento deben estar identificados y ubicados de acuerdo con su Estado (cuarentena, aprobado), y ubicados en su respectiva bodega de acuerdo con el direccionamiento que el jefe de laboratorio ordene.</td>
    .row.mb-5(data-aos="fade-right")
      .col-auto.bg-titulo1.py-2.ps-2.pe-4
        h4.mb-0 Requisitos de la documentación
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/temas/tema2/img38.svg', alt='alt')
      .col-lg-8(data-aos="fade-left")
        p El éxito de todo proceso depende de la correcta ejecución de los colaboradores que intervienen en él, es por esto que cobra mucha importancia el proceso documental, por medio del cual todas las actividades son documentadas con el objetivo de que todo el personal ejecute las tareas de la misma forma; los datos y resultados son registrados para dejar evidencia de su realización.
        p La documentación es una parte esencial de la Garantía de la Calidad y se relaciona con todos los aspectos de la B.P.E.
        .cajon.color-acento-contenido.p-4.mb-4
          h5 La documentación es la base de las B.P.E 
          p.mb-0 Se establecen documentos como manuales, procedimientos, instructivos, formatos, previamente revisados y aprobados con el fin de garantizar que las operaciones de fabricación de fórmulas magistrales se llevaron a cabo de manera adecuada, permitiendo así la trazabilidad de la información y facilitando investigaciones en caso de requerirlas.
      p Algunas de las recomendaciones más importantes para el manejo de la documentación son las siguientes:
    .row.mb-5(data-aos="fade-right")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-4
          .tarjeta-numerada__numero
            .h2 1
          .row.justify-content-center.align-items-center
            .col-6
              figure.mb-4
                img(src='@/assets/curso/temas/tema2/img39.svg', alt='alt')
          p Registrar los datos inmediatamente después de finalizar la actividad.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-4
          .tarjeta-numerada__numero
            .h2.texto-blanco 2
          p Cada vez que se cometa un error a la hora de registrar la información se debe corregir colocando una línea oblicua de tal manera que el error sea visible y colocar la firma autorizada de quien corrige, la fecha, y la información correcta.
          .row.justify-content-center.align-items-center
            .col-auto
              figure.mb-4
                img(src='@/assets/curso/temas/tema2/img39-1.svg', alt='alt')
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-4
          .tarjeta-numerada__numero
            .h2 3
          .row.justify-content-center.align-items-center
            .col-6
              figure.mb-4
                img(src='@/assets/curso/temas/tema2/img39.svg', alt='alt')
          p No se permite la corrección de errores de personas diferentes a quien registró la información original.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-4
          .tarjeta-numerada__numero
            .h2 4
          .row.justify-content-center.align-items-center
            .col-6
              figure.mb-4
                img(src='@/assets/curso/temas/tema2/img39.svg', alt='alt')
          p Todo espacio en blanco debe ser cerrado con una línea o N/A.
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-auto
        figure
          img(src='@/assets/curso/temas/tema2/img40.svg', alt='alt')
      .col
        p Para un 
          spam.texto-azul #[b correcto diligenciamiento de la documentación] 
          |  se deben tener instructivos donde se detallen como hay que registrar la información. A continuación, podrán observar algunos ejemplos de la documentación que se utiliza durante el proceso de elaboración de las preparaciones magistrales.
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton3.tarjeta--morada4.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/img41.svg', alt='')
          .row
            b.text-center.mb-4 Especificaciones de las materias primas
          .row.justify-content-center.mt-3
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span.texto-negro Ver formato
                .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal1")
            .row.justify-content-center.align-items-center
              figure
                img(src='@/assets/curso/temas/tema2/img45.svg', alt='Imagen con un formato de especificaciones de las materias primas, el cual contiene los datos de identificación, especificaciones, conservación/manipulación, entre otros.')(style="width:550px").m-auto
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton3.tarjeta--morada4.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/img42.svg', alt='')
          .row
            b.text-center.mb-5 Registro materias primas
          .row.justify-content-center.mt-3
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                span.texto-negro Ver formato
                .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal2")
            .row.justify-content-center.align-items-center
              figure
                img(src='@/assets/curso/temas/tema2/img46.svg', alt='Imagen con un formato de registro de materias primas, el cual contiene los datos de identificación y los complementarios. ')(style="width:750px").m-auto
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton3.tarjeta--morada4.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/img43.svg', alt='')
          .row
            b.text-center Documento registro del material de acondicionamiento
          .row.justify-content-center.mt-3
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                span.texto-negro Ver formato
                .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal3")
            .row.justify-content-center.align-items-center
              figure
                img(src='@/assets/curso/temas/tema2/img47.svg', alt='Imagen con un formato de documento de registro del material de condicionamiento, el cual contiene los datos de identificación, los complementarios y los de evaluación.')(style="width:650px").m-auto
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton3.tarjeta--morada4.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema2/img44.svg', alt='')
          .row
            b.text-center.mb-4 Registro fórmula farmacéutica
          .row.justify-content-center.mt-3
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                span.texto-negro Ver formato
                .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal4")
            .row.justify-content-center.align-items-center
              figure
                img(src='@/assets/curso/temas/tema2/img48.svg', alt='Imagen con un formato de registro fórmula médica, el cual contiene los datos del registro de la fórmula, como son el nombre, forma farmacéutica / vía administración, lote, caducidad, entre otros.')(style="width:750px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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
