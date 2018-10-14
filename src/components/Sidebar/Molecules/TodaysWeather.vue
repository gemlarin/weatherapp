<template>
<div class="weather--block text-center">
    <h2>TODAY</h2>
    <p class="city--name">{{cityName}}</p>
    <div v-if="iconPath !=''">
        <div class="icon--wrap">
            <img class="weather--icon" :src="iconPath" />
        </div>
        <div class="condition">
            <p>{{condition}}</p>
        </div>
        <div class="temperature">
            <span>Low {{lowTemp}}&#176;</span><span>High {{highTemp}}&#176;</span>
        </div>
    </div>
</div>

</template>
<script>
    import image01d from  '@/assets/weather-icons/01d.svg'
    import image01n from  '@/assets/weather-icons/01n.svg'
    import image02d from  '@/assets/weather-icons/02d.svg'
    import image02n from  '@/assets/weather-icons/02n.svg'
    import image03d from  '@/assets/weather-icons/03d.svg'
    import image03n from  '@/assets/weather-icons/03n.svg'
    import image04d from  '@/assets/weather-icons/04d.svg'
    import image04n from  '@/assets/weather-icons/04n.svg'
    import image09d from  '@/assets/weather-icons/09d.svg'
    import image09n from  '@/assets/weather-icons/09n.svg'
    import image10d from  '@/assets/weather-icons/10d.svg'
    import image10n from  '@/assets/weather-icons/10n.svg'
    import image11d from  '@/assets/weather-icons/11d.svg'
    import image11n from  '@/assets/weather-icons/11n.svg'
    import image13d from  '@/assets/weather-icons/13d.svg'
    import image13n from  '@/assets/weather-icons/13n.svg'
    import image50d from  '@/assets/weather-icons/50d.svg'
    import image50n from  '@/assets/weather-icons/50n.svg'

    export default {

        name: 'todaysweather',
         data () {
            return {
                icon: String,
                iconPath:'',
                highTemp:0,
                lowTemp:0,
                cityName:'',
                forecast:'',
                condition:''
            }
        },
        methods:{
            convertKtoF(val){
                const celsius = val - 273
                let fahrenheit = Math.floor(celsius * (9/5) + 32)
                return fahrenheit;
            },
            intHighTemp(){
                let intHigh = this.weeklyWeatherData.body.list[0].temp.max
                let conversion =  this.convertKtoF(intHigh)
                this.highTemp = conversion
            },
            intLowTemp(){
                let intLow  = this.weeklyWeatherData.body.list[0].temp.min
                let conversion = this.convertKtoF(intLow)
                this.lowTemp = conversion
            },
            initCondition(){
                let data = this.weeklyWeatherData.body.list[0].weather[0].description
                this.condition = data
            },
            initCity(){
                let city = this.weeklyWeatherData.body.city.name
                this.cityName = city
            },
            selectWeatherIcon(){
                let val = this.weeklyWeatherData.body.list[0].weather[0].icon, 
                path
                switch(val) {
                    case '01d':
                        path = image01d
                        break;
                    case '01n':
                        path = image01n
                        break;
                    case '02d':
                        path = image02d
                        break;
                    case '02n':
                        path = image02n
                        break;
                    case '03d':
                        path = image03d
                        break;
                    case '03n':
                        path = image03n
                        break;
                    case '04d':
                        path = image04d
                        break;
                    case '04n':
                        path = image04n
                        break;
                    case '09n':
                        path = image09n
                        break;
                    case '09d':
                        path = image09d
                        break;
                    case '10n':
                        path = image10n
                        break;
                    case '10d':
                        path = image10d
                        break;
                    case '11n':
                        path = image11n
                        break;
                    case '11d':
                        path = image11d
                        break;
                    case '13n':
                        path = image13n
                        break;
                    case '13d':
                        path = image13d
                        break;
                    case '50n':
                        path = image50n
                        break;
                    case '50d':
                        path = image50d
                        break;
                    default: 
                }
                this.iconPath = path
            }
           
        },
        watch: {
            weeklyWeatherData: function() {
                this.selectWeatherIcon()
                this.intHighTemp()
                this.intLowTemp()
                this.initCity()
                this.initCondition()
            },
        },
        props: [
            'weeklyWeatherData'
        ]
    }
</script>
<style lang="scss">
    h2{
        font-size:22px !important;
        color:#fff !important;
        margin-bottom: 3px !important;;
        line-height:1.4rem !important;
    }
    .date{
        color:#fff;
        font-size:14px;
    }
    .weather--block{
        min-height:150px;
        position:relative;
        margin-top:15px;
    }
    .weather--icon{
        height:80px;
        width:auto;
        margin-top:10px
    }
    .icon--wrap{
        width:100%;
        height:80px;
        margin-bottom:15px;
    }
    .temperature{
        color:#fff;
        font-size:14px;
        span:nth-child(1){
            display:inline-block;
            margin-right:6px;
        }
        span:nth-child(2){
            display:inline-block;
            margin-left:6px;
        }
    }
    .condition{
        p{
            color:#fff;
            font-size:22px;
            margin-bottom:0;
        }
        p:first-letter {
            text-transform: uppercase;
        }
    }
    .city--name{
        font-size: 16px;
        color:#fff;
        margin-bottom:15px;
    }
</style>