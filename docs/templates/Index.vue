<template>
  <div class="gel-wrap">
    <div class="gel-layout header">
      <div class="gel-layout__item gel-1/1 gel-1/2@m">
        <h1 class="title">GEL Matter</h1>
      </div>

      <div class="gel-layout__item gel-1/1 gel-1/2@m">
        <ul class="nav">
          <li>
            <a
              @click.prevent="currentView = 'Atoms'"
              :class="{ active: currentView === 'Atoms' }"
              href="#">Atoms</a>
          </li>
          <li>
            <a
              @click.prevent="currentView = 'Molecules'"
              :class="{ active: currentView === 'Molecules' }"
              href="#">Molecules</a>
          </li>
          <li>
            <a
              @click.prevent="currentView = 'Organisms'"
              :class="{ active: currentView === 'Organisms' }"
              href="#">Organisms</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="gel-layout">
      <div class="gel-layout__item">
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
  .header {
    padding-top: 32px;
  }

  .title {
    margin-top: 0;
    margin-bottom: 0;
  }

  .nav {
    list-style: none;
    margin-top: 14px;
    margin-bottom: 0;
    overflow: hidden;
    padding-left: 0;

    li {
      float: left;
      line-height: 1;
      margin-right: 12px;
    }

    a {
      display: block;
      padding: 4px 0;
      border-bottom: 1px solid #FAE2D1;

      &.active {
        border-bottom: 1px solid;
      }
    }
  }
</style>
