import { mount } from '@vue/test-utils'
import ATableCell from '.'

describe('Atom - ATableCell', () => {
  it('renders the slot correctly', () => {
    const wrapper = mount(ATableCell, {
      slots: {
        default: 'Cell Content',
      },
    })

    expect(wrapper.html()).toContain('Cell Content')
  })

  it('renders the correct tag', async () => {
    const wrapper = mount(ATableCell)

    expect(wrapper.find('td').exists()).toBe(true)

    await wrapper.setProps({ heading: true })

    expect(wrapper.find('th').exists()).toBe(true)
  })
})
