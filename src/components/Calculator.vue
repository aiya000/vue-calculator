<template>
  <div :class="$style.container">
      <input type="text" v-model="result" :class="result" />
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
          <button id="button-clear" @click="resolve('C')">C</button>
          <button id="button-0"     @click="resolve('0')">0</button>
          <button id="button-apply" @click="resolve('x')">x</button>
          <button id="button-div"   @click="resolve('/')">/</button>
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

  public resolve(pushed: ButtonType): () => void {
    return () => {}
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
