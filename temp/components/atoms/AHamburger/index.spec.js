import { shallowMount } from '@vue/test-utils'
import AHamburger from '.'

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
