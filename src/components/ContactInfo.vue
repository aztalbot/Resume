<template>
  <div class="contact-info">
    <h3>
      {{ info.address.fullAddress }} •
      {{ info.contact.phone }} •
      {{ info.contact.email }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  props: ['info']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: 0px;
}
</style>
