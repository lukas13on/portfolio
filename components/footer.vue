<script>
export default {
  name: "application-footer",
  data() {
    return {
      year: new Date().getFullYear(),
      author: " Lucas de Oliveira Neitzke",
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <!-- <Footer> -->
  <footer id="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 bg-dark pre-footer">
          <a href="#profile" class="rounded-circle btn btn-primary button-top">
            <i class="fa fa-arrow-up"></i>
          </a>
        </div>

        <div class="col-12 bg-dark text-white">
          <div class="text-center p-4">
            <a class="btn" href>
              <span class="logo-text cursive">LON</span>
            </a>
          </div>
        </div>

        <div class="col-12 bg-secondary text-white">
          <div class="text-center p-4">
            <p class="m-0">Todos os direitos reservados.</p>
            <p class="m-0">{{ author }}.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- </Footer> -->
</template>