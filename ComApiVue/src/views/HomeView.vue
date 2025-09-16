<script setup>
import PostItem from '@/components/PostItem.vue';
import Wrapper from '@/components/Wrapper.vue';
import { usePostsStore } from '@/stores/posts';

const postsStore = usePostsStore();
</script>

<template>
  <main>
    <div v-for="post in postsStore.posts" :key="post.id">
      <Wrapper>
        <PostItem :post="post"/>
      </Wrapper>
    </div>
  </main>
</template>

