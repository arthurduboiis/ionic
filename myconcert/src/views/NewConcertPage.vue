<template>
    <layout-component page-default-back-link="/concert">
        <template v-slot:content-page>
            <form-concert-component :concert_prop="concert" @submit-form="saveConcert" :is_edit_type_form=false></form-concert-component>
        </template>
    </layout-component>
</template>

<script>
import { defineComponent } from 'vue';

import LayoutComponent from '@/components/layoutComponent.vue';
import formConcertComponent from '@/components/formConcertComponent.vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';
import {toastController} from "@ionic/vue"

export default defineComponent({
    name: 'NewConcertPage',
    components: {
        LayoutComponent,
        formConcertComponent,
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const concert = {
            nom: "",
            description: "",
            categorie_id: 2,
            image: "",
            date: Date.now(),
            heure : "20:00",
            user_id: 4,
        }
        
        async function showToast(type_color = "success", message) {
            const toast = await toastController.create({
                message: message,
                duration: 2000,
                color: type_color,
            });
            toast.present();
        }

        function saveConcert(concertEmit) {
            store.dispatch('addConcert', concertEmit);
            showToast("success","concert ajouté");
            router.push('/concert/');
        }
        return { concert, saveConcert }
    }
    
});

</script>

<style >
ion-datetime-button::part(native) {
    background: #b6b6b6;
}

.alert-wrapper.sc-ion-alert-ios {
    background-color: #000000;
    color: #FFFFFF;
}

.alert-button-group.sc-ion-alert-ios {
    background-color: #000000;
    
    color: #FFFFFF;
}
  .alert-title.sc-ion-alert-ios {
    font-size: 25px;
    font-weight: 600;
    font-family: "AustralisProSwash-Italic";
    color: #FFFFFF;
  }

  [aria-checked="true"].sc-ion-alert-ios .alert-radio-icon.sc-ion-alert-ios {
    border-color: #00000080;
  }


  .alert-radio-inner.sc-ion-alert-ios {
    background-color: #00000080 !important;
  }


  .alert-radio-label.sc-ion-alert-ios {
    white-space: pre-line !important;
    font-family: "AustralisProSwash-Italic";
    color: #FFFFFF !important;
    font-weight: bold;
    background-color: #00000080 !important;
  }


  .alert-tappable.sc-ion-alert-ios {
    height: 77px !important;
  }


  [aria-checked="true"].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios {
    color: var(--ion-color-step-850, #262626);
  }


  .alert-button-inner.sc-ion-alert-ios {
    color: #FFFFFF;
    font-weight: bold;
    font-size: larger;
  }


</style>