import { mount } from '@vue/test-utils'
import APlaceholder from '.'

describe('Atom - APlaceholder', () => {
  it('calculate the corect viewbox based on type', async () => {
    const wrapper = mount(APlaceholder, {
      propsData: {
        type: 'text',
        lines: 3
      }
    })

    expect(wrapper.find('svg').attributes().viewBox).toBe('0 0 400 60')

    await wrapper.setProps({
      lines: 4
    })

    expect(wrapper.find('svg').attributes().viewBox).toBe('0 0 400 85')
  })
})
