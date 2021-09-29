<template>
    <main class="container">
    
      <!------About Me------>
      <!-- <div>
        <img src="/eggme.png" class="img-fluid myimage " alt="picture of me" width="230">
      </div> -->
      <div>
        <div class="blurb">
          <h2>Hi, I'm Paul</h2>
          <p>I'm a software engineer at <a href="https://www.fourtheorem.com/">fourTheorem</a>, where I work with AWS, Serverless, and Node.</p>
          <p>I've worked on some interesting <NuxtLink to="/projects">projects</NuxtLink>, and I also have a <NuxtLink to="/blog">blog!</NuxtLink></p>
          <p>Feel free to get in touch :)</p>
          <div class="row">
            <a href="https://github.com/PaulTreanor"><ion-icon name="logo-github"></ion-icon></a>
            <a @click="copyEmailToClipboard" class="emailCopy">
              <ion-icon name="mail"></ion-icon>
              <span class="tooltip">copy email to clipboard</span>
            </a>
          </div>      
        </div>
      </div>     
    </main>  

</template>

<script>
export default {
  head() {
    return {
      
    }
  },
  methods: {
    copyEmailToClipboard () {
      navigator.clipboard.writeText("treanorpaul9" + "@" + "gmail" + ".com");
      //pop up copied to clipboard 
    }
  }
}
</script>
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

.emailCopy {
  cursor: pointer;
}

ion-icon {
  font-size: 2.4rem;
  margin-right: 15px;
}

.emailCopy:hover .tooltip {
  display:block;
}

.tooltip {
  display: none;
    /* margin-top: 10px; moves it down */
    position: absolute;
    z-index: 1000;
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