<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-9">
          <img src="https://i.postimg.cc/nccGq8FQ/Video-Capture-20221008-134929-removebg-preview.png" class="mx-auto d-flex align-self-center">
        </div>
        <div class="col-md-3 me-auto">
          <div class="spinner-grow text-muted"></div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus, doloremque unde facere veniam nobis quibusdam laboriosam magnam nam reprehenderit debitis, similique cum, ipsa rem. Saepe accusamus dolore cum a.</p>
        </div>
      </div>
      <!-- <div class="row">
          <div class="col-3">
            <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" title="Hooray!">Hover over me!</button>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus, doloremque unde facere veniam nobis quibusdam laboriosam magnam nam reprehenderit debitis, similique cum, ipsa rem. Saepe accusamus dolore cum a.</p>

        </div>
        <div class="col-6">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus, doloremque unde facere veniam nobis quibusdam laboriosam magnam nam reprehenderit debitis, similique cum, ipsa rem. Saepe accusamus dolore cum a.</p>
        
        </div>
        <div class="col-3">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus, doloremque unde facere veniam nobis quibusdam laboriosam magnam nam reprehenderit debitis, similique cum, ipsa rem. Saepe accusamus dolore cum a.</p>
          
        </div>
      </div>
      <div class="row">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus, doloremque unde facere veniam nobis quibusdam laboriosam magnam nam reprehenderit debitis, similique cum, ipsa rem. Saepe accusamus dolore cum a.</p>
        
      </div> -->
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  background-image: url("https://i.postimg.cc/nccGq8FQ/Video-Capture-20221008-134929-removebg-preview.png");
}
img{
  height: 2000px;
  overflow: hidden;
  /* image-rendering: pixelated; */
  /* backdrop-filter: blur(5px) opacity(0.5); */
  -webkit-filter: blur(5px); 
  filter: blur(7px);
}
.container-fluid{
  background-color:rgb(62, 61, 61);
  height:700px;
  width:100%;
}
.col{
  background-color:rgba(122, 122, 164, 0.137);
  max-width: 300px;

}
.row{
  width:100%;
  /* background-color: rgba(253, 255, 253, 0); */
  /* background-image: ur("https://i.postimg.cc/nccGq8FQ/Video-Capture-20221008-134929-removebg-preview.png"); */
  /* background-repeat: no-repeat;
  background-size: cover; */
}
/* .col-3{
  background-color: rgb(128, 0, 60);
}
.row-6{
  background-color: rgb(128, 100, 0);
} */
</style>
