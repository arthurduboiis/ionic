<template>
    <form @submit.prevent="submitForm">
  
        <ion-grid>

            <ion-row style="justify-content: center;">
                <ion-col size="10" size-ios="8" size-lg="6" style="text-align: center;">
                    <ion-item>
                        <ion-label position="floating">Image du concert</ion-label>
                        <ion-input v-model="concert.image" type="text" required></ion-input>
                    </ion-item>
                </ion-col>
            </ion-row>
            <ion-row style="justify-content: center;">
                <ion-col size="10" size-ios="8" size-lg="6" style="text-align: center;">
                    <ion-item>
                        <ion-label position="floating">Nom du concert</ion-label>
                        <ion-input v-model="concert.nom" type="text" required></ion-input>
                    </ion-item>
                </ion-col>
            </ion-row>

            <ion-row style="justify-content: center;">
                <ion-col size="10" size-ios="8" size-lg="6" style="text-align: center;">
                    <ion-item>
                        <ion-label position="floating">Date du concert</ion-label>
                        <ion-datetime presentation="date" v-model="concert.date" display-format="DD/MM/YYYY" picker-format="DD/MM/YYYY"
                            required></ion-datetime>
                    </ion-item>
                </ion-col>
            </ion-row>

            <ion-row style="justify-content: center;">
                <ion-col size="10" size-ios="8" size-lg="6" style="text-align: center;">
                    <ion-item>
                        <ion-label position="floating">Heure du concert</ion-label>
                        <ion-datetime presentation="time" v-model="concert.heure" display-format="HH:mm" picker-format="HH:mm"
                            required></ion-datetime>
                    </ion-item>
                </ion-col>
            </ion-row>

            <ion-row style="justify-content: center;">
                <ion-col size="10" size-ios="8" size-lg="6" style="text-align: center;">
                    <ion-item>
                        <ion-label position="floating">Description du concert</ion-label>
                        <ion-textarea v-model="concert.description" required></ion-textarea>
                    </ion-item>
                </ion-col>
            </ion-row>

           <ion-row style="justify-content: center;">
                <ion-col size="10" size-ios="8" size-lg="6" style="text-align: center;">
                    <ion-item>
                        <ion-label position="floating">Catégorie du concert</ion-label>
                        <ion-select v-model="concert.categorie_id" required>
                            <ion-select-option v-for="category in categories" :key="category.id"
                                :value="category.id">{{category.libelle}}</ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-col>
            </ion-row>


            <ion-row>
                <ion-col size="12">
                    <ion-button v-if="is_edit_type_form" type="submit" expand="full"><ion-icon slot="start"
                            src="assets/icon/edit.svg"></ion-icon>Modifier le concert</ion-button>
                    <ion-button v-else type="submit" expand="full">Ajouter le concert</ion-button>


                </ion-col>
            </ion-row>


        </ion-grid>

</form>
</template>

<script>
import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption, IonTextarea, IonDatetime, IonIcon } from '@ionic/vue';
import { defineComponent, toRef, computed } from 'vue';
import { useStore } from '../store';


export default defineComponent({
    name: 'NewConcertPage',
    props: ['concert_prop', 'is_edit_type_form'],
    emits: ['submitForm'],
    setup(props, context) {
        const concert = toRef(props, 'concert_prop')
        console.log(concert)
        // add concert.user_id by using getUserById from store


        function submitForm() {
            context.emit('submitForm', concert)
        }
        const store = useStore()
        store.dispatch("getAllCategories")

        const categories = computed(() => {
            return store.getters.getCategories
        })
        

        return { submitForm, concert, categories }
    },
    components: {
        IonButton,
        IonGrid,
        IonRow,
        IonCol,
        IonItem,
        IonLabel,
        IonInput,
        IonSelect,
        IonSelectOption,
        IonTextarea,
        IonDatetime,
        IonIcon
    },

});

</script>