<template>
    <h4>{{ this.cityName }} 5 Day</h4>
</template>

<script>
export default {
  name: 'locationheader',

   props: ['cityName'],
}
</script>

<style lang="scss">
  h4{
    font-size:16px !important;
    font-weight:700 !important;
    color:#fff !important;
  }

</style>