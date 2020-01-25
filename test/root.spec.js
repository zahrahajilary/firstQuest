import Root from '../pages/index'
import Header from "../components/layout/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import {mount, shallowMount} from "@vue/test-utils";


describe('Root', () => {
  const wrapper = mount(Root)
  test('is a Root instance', () => {

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('contain header component',()=>{
    expect(wrapper.find(Header).exists()).toBe(true)
  })
  test('contain SearchBar component',()=>{

    expect(wrapper.find(SearchBar).exists()).toBe(true)
  })

  test('sets the correct default data', () => {
    expect(typeof Root.data).toBe('function')
    const defaultData = Root.data().cityList
    expect(typeof defaultData).toBe('object')
  })
})
