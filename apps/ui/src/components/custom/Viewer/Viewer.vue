<template>
  <div class="col-md-6 col-lg-4 mb-3">
    <div class="user-images position-relative overflow-hidden">
      <a v-if="item.type==='video'" data-fslightbox="html5-video" :href="require('@/assets/images/plugins/video-2.mp4')">
                  <!-- <img src="@/assets/images/page-img/54.jpg" class="img-fluid rounded" alt="file-manager" loading="lazy"> -->
                  </a>
      <a v-else data-fslightbox="gallery" :href="item.img">
        <img :src="item.src" class="img-fluid rounded" alt="Responsive image">
      </a>
      <div class="image-hover-data">
        <div class="product-elements-icon">
          <ul class="d-flex align-items-center m-0 p-0 list-inline">
            <li v-for="(item, index1) in item.otherInfo" :key="index1">
              <a href="#" class="pe-3 text-white d-flex align-items-center"> {{ item.value }} <i
                  class="material-symbols-outlined md-14 ms-1">
                  {{ item.class }}
                </i> </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="#" class="image-edit-btn material-symbols-outlined md-16" data-bs-toggle="tooltip"
        data-bs-placement="top" title="" data-bs-original-title="Edit or Remove">
        drive_file_rename_outline
      </a>
    </div>
  </div>
</template>
<script>
// import { socialvue } from '../../../config/pluginInit'
export default {
  name: 'ProfileImage',
  props: {
    item: {
      type: String,
      src: String,
      otherInfo: Array({
        class: String,
        value: Number
      })
    },
  },
  mounted() {
    // socialvue.index()
  },
  data() {
    return {
    }
  }
}

</script>
