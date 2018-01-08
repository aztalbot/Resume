<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px
  }
  html {
    padding: 0;
    background-color: #B0BEC5
  }
  body {
    height: 100%;
    margin: 0 auto;
    padding-left: 35px;
    padding-right: 35px;
  }
  img {
    border-radius: 100%;
    box-shadow: 0px 1px 4px 1px grey;
    transition: box-shadow .3s ease-in-out, transform .3s ease-in-out;
    position: absolute;
    top: 25px;
    right: 25px;
    transform: scale(0.6)
  }
  img:hover {
    border-radius: 100%;
    box-shadow: 0px 1.5px 5.5px 1.5px grey;
    transform: scale(0.62)
  }
</style>
