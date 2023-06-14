<template>
    <layout-component page-default-back-link="/home" add-path="/users/new">
        <template v-slot:content-page>
            <!-- create list of cards from categoryCardComponent -->
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-label class="welcome-text">Retrouver la liste des utilisateurs ci-dessous</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row v-for="user in users" v-bind:key="user.id">
                    
                    <ion-col>
                        <ion-label class="welcome-text">{{ user.login }}</ion-label>
                    </ion-col>
                    <ion-col>
                        <UserCardComponent :user="user"></UserCardComponent>
                    </ion-col>
                </ion-row>

            </ion-grid>
        </template>
    </layout-component>
</template>

<script lang="ts">
import UserCardComponent from '@/components/userCardComponent.vue';
import { IonGrid, IonRow, IonCol, IonLabel } from '@ionic/vue';
import { defineComponent, computed } from 'vue';
import LayoutComponent from '@/components/layoutComponent.vue';
import { useStore } from '../store';

export default defineComponent({
    name: 'HomePage',
    components: {
        LayoutComponent,
        UserCardComponent,
        IonGrid,
        IonRow,
        IonCol,
        IonLabel,
    },
    setup() {
        const store = useStore();
        store.dispatch("getAllUsers")

        const users = computed(() => {
            return store.getters.getUsers
        })


        return { users }
    },
});



</script>