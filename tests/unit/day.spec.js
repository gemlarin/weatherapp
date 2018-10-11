import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Day from '@/components/Weather/Molecules/Day.vue'

describe('Day.vue', () => {

  it('Stores the location state', () => {
    const location = 'new location'
    const wrapper = shallowMount(Day, {
      propsData: { location }
    });
    expect(wrapper.vm.location).to.include(location);
  })
  it('renders props.location when passed', () => {
    const location = 'new location'
    const wrapper = shallowMount(Day, {
      propsData: { location }
    })
    expect(wrapper.text()).to.include(location)
  })
  it('renders props.day when passed', () => {
    const day = 'new day'
    const wrapper = shallowMount(Day, {
      propsData: { day }
    })
    expect(wrapper.text()).to.include(day)
  })
  it('renders props.overview when passed', () => {
    const overview = 'new overview'
    const wrapper = shallowMount(Day, {
      propsData: { overview }
    })
    expect(wrapper.text()).to.include(overview)
  })
  it('renders props.hightemp when passed', () => {
    const hightemp = 'new hightemp'
    const wrapper = shallowMount(Day, {
      propsData: { hightemp }
    })
    expect(wrapper.text()).to.include(hightemp)
  })
  it('renders props.lowtemp when passed', () => {
    const lowtemp = 'new lowtemp'
    const wrapper = shallowMount(Day, {
      propsData: { lowtemp }
    })
    expect(wrapper.text()).to.include(lowtemp)
  })
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