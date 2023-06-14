<template>
    <ion-page>
        <ion-header collapse="fade">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button slot="start" fill="solid" color="primary" :default-href="pageDefaultBackLink">
                        Retour
                        <ion-icon slot="start" color="light" src="assets/icon/back.svg" />
                    </ion-back-button>

                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button fill="solid" color="danger">
                        Deconnexion
                        <ion-icon slot="start" src="assets/icon/log-out-outline.svg"></ion-icon>
                        <!--<ion-icon slot="end" :icon="LogoutButton"></ion-icon>-->
                    </ion-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button v-if="addPath" fill="solid" color="success" @click="navigateToPage(addPath)">
                        <ion-icon slot="start" src="assets/icon/new-file.svg" style="padding-left: 4px"></ion-icon>
                        <!--<ion-icon slot="end" :icon="LogoutButton"></ion-icon>-->
                    </ion-button>
                </ion-buttons>

            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <slot name="content-page"></slot>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton, IonButtons, IonIcon, IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'LayoutComponent',
    props: ['LogoutButton', "pageDefaultBackLink", "addPath"],
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonToolbar,
        IonButton,
        IonButtons,
        IonIcon,
        IonBackButton
    },
    setup() {
        const router = useRouter();

        const navigateToPage = (path: string) => {
            router.push(path);
        };

        return {
            navigateToPage
        };
    }
});

</script>

<style></style>