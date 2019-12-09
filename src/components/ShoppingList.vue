<template>
    <div class="container">
    <h2>Shopping List Items</h2>
    <ul>
        <li v-for="item in reverseItems" :key="item.id">
            <div class="item-container">
                <div>
                   <button class="icon">
                        <i class="material-icons" @click="toggleState(); setId(item.id)"  v-show="!item.isPurchased">create</i>   
                   </button>
                    <span :class="{strikeout: item.isPurchased}"  @click="togglePurchase(item.id)">{{item.name}}</span>
                </div>
                <div>
                   <button @click="delItem(item.id)"  class="icon">
                        <i class="material-icons">delete</i>  
                   </button>
                </div>
            </div>
        </li>
    </ul>
     <Modal  :items ="items" :id="itemId" v-if="edit" @update:item="editItem" @toggle:state = "toggleState"/>
    </div>
</template>

<script>
import Modal from './Modal';
export default {
    name: 'ShoppingList',
    props:{
        items: Array,
    },
    components:{
        Modal,
    },
    data(){
        return {
            edit: false,
            itemId: '',
        }
    },

    computed:{
     reverseItems(){
         return [...this.items].reverse()
     },
    },

    methods:{
     delItem: function(id) {
         this.$emit('del:item', id);
     },

     toggleState: function(){
         this.edit = !this.edit;
     },

     setId(id){
       this.itemId = id;
     },

     editItem(payload){
          this.$emit('edit:item', payload);
          
       },

    togglePurchase(id){
        this.$emit('toggle:purchase', id); 
    }
   }
}
      
</script>

<style scoped>
   h3{
       text-align: center;
   }

   ul{
       list-style: none;
       height: 60vh;
       overflow: hidden;
       overflow-y: scroll;
   }
   
   li{
       display: block;
       padding: 0.3em;
       background-color: azure;
       margin: 0.4em;
       cursor: pointer;
   }

   ::-webkit-scrollbar {
    width: 4px;
    /* visibility: hidden; */
   }

   ::-webkit-scrollbar-track {
  background: #f1f1f1; 
  }
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    .container{
        margin: 0 auto;
        max-width: 60%;
        padding: 0.5em;
        
    }

    .item-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .strikeout{
        text-decoration: line-through;
    }
</style>