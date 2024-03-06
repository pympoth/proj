<script setup>
const comments = ref();

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((response) => response.json())
  .then((json) => (comments.value = json));
</script>

<template>
  <div class="comments-container">
    <h2>Комментарии</h2>

    <div class="comments">
      <div class="comment" v-for="comment in comments" v-bind:key="comment.id">
        <h3>{{ comment.email }}</h3>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.comment {
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 10px;
}
h2,
h3,
p {
  margin: 0;
}
.comments {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>