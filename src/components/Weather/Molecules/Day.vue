<template>

    <div class="card card--day flex-grow-1">
        <p>Location: {{location}}</p>
        <p>Day: {{day}}</p>
        <p>Overview: {{overview}}</p>
        <p>High: {{hightemp}}</p>
        <p>Low: {{lowtemp}}</p>
    </div>
        
 
</template>

<script>
export default {
  name: 'locationheader',
  data: function () {
    return {
      this_location:this.location
    }
  },
   props: [
       'location',
       'day',
       'overview',
       'hightemp',
       'lowtemp',
       'weathericon'
    ],
}
</script>

<style lang="scss">

</style>