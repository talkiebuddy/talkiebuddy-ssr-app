import { mount } from '@vue/test-utils'
import ALoader from '.'

describe('Atom - ALoader', () => {
  it('Should render correctly', () => {
    const wrapper = mount(ALoader)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.attributes().class).toContain('loader')
  })
})
