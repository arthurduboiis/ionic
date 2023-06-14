<template>
    <layout-component page-default-back-link="/home">
        <template v-slot:content-page>
    
            <form-category-component :category_prop="category" @submit-form="saveCategory" :is_edit_type_form=false></form-category-component>
        </template>
    </layout-component>
</template>

<script>

import { defineComponent } from 'vue';
import LayoutComponent from '@/components/layoutComponent.vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';
import formCategoryComponent from '@/components/formCategoryComponent.vue';
import {toastController} from "@ionic/vue"

export default defineComponent({
    name: 'NewCategoryPage',
    components: {
        LayoutComponent,
        formCategoryComponent,
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const category = {
            libelle: ""
        }
        
        async function showToast(type_color = "success", message) {
            const toast = await toastController.create({
                message: message,
                duration: 2000,
                color: type_color,
            });
            toast.present();
        }

        function saveCategory(categoryEmit) {
            store.dispatch('addCategory', categoryEmit);
            showToast("success","catégorie ajoutée");
            router.push('/category/manage');
        }
        return { category, saveCategory }
    }

});
</script>