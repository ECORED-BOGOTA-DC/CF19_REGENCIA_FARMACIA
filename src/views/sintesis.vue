<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 La normatividad magistral de productos farmacéuticos son las regulaciones que establecen los lineamientos para la fabricación, control de calidad y dispensación de medicamentos personalizados en farmacias. Estas normas aseguran la seguridad y calidad de los productos magistrales.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema gráfico que resume lo abordado en el componente formativo, indicando lo relacionado con los conceptos generales y la normatividad magistrales, indicando su diagnóstico respectivo, el personal que dispensa al usuario, el cumplimiento de la información de la prescripción facultativa, las B.P.E., teniendo en cuenta que estos procedimientos se enfocan en fórmulas magistrales tópicas de uso humano y veterinario.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
