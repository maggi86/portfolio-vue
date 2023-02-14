<template>
  <Navbar/>
  <router-view/>
  <!-- <Contact/> -->
  <Footer/>
</template>

<script>
import Navbar from "@/components/nav.vue"
import Contact from "@/components/contact.vue"
import Footer from "@/components/footer.vue"

export default{
  components: {
    Navbar,
    Footer,
    Contact
  }
}
</script>
<style>
*{
  padding:0;
  margin:0;
}
:root {
    --color-primary: #8B9D83;
    --color-white: #BEB0A7;
    --color-black: #040303;
    --color-dark: #3A4E48;
    --color-gray: #6A7B76;

    --font-lg: 64px;
    --font-xm: 45px;
    --font-md: 26px;
    --font-sm: 15px;
    --font-xs: 9px;

    --size-lg: 1280px;
    --size-md: 976px;
    --size-sm: 768px;
    --size-xs: 500px;
}
</style>
