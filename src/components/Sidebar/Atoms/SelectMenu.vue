<template>
<div class="select-wrap">
<div class="state-select animated zoomIn">
    <!-- You can toggle select (disabled) -->
    <input type="radio" name="option">
    <i class="toggle icon icon-arrow-down"></i>
    <i class="toggle icon icon-arrow-up"></i>
    <span class="placeholder">Select state...</span>
    <StateList v-on:setState="onSetState" :state="state" v-for="(state, index) in states" :key="index"/>
</div>

</div>
     
</template>
<script>
    import StateList from './StateList.vue'
    export default {
        name: 'drowndown',
        data () {
            return {
                selectedState:String,
                states:["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"]
            }
        },
        components: {
            StateList
        },
        methods:{
            onSetState(val){
                this.selectedState = val;
                this.$emit('setState', this.selectedState)
            }
        }
    }
</script>
<style lang="scss">

        .select-wrap{
            max-height:200px;
            overflow:scroll;
            margin-top:40px;
        }
        .state-select {
        position: relative;
        overflow: hidden;
        display: block;
        margin: auto;
        width: 100%;
        overflow:scroll;
        border-bottom: 0px;
        border-radius: 3px;
        font-size: 12px;
        box-shadow: 0px 1em 2em -1.5em rgba(0, 0, 0, 0.5);
            label{
            margin-bottom: 0 !important;
            }
        }
        .state-select:not(:hover) > i.toggle.icon-arrow-down {
        display: block !important;
        }
        .state-select:not(:hover) > i.toggle.icon-arrow-up {
        display: none !important;
        }
        .state-select:not(:hover) label.option > input:not(:checked) ~ span.title {
            display: none !important;
        }
        .state-select > i.toggle {
            position: absolute;
            z-index: 4;
            right: 1.5em;
            top: 1.6em;
            color: #ccc;
        }
        .state-select .title,
        .state-select .placeholder {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            padding: 1.1em 2em;
            background: white;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            cursor: pointer;
        }
        .state-select > input {
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: block;
            opacity: 0;
            cursor: pointer;
        }
        .state-select > input:checked ~ i.toggle.icon-arrow-down {
        display: none;
        }
        .state-select > input:checked ~ i.toggle.icon-arrow-up {
        display: block;
        }
        .state-select > input:checked div.options label.option .title {
        display: none !important;
        }
        .state-select > input:not(:checked) {
        z-index: 4;
        }
        .state-select > input:not(:checked) ~ label.option > span.title {
        display: none;
        }
        .state-select > input:not(:checked) ~ i.toggle.icon-arrow-up {
        display: none;
        }
        .state-select > input:not(:checked) ~ i.toggle.icon-arrow-down {
        display: block;
        }
        .state-select > input:disabled {
        cursor: no-drop;
        }
        .state-select > span.placeholder {
        position: relative;
        z-index: 0;
        display: inline-block;
        width: 100%;
        color: #999;
        border-top: 0px;
        }
        .state-select label.option {
        display: block;
        overflow: hidden;
        z-index: 1;
        width: 100%;
        transition: all 1s ease-out;
        }
        .state-select label.option span.title {
        position: relative;
        z-index: 2;
        transition: background .3s ease-out;
        }
        .state-select label.option span.title i.icon {
        padding-right: 8px;
        color: #92a8d1;
        }
        .state-select label.option span.title:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.3);
        box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
        }
        .state-select label.option input {
        display: none;
        }
        .state-select label.option input:checked ~ span.title {
        position: absolute;
        display: block;
        z-index: 3;
        top: 0px;
        font-size: 12px;
        background: #fff;
        border-top: 0px;
        box-shadow: none;
        color: inherit;
        width: 100%;
        }
        .state-select label.option input:disabled ~ span.title {
        background: #f9f9f9 !important;
        color: #aaa;
        }
        .state-select label.option input:disabled ~ span.title:hover {
        color: #aaa;
        background: none;
        cursor: no-drop;
        }

 
</style>