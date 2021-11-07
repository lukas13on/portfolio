<script>
const $ = require("jquery");
export default {
  name: "homepage-skills",
  data: function () {
    return {
      groups: [
        {
          title: "HTML",
          subtitle: "Linguagem de marcação de texto",
          icon: "fa fa-html5 text-html",
          topics: [
            {
              active: false,
              title: "Conhecimentos",
              content: "",
            },
            {
              active: false,
              title: "Semântica dos elementos",
              content: "",
            },
            {
              active: false,
              title: "Performance e velocidade",
              content: "",
            },
            {
              active: false,
              title: "Otimização de busca",
              content: "",
            },
            {
              active: false,
              title: "Protocolo Open Graph",
              content: "",
            },
          ],
        },
        {
          title: "CSS",
          subtitle: "Folhas de estilo",
          icon: "",
          topics: [
            {
              active: false,
              title: "Responsividade",
              content: "",
            },
            {
              active: false,
              title: "Performance",
              content: "",
            },
            {
              active: false,
              title: "Transições",
              content: "",
            },
            {
              active: false,
              title: "Animações",
              content: "",
            },
            {
              active: false,
              title: "Bootstrap",
              content: "",
            },
          ],
        },
        {
          title: "Javascript",
          subtitle: "Linguagem de programação",
          icon: "",
          topics: [
            {
              active: false,
              title: "Node JS",
              content: "",
            },
            {
              active: false,
              title: "Vanilla",
              content: "",
            },
            {
              active: false,
              title: "jQuery",
              content: "",
            },
            {
              active: false,
              title: "Sweetalert2",
              content: "",
            },
            {
              active: false,
              title: "Vue JS",
              content: "",
            },
          ],
        },
        {
          title: "php",
          subtitle: "Linguagem de programação",
          icon: "",
          topics: [
            {
              active: false,
              title: "Conhecimentos",
              content: "",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggle: function (groupIndex, topicIndex) {
      for (var x = 0; x < this.groups.length; x++) {
        for (var y = 0; y < this.groups[x].topics.length; y++) {
          this.groups[x].topics[y].active = false;
        }
      }
      this.groups[groupIndex].topics[topicIndex].active = true;
    },
    buttonClass: function (groupIndex, topicIndex) {
      var defaultClass = "accordion-button";
      if (this.groups[groupIndex].topics[topicIndex].active) {
        return defaultClass;
      } else {
        return defaultClass + " " + " collapsed";
      }
    },
    contentClass: function (groupIndex, topicIndex) {
      var defaultClass = "accordion-collapse";
      if (this.groups[groupIndex].topics[topicIndex].active) {
        return defaultClass + " " + "collapse show";
      } else {
        return defaultClass + " " + "collapse";
      }
    },
  },
};
</script>

<template>
  <section id="skills">
    <div class="container-fluid p-0">
      <div class="bg-primary bg-square text-light">
        <h1>Habilidades</h1>
        <p>Aqui estão algumas de minhas habilidades com o ambiente Web.</p>
      </div>

      <div class="row p-block m-0">
        <div
          v-for="(group, groupIndex) in groups"
          class="col-12 col-lg-3 mb-4"
          :key="groupIndex"
        >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ group.title }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {{ group.subtitle }}
              </h6>

              <div
                v-for="(topic, topicIndex) in group.topics"
                class="accordion"
                :key="topicIndex"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      :class="buttonClass(groupIndex, topicIndex)"
                      type="button"
                      @click="toggle(groupIndex, topicIndex)"
                    >
                      {{ topic.title }}
                    </button>
                  </h2>

                  <div :class="contentClass(groupIndex, topicIndex)">
                    <div class="accordion-body">{{ topic.content }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>