<template>
    <main class="container">
    
      <!------About Me------>
      <div>
        <!-- <div>
          <img src="/eggme.png" class="img-fluid myimage " alt="picture of me" width="230">
        </div> -->
        <div>
          <div >
            <!-- <h2 clas="title">Paul Treanor</h2>
            <p class="lead">Software Engineer</p> -->
            <h2>Hi, I'm Paul.</h2>
            <p>I'm a software engineer at fourTheorem, where I work with AWS, the Serverless framework, and Node.</p>
            <p>This site is for showing off some of the open source stuff I do, and I also have a <NuxtLink to="/blog">blog!</NuxtLink></p>
            <p>Feel free to get in touch :)</p>
            <div class="row">
              <a href="https://github.com/PaulTreanor" class="col-1 h4 mb-2">github</a>
              <a href="mailto: treanorpaul9@gmail.com" class="col-1 h4 mb-2">email</b-icon></a>
            </div>
          </div>
        </div>     
          
      </div>
        
      <hr>

      <!----Projects ------->
      <div id="projects">
        <h2>Projects</h2>

        <!---project 1---->
        <div class="project row">
          <img src="/openhands.png" class="one-third column image" alt="android app picture" width="400">
          <div >
            <h4>OpenHands </h4>
            <p>A novel approach to gesture recognition implementing KNN and local outlier factor.</p>
            <p>Includes Vue.js camera webapp to demo the gesture classifier.</p>
            <div class="d-flex flex-row bd-highlight">
              <a href="https://www.youtube.com/watch?v=QSDZ-cdyGXw&amp;t=1s" target="_blank" class="bd-highlight links">DEMO</a>
              <a href="https://github.com/PaulTreanor/openhands" class="bd-highlight links">GITHUB</a>
            </div>
          </div>
        </div>


        <!---project 2---->
        <div class="project row">
          <div class="col-lg d-flex justify-content-center">
            <img src="/mockup.jpg" class="one-third column image" alt="android app picture" width="400">
          </div>
          <div class="col-lg">
            <h4>String Theory</h4>
            <p>An android app I developed with Colin Gorman to help users learn the guitar on the go.</p>
            <div class="d-flex flex-row bd-highlight">
              <a href="https://gitlab.computing.dcu.ie/gormac23/2020-ca326-cgorman-chordlearner" class="bd-highlight links">GITLAB</a>
            </div>
          </div>
        </div>


      </div>
      
      <hr>
      
      <!----contact me section -->
      <div id="contact">
          <div>
            <h2 >Get in touch!</h2>
            <div class="row">
              <div class="one-third column">
                <a href="https://github.com/PaulTreanor/" class="h6 mb-2">
                <p>github.com/paultreanor</p>
                </a>
              </div>
              <div class="one-third column">
                <a href="mailto:treanorpaul9@gmail.com" class="h6 mb-2">
                  <p>treanorpaul9 (at) gmail (dot) com</p>
                </a>
              </div>         
            </div>
          </div>
        </div>
      </div>
    </main>  

</template>

<style scoped>

h2 {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

p {
  margin-bottom: 5px;

}

.project {
  margin-bottom: 2.5rem;
}

.container {
    padding-top: 2rem;
  }

/* Larger than desktop */
@media (min-width: 1000px) {
  .image {
    margin-right: 1.5rem;
  }

  


}


</style>