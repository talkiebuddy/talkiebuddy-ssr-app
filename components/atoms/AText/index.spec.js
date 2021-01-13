import { mount } from '@vue/test-utils'
import AText from '.'

describe('Atom - AText', () => {
  it('Renders tag and classes based on props passed', async () => {
    const wrapper = mount(AText)

    // With default props
    // expect(wrapper.element.p).toBe(true)
    expect(wrapper.find('p').exists()).toBe(true)

    // With passed props
    await wrapper.setProps({
      tag: 'span'
    })

    // expect(wrapper.element.span).toBe(true)
    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('Renders slots', () => {
    const wrapper = mount(AText, {
      slots: {
        default: 'Text Sample'
      }
    })

    expect(wrapper.text()).toBe('Text Sample')
  })
})
