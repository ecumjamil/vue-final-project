<template>
  <div id="nav">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/repo" class="nav-link">Repositories</router-link>
  </div>
  <router-view />
</template>

<style>
/* Reset box model */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Set base font size */
html {
  font-size: 16px;
}

/* Set default font family and antialiasing */
body {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Set link colors and underline */
a {
  font: 2rem;
  color: #2c3e50;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Style the navigation */
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.nav-link {
  margin-right: 2.5rem;
}

/* Make the navigation responsive */
@media (max-width: 768px) {
  #nav {
    flex-direction: column;
    padding: 10px;
  }
  
  .nav-link {
    margin: 0;
    margin-top: 1rem;
  }
}
</style>
