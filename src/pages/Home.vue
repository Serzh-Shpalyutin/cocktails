<script setup>
import AppLayout from '../components/AppLayout.vue'
import { useRootStore } from '../stores/root'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import CocktailThumb from '../components/CocktailThumb.vue';

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, cocktails } = storeToRefs(rootStore);
const ingredient = ref(null);

function getCocktails() {
  rootStore.getCocktails(ingredient.value);
}

</script>

<template>
  <AppLayout imgUrl="/src/assets/img/bg1.jpg">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <h1 class="title">Choose your drink</h1>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select @change="getCocktails" v-model="ingredient" class="select" placeholder="Choose main ingredient"
            size="large">
            <el-option v-for="item in ingredients" :key="item.strIngredient1" :label="item.strIngredient1"
              :value="item.strIngredient1" />
          </el-select>
        </div>
        <div class="text">
          <p>
            Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient
            through our cocktail generator.
          </p>
        </div>

        <div class="cocktails-img">
          <img src="../assets/img/cocktails.png" alt="">
        </div>
      </div>

      <div v-else class="info">
        <h1 class="title">COCKTAILS WITH {{ ingredient }}</h1>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.info {
  padding: 80px 0;
  text-align: center;
}

.select {
  width: 220px;
}

.cocktails {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  height: 400px;
  overflow-y: auto;
}
</style>