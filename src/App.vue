<!--
DONUT FUN by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
-->

<!--Load the model component and using it.-->
<template>
 <ModelCog/>
</template>

<!--
Register our "App", import our component, 
and register those with the "App".
-->
<script lang="ts">
import { defineComponent } from 'vue';
import ModelCog from './components/ModelCog.vue';

export default defineComponent(
  {
    name: 'App',
    components: {
      ModelCog
    }
  }
);
</script>

<!--
Styling our app. We use SASS
because I love it.
-->
<style lang="scss">
// Importing our stylesheet.
@import './sass/universal';
</style>
