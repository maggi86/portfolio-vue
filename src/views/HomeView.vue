<template>
<Home/>
<About/>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import About from "@/components/about.vue"
export default{
  components: {
    Home,
    About
  }
}
</script>
