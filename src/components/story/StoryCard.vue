<template>
  <div class="story-card-container">
    <Card class="story-card" :title="item.title"  :image="item.img" :description="item.description" :color="item.color"  />
  </div>
</template>


<script>
import Card from './Card.vue';

export default {
  name: 'StoryCard',
  props: ['item'],
  components: {
    Card,
  } 
}
</script>


<style>
  .story-card-container {
    padding: 7px;
  } 
</style>