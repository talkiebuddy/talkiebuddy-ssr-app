import { mount } from '@vue/test-utils'
import AIcon from './'

describe('Atom - AIcon', () => {
  it('Renders the correct classes based on props passed', () => {
    const wrapper = mount(AIcon, {
      propsData: {
        name: 'twitter',
        size: 'large',
        fill: 'green',
      },
    })

    expect(wrapper.attributes().class).toContain('large')
  })
})
