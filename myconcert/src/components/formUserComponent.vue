<template>
    <form @submit.prevent="submitForm">
    <!-- form to create user with field username password and role -->
        <ion-grid>
            <ion-row>
                <ion-col size="12">
                    <ion-item>
                        <ion-label position="floating">Nom d'utilisateur</ion-label>
                        <ion-input v-model="user.login" type="text" required></ion-input>
                    </ion-item>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="12">
                    <ion-item>
                        <ion-label position="floating">Mot de passe</ion-label>
                        <ion-input v-model="user.password" type="password" required></ion-input>
                    </ion-item>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="12">
                    <ion-item>
                        <ion-label position="floating">Role</ion-label>
                        <ion-input v-model="user.role" type="text" required></ion-input>
                    </ion-item>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="12">
                    <ion-button type="submit" expand="full">Ajouter l'utilisateur</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </form>
</template>

<script>
import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow } from '@ionic/vue';
import { defineComponent, toRef } from 'vue';

export default defineComponent({
    name: 'NewUserPage',
    props: ['user_prop'],
    emits: ['submitForm'],
    setup(props,context){
        const user = toRef(props,'user_prop')
        console.log(user)
        function submitForm(){
            context.emit('submitForm',user)
        }

        return { submitForm, user}
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

