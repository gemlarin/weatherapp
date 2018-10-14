<!-- this component holds router view and is the base component for the app -->
<template>
  <div>
    <div id="app">
      <div class="container--loader" v-if="searching">
        <img src="./assets/spinner.svg" alt="loading" />
      </div>
      <Sidebar v-on:setState="onSetState" v-on:setCity="onSetCity" v-on:startSearch="onStartSearch" :weeklyWeatherData="weeklyWeatherData"/>
      <router-view :weeklyWeatherData="weeklyWeatherData" />
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/Molecules/Sidebar";
import LocationHeader from "@/components/Weather/Atoms/LocationHeader";
import Day from "@/components/Weather/Molecules/Day";
import { GEO_KEY } from "@/components/Modules/keys.js"
import { OWM_KEY } from "@/components/Modules/keys.js"

export default {
  name: "app",
  data: function() {
    return {
      concatedCity: String,
      cityName: String,
      stateName: "NY",
      numDaysToReturn: 5,
      geoLocateKey: GEO_KEY,
      openWeatherMapKey: OWM_KEY,
      geoData: {},
      searching:true,
      weeklyWeatherData: {}
    };
  },
  mounted() {
    //init on load so something populates the fields
    //later tie this to getlocation
    this.cityName = "Niagara Falls";
    this.joinCity();
  },
  watch: {
    concatedCity: function() {
      this.queryGeoData();
    },
    //remove this after adding search button to initiate search
    //reminder: also be sure to prevent double clicks
    geoData: function() {
      this.searching = true;
      this.initSearch();
    }
  },
  methods: {
    onSetState(val) {
      this.stateName = val;
    },
    onSetCity(val) {
      this.cityName = val;
    },
    onStartSearch(){
      this.joinCity();
    },
    joinCity() {
      //some cities will have more than one word in name. To query the Geolocate API, we need to replace the spaces with a "+""
      let str = this.cityName;
      let replaced = str.split(" ").join("+");
      this.concatedCity = replaced;
    },
    queryGeoData() {
      let queryString =
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        this.concatedCity +
        "," +
        this.stateName +
        "&key=" +
        this.geoLocateKey;
      this.$http.get(queryString).then(response => {
        let data = response;
        this.geoData = data.body.results[0].geometry.location;
      });
    },
    convertKtoF(val) {
      const celsius = val - 273;
      let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
      return fahrenheit;
    },
    initSearch() {
      this.getWeeklyWeather();
    },
    getWeeklyWeather() {
      let searchWeekString =
        "//api.openweathermap.org/data/2.5/forecast/daily?lat=" +
        this.geoData.lat +
        "&lon=" +
        this.geoData.lng +
        "&cnt=" +
        this.numDaysToReturn +
        "&APPID=" + this.openWeatherMapKey;
      this.$http.get(searchWeekString).then(response => {
        let data = response;
        this.weeklyWeatherData = data;
        this.searching = false;
      });
    },
  },
  components: {
    LocationHeader,
    Day,
    Sidebar
  }
};
</script>

<style lang="scss">
//global styles
$primary-color: #333;
$secondary-color: #222;

#app{
	font-family: 'Open Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#home {
  height: 100vh;
  width: 100vw;
}

#main--results {
  padding: 20px 40px 0 60px;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.card.card--day {
  margin-top: 10px;
  padding: 20px;
}

//atoms
.weather--icon {
  img {
    height: 70px;
    width: auto;
  }
}

ul {
  padding-left: 0;
  li {
    list-style: none;
  }
}
.container--loader{
  height:100px;
  width:100px;
  background:#2e65f0;

  position:absolute;
  z-index:400;
  left:calc(50vw - 50px);
  top:calc(50vh - 50px);
  img{
    height:100px;
    width:100px;
  }
}
</style>
 