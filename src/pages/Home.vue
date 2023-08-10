<script setup>
import AppLayout from '../components/AppLayout.vue'
import { useRootStore } from '../stores/root'
import { storeToRefs } from 'pinia';
import CocktailThumb from '../components/CocktailThumb.vue';

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore);

function getCocktails() {
  rootStore.getCocktails(rootStore.ingredient);
}

function removeIngredient() {
  rootStore.setIngredient(null);
}
</script>

<template>
  <AppLayout imgUrl="/src/assets/img/bg1.jpg" :backFunc="removeIngredient" :is-back-button-visible="!!ingredient">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <h1 class="title">Choose your drink</h1>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select @change="getCocktails" v-model="rootStore.ingredient" filterable allow-create class="select" placeholder="Choose main ingredient"
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