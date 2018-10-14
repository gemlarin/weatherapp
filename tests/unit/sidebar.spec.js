import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Sidebar from '@/components/Sidebar/Molecules/Sidebar.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import ui from '@/components/Modules/ui'

Vue.use(Vuex)

describe('Sidebar.vue', () => {
    let store
    let wrapper;
    beforeEach(() => {
  
      store = new Vuex.Store({
        state: {},
        modules: {
            ui
        },
      })
    })
    describe('checkWindowWidth', () => {
        let componentInstance;
        it('return the current width of the window', () => {
          wrapper = shallowMount(Sidebar, { store });
          componentInstance = wrapper.vm;
          expect(componentInstance.checkWindowWidth()).to.be.a('number');
        });
      })
  })
