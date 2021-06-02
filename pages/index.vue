<template>

   

    <main class="container">
    
      <!------About Me------>
      <div id="about">
        <div class="row">
          <div class="col-lg-4 text-center order-lg-5">
            <img src="/eggme.png" class="img-fluid myimage " alt="picture of me" width="230">
          </div>
          <div class="col-lg-8">
            <div class="blurb col-lg-11">
              <h2 class="title">Paul Treanor</h2>
              <p class="text-muted">Software Engineering Student</p>
              <p>Hi, I'm Paul, and I'm currently in my final year studying Computer Applications at DCU.
                I'm interested in full stack development, machine learning, and automating things.</p>
              <p>Feel free to get in touch :)</p>
              <div class="icons row">
                <a href="https://github.com/PaulTreanor" class="col-1"><i class="bx bxl-github"></i></a>
                <a href="mailto: treanorpaul9@gmail.com" class="col-1"><i class="bx bx-envelope"></i></a>
              </div>
            </div>
          </div>     
          
        </div>  
      </div>
        
      <hr>

      <!----Projects ------->
      <div id="projects">
        <h2 class="text-center project-title title">Projects</h2>

        <!---project 1---->
        <div class="project row">
          <div class="col-lg   d-flex justify-content-center">
            <img src="/jester.png" class="img-fluid mt-1 project-image" alt="android app picture" width="500">
          </div>
          <div class="col-lg">
            <h3 class="title">Jester </h3>
            <p>A novel approach to gesture recognition implementing KNN and local outlier factor.</p>
            <p>Source code and more details will be available soon!</p>
            <div class="d-flex flex-row bd-highlight">
              <a href="https://www.youtube.com/watch?v=QSDZ-cdyGXw&amp;t=1s" target="_blank" class="bd-highlight links">DEMO</a>
            </div>
          </div>
        </div>


        <!---project 2---->
        <div class="project row">
          <div class="col-lg d-flex justify-content-center">
            <img src="/mockup.jpg" class="img-fluid mt-1 project-image " alt="android app picture" width="500">
          </div>
          <div class="col-lg">
            <h3 class="title">String Theory</h3>
            <p>An android app I developed with Colin Gorman to help users learn the guitar on the go.</p>
            <div class="d-flex flex-row bd-highlight">
              <a href="https://play.google.com/store/apps/details?id=com.paul.stringtheory_justplay" class="bd-highlight links">PLAY STORE</a>
              <a href="https://gitlab.computing.dcu.ie/gormac23/2020-ca326-cgorman-chordlearner" class="bd-highlight links">GITLAB</a>
            </div>
          </div>
        </div>

        <!-----project 3----->
        <div class="project row">
          <div class="col-lg d-flex justify-content-center">
            <img src="/canileavethehouse.jpg" class="img-fluid project-image " alt="covid web-app picture" width="500">
          </div>
          <div class="col-lg">
            <h3 class="title">canileavethehouse?</h3>
            <p>An interactive map to help users determine what covid restrictions apply to their area.</p>
            <div class="d-flex flex-row bd-highlight">
              <a href="https://paultreanor.com/canileavethehouse" class="bd-highlight links">WEB PAGE</a>
              <a href="https://github.com/PaulTreanor/canileavethehouse" class="bd-highlight links">GITHUB</a>
            </div>
          </div>
        </div>

      </div>
      
      <hr>
      
      <!----contact me section -->
      <div id="contact">
        <div class="row justify-content-center text-center">
          <div>
            <h2 class="text-center sectionTitle title">Get in touch!</h2>
            <div class="row">
              <div class="col-lg">
                <a href="https://github.com/PaulTreanor/tududle"><i class="bx bxl-github"></i>
                <p>github.com/paultreanor</p>
                </a>
              </div>
              <div class="col">
                <a href="mailto:treanorpaul9@gmail.com">
                  <i class="bx bx-envelope"></i>
                  <p>treanorpaul9@gmail.com</p>
                </a>
              </div>         
            </div>
          </div>
        </div>
      </div>
    </main>  

</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}

main {
  margin-top: 40px;
  /*room for navbar*/
}

.myimage {
  display: inline;
}

.project {
  padding-top: 40px;
  padding-bottom: 25px;
}

.section, #about, #projects, #contact {
  padding-top: 50px;
  padding-bottom: 50px;
}

#about {
  padding-bottom: 70px;
}

#projects {
  padding-bottom: 50px;
}

#contact {
  padding-top: 25px;
}

.sectionTitle {
  padding-bottom: 25px;
}

.title {
  font-weight: 700;
}

.links {
  font-weight: 700;
  padding-right: 20px;
}

i {
  font-size: 24px !important;
}

@media only screen and (max-width: 600px) {
  main {
    margin: 0px;
  }
  .section, #about, #projects, #contact {
    margin: 0px;
    padding-top: 0px;
    padding-bottom: 30px;
  }
  .myimage {
    padding-bottom: 20px;
  }
  .title {
    text-align: center;
    padding-bottom: 0px;
  }
  .project {
    padding-top: 0px;
  }
  h3 {
    font-size: 150%;
  }
  .project-title {
    padding-bottom: 20x;
  }
  .project-image {
    padding-bottom: 20px;
  }
  .icons {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
}

@media only screen and (max-width: 900px) {
  main {
    margin: 0px;
  }
  .section, #about, #projects, #contact {
    margin: 0px;
    padding-top: 0px;
    padding-bottom: 30px;
  }
  .myimage {
    padding-bottom: 20px;
  }
  .title {
    text-align: center;
    padding-bottom: 0px;
  }
  .project {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  h3 {
    font-size: 150%;
  }
  .project-title {
    padding-bottom: 20x;
  }
  .project-image {
    padding-bottom: 20px;
  }
  .icons {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
}

/* Blurb position on desktops*/
@media (min-width: 900px) {
  .blurb {
    margin-top: 30px;
  }
}

/*narrower container on PC */
@media (min-width: 1200px) {
  .container {
    max-width: 970px;
  }
}
/*# sourceMappingURL=style.css.map */
</style>