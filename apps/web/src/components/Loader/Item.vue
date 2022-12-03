<template>
    <!-- 👉 Drawer Loader -->
    <div class="container">
        <div class="loader">
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--dot"></div>
            <div class="loader--text"></div>
        </div>
    </div>
</template>

<style scoped lang="css">
.container {
    @apply h-screen w-screen;
}

.loader {
    @apply h-5 w-60 absolute top-0 bottom-0 left-0 right-0 m-auto;
}

.loader--dot {
    animation: loader ease-in-out 3s infinite;
    /* border-radius: 100% */
    @apply w-5 h-5 rounded-full bg-black absolute;
}
.loader--dot:first-child {
    background-color: #9adc66;
    animation-delay: 0.5s;
}
.loader--dot:nth-child(2) {
    background-color: #8420e9;
    animation-delay: 0.4s;
}
.loader--dot:nth-child(3) {
    background-color: #00daff;
    animation-delay: 0.3s;
}
.loader--dot:nth-child(4) {
    background-color: #016bff;
    animation-delay: 0.2s;
}
.loader--dot:nth-child(5) {
    background-color: #5601e6;
    animation-delay: 0.1s;
}
.loader--dot:nth-child(6) {
    background-color: #90dc66;
    animation-delay: 0s;
}

.loader--text {
    @apply absolute top-[200%] left-0 right-0 w-16 m-auto;
}

.loader--text:after {
    content: 'Loading';
    @apply font-bold;
    animation: loading-text 3s infinite;
}

@keyframes loader {
    15% {
        transform: translateX(0);
    }
    45% {
        transform: translateX(230px);
    }
    65% {
        transform: translateX(230px);
    }
    95% {
        transform: translateX(0);
    }
}

@keyframes loading-text {
    0% {
        content: 'Loading';
    }

    25% {
        content: 'Loading.';
    }

    50% {
        content: 'Loading..';
    }

    75% {
        content: 'Loading...';
    }
}
</style>
