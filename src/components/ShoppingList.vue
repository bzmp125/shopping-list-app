<template>
    <div class="container">
    <h3>Shopping List Items</h3>
    <ul>
        <li v-for="item in items" :key="item.id">
            <div class="item-container">
                <div>
                    {{item.name}}
                </div>
                <div>
                    <i class="material-icons">delete</i>
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
}
</script>

<style scoped>
   h3{
       text-align: center;
   }

   ul{
       list-style: none;
   }
   
   li{
       display: block;
       padding: 0.5em;
       background-color: azure;
       margin: 0.4em;
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