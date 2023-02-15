<template>
    <div class="contact">
        <form action="https://formspree.io/f/xoqzeokl"
       method="POST">
       <label>
        Email:
        <input type="email" name="email" placeholder="eg: janedoe@gmail.com"/>
       </label>
       <label>
        Message:
        <textarea type="text" name="message" placeholder="Oh My Word your portfolio is amazing"></textarea>
       </label>
       <button type="submit">send</button>
    </form>
    </div>
</template>
<style scoped>
.contact{
   position:relative;
    bottom:0
}
</style>