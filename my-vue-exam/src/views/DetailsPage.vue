<template>
  <div class="container">
    <h1>{{ repository.name }}</h1>
    <p>{{ repository.description }}</p>
    <p>Language: {{ repository.language }}</p>
    <p>Created: {{ repository.created_at }}</p>
    <p>Updated: {{ repository.updated_at }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repository: null,
    };
  },
  async created() {
    try {
      const REPO_ID = this.$route.params.id;
      const response = await fetch(`https://api.github.com/repositories/${REPO_ID}`);
      this.repository = await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 2rem;
  text-align: center;
}

p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
}
</style>
