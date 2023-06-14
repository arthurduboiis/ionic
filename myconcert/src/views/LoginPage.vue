<template>
    <layout-component>
        <template v-slot:content-page>

            <ion-grid>
                <ion-row style="justify-content: center;">
                    <ion-col size="10" size-md="8" size-lg="6" style="text-align: center;">
                        <ion-img src="assets/icon/icon.png"></ion-img>

                        <ion-label>Nom d'utilisateur</ion-label>
                        <ion-input class="custom-input" type="text" v-model="login" placeholder="identifiant"></ion-input>

                        <div style="padding-top: 20px;">
                            <ion-label>Mot de passe</ion-label>
                            <ion-input class="custom-input" type="password" v-model="password"
                                placeholder="mot de passe"></ion-input>
                        </div>

                        <div style="padding-top: 20px;">
                            <ion-button color="tertiary" @click="userLogin()">Connexion</ion-button>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>

        </template>
    </layout-component>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonGrid, IonRow, IonCol, IonImg, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';


import LayoutComponent from '@/components/layoutComponent.vue';

export default defineComponent({
    name: 'LoginPage',
    components: {
        LayoutComponent,
        IonGrid,
        IonRow,
        IonCol,
        IonImg,
        IonLabel,
        IonInput,
        IonButton,
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const login = ref('');
        const password = ref('');


        const userLogin = () => {
            const userForm = {
                login: login.value,
                password: password.value,
            };
            store.dispatch('userLogin', userForm);
            router.push('/home');
        };

        return {
            login,
            password,
            userLogin,
        };
    },
});

</script>
  
<style >
ion-input.custom-input {
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    border: 3px solid #939393;
    border-radius: 10px;
}
</style>
  