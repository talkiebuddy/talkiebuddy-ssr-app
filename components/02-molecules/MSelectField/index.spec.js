import { shallowMount } from '@vue/test-utils'
import MSelectField from '../MSelectField'

describe('Molecule - MSelectField', () => {
  let wrapper
  const factory = (computed = {}) => {
    return shallowMount(MSelectField, {
      propsData: {
        value: '',
      },
      mocks: {},
      stubs: {},
      methods: {},
      computed,
    })
  }

  beforeEach(() => {
    wrapper = factory()
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('Render the label if passed', async () => {
    expect(wrapper.find('a-label').exists()).toBe(false)

    await wrapper.setProps({
      label: 'Choose your food',
    })
    expect(wrapper.find('a-label').text()).toContain('Choose your food')
  })

  it('Shows error message if available', async () => {
    expect(wrapper.find('m-validation-messages').text()).toBe('')

    await wrapper.setProps({
      errorMessages: 'Please select your food',
      error: true,
    })

    await wrapper.vm.$nextTick(() => {
      expect(wrapper.find('m-validation-messages').html()).toContain(
        'Please select your food'
      )
    })
  })

  it('Renders the correct classes', async () => {
    await wrapper.setProps({
      disabled: true,
      error: true,
    })

    expect(wrapper.attributes().class).toContain('error')
    expect(wrapper.attributes().class).toContain('disabled')
  })
})
