<template>
  <div class="page-content mdl-grid card-container">
    <div class="mdl-cell mdl-cell--12-col">
      <div class="mdl-grid">
        <div class="mdl-cell--12-col">
          <StoryCard v-bind:key="item.id" v-for="(item, key) in items" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoryCard from '../components/story/StoryCard.vue';

export default {
  name: 'story',
  data() {
    return ({
      items: [
        { id: 1, img: 'src/assets/images/img1.jpg', title: 'Jour 1', description: 'En route pour l\'auvergne' },
        { id: 2, img: 'src/assets/images/img2.jpg', title: 'Jour 2', description: 'En route pour l\'auvergne', color: 'white' },
        { id: 3, img: 'src/assets/images/img3.jpg', title: 'Jour 3', description: 'En route pour l\'auvergne', color: 'white' },
        { id: 4, img: 'src/assets/images/img4.jpg', title: 'Jour 4', description: 'En route pour l\'auvergne', color: 'white' },
        { id: 5, img: 'src/assets/images/img5.jpg', title: 'Jour 5', description: 'En route pour l\'auvergne' }
      ],
    })
  },
  components: {
    StoryCard
  },
}
</script>

<style>

.card-container {
  max-width: 900px;
  justify-content: center;
}

.card-line {
  width: 100%;
  margin-bottom: 15px;
}

.card-line .mdl-card__title {
  height: 300px;
}
</style>
