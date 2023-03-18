<template>
  <div class="home">
    <h1>Welcome to My GitHub Repositories</h1>
    <p>Here you can view all of my public repositories on GitHub and see detailed information about each one.</p>
    <router-link to="/repo">
      <button class="view-repositories-btn">View Repositories</button>
    </router-link>
  </div>
</template>

<style scoped>
  .home {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }

  .view-repositories-btn {
    padding: 10px 20px;
    font-size: 1.25rem;
    background-color: #3490dc;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .view-repositories-btn:hover {
    background-color: #2779bd;
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }

    .view-repositories-btn {
      font-size: 1rem;
      padding: 8px 14px;
    }
  }

</style>


