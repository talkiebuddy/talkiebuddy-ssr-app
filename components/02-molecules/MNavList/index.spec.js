import { mount } from '@vue/test-utils'
import MNavList from '../MNavList'

const mockRoutePush = jest.fn()

const options = {
  propsData: {
    list: [
      {
        label: 'Home',
        to: '/home',
      },
      {
        label: 'About',
        to: '/about',
      },
    ],
  },
  stubs: ['nuxt-link'],
  mocks: {
    $router: {
      push: mockRoutePush,
    },
  },
}

describe('Molecule - ANavList', () => {
  it('Renders correctlu with the right props', () => {
    const wrapper = mount(MNavList, options)

    // expect(wrapper.findAll('li').length).toBe(2)
    expect(wrapper.html()).toContain('Home')
    expect(wrapper.html()).toContain('About')
  })
})
