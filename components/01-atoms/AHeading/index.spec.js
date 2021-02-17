import { mount } from '@vue/test-utils'
import AHeading from '../AHeading'

describe('Atom - AHeading', () => {
  it('Renders the correct tag', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        level: 2,
      },
    })

    expect(wrapper.find('h2').exists()).toBe(true)
  })

  it('Renders slots', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        level: 1,
      },
      slots: {
        default: 'AHeading title',
      },
    })

    expect(wrapper.text()).toBe('AHeading title')
  })
})
