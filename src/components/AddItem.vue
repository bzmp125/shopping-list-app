<template>
    <div class="container">
      <div class="item-container">
           <input type="text" v-model="newItem" placeholder="Type a new shopping item here..." @keyup.enter="addItem">
      </div>
       <button @click="addItem" class="icon btn add">
           Add
       </button>
    </div>
</template>

<script>
export default {
    name: 'AddItem',
    data(){
       return{
            newItem: ''
       }
    },
    methods:{
     addItem: function(){
         this.$emit('add:item', this.$data.newItem);
         this.newItem = '';
       },
    }
}
</script>

<style scoped>
    .container{
        margin: 0 auto;
        max-width: 90%;
        border-radius: 5px;
        height: 15vh;
        padding:1em;
        display:flex;
        align-items: center;
    }

  .add{
     margin-left: 4em;
   } 

   .item-container{
        border-bottom: 4px solid aquamarine;
        width: 40vw;
   }
</style>