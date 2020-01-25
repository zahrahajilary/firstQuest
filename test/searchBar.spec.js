import SearchBar from "../components/SearchBar/SearchBar";
import {mount} from "@vue/test-utils";

describe('searchBar', () => {
  test('is a SearchBar instance', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('check city list is an array', () => {
    const wrapper = mount(SearchBar, {
      propsData: {
        cityList: ['tehran'],
      }
    })
    expect(wrapper.props().cityList).toEqual(['tehran'])
  })

})


