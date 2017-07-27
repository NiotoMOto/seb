<template>
  <div class="mdl-card mdl-shadow--2dp card-line">
    <div class="mdl-card__title" v-bind:style="{ background: 'url(' + item.img + ')', color: item.color }">
      <h2 class="mdl-card__title-text">{{item.title}}</h2>
    </div>
    <div class="mdl-card__supporting-text mdl-grid">
      <div class="mdl-cell--4-col" v-cloak>{{item.description}}</div>
      <div class="mdl-cell--8-col" v-cloak>{{item.description}}</div>
    </div>
    <div class="mdl-card__menu">
      <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" v-bind:style="{ color: item.color }">
        <i class="material-icons">share</i>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'StoryCard',
  props: ['item'],
}
</script>
