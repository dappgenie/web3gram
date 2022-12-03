<template>
  <div class="row">
    <div class="col-sm-12">
        <iq-card>
          <div class="iq-card-body profile-page p-0">
            <div class="profile-header">
              <div class="cover-container">
                  <img src="../../../assets/images/page-img/profile-bg1.jpg" alt="profile-bg" class="rounded img-fluid">
                  <ul class="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
                      <li><a href="#" class="material-symbols-outlined">
                          edit
                          </a>
                      </li>
                      <li><a href="#" class="material-symbols-outlined">
                          settings
                          </a>
                      </li>
                    </ul>
              </div>
              <div class="user-detail text-center mb-3">
                  <div class="profile-img">
                    <img src="../../../assets/images/user/11.png" alt="profile-img" class="avatar-130 img-fluid" />
                  </div>
                  <div class="profile-detail">
                    <h3 class="">Bni Cyst</h3>
                  </div>
              </div>
              <div class="profile-info p-4 d-flex align-items-center justify-content-between position-relative">
                  <div class="social-links">
                    <ul class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                        <li  v-for="(item,index) in social" :key="index" class="text-center pe-3">
                          <a href="javasctipt:void(0)"><img :src="item" class="img-fluid rounded" alt="facebook"></a>
                        </li>
                    </ul>
                  </div>
                  <div class="social-info">
                    <ul class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                        <li v-for="(i,index) in soicalInfo" :key="index" class="text-center ps-3">
                          <h6>{{i.name}}</h6>
                          <p class="mb-0">{{i.value}}</p>
                        </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </iq-card>
        <iq-card class="iq-card">
          <div class="iq-card-body p-0">
            <div class="user-tabing">
              <tab-nav :pills="true" id="pills-tab" class="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                <tab-nav-items class="col-sm-3 p-0" :active="true" id="pills-feed-tab" href="#profile-feed" ariaControls="pills-home" role="tab" :ariaSelected="true" title="Timeline" />
                <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-activity-tab" href="#profile-activity" ariaControls="pills-profile" role="tab" :ariaSelected="false" title="About" />
                <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-friend-tab" href="#profile-friends" ariaControls="pills-contact" role="tab" :ariaSelected="false" title="Friends" />
                <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-profile-tab" href="#profile-profile" ariaControls="pills-contact" role="tab" :ariaSelected="false" title="Photos" />
              </tab-nav>
            </div>
          </div>
        </iq-card>
    </div>
    <div class="col-sm-12">
      <div class="tab-content">
        <tab-content-item :active="true" id="profile-feed" aria-labelled-by="pills-feed-tab">
          <div class="iq-card-body p-0">
            <div class="row">
              <div class="col-lg-4">
                <iq-card>
                  <template v-slot:body>
                   <a href="#"><span class="badge badge-pill bg-primary font-weight-normal ms-auto me-1 material-symbols-outlined md-24 fa-llg">grade</span> 27 Items for yoou</a>
                  </template>
                </iq-card>
                <iq-card>
                  <template v-slot:headerTitle>
                    <h4 class="card-title">Life Event</h4>
                  </template>
                  <template v-slot:headerAction>
                    <p class="m-0"><a href="#"> Create </a></p>
                  </template>
                  <template v-slot:body>
                    <div class="row">
                      <div class="col-sm-12" v-for="(event,index) in lifeEvent" :key="index">
                        <div class="event-post position-relative">
                          <a href="#">
                            <img :src="event.img" alt="gallary-image" class="img-fluid rounded"></a>
                          <div class="job-icon-position">
                             <div class="job-icon bg-primary p-2 d-inline-block rounded-circle material-symbols-outlined text-white">
                                  local_mall
                              </div>
                          </div>
                          <div class="iq-card-body text-center p-2">
                            <h5>{{event.heading}}</h5>
                            <p>{{event.date}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </iq-card>
                <iq-card>
                  <template v-slot:headerTitle>
                    <h4 class="card-title">Photos</h4>
                  </template>
                  <template v-slot:headerAction>
                    <p class="m-0"><a href="#">Add Photo </a></p>
                  </template>
                  <template v-slot:body>
                    <ul class="profile-img-gallary p-0 m-0 list-unstyled">
                      <li v-for="(photo,index) in phtoes" :key="index">
                        <a data-fslightbox="gallery" :href="photo"><img :src="photo" alt="gallary-image" class="img-fluid" /></a>
                      </li>
                    </ul>
                  </template>
                </iq-card>
                <iq-card>
                  <template v-slot:headerTitle>
                    <h4 class="card-title">Friends</h4>
                  </template>
                  <template v-slot:headerAction>
                    <p class="m-0"><a href="javacsript:void();">Add New </a></p>
                  </template>
                  <template v-slot:body>
                    <ul class="profile-img-gallary p-0 m-0 list-unstyled">
                      <li v-for="(friend,index) in friends" :key="index">
                        <a href="require('../../../assets/images/gallery/grid/03.jpg')">
                          <img :src="friend.img" alt="gallary-image" class="img-fluid" /></a>
                        <h6 class="mt-2 text-center">{{friend.name}}</h6>
                      </li>
                    </ul>
                  </template>
                </iq-card>
              </div>
              <div class="col-lg-8">
                <div id="post-modal-data" class="iq-card">
                  <AddSocialPostNew @addPost="addPost"></AddSocialPostNew>
                  <div  v-for="post in socialPosts" :key="post.id">
                    <social-post :post="post"></social-post>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </tab-content-item>
        <tab-content-item :active="false" id="profile-activity" aria-labelled-by="pills-activity-tab">
          <iq-card>
            <template v-slot:body>
               <About />
            </template>
          </iq-card>
        </tab-content-item>
        <tab-content-item :active="false" id="profile-friends" aria-labelled-by="pills-friend-tab">
          <iq-card>
            <template v-slot:body>
              <h2>Friends</h2>
                <FriendTab />
            </template>
          </iq-card>
        </tab-content-item>
        <tab-content-item :active="false" id="profile-profile" aria-labelled-by="pills-profile-tab">
          <iq-card>
            <template v-slot:body>
              <h2>Photos</h2>
              <tab-nav :pills="true" id="pills" class="nav nav-pills d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                <tab-nav-items liClass=" " :active="true" id="pills-photo-you-tab" href="#pill-photosofyou" ariaControls="pills-photo-you" role="tab" :ariaSelected="true" title="Photo of you" />
                <tab-nav-items liClass=" " id="pills-your-photo-tab" href="#pill-your-photos" ariaControls="pills-your-photo" role="tab" :ariaSelected="false" title="Your photo" />
              </tab-nav>
              <div class="tab-content">
                <tab-content-item :active="true" id="photo-you" aria-labelled-by="pills-photo-you-tab">
                  <div class="row">
                    <div class="col-md-6 col-lg-3 mb-3" v-for="(item,index) in profileImages" :key="index">
                      <div class="user-images position-relative overflow-hidden">
                        <a data-fslightbox="gallery" :href="item.img">
                          <img :src="item.img" class="img-fluid rounded" alt="Responsive image">
                        </a>
                        <div class="image-hover-data">
                          <div class="product-elements-icon">
                            <ul class="d-flex align-items-center m-0 p-0 list-inline">
                              <li v-for="(item,index1) in item.otherInfo" :key="index1">
                                <a href="" class="pe-3 text-white d-flex align-items-center"> {{item.value}} <i class="material-symbols-outlined md-14 ms-1">
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
                    </div>
                  </div>
                </tab-content-item>
                <tab-content-item :active="false" id="your-photo" aria-labelled-by="pills-your-photo-tab">
                  <ProfileImage />
                </tab-content-item>
              </div>
            </template>
          </iq-card>
        </tab-content-item>
      </div>
    </div>
    <div class="col-sm-12 text-center">
      <img src="../../../assets/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
    </div>
  </div>
</template>
<script>
import { socialvue } from '../../../config/pluginInit'
import ProfileImage from './ProfileImage'
import FriendTab from './ProfileFriends/FriendTab'
import About from './ProfileFriends/About'
import AddSocialPostNew from '../../Apps/Social/Components/AddSocialPostNew'
import Post from '../../../Model/Post'
import { Posts } from '../../../FackApi/api/SocialPost'
export default {
  name: 'Profile',
  mounted () {
    socialvue.index()
  },
  components: {
    FriendTab,
    ProfileImage,
    AddSocialPostNew,
    About
  },
  data () {
    return {
      post: new Post(),
      socialPosts: Posts,
      social: [
        require('../../../assets/images/icon/08.png'),
        require('../../../assets/images/icon/09.png'),
        require('../../../assets/images/icon/10.png'),
        require('../../../assets/images/icon/11.png'),
        require('../../../assets/images/icon/12.png'),
        require('../../../assets/images/icon/13.png')
      ],
      lifeEvent: [
        {
          img: require('../../../assets/images/page-img/07.jpg'),
          heading: 'Started New Job at Apple',
          date: 'January 24, 2019'
        },
        {
          img: require('../../../assets/images/page-img/06.jpg'),
          heading: 'Freelance Photographer',
          date: 'January 24, 2019'
        }
      ],
      friends: [
        {
          img: require('../../../assets/images/user/05.jpg'),
          name: 'Anna Rexia'
        },
        {
          img: require('../../../assets/images/user/06.jpg'),
          name: 'Tara Zona'
        },
        {
          img: require('../../../assets/images/user/07.jpg'),
          name: 'Polly Tech'
        },
        {
          img: require('../../../assets/images/user/08.jpg'),
          name: 'Bill Emia'
        },
        {
          img: require('../../../assets/images/user/09.jpg'),
          name: 'Moe Fugga'
        },
        {
          img: require('../../../assets/images/user/10.jpg'),
          name: 'Hal Appeno '
        },
        {
          img: require('../../../assets/images/user/09.jpg'),
          name: 'Zack Lee'
        },
        {
          img: require('../../../assets/images/user/07.jpg'),
          name: 'Terry Aki'
        },
        {
          img: require('../../../assets/images/user/08.jpg'),
          name: 'Greta Life'
        }
      ],
      soicalInfo: [
        {
          name: 'Post',
          value: 690
        },
        {
          name: 'Followers',
          value: 90
        },
        {
          name: 'Following',
          value: 100
        }
      ],
      phtoes: [
        require('../../../assets/images/page-img/g1.jpg'),
        require('../../../assets/images/page-img/g2.jpg'),
        require('../../../assets/images/page-img/g3.jpg'),
        require('../../../assets/images/page-img/g4.jpg'),
        require('../../../assets/images/page-img/g5.jpg'),
        require('../../../assets/images/page-img/g6.jpg'),
        require('../../../assets/images/page-img/g7.jpg'),
        require('../../../assets/images/page-img/g8.jpg'),
        require('../../../assets/images/page-img/g9.jpg')
      ],

      profileImages: [
        {
          img: require('../../../assets/images/page-img/51.jpg'),
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
          img: require('../../../assets/images/page-img/52.jpg'),
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
          img: require('../../../assets/images/page-img/53.jpg'),
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
          img: require('../../../assets/images/page-img/54.jpg'),
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
          img: require('../../../assets/images/page-img/55.jpg'),
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
          img: require('../../../assets/images/page-img/56.jpg'),
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
          img: require('../../../assets/images/page-img/57.jpg'),
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
        },
        {
          img: require('../../../assets/images/page-img/58.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 106
            },
            {
              class: 'chat_bubble_outline',
              value: 26

            },
            {
              class: 'forward',
              value: 14
            }
          ]
        },
        {
          img: require('../../../assets/images/page-img/59.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 10
            },
            {
              class: 'chat_bubble_outline',
              value: 24

            },
            {
              class: 'forward',
              value: 14
            }
          ]
        },
        {
          img: require('../../../assets/images/page-img/60.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 10
            },
            {
              class: 'chat_bubble_outline',
              value: 24

            },
            {
              class: 'forward',
              value: 1
            }
          ]
        },
        {
          img: require('../../../assets/images/page-img/61.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 60
            },
            {
              class: 'chat_bubble_outline',
              value: 30

            },
            {
              class: 'forward',
              value: 10
            }
          ]
        },
        {
          img: require('../../../assets/images/page-img/62.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 60
            },
            {
              class: 'chat_bubble_outline',
              value: 24

            },
            {
              class: 'forward',
              value: 10
            }
          ]
        },
        {
          img: require('../../../assets/images/page-img/63.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 60
            },
            {
              class: 'chat_bubble_outline',
              value: 30

            },
            {
              class: 'forward',
              value: 10
            }
          ]
        },
        {
          img: require('../../../assets/images/page-img/64.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 60
            },
            {
              class: 'chat_bubble_outline',
              value: 30

            },
            {
              class: 'forward',
              value: 10
            }
          ]
        },
        {
          img: require('../../../assets/images/page-img/65.jpg'),
          otherInfo: [
            {
              class: 'thumb_up',
              value: 60
            },
            {
              class: 'chat_bubble_outline',
              value: 30

            },
            {
              class: 'forward',
              value: 10
            }
          ]
        }
      ]
    }
  },
  methods: {
    addPost (post) {
      this.socialPosts.unshift(post)
    }
  }
}
</script>
