<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistema de garantía de calidad
    .row.justify-content-center.align-items-center
      .col-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='alt')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Se debe tener documentado e implementado un sistema de garantía de calidad donde están definidas las políticas y objetivos de calidad del establecimiento y servicio farmacéutico. Garantizar su cumplimiento está bajo la responsabilidad del farmacéutico o químico farmacéutico y es de suma importancia que se involucren todos los colaboradores de la organización en todos niveles, para lo cual se deberán tener en cuenta las B.P.E. y control de calidad y todos los factores que impactan en la calidad del producto, como son los proveedores, distribuidores y prestadores de servicios. Es requisito fundamental que dicho sistema de calidad esté diseñado e implementado integralmente y debe estar totalmente documentado y ser evaluado continuamente
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
       h2 3.1 Requisitos del sistema de garantía de calidad
    .row.mb-5
      p(data-aos="fade-right") El sistema de garantía de calidad adecuado para la elaboración de preparaciones magistrales y oficinales, debe garantizar lo siguiente: 
    .row.justify-content-center.align-items-center
      .col-lg-11      
        .tarjeta--azul4.p-4(data-aos="fade-down")
          .row 
            .col-lg-10
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-circle.color-vineta1
                  | La preparación magistral debe cumplir con los requisitos de las B.P.E. y los controles de calidad de acuerdo con las indicaciones de las Farmacopeas y guías a nivel internacional que estén acreditadas.
                li 
                  i.fas.fa-circle.color-vineta1
                  | Se deben definir de manera muy clara, en los POS (Procedimiento Operativo Standard) las responsabilidades y competencias de los colaboradores.
                li 
                  i.fas.fa-circle.color-vineta1
                  | Todo el manejo y gestión de las materias primas y materiales de acondicionamiento que se realicen deben estar documentados y deben estar definidos los controles de calidad que se les deben realizar para evidenciar su cumplimiento. Dichos controles se deben extender a todas las fases del proceso y tener muy presente las calibraciones de instrumentos y equipos. 
                li 
                  i.fas.fa-circle.color-vineta1
                  | Que el producto terminado esté correctamente elaborado y controlado teniendo en cuenta los procedimientos operativos.
                li 
                  i.fas.fa-circle.color-vineta1
                  p.mb-0 Se debe contar con <i>Batch record</i> donde quede registrada la historia de cada uno de los lotes elaborados.
                li 
                  i.fas.fa-circle.color-vineta1
                  | Que estén definidos los parámetros para la aprobación de cada lote que se elabores de la preparación magistral, además de su almacenaje, distribución y manipulación posterior.
                li 
                  i.fas.fa-circle.color-vineta1
                  | Que la preparación magistral no se dispense hasta que el farmacéutico o químico farmacéutico responsable haya aprobado su total cumplimiento.
                li 
                  i.fas.fa-circle.color-vineta1
                  | Que se cuente con un procedimiento de auditoría interna que se ejecute en periodos determinados, con el objetivo de evaluar el grado de aplicación y conformidad de sus procedimientos. De estas auditorías surgen hallazgos o no conformidades que deben ser corregidas para que se asegure la mejora continua. 
                li 
                  i.fas.fa-circle.color-vineta1
                  | Que las desviaciones de calidad sean informadas, investigadas y registradas. Es importante generar un sistema para la implementación y el seguimiento de las acciones preventivas, correctivas y así poder verificar su efectividad. 
                li 
                  i.fas.fa-circle.color-vineta1
                  | Que exista un control de documentos y registros donde se le haga seguimiento a la aprobación y cambios que puedan generar impactos sobre la calidad de la preparación magistral. 
                li 
                  i.fas.fa-circle.color-vineta1
                  | Que exista un sistema para el tratamiento de las PQRS (Peticiones, Quejas, Reclamos y Sugerencias), además del proceso para el retiro (retirada) de productos farmacéuticos.
      .col-6.col-lg-1.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='alt').img2-tm3       
    separador
    #t_3_2.titulo-segundo.color-acento-contenido
       h2 3.2. Etiquetado preparaciones magistrales
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img3.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Un factor importante relacionado con las preparaciones magistrales tanto estériles como no estériles, es la correcta identificación del producto terminado y la información técnica que debe ir en este. Podemos destacar algunas ventajas de la rotulación, dentro de las que se encuentran: poder realizar la trazabilidad al producto, fácil reconocimiento en el área de almacenamiento, identificación por parte del usuario.
    .row.mb-0.mb-lg-5(data-aos="fade-left")
      p Los requisitos que debe cumplir la etiqueta de un producto magistral, son:
      ul.lista-ul--color.fa-ul2
        li 
          i.fas.fa-check
          | Deben ir situadas en los envases primarios y secundarios de fórmulas magistrales y preparados oficinales y se deben expresar de tal manera que sean legibles, que se comprendan fácilmente y de un material que garantice su duración para que no se deterioren en el tiempo.
        li 
          i.fas.fa-check
          | En el rótulo del envase primario debe estar presente la siguiente información: 

      ol.lista-ol--cuadro.fa-ul2
        li.ps-lg-4
          .lista-ol--cuadro__vineta
            span.texto-negro #[b a]
          | Denominación o nombre del preparado oficinal o, en su caso, de la fórmula magistral (Dicha fórmula debe estar descrita en un formulario de referencia como las farmacopeas u otros reconocidos internacionalmente).
        li.ps-lg-4
          .lista-ol--cuadro__vineta
            span.texto-negro #[b b]
          | Comunicar la composición cuantitativa y cualitativa de manera completa de los principios activos y de los excipientes presentes.
        li.ps-lg-4
          .lista-ol--cuadro__vineta
            span.texto-negro #[b c]
          | Cantidad dispensada, vía de administración y forma farmacéutica.
        li.ps-lg-4
          .lista-ol--cuadro__vineta
            span.texto-negro #[b d]
          | Número de registro en el libro recetario, o soporte que lo sustituya, de acuerdo con la legislación vigente de cada país.
        li.ps-lg-4
          .lista-ol--cuadro__vineta
            span.texto-negro #[b e]
          | Si son reparados oficinales debe tener el número de lote.
        li.ps-lg-4 
          .lista-ol--cuadro__vineta
            span.texto-negro #[b f]
          | Fecha de elaboración y plazo de validez. 
        li.ps-lg-4 
          .lista-ol--cuadro__vineta
            span.texto-negro #[b g]
          | Parámetros para su conservación y leyendas que faciliten su uso, como “Agítese antes de usar”, “Uso externo”, entre otros.
        li.ps-lg-4
          .lista-ol--cuadro__vineta
            span.texto-negro #[b h]
          | Si son fórmulas magistrales, debe ir el nombre del paciente. 
        li.ps-lg-4
          .lista-ol--cuadro__vineta
            span.texto-negro #[b i]
          | Establecimiento o servicio farmacéuticos que dispensó el preparado magistral, con la siguiente información: nombre completo, dirección donde está ubicado, teléfono y nombre del farmacéutico o químico farmacéutico. 
        li.ps-lg-4
          .lista-ol--cuadro__vineta
            span.texto-negro #[b j]
          p #[b Presentar las advertencias, como:] “Tóxico”, “No consuma alcohol”, “No usar durante el embarazo”, etc. “Manténgase fuera del alcance de los niños” u otras leyendas precautorias y de advertencias, cuando aplique, tales como “Uso externo”.
    .tarjeta--morada.p-4.mb-5
      .row.justify-content-center
        .col-8.col-lg-3.mb-4.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema3/img4.svg', alt='alt').img3-tm3
        .col-lg-9(data-aos="fade-left")
          p #[b Tengamos presente] que cuando el envase, por su tamaño, no permita la inclusión de todos los datos mencionados anteriormente, debe ir como mínimo:
          ul.lista-ul--color.fa-ul2
            li 
              i.fas.fa-check
              | Denominación o nombre del preparado oficinal o, en su caso, de la fórmula magistral (dicha fórmula debe estar descrita en un formulario de referencia como las farmacopeas u otros reconocidos internacionalmente).
            li 
              i.fas.fa-check
              | Comunicar la composición cuantitativa y cualitativa de manera completa de los principios activos y de los excipientes presentes.
            li 
              i.fas.fa-check
              | En caso de una posible confusión por la forma farmacéutica, debe ir la vía de administración.
            li 
              i.fas.fa-check
              | Número de registro en el libro recetario, o soporte que lo sustituya, de acuerdo con la legislación vigente de cada país.
            li 
              i.fas.fa-check
              | Si son reparados oficinales debe tener el número de lote.
            li 
              i.fas.fa-check
              | Fecha de elaboración y plazo de validez. 
            li 
              i.fas.fa-check
              p Establecimiento o servicio farmacéuticos que dispensó el preparado magistral, con la #[b siguiente información:] nombre completo, dirección donde está ubicado, teléfono y nombre del farmacéutico o químico farmacéutico.
    .row.mb-5
      p(data-aos="fade-right") La información que no pudo ser reportada en el rótulo debe ser entregada en otro documento, dirigida al paciente durante el proceso de dispensación de la fórmula médica del preparado magistral.
      p(data-aos="fade-right") A continuación, se presenta un ejemplo de lo que se espera sea un rótulo y un prospecto:
    TabsB.color-primario(data-aos="fade-down")
      .py-4.py-md-5(titulo="Modelo rótulo" :icono="require('@/assets/curso/temas/tema3/img5.svg')")
        .row
          figure
            img(src='@/assets/curso/temas/tema3/img6.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Modelo prospecto" :icono="require('@/assets/curso/temas/tema3/img7.svg')")
        .row
          figure
            img(src='@/assets/curso/temas/tema3/img8.svg', alt='Texto que describa la imagen')
    separador
    #t_3_3.titulo-segundo.color-acento-contenido
       h2 3.3 Fechas de vencimiento
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-md-auto
        figure
          img(src='@/assets/curso/temas/tema3/img9.svg', alt='alt')
      .col
        p Para determinar las fechas de vencimiento de las fórmulas magistrales tipificadas (que estén descritas en las farmacopeas o recetarios reconocidos internacionalmente), se debe contemplar y tener en cuenta la caducidad que esté reportada en las farmacopeas u otras referencias reconocidas internacionalmente. En el resto de las fórmulas magistrales la fecha de vencimiento se establece teniendo en cuenta la duración del tratamiento prescrito.
        p.mb-0 A continuación, se muestran algunos aspectos para tener en cuenta al momento de determinar las fechas de vencimiento de las preparaciones magistrales.
    .row.justify-content-center.align-items-center
      SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="fade-down")
        .tarjeta.tarjeta--azul3.p-4
          .row.justify-content-center
            h4 Periodo de validez
            p Es la fecha después de la cual un preparado farmacéutico no debe emplearse. Dado que éstos se preparan con la intención de dispensar para una administración inmediata o para almacenamiento a corto plazo, pueden asignarse períodos de validez en base a criterios diferentes a los empleados para fijar la fecha de vencimiento de los productos elaborados en la escala industrial.
        .tarjeta.tarjeta--azul3.p-4
          .row.justify-content-center
            h4 Periodo de validez
            ul.lista-ul--color.fa-ul2
              li 
                i.fas.fa-circle.color-vineta1
                | Preparaciones sólidas o líquidas no acuosas, a partir de una especialidad, fuente de principio activo: 25 % del tiempo remanente o 6 meses.
              li 
                i.fas.fa-circle.color-vineta1
                | Preparaciones sólidas o líquidas no acuosas, a partir de una especialidad, fuente de principio activo: 25 % del tiempo remanente o 6 meses.
              li 
                i.fas.fa-circle.color-vineta1
                | Preparaciones acuosas: 14 días en heladera.
              li 
                i.fas.fa-circle.color-vineta1
                p #[b Todas las demás preparaciones:] tiempo de duración de la terapia, 30 días o la que implique el médico como término para el tratamiento.
        .tarjeta.tarjeta--azul3.p-4
          .row.justify-content-center
            h4 Condiciones para garantizar la estabilidad de los productos farmacéuticos durante su almacenamiento.
            p Asegurar la integridad de la preparación durante el tiempo previsto para su uso.
            .row 
              .col-lg-5.mb-3
                .tarjeta.color-secundario--borde.p-2
                  .row
                    b.text-center Causas de alteraciones:
                    ul.lista-ul--color.fa-ul2
                      li 
                        i.fas.fa-circle.color-vineta1
                        | Agentes físicos.            
                      li 
                        i.fas.fa-circle.color-vineta1
                        | Agentes químicos.
                      li 
                        i.fas.fa-circle.color-vineta1
                        | Agentes biológicos.
              .col-lg-7.mb-3
                .tarjeta.color-secundario--borde.p-2
                  .row
                    b.text-center Método de conservación:
                    ul.lista-ul--color.fa-ul2
                      li 
                        i.fas.fa-circle.color-vineta1
                        | Proteger de la luz.            
                      li 
                        i.fas.fa-circle.color-vineta1
                        | Proteger del oxígeno.
                      li 
                        i.fas.fa-circle.color-vineta1
                        | Proteger de la humedad.
                      li 
                        i.fas.fa-circle.color-vineta1
                        | Proteger de los microorganismos.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido
       h2 3.4 Control de calidad de las preparaciones magistrales
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img10.svg', alt='alt')
      .col-lg-9(data-aos="fade-left")
        p Uno de los aspectos más importantes durante el desarrollo de las Buenas Prácticas de Elaboración (B.P.E.) es garantizar que el producto a granel y el terminado, cumpla con todas las características y parámetros establecidos.
        p Para garantizar la calidad, se deberá aplicar paso a paso normas de B.PE; y examinar detalladamente los caracteres organolépticos de los preparados, un control de la rotulación y una serie de pruebas a realizar.
    .row.justify-content-center(data-aos="fade-right")
      .col-md-8.col-lg-6.mb-3
        .tarjeta-numerada2.color-acento-contenido.p-4
          .tarjeta-numerada__numero
            .h2.texto-blanco 1
          .row.justify-content-center.align-items-center.mb-4.ps-2
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema3/img11.svg', alt='alt')
            .col
              b La calidad de los preparados farmacéuticos depende de:
          ul.lista-ul--color.fa-ul2
            li 
              i.fas.fa-check
              | Materia prima de calidad. 
            li 
              i.fas.fa-check
              | Cálculos correctos. 
            li 
              i.fas.fa-check
              | Mediciones exactas y precisas.
            li 
              i.fas.fa-check
              | Procedimientos apropiados. 
            li 
              i.fas.fa-check
              | Un correcto juicio del farmacéutico a la hora de definir si el preparado cumple o no con las especificaciones técnicas.
      .col-md-8.col-lg-6.mb-3
        .tarjeta-numerada2.color-secundario.p-4
          .tarjeta-numerada__numero
            .h2.texto-blanco 2
          .row.justify-content-center.align-items-center.mb-4.ps-2
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema3/img12.svg', alt='alt')
            .col
              b Pruebas de control de calidad:
          .row
            .col-lg-6
              b Cápsulas y comprimidos:
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-check
                  | Uniformidad de peso.
                li 
                  i.fas.fa-check
                  | Test de desintegración. 
                li 
                  i.fas.fa-check
                  | Caracteres externos.
              b Soluciones y suspensiones:
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-check
                  | Aspecto.
                li 
                  i.fas.fa-check
                  | pH.
                li 
                  i.fas.fa-check
                  | Hermeticidad.
            .col-lg-6
              b Preparados semisólidos:

              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-check
                  | Homogeneidad.
                li 
                  i.fas.fa-check
                  | pH.   
                li 
                  i.fas.fa-check
                  | Peso.
                li 
                  i.fas.fa-check
                  | Tipo de emulsiones.
    separador
    #t_3_5.titulo-segundo.color-acento-contenido
       h2 3.5 Entes reguladores
    .row.justify-content-center.align-items-center.py-4(data-aos="fade-left")
      .col-lg-9
        .tarjeta--azul1.p-4
          .row.justify-content-center.align-items-center
            .col-8.col-lg-4.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img13.svg', alt='alt').img13-tm3
            .col-lg-8
              b.mb-0 El ente regulatorio encargado del seguimiento, auditoría y de otorgar la certificación es el Instituto Nacional de Vigilancia de Medicamentos y Alimentos INVIMA.

</template>

<script>
export default {
  name: 'Tema3',
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
