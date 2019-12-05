<template>
  <div id="app">
    <Navigation/>
    
    <ShoppingList v-bind:items ="items"/>
  </div>
</template>

<script>
import Navigation from './components/NavigationBar';
import ShoppingList from './components/ShoppingList';


export default {
  name: 'app',
  components:{
    Navigation,
    ShoppingList
  },
  data() {
    return {
      items: [
      {
        name: 'milk',
        id: 1
      },
      {
        name: 'steaks',
        id: 2
      },
      {
        name: 'eggs',
        id: 3
      },
    ]
    }
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');
 #app{
   font-family: 'Montserrat', sans-serif;
   box-sizing: border-box;
 }
</style>
