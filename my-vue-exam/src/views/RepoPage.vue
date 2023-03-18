<template>
  <div class="container">
    <h2>My Repositories</h2>
    <ul class="repo-list">
      <li v-for="repo in displayedRepos" :key="repo.id">
        <router-link :to="{ name: 'DetailsPage', params: { id: repo.id } }">
          <div class="repo-item">
            <div class="repo-name">{{ repo.name }}</div>
            <div class="repo-description">{{ repo.description }}</div>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="pagination">
      <button class="prev" :disabled="currentPage === 1" @click="currentPage--">Previous</button>
      <button class="next" :disabled="currentPage * perPage >= allRepos.length" @click="currentPage++">Next</button>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      allRepos: [],
      currentPage: 1,
      perPage: 4,
    };
  },
  async created() {
    try {
      const USERNAME = "ecumjamil";
      const response = await fetch(`https://api.github.com/users/${USERNAME}/repos`);
      this.allRepos = await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    displayedRepos() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.allRepos.slice(startIndex, endIndex);
    },
  },
};
</script>

<style>
.container {
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
}

h2 {
  font-size: 3rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 2rem;
  text-align: center;
}

.repo-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.repo-item {
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  padding: 2rem;
  transition: transform 0.2s;
}

.repo-item:hover {
  transform: scale(1.05);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.repo-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.repo-description {
  font-size: 1rem;
  color: #555;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.pagination button {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 0 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.pagination button:hover {
  background-color: #0056b3;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Media queries */
@media (max-width: 768px) {
  .container {
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  .repo-list li {
    flex-direction: column;
    text-align: center;
  }

  .repo-list li a {
    font-size: 1rem;
  }

  .pagination {
    margin-top: 1.5rem;
  }

  .pagination button {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    margin: 0 0.25rem;
    border-radius: 0;
  }
}

</style>