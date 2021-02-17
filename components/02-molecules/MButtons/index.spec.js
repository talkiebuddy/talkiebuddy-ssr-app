import { mount } from '@vue/test-utils'
import MButtons from '../MButtons'

describe('Molecule - MButtons', () => {
  it('Default tag is <button>', () => {
    const wrapper = mount(MButtons)

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('Tag should be <a> if href is available', () => {
    const wrapper = mount(MButtons, {
      propsData: {
        href: 'https://www.google.com',
      },
    })

    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.attributes().href).toBe('https://www.google.com')
  })

  it('Tag should be <router-link> if "to" prop is available', () => {
    const wrapper = mount(MButtons, {
      propsData: {
        to: '/home',
      },
      stubs: ['router-link'],
    })

    expect(wrapper.find('router-link-stub').exists()).toBe(true)
    expect(wrapper.attributes().to).toBe('/home')
  })

  it('Renders the correct classes based on props passed', () => {
    const wrapper = mount(MButtons, {
      propsData: {
        square: true,
        isOutlined: true,
        stretch: true,
        variant: 'default',
        size: 'small',
      },
      stubs: ['router-link'],
    })

    expect(wrapper.attributes().class).toContain('stretch')
    expect(wrapper.attributes().class).toContain('square')
    expect(wrapper.attributes().class).toContain('outline')
    expect(wrapper.attributes().class).toContain('variant-default')
    expect(wrapper.attributes().class).toContain('size-small')
  })

  it('Renders slots', () => {
    const wrapper = mount(MButtons, {
      slots: {
        default: 'Click here',
      },
    })

    expect(wrapper.text()).toContain('Click here')
  })

  it('Emits click event', () => {
    const wrapper = mount(MButtons)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
    expect(wrapper.emitted().click.length).toBe(1)
  })
})
