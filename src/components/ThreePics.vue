<template>
  <div id="prviRed" class="container-fluid">
    <div class="row">
      <slot name="prva">
        
      </slot>

      <slot name="druga">
        
      </slot>
      <slot name="treca">
        <div ></div>
      </slot>
    </div>
  </div>

  <!-- Drugi Red -->

  <div id="drugiRed" class="container-fluid">
    <div class="row">
      <slot name="drugaJedan">
        
      </slot>

      <slot name="drugaDva">
       
      </slot>
      <slot name="drugaTri">
        
      </slot>
    </div>
  </div>

  <!-- Treci red -->

  <div id="treciRed" class="container-fluid">
    <div class="row">
      <slot name="trecaJedan">
        
      </slot>

      <slot name="trecaDva">
        
      </slot>
      <slot name="trecaTri">
       
      </slot>
    </div>
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

</style>
