import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



describe('the concatedCity method', () => {
  let wrapper;
  let componentInstance;

  it('a two word city is concatonated', () => {
    wrapper = shallowMount(App);
    componentInstance = wrapper.vm;
    componentInstance.cityName = "Niagara Falls"
    componentInstance.joinCity();
    expect(componentInstance.concatedCity).to.be.equal('Niagara+Falls');
  });
  it('a three word city is concatonated', () => {
    wrapper = shallowMount(App);
    componentInstance = wrapper.vm;
    componentInstance.cityName = "Some Three Words"
    componentInstance.joinCity();
    expect(componentInstance.concatedCity).to.be.equal('Some+Three+Words');
  });
  it('a one word city is NOT concatonated', () => {
    wrapper = shallowMount(App);
    componentInstance = wrapper.vm;
    componentInstance.cityName = "Reno"
    componentInstance.joinCity();
    expect(componentInstance.concatedCity).to.be.equal('Reno');
  });

});