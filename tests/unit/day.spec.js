import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Day from '@/components/Weather/Molecules/Day.vue'

describe('Day.vue', () => {

  const data = {
    body:{
      list:[
        {
        weather:
          [
            {
              description:'cloudy'
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
    wrapper = shallowMount(Day, {
      propsData:{
        weeklyWeatherData:data,
        index:1
      }
    });
    componentInstance = wrapper.vm;
  });
  it('renders a weather condition', () => { 
    componentInstance.initCondition();
    expect(wrapper.html()).to.include('cloudy')
  });
  it('renders a high temp', () => { 
    componentInstance.intHighTemp();
    expect(wrapper.html()).to.include('260')
  });
  it('renders a low temp', () => { 
    componentInstance.intLowTemp();
    expect(wrapper.html()).to.include('80')
  });
})

describe('convertKtoF()', () => {
  let wrapper;
  let componentInstance;
  it('returns fahrenheit when provided calvin', () => {
    wrapper = shallowMount(Day);
    componentInstance = wrapper.vm;
    expect(componentInstance.convertKtoF(400)).to.be.equal(260);
  });
})

describe('splitString()', () => {
  let wrapper;
  let provided = "Oct 11 2018"
  let expects = ['Oct','11','2018']
  let componentInstance;
  it('splits a date on spaces and returns an array of date parts', () => {
    wrapper = shallowMount(Day);
    componentInstance = wrapper.vm;
    expect(componentInstance.splitDate(provided)).to.deep.equal(expects);
  });
})