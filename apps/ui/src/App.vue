<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Buk Trips',
  meta: [
    { name: 'description', content: 'Buk Trips' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <KeepAlive>
        <Suspense>
          <!-- main content -->
          <component :is="Component" />

          <!-- loading state -->
          <template #fallback>
            <LoaderItem />
          </template>
        </Suspense>
      </KeepAlive>
    </template>
  </RouterView>
</template>

