<template>
  <div class="summary">
    <h2>
      WHO I AM.
    </h2>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: ['text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: 900;
  color: grey;
  margin-bottom: 0px
}
p {
  font-weight: 500;
  margin-top: 5px
}
.summary {
  text-align: left
}
</style>
