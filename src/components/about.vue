<template>
    <div class="about">
        <div class="container pt-5 pb-5">
            <div class="card mt-5">
            <div class="row ms-5">
                    <div class="col ms-5 mt-5 pe-5 pb-5">
                        <h1>About Me</h1>
                        <p class="pt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum eligendi aut iure esse accusantium natus, a recusandae libero alias nam eum quibusdam ex laboriosam minima, illum ab eius repellendus odit temporibus nostrum animi tempore neque quas. Ipsum modi veritatis ad temporibus suscipit optio repudiandae vero molestias, officia delectus sit laudantium quod maxime velit dicta sunt repellat dolores. Obcaecati, ullam soluta? Consequuntur debitis ratione eligendi nostrum? Voluptatibus excepturi et earum? Earum dolores minima maiores, nobis, laboriosam minus explicabo aperiam pariatur, cum sapiente illum reiciendis? Laborum vero dicta quod totam aperiam? Nulla sequi quia consequatur qui velit atque delectus enim corrupti?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione quas, voluptatum dolorum unde tempora in saepe? Cumque soluta ea quo iusto, modi, reprehenderit optio dolorum totam numquam dolore quaerat?</p>
                    </div>
                    <div class="col me-5" id="bg">
                        <div class="vl"></div>
                        <hr/>
                        <!-- <img src="https://i.postimg.cc/3NBfKTF2/Meagan-2.jpg"> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.about{
    margin-top:100px;
    padding-bottom: 50px;
    background-color: rgb(0, 0, 0);
}

#bg{
    background-image:
    linear-gradient(to left, rgb(0, 0, 0), rgba(128, 128, 128, 0), rgb(0, 0, 0) ),
    url('https://i.postimg.cc/3NBfKTF2/Meagan-2.jpg');
    width: 80%;
    background-position: center;
    background-size: cover;
}
p{
    width:350px;
}
h1{
    
    font-size: 50px;
}
.vl{
    margin-top: 60%;
    margin-left:7%;
    height:300px;
    width:3px;
    background-color: rgba(157, 157, 157, 0.559);
}
hr{
    margin-left:20%;
    margin-top: 30%;;
    width:300px;
    padding-top:3px;
    background-color: aliceblue;
}
.card{
    background-color: rgba(0, 0, 0, 0);
    border-width:4px;
    border-color:grey;
    overflow: hidden;
}

</style>