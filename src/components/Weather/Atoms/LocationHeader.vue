<template>
    <h4>7 day forecast for {{ this_location }}</h4>
</template>

<script>
export default {
  name: 'locationheader',
  data: function () {
    return {
      this_location:this.location
    }
  },
   props: ['location'],
}
</script>

<style lang="scss">


</style>