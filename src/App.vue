<template>
  <header>
    <router-link to="/imutable"
      ><button class="btn btn-warning">Imutable</button></router-link
    >
    <router-link to="/mutable"
      ><button class="btn btn-danger razmak">Mutable</button></router-link
    >
    <router-link to="/search"
      ><button class="btn btn-primary">Search</button></router-link
    >
  </header>

  <router-view> </router-view>

  <the-footer> </the-footer>
  <div class="container-fluid"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    startPage(){
      this.$router.push('/search');
    }
  },
  mounted(){
     this.$router.push('/imutable');
  }
};
</script>

<style scoped>
#app {
  width: 90%;
}
.navi {
  padding-top: 1em;
  color: red;
  margin-top: 3em;
}
.razmak {
  border: 2px solid white;
}
header {
  width: 80%;
  margin-left: 2em;
}
</style>
