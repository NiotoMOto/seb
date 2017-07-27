<template>
  <div>
    <StoryCard v-for="(item, key) in items" :item="item" />
  </div>
</template>

<script>
import StoryCard from '../components/story/StoryCard.vue';

export default {
  name: 'story',
  data() {
    return ({
      items: [
        { img: 'src/assets/images/img1.jpg', title: 'TItle', description: 'En route pour l\'auvergne' },
        { img: 'src/assets/images/img2.jpg', title: 'TItle', description: 'En route pour l\'auvergne', color: 'white' },
        { img: 'src/assets/images/img3.jpg', title: 'TItle', description: 'En route pour l\'auvergne', color: 'white' },
        { img: 'src/assets/images/img4.jpg', title: 'TItle', description: 'En route pour l\'auvergne', color: 'white' },
        { img: 'src/assets/images/img5.jpg', title: 'TItle', description: 'En route pour l\'auvergne' }
      ],
    })
  },
  components: {
    StoryCard
  },
}
</script>

