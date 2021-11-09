<script>
import appHeader from "@/src/components/header.vue";
import homepageProfile from "@/src/components/view/homepage/profile.vue";
import homepageAbout from "@/src/components/view/homepage/about.vue";
import homepagePortfolio from "@/src/components/view/homepage/portfolio.vue";
import homepageSkills from "@/src/components/view/homepage/skills.vue";
import homepageContact from "@/src/components/view/homepage/contact.vue";
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
    <section>
      <homepage-profile></homepage-profile>
      <homepage-about></homepage-about>
      <homepage-portfolio></homepage-portfolio>
      <homepage-skills></homepage-skills>
      <homepage-contact></homepage-contact>
    </section>
    <application-footer></application-footer>
  </main>
</template>
