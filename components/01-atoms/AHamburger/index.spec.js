import { shallowMount } from '@vue/test-utils'
import AHamburger from '../AHamburger'

describe('Atom - Hamburger', () => {
  it('renders correctly with the right props', () => {
    const wrapper = shallowMount(AHamburger, {
      propsData: {
        isOpen: true,
      },
    })

    expect(wrapper.attributes().class).toContain('open')
  })
})
