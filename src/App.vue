<script setup>
// Import the functions you need from the SDKs you need
import { ref, onMounted } from 'vue'
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebaseConfig.js';

// Define reactive data
const todos = ref([]);
const loading = ref(true);
const newTodo = ref({ name: '', age: 0 });

// Fetch todos from Firestore
const fetchTodos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'todos'));
    todos.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching todos:', error);
  } finally {
    loading.value = false;
  }
};

const addTodo = async () => {
  try {
    await addDoc(collection(db, 'todos'), newTodo.value);
    newTodo.value = { name: '', age: 0 };
    fetchTodos();
    alert('Todo added successfully!');
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

const deleteTodo = async (todo) => {
  try {
    await deleteDoc(doc(db, 'todos', todo.id));
    fetchTodos();
    alert('Todo deleted successfully!');
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
}

onMounted(fetchTodos) 
</script>

<template>
  <div>
    <div>
      <h1>Todos</h1>
      <input v-model="newTodo.name" type="text" placeholder="Todo name">
      <input v-model="newTodo.age" type="number" placeholder="Todo age">
      <button @click="addTodo">Add Todo</button>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.name }} - {{ todo.age }}
          <button @click="deleteTodo(todo)">Delete Todo</button>
        </li>
      </ul>
    </div>
    <p v-if="loading">Loading todos...</p>
  </div>
</template>


<style scoped>
/* Your scoped styles here */
</style>
