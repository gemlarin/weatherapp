<!-- this component holds the main view -->
<template>
  <div id="home">
    <div id="main--results" class="d-flex flex-column">
      <LocationHeader :cityName="cityName"/>
      <div class="list--days" v-for="(index) in 5" :key="index">
          <Day :index="index" :weeklyWeatherData="weeklyWeatherData"/>
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
      cityName:''
    }
  },
  props:[
    'weeklyWeatherData'
  ],
    watch: {
      weeklyWeatherData: function() {
          this.initCity()
      },
  },
  components:{
    LocationHeader,
    Day
  },
  methods:{
    initCity(){
      let city = this.weeklyWeatherData.body.city.name
      this.cityName = city
    }
  }
}
</script>

<style lang="scss">
  #home{
    background-color:#0d39a8;
  }
  .list--days{
    margin-bottom:0;
  }
</style>