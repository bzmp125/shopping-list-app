<template>
 <div class="edit" v-if="edit">
     <div class="headliner">
         <div>
             <h3>Edit shopping list item</h3>
         </div>

         <div>
             <button @click="toggleState" class="icon btn-edit">
                <i class="material-icons" >clear</i>  
            </button>
         </div>
     </div>

    <input type="text" v-model="editedItem" @keyup.enter="updateItem">
    <div class="showBtn">
        <button class="icon btn btn-primary " @click="updateItem">
            <span class="btn-inner">OK</span>
        </button>
    </div>
 </div>
</template>

<script>
export default {
    name: 'Modal',
    props:{
        id: String,
        items: Array,
    },
    data(){
        return{
            edit: true,
            item: '',
        }
    },
    methods:{
        toggleState: function(){
         this.edit = !this.edit;
         this.$emit('toggle:state');
     },

     updateItem(){
         this.$emit('update:item', {item: this.$data.item, id: this.$props.id});
         this.toggleState();
     },
    },
    computed:{
       editedItem:{
           get(){
              return this.items.find(item => item.id === this.$props.id).name;
           },

           set(newVal){
                this.item = newVal;
           },
        }  
    } 
}
</script>

<style scoped>
   input{
       width: 50vw;
   }
   .edit{
        /* color: white; */
        position: absolute;
        z-index: 1000;
        top: 35%;
        left: 20vw;
        height: 30vh;
        width: 60vw;
        background-color: whitesmoke; 
        box-shadow: 2px 4px gainsboro;
        padding: 1em;

    }

    .headliner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.8em;
    }

    .showBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.8em;
    }

    .btn-primary{
        border: 2px solid aquamarine;
    }

    .btn-inner{
        padding: 0.4em;
    }
</style>