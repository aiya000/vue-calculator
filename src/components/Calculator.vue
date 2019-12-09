<template>
  <div :class="$style.container">
      <input type="text" v-model="result" :class="result" />
      <div>
          <button onclick="resolve('1')">1</button>
          <button onclick="resolve('2')">2</button>
          <button onclick="resolve('3')">3</button>
          <button onclick="resolve('+')">+</button>
      </div>
      <div>
          <button onclick="resolve('4')">4</button>
          <button onclick="resolve('5')">5</button>
          <button onclick="resolve('6')">6</button>
          <button onclick="resolve('-')">-</button>
      </div>
      <div>
          <button onclick="resolve('7')">7</button>
          <button onclick="resolve('8')">8</button>
          <button onclick="resolve('9')">9</button>
          <button onclick="resolve('*')">*</button>
      </div>
      <div>
          <button onclick="resolve('C')">C</button>
          <button onclick="resolve('0')">0</button>
          <button onclick="resolve('x')">x</button>
          <button onclick="resolve('/')">/</button>
      </div>
  </div>
</template>

<script lang="ts">

import { ButtonType } from '@/data/ButtonType'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Calculator extends Vue {
  @Prop({ default: 0 })
  public readonly result!: number

  public resolve(pushed: ButtonType): void {
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
  input
      height: 30px
  div
    display: flex
    justify-content: space-around
    button
      height: 50px
      flex: 1

.applyer
  flex: 2
</style>
