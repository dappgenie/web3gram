<template>
    <!-- 👉 Drawer Loader -->
    <Teleport to="body">
        <div class="loader">
            <div class="lds-ring">
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    </Teleport>
</template>

<style scoped lang="postcss">
.loader {
    @apply w-full h-full z-10 flex justify-center items-center;
    @apply bg-gray-200 dark:bg-gray-900 absolute top-0 left-0;
    /* height: calc(100vh - 7.5rem); */
}
.lds-ring {
    @apply inline-block relative w-12 h-12;
}
.lds-ring div {
    @apply block absolute w-12 h-12 m-2 rounded-full;
    @apply box-border border-5;
    @apply border-transparent border-t-primary dark:border-t-secondary;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
