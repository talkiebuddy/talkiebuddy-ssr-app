import { mount } from '@vue/test-utils'
import AInputCreditCard from '../AInputCreditCard'

describe('Atom - AInputCreditCard', () => {
  it('Formats the credit card number correctly', () => {
    const exampleCardNumbers = {
      'american-express': {
        number: '378282246310005',
        formatted: '3782 822463 10005',
      },
      visa: {
        number: '4012888888881881',
        formatted: '4012 8888 8888 1881',
      },
      mastercard: {
        number: '5105105105105100',
        formatted: '5105 1051 0510 5100',
      },
      jcb: {
        number: '180090992319320',
        formatted: '1800 9099 2319 320',
      },
      discover: {
        number: '6011000990139424',
        formatted: '6011 0009 9013 9424',
      },
    }

    const wrapper = mount(AInputCreditCard)

    for (const key in exampleCardNumbers) {
      wrapper.find('input').setValue(exampleCardNumbers[key].number)
      wrapper.find('input').trigger('input')
      expect(wrapper.vm.type.type).toBe(key)
      expect(wrapper.vm.formatted).toBe(exampleCardNumbers[key].formatted)
    }
  })
})
