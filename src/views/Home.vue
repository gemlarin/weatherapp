<!-- this component holds the main view -->
<template>
  <div id="home">
    <div id="main--results" class="d-flex flex-column">
      <LocationHeader :location="location"/>
      <div class="list--days flex-fill" v-for="(day, index) in days" :key="index">
          <Day :day="day" :index="index" :overview="overview[index]" :hightemp="hightemp[index]" :lowtemp="lowtemp[index]"/>
      </div>
    </div>
  </div>
</template>

<script>
import LocationHeader from '@/components/Weather/Atoms/LocationHeader'
import Day from '@/components/Weather/Molecules/Day'

export default {
  name: 'home',
  data: function () {
    return {
      location:"Las Vegas",
      days:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      hightemp:['60f', '62f', '67f', '70f', '69f', '71f', '74f'],
      lowtemp:['33f', '42f', '38f', '41f', '48f', '58f', '57f'],
      overview:[
        'overview one',
        'overview one',
        'overview one',
        'overview one',
        'overview one',
        'overview one',
        'overview one'
      ]
    }
  },
  props:{

  },
  components:{
    LocationHeader,
    Day
  }
}
</script>

<style lang="scss">

</style>