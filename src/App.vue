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
import { getLS, setLS } from './utils';
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
      items: getLS('items') || [],
    }
  },

  methods:{
    addItem(name){
      this.items = [...this.items,{name, id:uuid(), isPurchased: false}];
      setLS('items', this.items);
    },

    delItem(id){
      this.index = 'hello';
      this.items = this.items.filter(item => item.id !== id)
      setLS('items', this.items);
    },

    editItem({item, id}){
     this.index = this.items.findIndex(listItem => listItem.id === id);
     this.items[this.index].name = item;
     this.index='';
     setLS('items', this.items);
    },

    togglePurchase(id){
     this.index = this.items.findIndex(listItem => listItem.id === id);
     this.items[this.index].isPurchased =! this.items[this.index].isPurchased
     this.index='';
     setLS('items', this.items);
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
     cursor:pointer;
    }

   .icon:hover{
     color: aquamarine;
     cursor: pointer;
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
