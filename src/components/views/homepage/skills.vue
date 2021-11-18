<script>
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
              title: "Formatação",
              content: "Pleno conhecimento em formatação de documentos HTML.",
            },
            {
              active: false,
              title: "Semântica dos elementos",
              content: "Elementos aninhados por padrão, seguindo a semântica.",
            },
            {
              active: false,
              title: "Performance e velocidade",
              content:
                "Uso de técnicas de otimização de carregamento de paginas.",
            },
            {
              active: false,
              title: "Otimização de busca",
              content:
                "Implementação de metadados para interpretação de mecanismos de pesquisa.",
            },
            {
              active: false,
              title: "Protocolo Open Graph",
              content: "Previa do site nas maiores redes sociais.",
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
              content: "Pragramação de paginas adaptaveis em dispositivos.",
            },
            {
              active: false,
              title: "Performance",
              content: "Dominio sobre a técnica Mobile First.",
            },
            {
              active: false,
              title: "Transições",
              content:
                "Uso de transições evitando a utilização de animações desnecessária.",
            },
            {
              active: false,
              title: "Animações",
              content: "Elaboração de animações programadas.",
            },
            {
              active: false,
              title: "Bootstrap",
              content: "Conhecimento pleno do framework.",
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
              title: "Vanilla",
              content:
                "Amplo saber sobre a utilização de Javascript para navegadores.",
            },
            {
              active: false,
              title: "Jquery",
              content:
                "Utilização de Jquery para manipulação do documento HTML.",
            },
            {
              active: false,
              title: "Node",
              content: "Grande conhecimento sobre modulos e pacotes.",
            },
            {
              active: false,
              title: "Nuxt",
              content: "Criação de aplicações estáticas e dinâmicas.",
            },
            {
              active: false,
              title: "Vue",
              content: "Manipulação de componentes, modulos e visualizações.",
            },
          ],
        },
        {
          title: "PHP",
          subtitle: "Linguagem de programação",
          icon: "",
          topics: [
            {
              active: false,
              title: "Boas práticas",
              content:
                "Sigo as recomendações dadas pela PHP Fig, chamados de PSR's.",
            },
            {
              active: false,
              title: "Segurança",
              content:
                "Adoção de praticas defensivas. Proteção contra XSS e SQL Injection.",
            },
            {
              active: false,
              title: "Crud",
              content: "Criação de sistemas em geral com a própria engine.",
            },
            {
              active: false,
              title: "Wordpress",
              content:
                "Criação de temas e plugins, customização e gerenciamento.",
            },
            {
              active: false,
              title: "Magento",
              content: "Criação de temas e customização de código.",
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
          if (y !== topicIndex) {
            this.groups[x].topics[y].active = false;
          }
        }
      }
      var isActive = this.groups[groupIndex].topics[topicIndex].active;
      var toggle = isActive ? false : true;
      this.groups[groupIndex].topics[topicIndex].active = toggle;
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
      <div class="row m-0">
        <!-- Inicio -->
        <div class="col-lg-6 row p-block m-0">
          <div
            v-for="(group, groupIndex) in groups"
            class="col-6 mb-4"
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
        <!-- Fim -->
        <div class="col-6 d-none d-md-flex my-auto">
          <figure class="w-100 p-5">
            <img
              class="w-100"
              :src="require('@/src/assets/images/skills.svg')"
              alt="Imagem ilustrativa"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>