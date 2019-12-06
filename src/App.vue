<template>
  <div id="app">
    <Navigation/>
    <ShoppingList v-bind:items ="items" v-on:del:item="delItem"/>
    <AddItem v:bind:item="item" v-on:add:item="updateItems"/>
  </div>
</template>

<script>
import { uuid } from 'uuidv4';
import Navigation from './components/NavigationBar';
import ShoppingList from './components/ShoppingList';
import AddItem from './components/AddItem';

export default {
  name: 'app',
  components:{
    Navigation,
    ShoppingList,
    AddItem,
  },
  data() {
    return {
      items: [
      {
        name: 'milk',
        id: uuid()
      },
      {
        name: 'steaks',
        id: uuid()
      },
      {
        name: 'candy',
        id: uuid()
      },
       {
        name: 'water',
        id: uuid()
      },
    ]
    }
  },

  methods:{
    updateItems(name){
      this.items = [...this.items,{name, id:uuid()}];
    },

    delItem(id){
      this.items = this.items.filter(item => item.id !== id)
    },
  },
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');
 #app{
   font-family: 'Montserrat', sans-serif;
   box-sizing: border-box;
 }
 
  input{
        font-size: 1rem;
        outline: none;
        font-family: inherit;
        border: none;
        width: 40vw;
    }

  .icon{
       border: none;
       outline:none;
       background: transparent;
   }

   .icon:hover{
     color: aquamarine;
   }
</style>
