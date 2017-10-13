<template>
<section class="hero">
  <!-- Hero header: will stick at the top -->
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="../assets/gilbert.png" alt="Gilbert">
          </a>
        </div>
        <span class="nav-toggle" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu" v-bind:class="{ 'is-active': isActive }">
          <router-link class="nav-item" v-bind:to="'/'">
            Portfolio
          </router-link>
          <router-link class="nav-item" v-bind:to="'/resume'">
            Resume
          </router-link>
          <a class="nav-item">
            Contact
          </a>
          <!--<span class="nav-item">
            <a class="button is-primary is-inverted">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>Download</span>
            </a>
          </span>-->
        </div>
      </div>
    </header>
  </div>
    <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-left">
      <h1 class="title">
         Jacob Clayman
      </h1>
    </div>
  </div>
</section>
</template>

<script>
  export default {
    name: 'navbar',
    data: function() {
      return {
        isActive: false
      }
    },
    methods: {
      toggleNav: function() {
        this.isActive = !this.isActive;
      }
    }
  }
</script>

<style>

</style>