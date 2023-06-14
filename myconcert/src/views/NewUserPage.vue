<template>
    <layout-component page-default-back-link="/users/manage">
        <template v-slot:content-page>
            <!-- create list of cards from categoryCardComponent -->
            <form-user-component :user_prop="user" @submit-form="saveUser"></form-user-component>
        </template>
    </layout-component>
</template>

<script >
import { defineComponent } from 'vue';
import LayoutComponent from '@/components/layoutComponent.vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';
import formUserComponent from '@/components/formUserComponent.vue';
import {toastController} from "@ionic/vue"

export default defineComponent({
    name: 'NewUserPage',
    components: {
        LayoutComponent,
        formUserComponent,
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const user = {
            login: "",
            password: "",
            role: "",
        }
        
        async function showToast(type_color = "success", message) {
            const toast = await toastController.create({
                message: message,
                duration: 2000,
                color: type_color,
            });
            toast.present();
        }

        function saveUser(userEmit) {
            store.dispatch('addUser', userEmit);
            showToast("success","utilisateur ajouté");
            router.push('/users/manage');
        }
        return { user, saveUser }
    }

});
</script>