<template>
    <nav class='nav-bar'>
     <div>
         <span class="nav-bar-title">Shopping List App</span>
     </div>

         <ul>
             <li><a href="https://github.com/JackieBinya/shopping-list-app" target="_blank">Github</a></li>
             <li><a href="https://www.linkedin.com/in/jacqueline-binya-b8025b195/" target="_blank">Linkedin</a></li>
         </ul>
     
    </nav>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped>
    .nav-bar{
        background-color: aquamarine;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 10vh;
        padding: 0.5em;
        margin-bottom: 1em;

    }

    ul{
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      justify-content: space-around;
    }

    a{
      color: inherit;
      text-decoration: none;
      padding: 1em;
    }

    a:hover{
        color: rgb(13, 102, 13);
    }

    .nav-bar-title{
        font-weight: 700;
        font-size: 1.5rem;
    }
</style>