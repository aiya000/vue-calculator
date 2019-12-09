<template>
    <div :class="$style.container">
        <div>
            <p class="applyee">{{ applyee }}</p>
            <p class="operator">{{ operator }}</p>
            <p class="applyer">{{ applyer }}</p>
        </div>
        <div>
            <button id="button-1"   @click="resolve('1')">1</button>
            <button id="button-2"   @click="resolve('2')">2</button>
            <button id="button-3"   @click="resolve('3')">3</button>
            <button id="button-add" @click="resolve('+')">+</button>
        </div>
        <div>
            <button id="button-4"   @click="resolve('4')">4</button>
            <button id="button-5"   @click="resolve('5')">5</button>
            <button id="button-6"   @click="resolve('6')">6</button>
            <button id="button-sub" @click="resolve('-')">-</button>
        </div>
        <div>
            <button id="button-7"     @click="resolve('7')">7</button>
            <button id="button-8"     @click="resolve('8')">8</button>
            <button id="button-9"     @click="resolve('9')">9</button>
            <button id="button-times" @click="resolve('*')">*</button>
        </div>
        <div>
            <button id="button-clear"   @click="resolve('C')">C</button>
            <button id="button-0"       @click="resolve('0')">0</button>
            <button id="button-resolve" @click="resolve('=')">=</button>
            <button id="button-div"     @click="resolve('/')">/</button>
        </div>
    </div>
</template>

<script lang="ts">

import { ButtonType, isButtonType, Operator, isOperator, Digit, isDigit, Applying, isApplying } from '@/data/ButtonType'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Calculator extends Vue {
  @Prop({ default: () => ({ value: 0 }) })
  public result!: { value: number }

  private operator: Operator | null = null
  private applyer: number | null = null

  public get applyee(): number {
    return this.result.value
  }

  public set applyee(x: number) {
    this.result.value = x
  }

  public resolve(x: ButtonType): void {
    if (x === 'C') {
      this.clear()
      return
    }

    if (x === '=') {
      this.calc()
      return
    }

    if (isDigit(x)) {
      this.assignDigit(x)
      return
    }

    if (isOperator(x)) {
      this.assignOperator(x)
      return
    }

    // NOTE: vue.jsはHTMLとTypeScriptの間に型チェックがないから、油断ならない
    throw new Error(`Unknown button: ${x}`)
  }

  private clear(): void {
    this.applyee = 0
    this.operator = null
    this.applyer = null
  }

  private calc(): void {
    const applyer = this.applyer || 0

    switch (this.operator) {
      case null:
        return
      case '+':
        this.applyee += applyer
        break
      case '-':
        this.applyee -= applyer
        break
      case '*':
        this.applyee *= applyer
        break
      case '/':
        this.applyee = Math.floor(this.applyee / applyer)
        break
    }

    this.operator = null
    this.applyer = null
  }

  private assignDigit(x: Digit): void {
    if (this.applyer === null) {
      this.applyer = Number(x)
      return
    }
    this.applyer = Number(String(this.applyer) + x)
  }

  private assignOperator(x: Operator): void {
    if (this.applyee === 0 && this.applyer !== null) {
      this.applyee = this.applyer
      this.applyer = 0
    }
    this.operator = x
  }
}

</script>

<style lang="sass" module>

.container
  background-color: cyan
  width: 200px
  display: flex
  justify-content: space-around
  flex-direction: column
  div
    input
      height: 30px
    .applyee
      flex: auto
    .operator
      flex: none
    .applyer
      flex: auto
  div
    display: flex
    justify-content: space-around
    button
      height: 50px
      flex: auto
</style>
