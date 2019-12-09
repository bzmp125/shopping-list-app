<template>
  <div id="app">
    <Navigation/>
    <ShoppingList :items ="items" @del:item="delItem" @edit:item="editItem" @toggle:purchase="togglePurchase"/>
     <div class="no-items" v-if="!items.length">
       <h3> <span>Ooops!</span> you have no items to display!</h3>
    </div>
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
      items: [],
    }
  },

  methods:{
    addItem(name){
      this.items = [...this.items,{name, id:uuid(), isPurchased: false}];
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

   .no-items{
     position: absolute;
     z-index: 45000;
     background-color: azure;
     height: 30vh;
     width: 35vw;
     top: 25vh;
     left: 30vw;
     padding: 2em;
   }
</style>
