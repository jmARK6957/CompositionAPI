<script setup>
import PostItem from '@/components/PostItem.vue';
import Wrapper from '@/components/Wrapper.vue';
import { usePostsStore } from '@/stores/posts';
import { ref } from 'vue';

const postStore = usePostsStore();

const postFilter = ref('all')

const setPostFilter = () => {
 postFilter.value = postFilter.value === 'all' ? 'saved' : 'all'
}
</script>

<template>
  <!-- <main> -->

    <div class="header">
      <div>
        <h4>{{ postFilter === 'all' ? 'All Posts' : 'Saved Posts' }}</h4>
      </div>
      <button @click="setPostFilter">{{ postFilter === 'all' ? 'Show Saved Posts' : 'Show All Posts' }}</button>

    </div>
    <div v-if="postFilter === 'all'">
      <div v-for="post in postStore.sorted" :key="post.id">
        <Wrapper>
          <PostItem :post="post"/>
        </Wrapper>
      </div>
    </div>

    <div v-if="postFilter === 'saved'">
      <div v-for="post in postStore.save" :key="post.id">
        <Wrapper>
          <PostItem :post="post"/>
        </Wrapper>
      </div>
    </div>
  <!-- </main> -->
</template>

<style lang="scss" scoped>
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
    h4 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
      margin: 0;
    }
  }

  button {
    background: #4f8cff;
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
}
</style>