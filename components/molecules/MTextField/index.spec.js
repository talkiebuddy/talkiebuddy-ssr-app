import { shallowMount } from '@vue/test-utils'
import MTextField from '.'

describe('Molecule - MTextField', () => {
  let wrapper
  const factory = (computed = {}) => {
    return shallowMount(MTextField, {
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

  it('Renders the label if passed', async () => {
    expect(wrapper.find('a-label').exists()).toBe(false)

    await wrapper.setProps({
      label: 'Enter your telephone number',
    })

    expect(wrapper.find('a-label').text()).toContain(
      'Enter your telephone number'
    )
  })

  it('Shows error message if available', async () => {
    expect(wrapper.find('m-validation-messages').text()).toBe('')

    await wrapper.setProps({
      errorMessages: 'Please enter your name',
      error: true,
    })

    await wrapper.vm.$nextTick(() => {
      expect(wrapper.find('m-validation-messages').html()).toContain(
        'Please enter your name'
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
