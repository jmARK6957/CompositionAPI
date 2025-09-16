<script setup>
import PostItem from '@/components/PostItem.vue';
import Wrapper from '@/components/Wrapper.vue';
import { usePostsStore } from '@/stores/posts';

const postStore = usePostsStore();
</script>

<template>
  <main>
    <div v-for="post in postStore.sorted" :key="post.id">
      <Wrapper>
        <PostItem :post="post"/>
      </Wrapper>
    </div>
  </main>
</template>

