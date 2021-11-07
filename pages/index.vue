<script>
import viewHomePage from "../view/homepage.vue";
console.log(viewHomePage.data);

export default {
  head: function () {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  data: function () {
    return {
      title: "Home Page",
    };
  },
  components: {
    "view-homepage": viewHomePage,
  },
};
</script>

<template>
  <view-homepage></view-homepage>
</template>

<style>
@import url("@/node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("@/node_modules/font-awesome/css/font-awesome.min.css");
@import url("@/assets/styles/main.css");
@import url("@/assets/styles/anim.css");
</style>