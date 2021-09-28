<template>
  <!----Projects ------->
  <div class="container">
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
  </div>
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
  
  /* narrower blurb on widescreen */
  .blurb {
    max-width: 700px;
    margin: 0 auto;
  }
  


}
</style>