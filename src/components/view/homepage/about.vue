<script>
export default {
  name: "homepage-about",
  data: function () {
    return {
      image: {
        url: "src/img/about.svg",
        alt: "Quebrando barreiras.",
      },
      description: {
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ligula rutrum, tincidunt enim id, maximus odio. Suspendisse vulputate quam nec faucibus pharetra. Duis viverra eros non nulla blandit, a placerat tortor tempor. Aenean congue lectus finibus urna dictum tristique. Aliquam hendrerit felis vel massa laoreet congue. Duis eros risus, bibendum et porttitor et, egestas vitae neque. Donec a erat accumsan, euismod felis vitae, aliquam libero. Vivamus pulvinar arcu ac aliquet tempor. Vivamus metus justo, viverra ut magna sed, mollis feugiat erat. Mauris facilisis dignissim eros.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ligula rutrum, tincidunt enim id, maximus odio. Suspendisse vulputate quam nec faucibus pharetra. Duis viverra eros non nulla blandit, a placerat tortor tempor. Aenean congue lectus finibus urna dictum tristique. Aliquam hendrerit felis vel massa laoreet congue. Duis eros risus, bibendum et porttitor et, egestas vitae neque. Donec a erat accumsan, euismod felis vitae, aliquam libero. Vivamus pulvinar arcu ac aliquet tempor. Vivamus metus justo, viverra ut magna sed, mollis feugiat erat. Mauris facilisis dignissim eros.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ligula rutrum, tincidunt enim id, maximus odio. Suspendisse vulputate quam nec faucibus pharetra. Duis viverra eros non nulla blandit, a placerat tortor tempor. Aenean congue lectus finibus urna dictum tristique. Aliquam hendrerit felis vel massa laoreet congue. Duis eros risus, bibendum et porttitor et, egestas vitae neque. Donec a erat accumsan, euismod felis vitae, aliquam libero. Vivamus pulvinar arcu ac aliquet tempor. Vivamus metus justo, viverra ut magna sed, mollis feugiat erat. Mauris facilisis dignissim eros.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ligula rutrum, tincidunt enim id, maximus odio. Suspendisse vulputate quam nec faucibus pharetra. Duis viverra eros non nulla blandit, a placerat tortor tempor. Aenean congue lectus finibus urna dictum tristique. Aliquam hendrerit felis vel massa laoreet congue. Duis eros risus, bibendum et porttitor et, egestas vitae neque. Donec a erat accumsan, euismod felis vitae, aliquam libero. Vivamus pulvinar arcu ac aliquet tempor. Vivamus metus justo, viverra ut magna sed, mollis feugiat erat. Mauris facilisis dignissim eros.",
        ],
      },
      services: [
        {
          id: "",
          text: "Gerenciamento de servidores e banco de dados.",
        },
        {
          id: "",
          text: "Gerenciamento dominios e certificados SSL.",
        },
        {
          id: "",
          text: "Sistema Web para empresas (PWA)",
        },
        {
          id: "",
          text: "Paginas de aterrisagem (Landing Pages)",
        },
        {
          id: "",
          text: "Sites de delivery com pagamento online",
        },
        {
          id: "",
          text: "Gerenciadores de conteúdo personalizado",
        },
        {
          id: "",
          text: "Temas Wordpress",
        },
        {
          id: "",
          text: "Plugins Wordpress",
        },
        {
          id: "",
          text: "Migrações Wordpress",
        },
      ],
      features: [
        {
          title: "Front-end",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et erat efficitur, dignissim tortor sed, dictum urna. Ut erat diam, auctor sed malesuada ac, feugiat nec turpis. Aliquam posuere dui nec nunc ultricies, vitae feugiat magna malesuada placerat.",
          icon: {
            class: "fa fa-html5",
            size: 128,
          },
        },
        {
          title: "Back-end",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et erat efficitur, dignissim tortor sed, dictum urna. Ut erat diam, auctor sed malesuada ac, feugiat nec turpis. Aliquam posuere dui nec nunc ultricies, vitae feugiat magna malesuada placerat.",
          icon: {
            class: "fa fa-code",
            size: 128,
          },
        },
        {
          title: "Banco de dados",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et erat efficitur, dignissim tortor sed, dictum urna. Ut erat diam, auctor sed malesuada ac, feugiat nec turpis. Aliquam posuere dui nec nunc ultricies, vitae feugiat magna malesuada placerat.",
          icon: {
            class: "fa fa-database",
            size: 128,
          },
        },
      ],
    };
  },
};
</script>

<template>
  <article id="about">
    <div class="">
      <div class="bg-square bg-primary text-light text-center">
        <h1>Sobre mim</h1>
        <p>Aqui estão alguns detalhes sobre mim.</p>
      </div>

      <div class="row p-block m-0">
        <div class="col-12 col-md-8 mb-4">
          <div class="description">
            <p
              v-for="(paragraph, index) in description.paragraphs"
              :key="index"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="col-12 col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Prestação de serviços</h5>
              <p class="card-text">
                Aqui está uma lista de serviços que eu ofereço:
              </p>
            </div>

            <ul class="list-group list-group-flush">
              <li
                v-for="(service, index) in services"
                class="list-group-item"
                :key="index"
              >
                <span>
                  {{ service.text }}
                </span>
              </li>
              <li class="list-group-item text-end">
                <a href="#contact" class="btn btn-lg btn-primary">
                  Entrar em contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="p-block text-center">
          <h2>Diferenciais...</h2>
          <h3>Sim, diferenciais...</h3>
        </div>

        <div class="col-12 row m-0">
          <div
            v-for="(feature, index) in features"
            class="col-12 col-lg-4 mb-4 block-feature"
            :key="index"
          >
            <div class="mb-4 bg-dark text-light mx-auto feature-icon">
              <i :class="feature.icon.class + ' fa-icon-64'"></i>
            </div>

            <h3 v-if="feature.title" class="text-center">
              {{ feature.title }}
            </h3>
            <h4 v-if="feature.subtitle">{{ feature.subtitle }}</h4>
            <p v-if="feature.text" class="text-justified p-0 p-md-4 p-lg-4">
              {{ feature.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>