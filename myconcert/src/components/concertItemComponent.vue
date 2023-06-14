<template>
    <!-- concert card with name, next line icon datetime and datetime, icon time and time, next line description with 100 character max, next line button view with icon,  button edit with icon, button delete with icon only  -->

    <ion-card style="padding:0">
        <!-- concert card with name, next line icon datetime and datetime, icon time and time, next line description with 100 character max, next line button view with icon,  button edit with icon, button delete with icon only  -->
        <ion-card-header >
            <ion-card-title>{{concert.nom}}</ion-card-title>
        </ion-card-header>
        <ion-card-content  style="padding:0">
            <ion-grid>
                <ion-row >
                    <ion-col size="5" style="display: flex;align-items: center;">
                        <ion-icon src="assets/icon/calendar.svg" size="large"></ion-icon>
                        <ion-label>{{concert.date}}</ion-label>
                    </ion-col>
                    <ion-col size="2">

                    </ion-col>
                    <ion-col size="5" style="display: flex;align-items: center;">
                        <ion-icon src="assets/icon/clock.svg" size="large"></ion-icon>
                        <ion-label>{{concert.heure}}</ion-label>
                    </ion-col>
                    
                </ion-row>
                <ion-row>
                    <ion-col size="11">
                        <ion-label>{{concert.description}}</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="4">
                        <ion-button fill="solid" color="primary" @click="viewConcert(concert.id)">
                            <ion-icon slot="start" src="assets/icon/view.svg"></ion-icon>
                            Voir
                        </ion-button>
                    </ion-col>
                    <ion-col size="5">
                        <ion-button fill="solid" color="success" @click="editConcert(concert.id)">
                            <ion-icon slot="start" src="assets/icon/edit.svg"></ion-icon>
                            Modifier
                        </ion-button>
                    </ion-col>
                    <ion-col size="3">
                        <ion-button fill="solid" color="danger" @click="deleteConcert(concert.id)">
                            <ion-icon slot="start" src="assets/icon/delete.svg"></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-card-content>

    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';



export default defineComponent({
    name: 'ConcertCardComponent',
    props: ['concert'],
    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonButton,
        IonIcon,
        IonGrid,
        IonRow,
        IonCol,
        IonLabel
    },
    setup(){
        const store = useStore();
        const router = useRouter();

        const deleteConcert = (id: number) => {
            store.dispatch('deleteConcert', id);
            router.push('/concert/manage');
        };

        const editConcert = (id: number) => {
            router.push('/concert/edit/' + id);
        };

        const viewConcert = (id: number) => {
            router.push('/concert/' + id);
        };

        return {
            deleteConcert,
            editConcert,
            viewConcert
        };
    }
});
</script>

<style></style>