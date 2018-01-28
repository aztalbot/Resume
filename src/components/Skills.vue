<template>
  <div class="skills-section">
    <h2>
      WHAT I KNOW.
    </h2>
    <div class="skillset" v-for="skillset in skills" :key="skillset.id">
      <strong>{{ skillset.name }}:</strong>
      <span v-for="(skill, i) in skillset.items" :key="skill.id">
        <span>{{ skill }}</span><span v-if="i != skillset.items.length - 1">, </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: ['skills']
}
</script>

<style scoped>
h2 {
  font-weight: 900;
  color: grey;
  margin-bottom: 0px
}
.skillset {
  margin-top: 5px
}
.skills-section {
  text-align: left
}
</style>
