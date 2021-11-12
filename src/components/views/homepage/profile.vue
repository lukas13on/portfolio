<script>
import External from "@/src/controllers/dispatch/external.js";

export default {
  name: "homepage-profile",
  data: function () {
    return {
      title: "Lucas de Oliveira Neitzke",
      subtitle: "Desenvolvedor PHP Fullstack",
      description: {
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et erat efficitur, dignissim tortor sed, dictum urna. Ut erat diam, auctor sed malesuada ac, feugiat nec turpis. Aliquam posuere dui nec nunc ultricies, vitae feugiat magna malesuada placerat.",
        ],
      },
      socials: [
        {
          text: "Github",
          href: "https://github.com/lukas13on",
          target: "_blank",
          icon: "fa fa-github",
        },
        {
          text: "Linkedin",
          href: "https://www.linkedin.com/in/lucas-o-neitzke/",
          target: "_blank",
          icon: "fa fa-linkedin",
        },
        {
          text: "Facebook",
          href: "https://www.facebook.com/lucas.o.neitzke/",
          target: "_blank",
          icon: "fa fa-facebook",
        },
        {
          text: "Instagram",
          href: "https://www.instagram.com/lucas.o.neitzke/",
          target: "_blank",
          icon: "fa fa-instagram",
        },
        {
          text: "Twitter",
          href: "https://twitter.com/lucas_o_neitzke",
          target: "_blank",
          icon: "fa fa-twitter",
        },
      ],
    };
  },
  methods: {
    openLink: External,
  },
};
</script>

<template>
  <section id="profile">
    <div class="observable-universe space">
      <div class="black-hole singularity">
        <div class="star-cluster">
          <div class="milk-way galaxy rotating scaling">
            <div class="solar-system planetary">
              <div class="planet moving">
                <div class="jupiter rotating reverse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="detail">
      <img class="photo" />
      <h1 class="title cursive">{{ title }}</h1>
      <h2 class="sub-title">{{ subtitle }}</h2>

      <div class="description d-none d-lg-block">
        <p v-for="(paragraph, index) in description.paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>

      <hr />

      <ul class="socials">
        <li class="social-item" v-for="(social, index) in socials" :key="index">
          <a
            @click.prevent="openLink(social.href, true)"
            class="social-link"
            :href="social.href"
            :target="social.target"
          >
            <span class="link-icon"><i :class="'fa ' + social.icon"></i></span>
            <span class="link-text d-none d-md-block">{{ social.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>