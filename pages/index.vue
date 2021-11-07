<script>
const pk = require("@/package.json");
import viewHomePage from "@/view/homepage.vue";

export default {
  head: function () {
    return {
      title: this.title,
      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content: this.viewport,
        },
        {
          hid: "description",
          name: "description",
          content: this.seo.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.seo.keywords,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: this.seo.type,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.seo.title,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.seo.url,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.seo.image,
        },
      ],
    };
  },
  data: function () {
    return {
      viewport: "width=device-width, initial-scale=1",
      seo: {
        type: "article",
        title: "Lucas de Oliveira Neitzke",
        description:
          "Desenvolvedor e programador de sites e sistemas para a internet.",
        keywords: ["desenvolvedor", "programador", "backend", "frontend"],
        url: pk.homepage,
        image: require("@/assets/images/profile.jpg"),
      },
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