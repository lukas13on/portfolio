1<script>
import appHeader from "@/src/components/header.vue";
import homepageProfile from "@/src/components/views/homepage/profile.vue";
import homepageAbout from "@/src/components/views/homepage/about.vue";
import homepagePortfolio from "@/src/components/views/homepage/portfolio.vue";
import homepageSkills from "@/src/components/views/homepage/skills.vue";
import homepageContact from "@/src/components/views/homepage/contact.vue";
import appFooter from "@/src/components/footer.vue";

export default {
  name: "view-homepage",
  data: function () {
    return {};
  },
  components: {
    "application-header": appHeader,
    "homepage-profile": homepageProfile,
    "homepage-about": homepageAbout,
    "homepage-portfolio": homepagePortfolio,
    "homepage-skills": homepageSkills,
    "homepage-contact": homepageContact,
    "application-footer": appFooter,
  },
};
</script>

<template>
  <main>
    <application-header></application-header>
    <article>
      <homepage-profile></homepage-profile>
      <homepage-about></homepage-about>
      <homepage-skills></homepage-skills>
      <homepage-portfolio></homepage-portfolio>
      <homepage-contact></homepage-contact>
    </article>
    <application-footer></application-footer>
  </main>
</template>

<style>
@import url("@/node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("@/node_modules/font-awesome/css/font-awesome.min.css");
@import url("@/src/assets/styles/main.css");
@import url("@/src/assets/styles/anim.css");
</style>