<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  backFunc: {
    type: Function,
    required: true
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl});`" class="img"></div>

    <div class="main">
      <button v-if="isBackButtonVisible" @click="backFunc" class="back-btn"> 
        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26.5" cy="26.5" r="26" stroke="white" />
          <path d="M21.9167 21.2917L16.6042 26.5L21.9167 31.7084" stroke="white" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M36.3958 26.5H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

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

.back-btn {
  position: absolute;
  top: 32px;
  left: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>