<template>
  <div :class="this.class">
    <profile-pic v-if="!print"/>
    <resume-header :title="nameHeader"/>
    <contact :info="profile"/>
    <exec-summary :text="summary"/>
    <hr/>
    <experience :experiences="experienceArr"/>
    <hr/>
    <skills :skills="skills"/>
    <hr/>
    <education :schooling="schools"/>
  </div>
</template>

<script>
import ResumeHeader from '@/components/ResumeHeader'
import ProfilePic from '@/components/ProfilePic'
import Contact from '@/components/ContactInfo'
import Summary from '@/components/Summary'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import RESUME_DATA from '@/data/resumeData'

export default {
  name: 'Resume',
  components: {
    'resume-header': ResumeHeader,
    'profile-pic': ProfilePic,
    'contact': Contact,
    'exec-summary': Summary,
    'experience': Experience,
    'skills': Skills,
    'education': Education
  },
  data () {
    return {
      nameHeader: RESUME_DATA.profile.name.firstLast,
      profile: RESUME_DATA.profile,
      summary: RESUME_DATA.summary,
      experienceArr: RESUME_DATA.experienceArr,
      skills: RESUME_DATA.skills,
      schools: RESUME_DATA.education,
      class: 'resume',
      classes: ['resume', 'print'],
      print: false
    }
  },
  methods: {
    togglePrint: function() {
      this.print = !this.print;
      this.class = (this.print) ? this.classes.join(' ') : 'resume';
    }
  },
  mounted: function() {
    const toggle = this.togglePrint;
    const chrome = navigator.userAgent.indexOf('Chrome') > -1;

    window.onbeforeprint = toggle;
    window.onafterprint = toggle;

    if (window.matchMedia && !chrome) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(function(mql) {
          if (mql.matches) {
              toggle();
          } else {
              toggle();
          }
      });
    }
  }
}
</script>

<style scoped>
  .resume {
    margin: 0 auto;
    margin-bottom: 35px;
    margin-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-top: 15px;
    box-shadow: grey 0px .6px 20px .6px;
    border-radius: 5px;
    max-width: 31cm;
    height: auto;
    transition: all .5s
  }
  .resume:hover {
    box-shadow: grey 0px 1px 50px 1px;
    transform: scale(1.005);
    border-radius: 7px
  }
  .resume.print {
    width: 27cm;
    margin: 0 auto;
    box-shadow: none
  }
  .resume.print:hover {
    box-shadow: none;
    transform: none
  }
  .resume.print profile-pic {
    display: none
  }
  hr {
    margin-top: 20px
  }
</style>
