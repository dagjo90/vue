<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Grid/>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue'

export default {
  name: 'GridPage',
  components: {
    Grid
  }
}
</script>
