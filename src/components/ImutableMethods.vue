<template>
  <div id="imut">
    <header>
      <br />
      <h1>Imutable Methods</h1>
      <br />
    </header>

    <three-pics>
      <template #prva>
        <div class="col-4">
          <br />
          <img
            src="@/assets/Immutable/1.Concat.jpg "
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #druga>
        <div class="col-4">
          <br />
          <img
            src="@/assets/Immutable/2.forEach.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #treca>
        <div class="col-4">
          <br />
          <img
            src="@/assets/Immutable/3.Map.jpg"
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
            src="@/assets/Immutable/4.filter.jpg "
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
            src="@/assets/Immutable/5.Reduce.jpg"
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
            src="@/assets/Immutable/6.Slice.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #trecaJedan>
        <div class="col-4">
          <br /><br />
          <br />
          <img
            src="@/assets/Immutable/7.Flat.jpg "
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #trecaDva>
        <div class="col-4">
          <br /><br />
          <br />
          <img
            src="@/assets/Immutable/8.flatMap.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #trecaTri>
        <div class="col-4">
          <br /><br />
          <br />
          <img
            src="@/assets/Immutable/9.Split.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>
    </three-pics>

    <br /><br /><br /><br /><br /><br />
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
  background: deepskyblue;
  border: 5px solid black;
}
#imut {
  margin: 0 2em 2em 2em;
  background: orangered;
}
h1 {
  color: white;
  margin-top: 0rem;
  font-weight: bold;
  font-size: 2em;
}
</style>
