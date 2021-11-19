<script>
import $ from "jquery";
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
          id: "profile",
          active: true,
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
          id: "skills",
          active: false,
          text: "Habilidades",
          label: "Ir para habilidades.",
          href: "#skills",
          target: "_self",
        },
        {
          id: "portfolio",
          active: false,
          text: "Portfolio",
          label: "Ir para o portfolio.",
          href: "#portfolio",
          target: "_self",
        },
        {
          id: "contact",
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
    indexer: function (id) {
      return this.links.findIndex(function (link) {
        return link.id === id;
      });
    },
    toggle: function () {
      if (this.visible) {
        $("body").css("overflow", "auto");
      } else {
        $("body").css("overflow", "hidden");
      }
      this.visible = this.visible === true ? false : true;
    },
    scrollTo: function (event) {
      var self = this;
      var btn = $(event.target);
      var href = btn.attr("href");
      var navbar = btn.closest(".navbar-nav");
      var navbarCollapse = navbar.closest(".navbar-collapse");
      var element = $(href);
      navbar.find(".nav-item .nav-link").removeClass("active");
      btn.addClass("active");
      // scroll to element
      $("html, body").animate(
        {
          scrollTop: element.offset().top - 80,
        },
        "fast",
        function () {
          $("body").css("overflow", "hidden");
          var width = $(window).width();
          $("body").css("overflow", "auto");
          //console.log(width);
          if (width < 992) {
            navbarCollapse.fadeOut("fast", function () {
              self.visible = false;
              $(function () {
                navbarCollapse.removeAttr("style");
              });
            });
          }
        }
      );
    },
    navbarLinkClass: function (id) {
      var standard = "nav-link btn";
      var link = this.links[this.indexer(id)];
      return link.active === true ? standard + " active" : standard;
    },
    collapseClass: function () {
      var standard = "collapse navbar-collapse";
      return this.visible === true ? standard + " show" : standard;
    },
  },
};
</script>

<template>
  <!-- <Navbar> -->
  <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-black">
    <div class="container-fluid">
      <a class="navbar-brand" href="">
        <span class="logo-text cursive">L<span>O</span>N</span>
      </a>

      <button
        class="d-inline-block d-lg-none btn btn-lg btn-dark"
        type="button"
        @click="toggle()"
      >
        <i v-if="!visible" class="fa fa-bars"></i>
        <i v-else class="fa fa-times"></i>
      </button>

      <div :class="collapseClass()">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(link, index) in links" :key="index">
            <a
              @click.prevent="scrollTo($event)"
              :class="navbarLinkClass(link.id)"
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