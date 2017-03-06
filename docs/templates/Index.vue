<template>
  <div class="gel-wrap">
    <div class="gel-layout">
      <div class="gel-layout__item">

          <h1>GEL Matter</h1>
          <ul>
            <li><a @click.prevent="currentView = 'Atoms'" href="#">Atoms</a></li>
            <li><a @click.prevent="currentView = 'Molecules'" href="#">Molecules</a></li>
            <li><a @click.prevent="currentView = 'Organisms'" href="#">Organisms</a></li>
          </ul>

          <keep-alive>
            <component :is="currentView"></component>
          </keep-alive>
        </div>
      </div>
    </div>
</template>

<script>
  import Atoms from '../views/Atoms.vue';
  import Molecules from '../views/Molecules.vue';
  import Organisms from '../views/Organisms.vue';

  export default {
    components: { Atoms, Molecules, Organisms },
    data() {
      return {
        currentView: 'Atoms',
      };
    },
  };
</script>

<style lang="scss">
  // ...
</style>
