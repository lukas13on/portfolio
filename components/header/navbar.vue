<script>
const $ = require("jquery");
export default {
  name: "app-header-navbar",
  data: function () {
    return {
      visible: false,
      logo: {
        url: "",
        alt: "",
      },
      links: [
        {
          active: false,
          text: "Perfil",
          label: "Ir ao inicio.",
          href: "#profile",
          target: "_self",
        },
        {
          active: false,
          text: "Sobre",
          label: "Ir para sobre.",
          href: "#about",
          target: "_self",
        },
        {
          active: false,
          text: "Habilidades",
          label: "Ir para habilidades.",
          href: "#skills",
          target: "_self",
        },
        {
          active: false,
          text: "Portfolio",
          label: "Ir para o portfolio.",
          href: "#portfolio",
          target: "_self",
        },
        {
          active: false,
          text: "Contato",
          label: "Ir para contato.",
          href: "#contact",
          target: "_self",
        },
      ],
    };
  },
  methods: {
    toggle: function () {
      this.visible = this.visible === true ? false : true;
    },
    scrollTo: function (event) {
      var btn = $(event.target);
      var navbar = btn.closest(".navbar-nav");
      navbar.find(".nav-item .nav-link").removeClass("active");
      btn.addClass("active");
    },
  },
  computed: {
    classing: function () {
      var standard = "collapse navbar-collapse";
      return this.visible === true ? standard + " show" : standard;
    },
  },
};
</script>

<template>
  <!-- <Navbar> -->
  <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-mashed-blured">
    <div class="container-fluid">
      <a class="navbar-brand" href="">
        <span class="logo-text cursive">LON</span>
      </a>

      <button
        class="d-inline-block d-lg-none btn btn-lg btn-dark"
        type="button"
        @click="toggle()"
      >
        <i v-if="!visible" class="fa fa-bars"></i>
        <i v-else class="fa fa-times"></i>
      </button>

      <div :class="classing">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(link, index) in links" :key="index">
            <a
              @click="scrollTo($event)"
              class="nav-link btn"
              :href="link.href"
              :target="link.target"
              :data-label="link.label"
              >{{ link.text }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- </Navbar> -->
</template>