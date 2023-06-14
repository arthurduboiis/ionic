<template>
    <form @submit.prevent="submitForm">
                <ion-grid>
                    <ion-row>
                        <ion-col size="12">
                            <ion-item>
                                <ion-label position="floating">Nom de la catégorie</ion-label>
                                <ion-input v-model="category.libelle" type="text" required></ion-input>
                            </ion-item>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col size="12">
                           
                            <ion-button v-if="is_edit_type_form" type="submit" expand="full"><ion-icon slot="start" src="assets/icon/edit.svg"></ion-icon>Modifier la categorie</ion-button>
                            <ion-button v-else type="submit" expand="full">Ajouter la catégorie</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </form>
            
</template>

<script>

import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow } from '@ionic/vue';
import { defineComponent, toRef } from 'vue';

export default defineComponent({
    name: 'NewCategoryPage',
    props: ['category_prop','is_edit_type_form'],
    emits: ['submitForm'],
    setup(props,context){
        const category = toRef(props,'category_prop')
        console.log(category)
        function submitForm(){
            context.emit('submitForm',category)
        }

        return { submitForm, category}
    },
    components: {
        IonButton,
        IonGrid,
        IonRow,
        IonCol,
        IonItem,
        IonLabel,
        IonInput
    },
    
});
</script>
