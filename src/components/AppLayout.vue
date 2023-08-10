<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl});`" class="img">
    </div>

    <div class="main">
      <el-button class="random-btn">Get random cocktail</el-button>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  background-color: var(--bg);
  display: flex;
  min-height: 100vh;
}

.img {
  width: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

.main {
  position: relative;
  width: 50%;
  padding: 32px 40px;
}

.random-btn {
  position: absolute;
  top: 32px;
  right: 40px;
  background-color: var(--accent);
  border: 1px solid var(--accent);
  color: var(--text);
  font-family: 'Raleway', sans-serif;

  &:hover,
  &:active {
    background-color: #a50a55;
  }
}
</style>