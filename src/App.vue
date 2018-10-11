<!-- this component holds router view and is the base component for the app -->
<template>
  <div>
    <div id="app">
      <Sidebar v-on:setState="onSetState" :currentWeather="currentWeatherData"/>
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar/Molecules/Sidebar";
import LocationHeader from "@/components/Weather/Atoms/LocationHeader";
import Day from "@/components/Weather/Molecules/Day";

export default {
  name: "app",
  data: function() {
    return {
      concatedCity: String,
      cityName: String,
      stateName: "NY",
      numDaysToReturn: 5,
      //replace this with .env variable to hide key before production
      geoLocateKey: "AIzaSyAjOSLkyD5mrpF870GVJwVVDpsbgAhH8lk",
      openWeatherMapKey: "",
      geoData: {},
      weeklyWeatherData: {},
      currentWeatherData: {}
    };
  },
  mounted() {
    //testing purposes only - remove before prod
    this.cityName = "Niagara Falls";
  },
  watch: {
    concatedCity: function() {
      this.queryGeoData();
    },
    cityName: function() {
      this.joinCity();
    },
    //remove this after adding search button to initiate search
    //reminder: also be sure to prevent double clicks
    geoData: function() {
      this.initSearch();
    }
  },
  methods: {
    onSetState(val) {
      this.stateName = val;
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
    convertKtoF() {
      const celsius = val - 273;
      let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
      return fahrenheit;
    },
    initSearch() {
      this.getWeeklyWeather();
      this.getCurrentWeather();
    },
    getWeeklyWeather() {
      let searchWeekString =
        "//api.openweathermap.org/data/2.5/forecast/daily?lat=" +
        this.geoData.lat +
        "&lon=" +
        this.geoData.lng +
        "&cnt=" +
        this.numDaysToReturn +
        "&APPID=7030c411998be2c8f9f5443cea8bcb3b";
      this.$http.get(searchWeekString).then(response => {
        let data = response;
        this.weeklyWeatherData = data;
      });
    },
    getCurrentWeather() {
      let searchCurrentString =
        "//api.openweathermap.org/data/2.5/weather?lat=" +
        this.geoData.lat +
        "&lon=" +
        this.geoData.lng +
        "&APPID=7030c411998be2c8f9f5443cea8bcb3b";
      this.$http.get(searchCurrentString).then(response => {
        let data = response;
        this.currentWeatherData = data;
      });
    }
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

//pages
#home {
  height: 100vh;
  width: 100vw;
}

//organisms
#main--results {
  padding: 20px 20px 0 20px;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

//moles
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
</style>
 