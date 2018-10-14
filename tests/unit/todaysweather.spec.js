import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TodaysWeather from '@/components/Sidebar/Molecules/TodaysWeather.vue'

describe('TodaysWeather.vue', () => {
  const data = {
    body:{
      list:[
        {
        weather:
          [
            {
              description:'cloudy',
              icon:'10d'
            }
          ],
          temp:{
            max:'400',
            min:'300'
          }
        }
        
      ]
    } 
  }
  let wrapper;
  let componentInstance;
  beforeEach(() => {
    wrapper = shallowMount(TodaysWeather, {
      propsData:{
        weeklyWeatherData:data
      }
    });
    componentInstance = wrapper.vm;
  });
  
  it('renders a weather icon', () => { 
    componentInstance.selectWeatherIcon();
    expect(wrapper.html()).to.include('class="weather--icon"')
  });
})