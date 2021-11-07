<script>
import appHeaderNav from "../components/header/navbar.vue";

export default {
  name: "application-header",
  data: function () {
    return {};
  },
  components: {
    "header-navbar": appHeaderNav,
  },
};
</script>

<template>
  <!-- <Header> -->
  <header id="header">
    <header-navbar></header-navbar>
  </header>
  <!-- </Header> -->
</template>