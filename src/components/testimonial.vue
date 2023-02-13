<template>
    <div id="testimonial">
        <div class="container">
            <div class="card mx-auto" v-for="people in peoples" :key="people">
                <div class="row">
                    <div class="col">
                        <h2>{{ people.name }}</h2>
                        <img :src="people.images" class="outline">
                        <!-- <img :src="people.image" class="image"> -->
                        <p>"{{ people.description }}"</p>
                        <small>{{ people.title }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    computed: {
        peoples() {
            return this.$store.state.people;
        }
    }
}
</script>

<style scoped>
.outline{
    /* get the smoke affect */
}
</style>