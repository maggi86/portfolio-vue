<template>
<Home/>
<About/>
</template>

<script>
// @ is an alias to /src
import About from '@/components/about.vue'
import Home from '@/components/Home.vue'
export default{
  components: {
    Home,
    About
  }
}
</script>
