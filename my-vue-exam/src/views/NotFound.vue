<template>
  <div class="page-not-found">
    <h1>404</h1>
    <h2>Page not found</h2>
    <p>Sorry, we could not find the page you were looking for.</p>
    <router-link to="/repo">Go to Repositories Page</router-link>
  </div>
</template>

<script scoped>
export default {
  name: "PageNotFound",
};
</script>

<style>
.page-not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

h1 {
  font-size: 5rem;
  margin: 0;
}

h2 {
  font-size: 2rem;
  margin: 0;
  margin-top: 1rem;
}

p {
  font-size: 1.2rem;
  margin-top: 2rem;
}

router-link {
  font-size: 1.2rem;
  margin-top: 2rem;
  text-decoration: underline;
  color: #0077b6;
}

@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  router-link {
    font-size: 1rem;
  }
}
</style>
