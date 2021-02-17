import { mount } from '@vue/test-utils'
import ALabel from '../ALabel'

describe('Atom - ALabel', () => {
  it('Renders correctly', () => {
    const wrapper = mount(ALabel, {
      propsData: {
        htmlFor: 'text-input',
      },
      slots: {
        default: 'Full Name',
      },
    })

    const label = wrapper.find('label')

    expect(label.attributes().for).toBe('text-input')
    expect(label.text()).toBe('Full Name')
  })

  it('renders a * if the label is required', () => {
    const wrapper = mount(ALabel, {
      propsData: {
        required: true,
      },
      slots: {
        default: 'Full Name',
      },
    })

    expect(wrapper.html()).toContain('* Full Name')
  })
})
