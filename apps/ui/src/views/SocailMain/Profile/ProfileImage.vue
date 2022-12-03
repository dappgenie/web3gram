<template>
  <div class="row">
    <Viewer v-for="(item,index) in profileImages" :key="index" :item=item>

    </Viewer>
    <!-- <div class="col-md-6 col-lg-4 mb-3" v-for="(item,index) in profileImages" :key="index">
      <div class="user-images position-relative overflow-hidden">
        <a data-fslightbox="gallery" :href="item.img">
          <img :src="item.img" class="img-fluid rounded" alt="Responsive image">
        </a>
        <div class="image-hover-data">
          <div class="product-elements-icon">
            <ul class="d-flex align-items-center m-0 p-0 list-inline">
              <li v-for="(item,index1) in item.otherInfo" :key="index1">
                <a href="#" class="pe-3 text-white d-flex align-items-center"> {{item.value}} <i class="material-symbols-outlined md-14 ms-1">
                     {{item.class}}
                </i> </a>
              </li>
            </ul>
          </div>
        </div>
       <a href="#" class="image-edit-btn material-symbols-outlined md-16" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit or Remove">
            drive_file_rename_outline
            </a>
      </div>
    </div> -->
  </div>
</template>
<script>
// import { socialvue } from '../../../config/pluginInit'
export default {
  name: 'ProfileImage',
  mounted () {
    // socialvue.index()
  },
  data () {
    return {
      profileImages: [
        {
          type: 'image',
          src: require('../../../assets/images/page-img/51.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 10
            },
            {
              class: 'chat_bubble_outline',
              value: 2

            },
            {
              class: 'forward',
              value: 1
            }
          ]
        },
        {
          type: 'image',
          src:  require('../../../assets/images/page-img/52.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 10
            },
            {
              class: 'chat_bubble_outline',
              value: 2

            },
            {
              class: 'forward',
              value: 1
            }
          ]
        },
        {
          type: 'image',
          src: require('../../../assets/images/page-img/53.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 120
            },
            {
              class: 'chat_bubble_outline',
              value: 21

            },
            {
              class: 'forward',
              value: 10
            }
          ]
        },
        {
          type: 'image',
          src: require('../../../assets/images/page-img/54.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 100
            },
            {
              class: 'chat_bubble_outline',
              value: 20

            },
            {
              class: 'forward',
              value: 120
            }
          ]
        },
        {
          type: 'image',
          src: require('../../../assets/images/page-img/55.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 107
            },
            {
              class: 'chat_bubble_outline',
              value: 20

            },
            {
              class: 'forward',
              value: 101
            }
          ]
        },
        {
          type: 'image',
          src: require('../../../assets/images/page-img/56.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 105
            },
            {
              class: 'chat_bubble_outline',
              value: 25

            },
            {
              class: 'forward',
              value: 15
            }
          ]
        },
        {
          type: 'image',
          src: require('../../../assets/images/page-img/57.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 107
            },
            {
              class: 'chat_bubble_outline',
              value: 27

            },
            {
              class: 'forward',
              value: 17
            }
          ]
        }
      ]
    }
  }
}
</script>
