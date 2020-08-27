<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Graph/>
  </div>
</template>

<script>
// @ is an alias to /src
import Graph from '@/components/Graph.vue'

export default {
  name: 'GraphPage',
  components: {
    Graph
  }
}
</script>
