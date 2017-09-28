<template>
  <div id="app">
    <div class="dd">
      Home
    </div>
    <img v-bind:src="logoImg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import logo from 'assets/img/logo.png'
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!',
      logoImg: logo
    }
  },
}
</script>

<style lang="postcss">
  body {
    background-color: #f5f5f5;
  }
  :root h1 {
   --color: red;
   display: flex;
   color: var(--color);
  }
</style>
