<template>
  <div id="app">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to='{name:"search"}'>Search</router-link>
        <router-link class="navbar-item" :to='{name:"list"}'>List all items</router-link>
      </div>
    </nav>
    <section class="section">
      <div class="container">

        <transition>
          <router-view/>
        </transition>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'app',
  };

</script>

<style>


</style>
