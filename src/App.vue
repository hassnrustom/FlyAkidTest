<template>
  <main id="app" dir="rtl" lang="ar">
    <div>
      <navBarComponents />
      <router-view />
      <FotterComponents />
    </div>
    <vue-progress-bar></vue-progress-bar>
  </main>
</template>

<script>
import navBarComponents from './components/Navbar/navBarComponents.vue';
import FotterComponents from './components/Navbar/FotterComponents.vue';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
    };
  },
  components : {
    navBarComponents,
    FotterComponents
  },
  methods: {
    ...mapActions({
      GetToken: "GetToken"
    })
  },
  async created() {
    await this.GetToken()
  }
  
};
</script>

<style scoped>
#app {
  font-family: 'El Messiri', sans-serif;
}
</style>

