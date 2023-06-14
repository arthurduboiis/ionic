<template>
    <layout-component page-default-back-link="/concert">
        <template v-slot:content-page>
            <form-concert-component :concert_prop="concert" @submit-form="saveConcert" :is_edit_type_form=true></form-concert-component>
        </template>
    </layout-component>
</template>

<script>
import { defineComponent, computed } from 'vue';
import LayoutComponent from '@/components/layoutComponent.vue';
import { useStore } from '../store';
import { useRouter, useRoute } from 'vue-router';
import formConcertComponent from '@/components/formConcertComponent.vue';
import {toastController} from "@ionic/vue"


export default defineComponent({
    name: 'EditConcertPage',
    components: {
        LayoutComponent,
        formConcertComponent,
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const concertId = parseInt(route.params.id);

        const concert = computed(() => {
            return store.getters.getConcertById(concertId)
            
        })

        console.log(concert)

        async function showToast(type_color = "success", message) {
            const toast = await toastController.create({
                message: message,
                duration: 2000,
                color: type_color,
            });
            toast.present();
        }

        function saveConcert(concertEmit) {
            store.dispatch('updateConcert', concertEmit);
            showToast("success","concert modifié");
            router.push('/concert');
        }
        

        return { concert, saveConcert }
    
    }
});
</script>