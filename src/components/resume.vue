<template>
    <div class="resume">
        <div class="container">
            <div class="row ms-5 d-flex justify-content-center">
                <div class="card left">
                  <div class="content">
                    <div class="row">
                        <div class="col-4">
                            <h3>{{resume1[0].date}}</h3>
                        </div>
                        <div class="col">
                            <small>
                              {{resume1[0].title}}
                            </small>   
                            <p>{{resume1[0].description}}</p>   
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card right">
                  <div class="content">
                    <div class="row">
                        <div class="col-4 mx-auto m-2">
                            <h3>{{resume2[0].date}}</h3>
                        </div>
                        <div class="col">
                            <small>
                              {{resume2[0].title}}
                            </small>
                            <p>{{resume2[0].description}}</p>
                            
                        </div>
                    </div>
                  </div>
                </div>
           

                <div class="card left">
                  <div class="content">
                    <div class="row">
                        <div class="col-4">
                            <h3>{{resume1[1].date}}</h3>
                        </div>
                        <div class="col">
                            
                            <small>
                              {{resume1[1].title}}
                            </small>
                            <p>{{resume1[1].description}}</p>       
                        </div>
                    </div>
                  </div>
                </div>
                </div>
                <div class="row ms-5 d-flex justify-content-center">
                <div class="card right">
                  <div class="content">
                    <div class="row">
                        <div class="col-4 mx-auto m-2"> 
                            <h3>{{resume2[1].date}}</h3> 
                        </div>
                        <div class="col">
                            <small>
                                {{resume2[1].title}}
                            </small>
                            <p>{{resume2[1].description}}</p>
                        </div>
                    </div>
                  </div>
                </div>

                <div class="card left">
                  <div class="content">
                    <div class="row">
                        <div class="col-4">                       
                            <h3>{{resume1[2].date}}</h3>
                        </div>
                        <div class="col">
                            
                            <small>
                                {{resume1[2].title}}
                            </small>
                            <p>{{resume1[2].description}}</p>
                            
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card right">
                  <div class="content">
                    <div class="row">
                        <div class="col-4 mx-auto m-2">                       
                            <h3>{{resume2[2].date}}</h3> 
                        </div>
                        <div class="col">
                            <small>
                                {{resume2[2].title}}
                            </small>
                            <p>{{resume2[2].description}}</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="row ms-5 d-flex justify-content-center">
                <div class="card left">
                  <div class="content">
                    <div class="row">
                        <div class="col-4">
                            <h3>{{resume1[3].date}}</h3>
                        </div>
                        <div class="col">
                            <small>
                              {{resume1[3].title}}
                            </small>
                            <p>{{resume1[3].description}}</p>
                            
                        </div>
                    </div>
                  </div>
                </div>
                <div class="card right">
                  <div class="content">
                    <div class="row">
                        <div class="col-4 mx-auto m-2">
                            <h3>{{resume2[3].date}}</h3>
                            
                        </div>
                        <div class="col">
                            <small>
                                {{resume2[3].title}}
                            </small>
                            <p>{{resume2[3].description}}</p>
                        </div>
                    </div>
                  </div>
                </div>

      <div class="card left">
          <div class="content">
            <div class="row">
                <div class="col-4">
                    <h3>{{resume1[4].date}}</h3>

                </div>
                <div class="col">
                    
                    <small>
                      {{resume1[4].title}}
                    </small>
                    <p>{{resume1[4].description}}</p>
                </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
export default{
    computed:{
        resume1(){
            return this.$store.state.resume.resume1
        },
        resume2(){
            return this.$store.state.resume.resume2
        }
    }
}
</script>

<style scoped>
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
.resume{
    background-color: var(--color-black)
}
.container{
    padding:0px;
    padding-top:50px;
    padding-bottom:50px;
    margin:0px;
    width:100%
}
.col{
    padding-top:30px;
}
p{
    font-size:14px;
    letter-spacing:1px;
    margin-top:5px;
    color:var(--color-white);

}
small{
    font-size:15px;
    font-weight:bold;
    color:var(--color-white);
}
.row{
    margin:0px;
    width:100%;
}
.left h3{
    writing-mode: vertical-lr;
text-orientation: upright;
line-height:17px;
letter-spacing: 1px;
height:150px;
font-size: 18px;
padding-top:5px;
color:var(--color-white);

}
.right h3{
    writing-mode: vertical-rl;
/* text-combine-upright: all; */
/* text-combine-upright: none; */
font-size: 20px;
height:180px;
padding-top:20px;
color:var(--color-white);
padding-bottom:20px;

}
.card{
    height:200px;
    width: 370px;
    margin-bottom:5px;
    background-color: rgba(220, 245, 231, 0.078);
    margin-left:5px;
    border-bottom-width: 1px;
    border-right: 1px;
    border-top:1px;
border-radius: 2px;
border-color:var(--color-gray);
}
</style>