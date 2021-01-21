import { mount } from '@vue/test-utils'
import MTableRow from '.'

describe('Molecule - MTableRow', () => {
  it('renders the slot correctly', () => {
    const wrapper = mount(MTableRow, {
      slots: {
        default: 'Row Content'
      }
    })
    expect(wrapper.html()).toContain('Row Content')
  })
})
