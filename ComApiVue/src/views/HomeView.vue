<script setup>
import PostItem from '@/components/PostItem.vue';
import Wrapper from '@/components/Wrapper.vue';
import { usePostsStore } from '@/stores/posts';
import { ref } from 'vue';

const postStore = usePostsStore();

const showSaved = ref('all');

const postFilter = () => {

  showSaved.value = showSaved.value === 'all' ? 'saved' : 'all';
}

</script>

<template>
  <!-- <main> -->
    <!-- header -->
    <div class="header">
      <div>
        <h4>{{ showSaved === 'all'? 'All Posts' : 'Saved Posts' }}</h4>
        <span v-show="postStore.loading" class="material-icons">cached</span>
      </div>
      <button @click="postFilter">Show saved Posts</button>
    </div>

    <!-- error message -->
    <div v-if="postStore.errorMessage" class="error"> {{  postStore.errorMessage }}</div>

    <div v-if="showSaved === 'all'">
      <div v-for="post in postStore.sorted" :key="post.id">
        <Wrapper>
          <PostItem :post="post"/>
        </Wrapper>
      </div>
    </div>

    <div v-if="showSaved === 'saved'">
      <div v-for="post in postStore.save" :key="post.id">
        <Wrapper>
          <PostItem :post="post"/>
        </Wrapper>
      </div>
    </div>
  <!-- </main> -->
</template>

<style lang="scss" scoped>
// Example SCSS for your posts header section
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  position: sticky;
  top: 56px;
  background: #fff;
  z-index: 10;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h4 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
      margin: 0;
    }
    .material-icons {
      animation: rotate 1.2s linear infinite;
      font-size: 1.5rem;
      color: #4f8cff;
    }
  }

  button {
    background: #070d18;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #2563eb;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.error {
  background-color: #fee2e2;
  color: #b91c1c;
  border: 1px solid #fca5a5;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(252, 165, 165, 0.08);
}
</style>