import { mount } from '@vue/test-utils'
import AHeading from './'

describe('Atom - AHeading', () => {
  test('Renders the correct tag', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        level: 2
      }
    })

    expect(wrapper.find('h2').exists()).toBe(true)
  })

  test('Renders slots', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        level: 1
      },
      slots: {
        default: 'AHeading title'
      }
    })

    expect(wrapper.text()).toBe('AHeading title')
  })
})
