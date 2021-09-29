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
            <a href="https://github.com/PaulTreanor" class="col-1 h4 mb-2">github</a>
            <a @click="copyEmailToClipboard" class="emailCopy">email</b-icon></a>
          </div>          
        </div>
      </div>     
    </main>  

</template>

<script>
export default {
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