<template>
    <div class="container">
    <h3>Shopping List Items</h3>
    <ul>
        <li v-for="(item, index) in reverseItems" :key="index">
            <div class="item-container">
                <div>
                   <button class="icon">
                        <i class="material-icons">create</i>   
                   </button>
                    {{item.name}}
                </div>
                <div>
                   <button @click="delItem(item.id)"  class="icon">
                        <i class="material-icons">delete</i>  
                   </button>
                </div>
            </div>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
    name: 'ShoppingList',
    props:{
        items: Array,
    },

    computed:{
     reverseItems(){
         return [...this.items].reverse()
     },
    },

    methods:{
     delItem: function(id) {
         this.$emit('del:item', id);
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
</style>