<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <div class="pic">
      <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink">
    </div>
    <h2 class="name">
      {{ cocktail.strDrink }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.pic {
  margin-bottom: 15px;
}
.pic img {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.name {
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.6px;
}
</style>