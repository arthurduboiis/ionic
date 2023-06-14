<template>
    <layout-component page-default-back-link="/category/manage">
        <template v-slot:content-page>
            <form-category-component :category_prop="category" @submit-form="saveCategory" :is_edit_type_form=true></form-category-component>
            
        </template>
    </layout-component>
   
</template>

<script>
import { defineComponent, computed } from 'vue';
import LayoutComponent from '@/components/layoutComponent.vue';
import { useStore } from '../store';
import { useRouter, useRoute } from 'vue-router';
import formCategoryComponent from '@/components/formCategoryComponent.vue';
import {toastController} from "@ionic/vue"


export default defineComponent({
    name: 'EditCategoryPage',
    components: {
        LayoutComponent,
        formCategoryComponent,
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const categoryId = parseInt(route.params.id);

        const category = computed(() => {
            return store.getters.getCategoryById(categoryId)
        })

        async function showToast(type_color = "success", message) {
            const toast = await toastController.create({
                message: message,
                duration: 2000,
                color: type_color,
            });
            toast.present();
        }

        function saveCategory(categoryEmit) {
            store.dispatch('updateCategory', categoryEmit);
            showToast("success","catégorie modifiée");
            router.push('/category/manage');
        }

        return { category, saveCategory }


    }

});
</script>