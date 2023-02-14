<template>
    <div id="testimonial">
        <div class="container">
            <div class="card mx-auto" v-for="people in peoples" :key="people">
                <div class="row">
                    <div class="col">
                        <small>{{ people.title }}</small>
                    </div>
                    <div class="col">
                        <div class="row">
                            <img :src="people.images" class="outline">
                        </div>
                        <div class="row">
                            <h2>{{ people.name }}</h2>
                        </div>
                    </div>
                    <!-- <img :src="people.image" class="image"> -->
                    <div class="col">
                        <p>"{{ people.description }}"</p>
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
.container{
    width:100%;
    height:500px;
}
.card{
    height:200px;
    width:1000px;
    border-width:1px;

}
</style>