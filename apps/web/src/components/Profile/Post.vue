<script lang="ts" setup>
import { reactive, ref, Ref } from 'vue'
import { useFileSystemAccess } from '@vueuse/core';
import Button from '../Button.vue';
import TextArea from '../Form/TextArea.vue';
import TextInput from '../Form/TextInput.vue';
const content = reactive({
    caption: '',
    post: null,
})
const dataType = ref('Text') as Ref<'Text' | 'ArrayBuffer' | 'Blob'>
const res = useFileSystemAccess({
    dataType,
    types: [
        {
            description: 'text',
            accept: {
                'text/plain': ['.txt', '.html'],
            },
        },
    ],
    excludeAcceptAllOption: true,
})
</script>

<template>
    <div class="card">
        <h2 class="title">Create Post</h2>
        <div class="post">
            <img class="profile" src="@/assets/images/home/event_image_2.png" alt="profile" />
            <TextArea :value="content.caption" :placeholder="'Type your caption'" />
            <!-- <TextInput v-model="content.caption"/> -->
        </div>
        <div w-full flex justify-end mt-4 gap-x-4>
            <Button
                id="connect-wallet-login-btn"
                name="connect-wallet-login-btn"
                rounded="full"
                w-36
                @click="res.create()"
            >
                <template #content> Add Image </template>
            </Button>
            <Button
                id="connect-wallet-login-btn"
                name="connect-wallet-login-btn"
                rounded="full"
                w-36
            >
                <template #content> Post </template>
            </Button>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.card {
   @apply bg-white dark:bg-black mt-4 p-4;
}
.title {
 @apply text-black dark:text-white py-2 text-left text-sm font-black;
}
.profile {
    @apply rounded-full mt-1 w-14 h-14;
}
.post {
    @apply  w-full flex justify-start gap-x-4;
}
</style>
