<!--
DONUT FUN by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
-->

<!--
Importing the method to render the donuts
and calling it after the component has mounted.
-->
<script lang="ts">
import { defineComponent } from 'vue';
import { renderDonuts } from '../mods/render';
export default defineComponent(
    {
        name:'ModelCog',
        mounted(): void {
            renderDonuts();
        }
    }
);
</script>