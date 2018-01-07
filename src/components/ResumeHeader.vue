<template>
  <div class="resume-header">
    <h1> {{ title }} </h1>
  </div>
</template>

<script>
export default {
  name: 'ResumeHeader',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 36pt;
  text-transform: uppercase;
  margin-bottom: 0px;
}
</style>
