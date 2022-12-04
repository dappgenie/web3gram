<script lang="ts" setup>
import { reactive, ref, Ref, watch } from 'vue'
import { useFileSystemAccess } from '@vueuse/core';
import Button from '../Button.vue';
import TextArea from '../Form/TextArea.vue';
import TextInput from '../Form/TextInput.vue';
import { Web3StorageService } from '@/sevices/web3storage';
const content = reactive({
    caption: '',
    post: null,
})
const dataType = ref('Text') as Ref<'Text' | 'ArrayBuffer' | 'Blob'>
const loadedImage = ref('');
const web3StorageService= new Web3StorageService();
const {isSupported, data, file, fileName, fileMIME, fileSize, fileLastModified, create, open, save, saveAs, updateData } = useFileSystemAccess({
    dataType,
    types: [
        {
            description: 'image',
            accept: {
                'image/*': ['.jpg', '.png','.svg'],
            },
        },
    ],
    excludeAcceptAllOption: true,
})
watch(file, (data)=>{
   if(data && FileReader){
   
        var fr = new FileReader();
        fr.onload = function () {
            loadedImage.value = fr.result as string;
        }
        fr.readAsDataURL(data);
   }
    
})

function postImage(){
    web3StorageService.uploadImage(file.value!,content.caption)
}

</script>

<template>
    <div class="card">
        <h2 class="title">Create Post</h2>
        <img v-if="loadedImage"  :src="loadedImage" class="up-image" />
        <div class="post">
            <img class="profile" src="@/assets/images/home/event_image_2.png" alt="profile" />
            
            <textarea
                ref="input"
                :rows="6"
                class="input"
                placeholder="Enter your caption"
                v-model="content.caption"
            />
            <!-- <TextInput v-model="content.caption"/> -->
        </div>
        <div class="buttons-list">
            <Button
            v-if="!loadedImage"
                id="connect-wallet-login-btn"
                name="connect-wallet-login-btn"
                rounded="full"
                w-36
                @click="open()"
            >
                <template #content> Add Image </template>
            </Button>
            <Button
            v-if="loadedImage"
                id="connect-wallet-login-btn"
                name="connect-wallet-login-btn"
                rounded="full"
                w-36
                @click="postImage()"
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
    @apply w-full flex justify-start gap-x-4;
}
.buttons-list {
    @apply w-full flex justify-end mt-4 gap-x-4;
}
.input {
    @apply w-full p-2 h-16 text-sm border border-gray-400 rounded-sm bg-white dark:bg-black outline-none;
}
.up-image{
    @apply w-80 object-cover p-4 m-auto max-h-[15rem];
}
</style>
