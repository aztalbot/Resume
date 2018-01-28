<template>
  <div class="education-section">
    <h2>
      WHERE I'VE LEARNED.
    </h2>
    <div class="edu-container" v-for="school in schooling" :key="school.id">
      <div class="edu-flex">
        <div class="education-header">
          <strong class="school" v-if="!school.isAbroad">{{ school.name }}</strong>
          <span class="abroad" v-else><strong class="school">{{ school.name }}</strong>, {{ school.description }}</span>
          &nbsp;–&nbsp;<span>{{ school.location.fullLocation }}</span>
        </div>
        <div class="graduation-date">
          <strong>{{ school.gradDate }}</strong>
        </div>
      </div>
      <div class="education-body" v-if="!school.isAbroad">
        <p>{{ school.degree }} – {{ school.specialization }}</p>
        <strong v-if="school.gpa">Cumulative GPA: {{ school.gpa }}</strong>
        <p v-if="school.honors">Honors: {{ school.honors.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  props: ['schooling']
}
</script>

<style scoped>
h2 {
  font-weight: 900;
  color: grey;
  margin-bottom: 0px
}
.edu-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 10px;
}
.education-header {
  display: inline-flex;
  font-size: 12pt;
}
.graduation-date {
  display: inline-flex;
  align-self: flex-end;
  text-transform: uppercase
}
.education-section {
  text-align: left
}
.education-body {
  margin-top: 5px;
  margin-bottom: 20px
}
.education-body p {
  margin: 0px
}
.school {
  text-decoration: underline
}
</style>
