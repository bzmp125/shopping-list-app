<template>
  <div id="app">
    <Navigation/>
    <ShoppingList :items ="items" @del:item="delItem" @edit:item="editItem" @toggle:purchase="togglePurchase"/>
    <AddItem :item="items" @add:item="addItem"/>
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
      index: '',
      items: [
      {
        name: 'milk',
        id: uuid(),
        isPurchased: false
      },
      {
        name: 'steaks',
        id: uuid(),
        isPurchased: true,
      },
      {
        name: 'candy',
        id: uuid(),
        isPurchased: false,
      },
       {
        name: 'water',
        id: uuid(),
        isPurchased: true,
      },
    ]
    }
  },

  methods:{
    addItem(name){
      this.items = [...this.items,{name, id:uuid(), purchased: false}];
    },

    delItem(id){
      this.index = 'hello';
      this.items = this.items.filter(item => item.id !== id)
    },

    editItem({item, id}){
     this.index = this.items.findIndex(listItem => listItem.id === id);
     this.items[this.index].name = item;
     this.index='';
    },

    togglePurchase(id){
     this.index = this.items.findIndex(listItem => listItem.id === id);
     this.items[this.index].isPurchased =! this.items[this.index].isPurchased
     this.index='';
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
        padding: 0.5em;
    }

  .icon{
       border: none;
       outline:none;
       background: transparent;
   }

     .btn{
     font-weight: bold;
     font-size: 1rem;
     font-family: inherit;
     text-transform: uppercase;
     border: 2px solid aquamarine;
     padding: 6px 48px;
    }

   .icon:hover{
     color: aquamarine;
   }
</style>
