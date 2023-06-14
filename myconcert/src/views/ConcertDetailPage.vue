<template>
    <layout-component page-default-back-link="/concert">
        <template v-slot:content-page>
            <!-- page to show the details of a concert -->
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-label class="welcome-text">Détails du concert</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-label class="welcome-text">Nom du concert : {{concert.nom}}</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-label class="welcome-text">Date du concert : {{concert.date}}</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-label class="welcome-text">heure du concert : {{concert.heure}}</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-label class="welcome-text">Catégorie du concert : {{concert.categorie.libelle}}</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-label class="welcome-text">Description du concert : {{concert.description}}</ion-label>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </template>
    </layout-component>
</template>

<script>
    import { IonGrid, IonRow, IonCol, IonLabel } from '@ionic/vue';
    import { defineComponent, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import LayoutComponent from '@/components/layoutComponent.vue';
    import { useStore } from '../store';


    export default defineComponent({
        name: 'ConcertDetailPage',
        components: {
            IonGrid,
            IonRow,
            IonCol,
            IonLabel,
            LayoutComponent
        },
        setup(){
            const store = useStore();
            const route = useRoute();

            // get all concerts 
            store.dispatch("getAllConcerts")

            const concerts = computed(() => {
                return store.getters.getConcerts
            })
            
            const concertId = parseInt(route.params.id);

            const concert = computed(() => {
                return store.getters.getConcertById(concertId)
                
            })

            
// console log concert value of a computed 
            console.log(concert.value)
            console.log(concert.value.nom)
            console.log(concert.value.date)

            
            
            const category = computed(() => {
                return store.getters.getCategoryById(concert.value.categorie.id)
            })
            

            return { concert, category }
        }
        
    });
</script>