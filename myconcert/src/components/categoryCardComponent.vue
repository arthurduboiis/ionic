<template>
    
    <ion-card>
        <ion-card-header>
            <ion-card-title>{{category.libelle}}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-button fill="solid" color="success" @click="editCategory(category.id)">
                <ion-icon slot="start" src="assets/icon/edit.svg"></ion-icon>
                Edit
            </ion-button>
            <ion-button fill="solid" color="danger" @click="deleteCategory(category.id)">
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
    name: 'CategoryCardComponent',
    props: ['category'],
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

        const deleteCategory = (id: number) => {
            store.dispatch('deleteCategory', id);
            router.push('/category/manage');
        };

        const editCategory = (id: number) => {
            router.push('/category/edit/' + id);
        };

        return {
            deleteCategory,
            editCategory
        };
    },
    
});

</script>

<style >
</style>