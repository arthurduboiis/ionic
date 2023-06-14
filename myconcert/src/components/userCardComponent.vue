<template>

    <ion-card>
        <ion-card-header>
            <ion-card-title>{{user.login}}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            {{ user.id }}
            <ion-button fill="solid" color="danger" @click="deleteUser(user.id)">
                <ion-icon slot="start" src="assets/icon/delete.svg"></ion-icon>
                Delete
            </ion-button>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';


export default defineComponent({
    name: 'UserCardComponent',
    props: ['user'],
    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonButton,
        IonIcon
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        const deleteUser = (id: number) => {
            store.dispatch('deleteUser', id);
            router.push('/users/manage');
        };

        return {
            deleteUser
        };
    },
});
</script>