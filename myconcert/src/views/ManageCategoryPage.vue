<template>
    <layout-component page-default-back-link="/home" add-path="/category/new">
        <template v-slot:content-page>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-label class="welcome-text">Retrouver la liste des catégories des concerts ci-dessous</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row v-for="category in categories" v-bind:key="category.id">
                    <ion-col>
                        <categoryCardComponent :category="category"></categoryCardComponent>
                    </ion-col>
                </ion-row>
            </ion-grid>

        </template>
    </layout-component>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue';
import { IonGrid, IonRow, IonCol,IonLabel} from '@ionic/vue';


import LayoutComponent from '@/components/layoutComponent.vue';
import categoryCardComponent from '@/components/categoryCardComponent.vue';
import { useStore } from '../store';



export default defineComponent({
    name: 'HomePage',
    components: {
        LayoutComponent,
        categoryCardComponent,
        IonGrid,
        IonRow,
        IonCol,
        IonLabel,
    },
    setup() {
        const store = useStore();
      
        store.dispatch("getAllCategories")

        const categories = computed(() => {
            return store.getters.getCategories
        })

        return { categories }
    }
});

</script>

<style ></style>