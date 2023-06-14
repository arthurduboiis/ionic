<template>
    <layout-component page-default-back-link="/home" add-path="/concert/new">
        <template v-slot:content-page>
        
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-label class="welcome-text">Retrouver la liste des concerts ci-dessous</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row v-for="concert in concerts" v-bind:key="concert.id">
                    <ion-col>
                        <concertItemComponent :concert="concert"></concertItemComponent>
                    </ion-col>
                </ion-row>
            </ion-grid>


        </template>
    </layout-component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { IonGrid, IonRow, IonCol,IonLabel} from '@ionic/vue';
import { useStore } from '../store';


import LayoutComponent from '@/components/layoutComponent.vue';
import concertItemComponent from '@/components/concertItemComponent.vue';

export default defineComponent({
    name: 'HomePage',
    components: {
        LayoutComponent,
        concertItemComponent,
        IonGrid,
        IonRow,
        IonCol,
        IonLabel,

    },
    setup(){
        const store = useStore();
        store.dispatch("getAllConcerts")

        const concerts = computed(() => {
            return store.getters.getConcerts
        })

        return { concerts }
    }
});

</script>

<style></style>