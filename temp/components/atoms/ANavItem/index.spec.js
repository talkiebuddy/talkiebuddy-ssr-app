import { mount } from '@vue/test-utils'
import ANavItem from '.'

const wrapper = mount(ANavItem, {
  stubs: ['nuxt-link'],
})

describe('Atom - ANavItem', () => {
  it('renders correctly with the right props', () => {
    expect(wrapper.find('.a-nav-item').exists()).toBe(true)
  })

  it('click', () => {
    wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
