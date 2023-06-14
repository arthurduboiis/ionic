<template>
  <layout-component>
    <template v-slot:content-page>
      <ion-grid class="container">
        <ion-row>
          <ion-col>
            <ion-img src="assets/icon/icon.png" class="image"></ion-img>
            <ion-label class="welcome-text">Bienvenue sur mon application de concert</ion-label>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button expand="full" color="success" class="button"  :router-link="`/concert/new`">
              <ion-icon src="assets/icon/new-file.svg" class="icon"></ion-icon>
              Créer une concert
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button expand="full" color="tertiary" class="button" :router-link="`/concert`">
              <ion-icon  src="assets/icon/list-outline.svg" class="icon"></ion-icon>
              Gérer mes concerts
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button expand="full" color="tertiary" class="button" :router-link="`/category/manage`">
              <ion-icon  src="assets/icon/tags.svg" class="icon"></ion-icon>
              Gérer les catégories
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button expand="full" color="tertiary" class="button" :router-link="`/users/manage`">
              <ion-icon  src="assets/icon/users.svg" class="icon"></ion-icon>
              Gérer les utilisateurs
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </template>
  </layout-component>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, IonButton, IonLabel, IonIcon, IonImg } from '@ionic/vue';

import LayoutComponent from '@/components/layoutComponent.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    LayoutComponent,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
    IonButton,
    IonIcon,
    IonImg,

  },
});

</script>

<style >
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.image {
  width: 100%;
  height: auto;
}

.welcome-text {
  margin-top: 16px;
  font-size: 24px;
}

.button {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  margin-right: 8px;
}
</style>
