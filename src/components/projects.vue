<template>
    <section>
        <div class="container" id="project">
            <div class="col">
                <div class="row mx-auto" v-for="project in projects" :key="project">
                    <div class="card">
                        <div class="img">
                            <img :src="project.image">
                            <img :src="project.image2">
                        </div>
                        <div class="details">
                            <div class="content">
                                <h3>{{project.name}}</h3>
                        <a :href="project.github"><i class="bi bi-github"></i>
                        </a>
                        <a :href="project.netlify"><span class="iconify" data-icon="file-icons:netlify"></span>
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default{
    computed:{
        projects(){
          return this.$store.state.project;
        }
}
}
</script>