import { mount } from '@vue/test-utils'
import AInputCheckbox from '.'

describe('Atom - AInputCheckbox', () => {
  it('Two way data binding', () => {
    const wrapper = mount(AInputCheckbox, {
      propsData: {
        value: 'Option 1',
      },
    })

    wrapper.find('input').trigger('click')

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0][0]).toBe(true)
  })

  it('Has correct classes based on passed props', () => {
    const wrapper = mount(AInputCheckbox, {
      propsData: {
        checked: true,
        value: 'Option 2',
        disabled: true,
      },
    })

    const input = wrapper.find('input')

    expect(input.attributes().value).toBe('Option 2')
    expect(input.attributes().disabled).toBe('disabled')
  })
})
