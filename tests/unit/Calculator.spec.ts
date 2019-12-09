import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

describe('Calculator.vue', () => {
  it('shows 0 by default on started', () => {
    const wrapper = mount(Calculator, {})
    expect(wrapper.vm.result).equals(0)
  })

  it('shows a specified value on started', () => {
    const result = 10
    const wrapper = mount(Calculator, {
      propsData: { result }
    })
    expect(wrapper.vm.result).equals(result)
  })
})
