<template>
    <main class="container">
      <div>
        <div class="blurb">
          <img src="../static/me.png" alt="">
          <h2>Hi, I'm Paul</h2>
          <p>I’m a fullstack JavaScript developer, currently making serverless things at <a href="https://www.fourtheorem.com/">fourTheorem</a>.</p>
          <p>Feel free to get in touch! 😄</p>
          <div class="row">
            <a href="https://github.com/PaulTreanor"><ion-icon name="logo-github"></ion-icon></a>
            <a href="https://paultreanor.com/rss.xml"><ion-icon name="logo-rss"></ion-icon></a>
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

img {
  max-width: 100px;
  display:block;
  margin:auto;
  margin-top: 20px;

}

</style>