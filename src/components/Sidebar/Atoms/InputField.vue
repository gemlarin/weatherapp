<template>
    <input class="form-control query animated zoomIn" v-model="queryTerm" placeholder="Search by keyword" type="text" /> 
</template>
<script>
    //import {clearSearchBus} from './../../main.js'
    export default {
        name: 'inputfield',
        // data () {
        //     return {
              
        //     }
        // },
        mounted(){
            // clearSearchBus.$on('clearsearch', () => {
            //     this.clear();
            // });
        },
        watch: {
            queryTerm: function (val) {
                this.$store.commit('setQueryTerm', val)
            }
        }
    }
</script>
<style lang="scss">
   input.query{
       margin-top:5px;
       height:42px;
       border-radius:3px;
       border-color:#fff;
       font-size:13px;
       padding-left:24px;
   }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        font-size:12px !important;
        opacity: 1; /* Firefox */
        color:#999 !important;
  
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
         font-size:12px !important;
         color:#999 !important;
      
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
         font-size:12px !important;
         color:#999 !important;
       
    }
</style>