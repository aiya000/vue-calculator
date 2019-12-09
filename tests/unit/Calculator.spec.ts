import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

describe('Calculator.vue', () => {
  it('shows 0 by default on started', () => {
    const calculator = mount(Calculator, {})
    expect(calculator.vm.result.value).equals(0)
  })

  it('shows a specified value on started', () => {
    const result = { value: 10 }
    const calculator = mount(Calculator, {
      propsData: { result }
    })
    expect(calculator.vm.result).equals(result)
  })

  it('calculates 10 + 20 to 30', () => {
    const calculator = mount(Calculator, {})
    calculator.find('#button-1').trigger('click')
    calculator.find('#button-0').trigger('click')
    calculator.find('#button-add').trigger('click')
    calculator.find('#button-2').trigger('click')
    calculator.find('#button-0').trigger('click')
    calculator.find('#button-resolve').trigger('click')
    expect(calculator.vm.result.value).equals(30)
  })

  it('calculates 10 - 20 to -10', () => {
    const calculator = mount(Calculator, {})
    calculator.find('#button-1').trigger('click')
    calculator.find('#button-0').trigger('click')
    calculator.find('#button-sub').trigger('click')
    calculator.find('#button-2').trigger('click')
    calculator.find('#button-0').trigger('click')
    calculator.find('#button-resolve').trigger('click')
    expect(calculator.vm.result.value).equals(-10)
  })

  it('calculates 10 * 20 to 200', () => {
    const calculator = mount(Calculator, {})
    calculator.find('#button-1').trigger('click')
    calculator.find('#button-0').trigger('click')
    calculator.find('#button-times').trigger('click')
    calculator.find('#button-2').trigger('click')
    calculator.find('#button-0').trigger('click')
    calculator.find('#button-resolve').trigger('click')
    expect(calculator.vm.result.value).equals(200)
  })

  it('calculates 10 / 20 to 0', () => {
    const calculator = mount(Calculator, {})
    calculator.find('#button-1').trigger('click')
    calculator.find('#button-0').trigger('click')
    calculator.find('#button-div').trigger('click')
    calculator.find('#button-2').trigger('click')
    calculator.find('#button-0').trigger('click')
    calculator.find('#button-resolve').trigger('click')
    expect(calculator.vm.result.value).equals(0)
  })

  it('sets result to 0 by the clear button', () => {
    const calculator = mount(Calculator, {})
    calculator.find('#button-1').trigger('click')
    calculator.find('#button-0').trigger('click')
    calculator.find('#button-add').trigger('click')
    calculator.find('#button-2').trigger('click')
    calculator.find('#button-0').trigger('click')
    calculator.find('#button-resolve').trigger('click')
    calculator.find('#button-clear').trigger('click')
    expect(calculator.vm.result.value).equals(0)
  })
})
