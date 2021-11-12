
<script>
import $ from "jquery";
import External from "@/src/controllers/dispatch/external.js";

export default {
  name: "homepage-portfolio",
  data: function () {
    return {
      autoplay: true,
      current: 1,
      interval: 5000,
      groups: [
        {
          id: "m3locacoes",
          active: true,
          title: "M3 Locações de maquinas",
          subtitle: "Locações de maquinas",
          image: {
            url: "assets/images/portfolio/cropped/01.png",
            alt: "M3 Locações",
          },
          url: "https://m3locacoesdemaquinas.com.br/",
        },
        {
          id: "madaly",
          active: false,
          title: "Madaly Eventos",
          subtitle: "Espaço para eventos",
          image: {
            url: "assets/images/portfolio/cropped/02.png",
            alt: "Madaly Eventos",
          },
          url: "https://www.madalyeventos.com.br/",
        },
        {
          id: "inoveformaturas",
          active: false,
          title: "Inove Formaturas",
          subtitle: "Empresa de formaturas",
          image: {
            url: "assets/images/portfolio/cropped/03.png",
            alt: "M3 Locações",
          },
          url: "https://www.inoveformaturas.com.br/",
        },
        {
          id: "pophub",
          active: false,
          title: "Plataforma Pophub",
          subtitle: "Hub de Marketplace",
          image: {
            url: "assets/images/portfolio/cropped/04.png",
            alt: "Plataforma Pophub",
          },
          url: "https://pophub.com.br/",
        },
      ],
    };
  },
  methods: {
    openLink: function () {
      External(this.groups[this.current].url, true);
    },
    toggleState: function () {
      if (this.autoplay) {
        this.autoplay = false;
      } else {
        this.autoplay = true;
      }
    },
    slideTo: function (index) {
      index = parseInt(index);
      this.current = index;

      for (var key in this.groups) {
        key = parseInt(key);

        if (key === index) {
          this.groups[key].active = true;
          this.current = key;
        } else {
          this.groups[key].active = false;
        }
      }
    },
    prevSlide: function (event) {
      this.slideTo(this.getSlideIndex(event));
    },
    nextSlide: function (event) {
      this.slideTo(this.getSlideIndex(event));
    },
    indicator: function (event) {
      this.slideTo(this.getSlideIndex(event));
    },
    getSlideIndex: function (event) {
      return $(event.target).closest("button").attr("data-index");
    },
    navigation: function (direction, index) {
      var target;
      var curIndex;
      var total = this.groups.length;

      if (index !== undefined) {
        curIndex = parseInt(index);
      } else {
        curIndex = this.current;
      }

      target = curIndex;

      switch (direction) {
        case "prev":
          target--;
          break;
        case "next":
          target++;
          break;
        default:
          target = 0;
          break;
      }

      if (target <= 0) {
        target = total;
      }

      if (target >= total) {
        target = 0;
      }

      return target;
    },
  },
  computed: {
    prev: function () {
      return this.navigation("prev");
    },
    next: function () {
      return this.navigation("next");
    },
    playing: function () {
      return this.autoplay;
    },
  },
  mounted: function () {
    var self = this;
    if (self.autoplay && self.interval) {
      setInterval(function () {
        if (self.autoplay === true) {
          self.slideTo(self.navigation("next"));
        }
      }, self.interval);
    }
  },
};
</script>

<template>
  <section id="portfolio">
    <div class="">
      <div class="bg-dark bg-circle text-center text-light">
        <h1>Portfolio</h1>
        <p>Veja os projetos executados.</p>
      </div>

      <div class="row m-0 bg-dark">
        <div class="col-12 p-0">
          <div
            id="portfolio-carousel"
            class="carousel carousel-white slide"
            :data-current="current"
          >
            <div class="carousel-top">
              <a
                @click.prevent="toggleState($event)"
                class="btn btn-lg btn-dark"
              >
                <i v-if="playing" class="fa fa-pause"></i>
                <i v-else class="fa fa-play"></i>
              </a>
            </div>

            <div class="carousel-indicators">
              <button
                type="button"
                v-for="(group, index) in groups"
                @click.prevent="indicator($event)"
                :data-index="index"
                :class="group.active ? 'btn active' : 'btn'"
                :key="index"
              >
                <i v-if="group.active" class="fa fa-circle text-light"></i>
                <i v-else class="fa fa-circle text-muted"></i>
              </button>
            </div>

            <div class="carousel-inner">
              <div
                v-for="(group, index) in groups"
                :data-index="index"
                :class="'carousel-item' + (group.active ? ' active' : '')"
                :key="index"
              >
                <img
                  :src="require('@/src/' + group.image.url)"
                  class="d-none d-lg-block w-100"
                  :alt="group.image.alt"
                />

                <div
                  :src="require(`@/src/` + group.image.url)"
                  class="d-block d-lg-none w-100 h-lg-100 background-cover"
                  :alt="group.image.alt"
                  :style="
                    'background-image: url(' +
                    require(`@/src/` + group.image.url) +
                    ')'
                  "
                ></div>

                <div class="carousel-caption">
                  <h3>{{ group.title }}</h3>
                  <h6>{{ group.subtitle }}</h6>
                  <a
                    @click.prevent="openLink()"
                    class="btn btn-dark"
                    :href="group.url"
                    title="Visitar o site"
                    >Visitar o site
                  </a>
                </div>
              </div>
            </div>

            <button
              @click.prevent="nextSlide($event)"
              :data-index="prev"
              class="carousel-control-prev"
              type="button"
            >
              <i class="fa fa-chevron-left"></i>
            </button>

            <button
              type="button"
              @click.prevent="prevSlide($event)"
              :data-index="next"
              class="carousel-control-next"
            >
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>