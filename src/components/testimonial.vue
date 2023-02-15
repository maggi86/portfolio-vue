<template>
    <div id="testimonial">
        <div class="container" v-for="people in peoples" :key="people">
            <div class="card">
            <div class="row" id="row" >
                    <div class="col ms-3 mt-2">
                        <h2>{{ people.name }}</h2>
                        <small>{{ people.title }}</small>
                    </div>
                    <div class="col" id="middle">
                        <div class="row">
                            <img :src="people.images" class="outline">
                        </div>
                    </div>
                    <!-- <img :src="people.image" class="image"> -->
                    <div class="col description">
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

#testimonial{
    background-color: black;
}
.outline{
    /* get the smoke affect */
    /* position: absolute;
    top: 40px; left: 40px; */
}
.container{
    height:500px;
    padding-top:130px;
}
img{
    height:400px;
    width:450px;
    position: absolute;
    bottom: 10px;
    right:35%;
    filter: drop-shadow(0 -2mm 6mm rgba(127, 130, 127, 0.836));
}
#row{
    width:100%;
    height:700px;
}
.description{
    padding-top:10px;
    width:200px;
}
small, h2, p{
    color:white;
}
#bottom{
    position: absolute;
    bottom: 0px;
}
#middle{
    padding-bottom:50px;
}
.card{
    height:300px;
    width:100%;
    border-width:2px;
    border-color:var(--color-gray);
    box-shadow:1px 0px 1px 1px grey;
    background-color:black
    /* margin-bottom:90px; */
}
.col{
width:400px;
}

.box{
    border-width:1px;
}
</style>