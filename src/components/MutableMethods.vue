<template>
  <div id="imut">
    <header>
      <br />
      <h1>Mutable Methods</h1>
      <br />
    </header>

    <three-pics>
      <template #prva>
        <div class="col-4">
          <br />
          <img
            src="@/assets/Mutable/1.fill.jpg "
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #druga>
        <div class="col-4">
          <br />
          <img
            src="@/assets/Mutable/2.push.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #treca>
        <div class="col-4">
          <br />
          <img
            src="@/assets/Mutable/3.pop.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #drugaJedan>
        <div class="col-4">
          <br /><br />
          <img
            src="@/assets/Mutable/4.shift.jpg "
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #drugaDva>
        <div class="col-4">
          <br /><br />
          <img
            src="@/assets/Mutable/5.unshift.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #drugaTri>
        <div class="col-4">
          <br /><br />
          <img
            src="@/assets/Mutable/6.reverse.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #trecaJedan>
        <div class="col-4">
          <br /><br /><br />
          <img
            src="@/assets/Mutable/7.sort_string.jpg "
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #trecaDva>
        <div class="col-4">
          <br /><br /><br />
          <img
            src="@/assets/Mutable/8.sort_numbers.jpg"
            class="img-fluid img-thumbnail w-100 h-100"
            alt="..."
          />
        </div>
      </template>

      <template #trecaTri>
        <div class="col-4">
          <br /><br /><br />
          <img
            src="@/assets/Mutable/9.Splice.jpg"
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
  background: yellow;
}

h1 {
  color: white;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 2em;
}
</style>
