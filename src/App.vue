<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
    </q-header>
    <q-page-container>
      <GetStarted />
    </q-page-container>
    <router-view></router-view>
  </q-layout>
</template>

<script>
import GetStarted from './components/GetStarted.vue'

export default {
  name: 'LayoutDefault',

  components: {
    GetStarted
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
