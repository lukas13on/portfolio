<script>
export default {
  name: "homepage-profile",
  data: function () {
    return {
      title: "Lucas de Oliveira Neitzke",
      subtitle: "Desenvolvedor PHP Fullstack",
      description: {
        paragraphs: [
          'Se você está procurando uma pessoa que possa tocar seu projeto "da base ao acabamento", então, você veio ao lugar certo. Desde o planejamento à execução do perojeto, back-end e fron-end, não importa.',
        ],
      },
      socials: [
        {
          text: "Github",
          href: "#",
          target: "_blank",
          icon: "fa fa-github",
        },
        {
          text: "Linkedin",
          href: "#",
          target: "_blank",
          icon: "fa fa-linkedin",
        },
        {
          text: "Facebook",
          href: "#",
          target: "_blank",
          icon: "fa fa-facebook",
        },
        {
          text: "Instagram",
          href: "#",
          target: "_blank",
          icon: "fa fa-instagram",
        },
        {
          text: "Twitter",
          href: "#",
          target: "_blank",
          icon: "fa fa-twitter",
        },
      ],
    };
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
            @click="false"
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