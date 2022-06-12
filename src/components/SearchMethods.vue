<template>
  <div id="imut">
    <header>
      <br />
      <h1>Search Methods</h1>
      <br />
    </header>

    <three-pics>
      <template #prva>
        <div class="col-4">
          <br />
          <img
            src="@/assets/Search/1.find.jpg "
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #druga>
        <div class="col-4">
          <br />
          <img
            src="@/assets/Search/2.findIndex.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #treca>
        <div class="col-4">
          <br />
          <img
            src="@/assets/Search/3.indexOf.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #drugaJedan>
        <div class="col-4">
          <br />
          <br />
          <img
            src="@/assets/Search/4.lastIndexOf.jpg "
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #drugaDva>
        <div class="col-4">
          <br />
          <br />
          <img
            src="@/assets/Search/5.includes.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #drugaTri>
        <div class="col-4">
          <br />
          <br />
          <img
            src="@/assets/Search/6.some.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #trecaJedan>
        <div class="col-4"></div>
      </template>

      <template #trecaDva>
        <div class="col-4">
          <br />
          <br />
          <br />
          <img
            src="@/assets/Search/7.every.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #trecaTri>
        <div class="col-4"></div>
      </template>
    </three-pics>

    <br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
header {
  text-align: center;
  border: 5px solid black;
  background: deepskyblue;
}
#imut {
  margin: 0px 2em 3em 2em;
  background: green;
}

h1 {
  color: white;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 2em;
}
</style>
