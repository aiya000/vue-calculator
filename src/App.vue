<template>
    <div>
        <p>result value is {{ result.value }}</p>
        <Calculator :result="result" />
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Calculator from './components/Calculator.vue'

@Component({ components: { Calculator } })
export default class App extends Vue {
  public result = { value: 0 }
}

</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
