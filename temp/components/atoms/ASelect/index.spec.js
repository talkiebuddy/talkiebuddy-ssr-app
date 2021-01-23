import { mount } from '@vue/test-utils'
import ASelect from '.'

describe('Atom - ASelect', () => {
  it('Renders the correct options', () => {
    const wrapper = mount(ASelect, {
      propsData: {
        options: [
          {
            label: 'Option 1',
            value: 'option1',
          },
          {
            label: 'Option 2',
            value: 'option2',
          },
        ],
      },
    })

    const selects = wrapper.findAll('option')

    expect(selects.length).toBe(3)
    expect(selects.at(1).text()).toBe('Option 1')
    expect(selects.at(1).attributes().value).toBe('option1')
  })

  it('Emits the change event', () => {
    const wrapper = mount(ASelect, {
      propsData: {
        options: [
          {
            label: 'Option 1',
            value: 'option1',
          },
        ],
      },
    })

    wrapper.find('select').trigger('change')

    expect(wrapper.emitted().change).toBeTruthy()
  })
})
