<template>
  <div class="experience-section">
    <h2>
      WHAT I'VE DONE.
    </h2>
    <div class="exp-container" v-for="exp in experiences">
      <div class="exp-flex">
        <div class="experience-header">
          <span class="position">{{ exp.position.title }}</span>
          <span v-if="exp.isPartTime">&nbsp;(<em>part-time</em>)</span>
          &nbsp;@&nbsp;<strong>{{ exp.position.employer.name }}</strong>
          &nbsp;–&nbsp;<span>{{ exp.position.location.fullLocation }}</span>
        </div>
        <div class="experience-dates">
          <strong>{{ exp.timeFrame.start }} – {{ exp.timeFrame.end }}</strong>
        </div>
      </div>
      <div class="experience-body" v-for="description in exp.descriptionArr">
        <span class="bullet">» </span>
        <span>{{ description }}</span>.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: ['experiences']
}
</script>

<style scoped>
h2 {
  font-weight: 900;
  color: grey;
  margin-bottom: 0px
}
.exp-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 10px;
}
.experience-header {
  display: inline-flex;
  font-size: 12pt;
}
.experience-dates {
  display: inline-flex;
  align-self: flex-end;
  text-transform: uppercase
}
.bullet {
  font-size: 16pt
}
.experience-section {
  text-align: left
}
.position {
  text-decoration: underline;
  font-weight: 500;
}
</style>
