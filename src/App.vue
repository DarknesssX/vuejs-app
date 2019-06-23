<template>
  <div id="app">
    <div id="nav" class="navbar-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/details">Details</router-link>
      <router-link to="/randomizer">Randomizer</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 0.5rem;
  background: linear-gradient(#bd5d38, #e56f44);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: rgba(255,255,255,0.5);
  margin: 1rem;
}

#nav a.router-link-exact-active {
  color: #fff;
}

body {
  
  margin: 0;
}

.navbar-nav {
  flex-direction: inherit;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.fixed-text {
  padding-top: 70px;
}

</style>

<script>

$(window).scroll(() => {
  if ($(window).scrollTop() > 0) {
    $('#nav').addClass('sticky');
    $('#home').addClass('fixed-text');
    $('#detail').addClass('fixed-text');
    $('#randomizer').addClass('fixed-text');
  } else {
    $('#nav').removeClass('sticky');
    $('#home').removeClass('fixed-text');
    $('#detail').removeClass('fixed-text');
    $('#randomizer').removeClass('fixed-text');
  }
});

export default { };
</script>