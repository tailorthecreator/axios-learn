<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Define reactive data
const userData = ref(null);

// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    // handle success
    userData.value = response.data;
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.error('Error fetching user:', error);
  })
  .finally(function () {
    // always executed
  });
</script>

<template>
  <div>
    <div v-if="userData">
      <h1>User Data</h1>
      <p>{{ userData.id }}</p> <!-- Adjust the display as per the response data structure -->
      <p>{{ userData.title }}</p>
    </div>
    <p v-else>Loading user data...</p>
  </div>
</template>

<style scoped>
/* Your scoped styles here */
</style>
