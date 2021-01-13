import { mount } from '@vue/test-utils'
import AInputText from '.'

describe('Atom - AInputText', () => {
  it('Two way data binding', () => {
    const wrapper = mount(AInputText, {
      propsData: {
        type: 'text'
      }
    })

    const input = wrapper.find('input')
    input.element.value = 'Hello World'
    input.trigger('input')

    const emittedInput = wrapper.emitted().input
    expect(emittedInput).toBeTruthy()
    expect(emittedInput[0][0]).toBe('Hello World')
  })
})
