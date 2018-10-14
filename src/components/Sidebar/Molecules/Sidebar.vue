<template>  
    <div id="sidebar">
        <DrawerToggleButton v-if="showToggleBtn" className="drawerbutton"/>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <TodaysWeather :weeklyWeatherData="weeklyWeatherData"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <SelectMenu class="select--menu" v-on:setState="onSetState" />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="field--wrap-inline d-flex justify-content-between">
                        <InputField v-on:setCity="onSetCity" @keyup.enter.native="onStartSearch" />
                        <SearchBtn v-on:startSearch="onStartSearch" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DrawerToggleButton from '@/components/Sidebar/Atoms/DrawerToggleBtn.vue'
    import TodaysWeather from '@/components/Sidebar/Molecules/TodaysWeather.vue'
    import SelectMenu from '@/components/Sidebar/Atoms/SelectMenu.vue'
    import InputField from '@/components/Sidebar/Atoms/InputField.vue'
    import SearchBtn from '@/components/Sidebar/Atoms/SearchBtn.vue'
    import {TweenMax, Power4} from 'gsap'
    export default {
    name: 'sidebar',
    data(){
        return{
            selectedState:'',
            selectedCity:'',
            showToggleBtn:true
        }
    },
    mounted () {
        this.checkWindow();
        window.addEventListener("resize", () => {
            this.checkWindow();
        });
    },
    components:{
        DrawerToggleButton,
        SelectMenu,
        TodaysWeather,
        InputField,
        SearchBtn
    },
    computed: {
        open () {
            return this.$store.state.ui.sidebarOpen
        }
    },
    methods:{
        onSetState(val){
            this.selectedState = val;
            this.$emit('setState', this.selectedState)
        },
        onSetCity(val){
            this.selectedCity = val;
            this.$emit('setCity', this.selectedCity)
        },
        onStartSearch(){
            if(this.selectedState != '' && this.selectedCity != ''){
                this.$emit('startSearch')
            }
            else{
                alert('You must enter a city and state.')
            }
            var w = this.checkWindowWidth()
             if(w <= 991){
               
                this.showToggleBtn = true;
                TweenMax.set(this.$el, {
                    x: -300
                })
            }
            
        },
        checkWindowWidth(){
            let ww = window.innerWidth;
            return ww;
        },
        checkWindow(){
            var w = this.checkWindowWidth()
            if(w > 991){
                
                this.showToggleBtn = false;
                TweenMax.set(this.$el, {
                    x: this.$el.offsetWidth
                })
            }
            if(w <= 991){
               
                this.showToggleBtn = true;
                TweenMax.set(this.$el, {
                    x: this.$el.offsetWidth
                })
            }
            return
        }
    },
    watch: {
        open: function (open) {
            const dX = open ? 0 : this.$el.offsetWidth
            TweenMax.to(this.$el, 0.6, {
                x: dX,
                ease: Power4.easeOut
            })
        }
    },
    props: [
       'weeklyWeatherData',
       "isSearch"
    ]
}
</script>
<style lang="scss">
    #sidebar{
        position:absolute;
        width:300px;
        left:-300px;
        top:0;
        background: #21b5ef; /* Old browsers */
        background: -moz-linear-gradient(top, #2e65f0 0%, #1d51d4 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #2e65f0 0%,#1d51d4 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #2e65f0 0%,#1d51d4 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2e65f0', endColorstr='#1d51d4',GradientType=0 ); /* IE6-9 */
        height:100vh;
        z-index:300;
    }
    .field--wrap-inline{
        width:100%;
        
    }

</style>