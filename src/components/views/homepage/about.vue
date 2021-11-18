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
          "Atualmente tenho 25 anos, moro no Paraná e sou Desenvolvedor Web Full Stack.",
          "Meu interesse pela área surgiu em 2016, eu costumava jogar online e com o tempo me vi interessado em programar, contudo, nesta época eu não possuía conhecimento em programação de jogos, sendo assim iniciei minha carreira desenvolvendo sites para internet. Com o passar dos anos me identifiquei com o trabalho, realizei projetos para: M3 Locações de máquinas, Inove Formaturas e Madaly Eventos.",
          "Em 2019 já não satisfeito somente em desenvolver sites, entrei em um projeto de desenvolvimento de sistemas, na empresa Pop Hub. Neste projeto, trabalho com o Front end e Back end da plataforma (dashboard) e o Back end de uma aplicação API, que faz integrações com Marketplaces realizando também, o desenvolvimento do banco de dados da plataforma e API.",
          "Desde 2016, estudei e realizei projetos com o objetivo de aprimorar meus conhecimentos sobre as linguagens de programação, atualmente sou programador Full Stack, tendo domínio sobre: PHP, HTML, Java Script e CSS.",
          "Dentre as minhas habilidades, posso elencar que sou familiarizado com PHP na criação de dashboards em PHP Crud, com Javascript Vanilla e CSS.",
          "No início deste ano tive dificuldades na conciliação de Front end com Back end de forma reativa em um projeto pessoal, durante a busca por uma solução, encontrei o Vue.js e me identifiquei, desde então estudo este framework no objetivo de criar aplicações reativas, mantendo a programação original e a segurança. Para cumprir estes requisitos tive que utilizar o Nuxt.js em conjunto ao Vue.js, uma vez que este, cria páginas estáticas e dinâmicas de forma satisfatória.",
          "Tendo 5 anos de experiência e sendo desenvolvedor, busco neste momento de minha carreira, novos projetos para que possa aprimorar minhas habilidades, em especial gostaria de um projeto que utilizasse Vue.js e Nuxt.js. Entretanto, estou aberto a novas oportunidades de trabalho, sejam elas nas linguagens que domino, ou novos desafios em linguagens quais ainda não possuo tanto conhecimento. ",
        ],
      },
      services: [
        {
          text: "Paginas de aterrisagem (Landing Pages).",
        },
        {
          text: "Sites, sistemas e aplicativos web (PWA).",
        },
        {
          text: "Sistema do administrador (Dashboard).",
        },
        {
          text: "Sistema de gerenciamento de conteúdo (CMS).",
        },
        {
          text: "Criação de temas e plugins para Wordpress.",
        },
        {
          text: "Desenvolvimento e integração de API's.",
        },
        {
          text: "Lojas virtuais com pagamento online.",
        },
        {
          text: "Gerenciamento de servidores e banco de dados.",
        },
        {
          text: "Gerenciamento dominios e certificados SSL.",
        },
        {
          text: "Para outros serviços verifique a disponibilidade entrando em contato:",
        },
      ],
      features: [
        {
          title: "Front end",

          text: "Criação de layouts com responsividade, garantindo que o usuário consiga utilizar o site ou sistema adequadamente independentemente do dispositivo. Utilização da semântica e boas práticas seguindo as recomendações padrões.",
          icon: {
            class: "fa fa-html5",
            size: 128,
          },
        },
        {
          title: "Back end",
          text: "Desenvolvimento de infraestrutura de servidores e contrução de regras de negócio. Familizarizado com Cpanel e com PHP Crud. Possuo também habilidades com o desenvolvimento de ambientes Back End em Javascript com o uso de Node e Nuxt. ",
          icon: {
            class: "fa fa-code",
            size: 128,
          },
        },
        {
          title: "Banco de dados",
          text: "Pleno conhecimento com banco de dados. Familizarizado com a combinação Cpanel com phpMyAdmin. Contruo os bancos de dados baseados no contexto do produto ou serviço. Noções de fragmentação de dados em diferentes tabelas e ligação de dados e chaves externos com dados da consulta atual.",
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
  <section id="about">
    <div class="">
      <div class="bg-square bg-dark text-light text-center">
        <h1>Sobre mim</h1>
        <p>Um pouco sobre mim.</p>
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
              <h5 class="card-title">Serviços prestados</h5>
              <p class="card-text">
                <small class="text-muted">Consulte a lista</small>
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
              <li class="list-group-item text-center text-sm-end">
                <a href="#contact" class="btn btn-lg btn-primary btn-block">
                  Entrar em contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="p-block text-center">
          <h2>Conte com o conhecimento e <b>experiência</b> de quem</h2>
          <h3 class="text-muted">
            trabalha ha mais de <b>5 anos</b> no ambiente web.
          </h3>
        </div>

        <div class="col-12 row m-0">
          <div
            v-for="(feature, index) in features"
            class="col-12 col-lg-4 mb-4 block-feature"
            :key="index"
          >
            <div class="mb-4 text-light mx-auto feature-icon bg-dark">
              <i :class="feature.icon.class + ' fa-icon-64 text-light'"></i>
            </div>

            <h3 v-if="feature.title" class="text-center mb-4">
              {{ feature.title }}
            </h3>
            <h4 v-if="feature.subtitle">{{ feature.subtitle }}</h4>
            <p v-if="feature.text" class="p-0 p-md-4 p-lg-4">
              {{ feature.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>