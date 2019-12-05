<template>
  <div id="app">
    <Navigation/>
  </div>
</template>

<script>
import Navigation from './components/NavigationBar';

export default {
  name: 'app',
  components:{
    Navigation
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');
 #app{
   font-family: 'Montserrat', sans-serif;
   box-sizing: border-box;
 }
</style>
