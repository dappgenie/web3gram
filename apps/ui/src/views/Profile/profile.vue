<template>
   <div class="container">
      <div class="row">
         <div class="col-sm-12">
            <div class="card">
               <div class="card-body profile-page p-0">
                  <div class="profile-header">
                     <div class="position-relative">
                        <img src="@/assets/images/page-img/profile-bg1.jpg" alt="profile-bg" class="rounded img-fluid"
                           loading="lazy">
                        <ul class="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
                           <li><a href="#" class="material-symbols-outlined">
                                 edit
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div class="user-detail text-center mb-3">
                        <div class="profile-img">
                           <img src="@/assets/images/user/11.png" alt="profile-img" class="avatar-130 img-fluid"
                              loading="lazy">
                        </div>
                        <div class="profile-detail">
                           <h3 class="">Bni Cyst</h3>
                        </div>
                     </div>
                     <div class="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
                        <div class="social-links">
                           <ul
                              class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                              <li class="text-center pe-3">
                                 <a href="#"><img src="@/assets/images/icon/08.png" class="img-fluid rounded"
                                       alt="facebook" loading="lazy"></a>
                              </li>
                              <li class="text-center pe-3">
                                 <a href="#"><img src="@/assets/images/icon/09.png" class="img-fluid rounded"
                                       alt="Twitter" loading="lazy"></a>
                              </li>
                              <li class="text-center pe-3">
                                 <a href="#"><img src="@/assets/images/icon/10.png" class="img-fluid rounded"
                                       alt="Instagram" loading="lazy"></a>
                              </li>
                              <li class="text-center pe-3">
                                 <a href="#"><img src="@/assets/images/icon/11.png" class="img-fluid rounded"
                                       alt="Google plus" loading="lazy"></a>
                              </li>
                              <li class="text-center pe-3">
                                 <a href="#"><img src="@/assets/images/icon/12.png" class="img-fluid rounded"
                                       alt="You tube" loading="lazy"></a>
                              </li>
                              <li class="text-center md-pe-3 pe-0">
                                 <a href="#"><img src="@/assets/images/icon/13.png" class="img-fluid rounded"
                                       alt="linkedin" loading="lazy"></a>
                              </li>
                           </ul>
                        </div>
                        <div class="social-info">
                           <ul
                              class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                              <li class="text-center ps-3">
                                 <h6>Posts</h6>
                                 <p class="mb-0">690</p>
                              </li>
                              <li class="text-center ps-3">
                                 <h6>Followers</h6>
                                 <p class="mb-0">206</p>
                              </li>
                              <li class="text-center ps-3">
                                 <h6>Following</h6>
                                 <p class="mb-0">100</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="row mt-1">
         <div class="col-12">
            <div id="post-modal-data" class="card">
               <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                     <h4 class="card-title">Create Post</h4>
                  </div>
               </div>
               <div class="card-body">
                  <div class="d-flex align-items-center">
                     <div class="user-img">
                        <img src="@/assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle">
                     </div>
                     <form class="post-text ms-3 w-100 " data-bs-toggle="modal" data-bs-target="#post-modal" action="#">
                        <input type="text" class="form-control rounded" placeholder="Write something here..."
                           style="border:none;">
                     </form>
                  </div>
                  <hr>
                  <ul class=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                     <li class="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img
                           src="@/assets/images/small/07.png" alt="icon" class="img-fluid me-2" loading="lazy">
                        Photo/Video</li>
                     <!-- <li class="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src="@/assets/images/small/08.png" alt="icon" class="img-fluid me-2" loading="lazy"> Tag Friend</li> -->
                     <!-- <li class="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3"><img src="@/assets/images/small/09.png" alt="icon" class="img-fluid me-2" loading="lazy"> Feeling/Activity</li> -->

                  </ul>
               </div>
            </div>
            <div class="w-full">
               <div class="card">
                  <div class="card-body p-0">
                     <div class="user-tabing">
                        <ul
                           class="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                           <li class="nav-item col-12 col-sm-3 p-0">
                              <a class="nav-link active" href="#MyArts" data-bs-toggle="pill" data-bs-target="#MyArts"
                                 role="button">My Arts</a>
                           </li>
                           <li class="nav-item col-12 col-sm-3 p-0">
                              <a class="nav-link" href="#MyCollections" data-bs-toggle="pill"
                                 data-bs-target="#MyCollections" role="button">My Collections</a>
                           </li>
                           <li class="nav-item col-12 col-sm-3 p-0">
                              <a class="nav-link" href="#Friends" data-bs-toggle="pill" data-bs-target="#Friends"
                                 role="button">Friends</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="tab-content">
                  <div class="tab-pane fade show active" id="MyArts" role="tabpanel">

                     <div class="row">
                        <Viewer v-for="(item, index) in PostsList" :key="index" :item=item>

                        </Viewer>
                     </div>
                  </div>
                  <div class="tab-pane fade" id="MyCollections" role="tabpanel">
                     <div class="card">
                        <div class="card-header d-flex justify-content-between">
                           <div class="header-title">
                              <h4 class="card-title">Photos</h4>
                           </div>
                           <div class="card-header-toolbar d-flex align-items-center">
                              <p class="m-0"><a href="javacsript:void();">Add Photo </a></p>
                           </div>
                        </div>
                        <div class="card-body">
                           <ul class="profile-img-gallary p-0 m-0 list-unstyled">
                              <li class="">
                                 <a data-fslightbox="gallery" href="@/assets/images/page-img/g1.jpg">
                                    <img src="@/assets/images/page-img/g1.jpg" class="img-fluid" alt="photo-profile"
                                       loading="lazy">
                                 </a>
                              </li>
                              <li class="">
                                 <a data-fslightbox="gallery" href="@/assets/images/page-img/g2.jpg">
                                    <img src="@/assets/images/page-img/g2.jpg" class="img-fluid" alt="photo-profile"
                                       loading="lazy">
                                 </a>
                              </li>
                              <li class="">
                                 <a data-fslightbox="gallery" href="@/assets/images/page-img/g3.jpg">
                                    <img src="@/assets/images/page-img/g3.jpg" class="img-fluid" alt="photo-profile"
                                       loading="lazy">
                                 </a>
                              </li>
                              <li class="">
                                 <a data-fslightbox="gallery" href="@/assets/images/page-img/g4.jpg">
                                    <img src="@/assets/images/page-img/g4.jpg" class="img-fluid" alt="photo-profile"
                                       loading="lazy">
                                 </a>
                              </li>
                              <li class="">
                                 <a data-fslightbox="gallery" href="@/assets/images/page-img/g5.jpg">
                                    <img src="@/assets/images/page-img/g5.jpg" class="img-fluid" alt="photo-profile"
                                       loading="lazy">
                                 </a>
                              </li>
                              <li class="">
                                 <a data-fslightbox="gallery" href="@/assets/images/page-img/g6.jpg">
                                    <img src="@/assets/images/page-img/g6.jpg" class="img-fluid" alt="photo-profile"
                                       loading="lazy">
                                 </a>
                              </li>
                              <li class="">
                                 <a data-fslightbox="gallery" href="@/assets/images/page-img/g7.jpg">
                                    <img src="@/assets/images/page-img/g7.jpg" class="img-fluid" alt="photo-profile"
                                       loading="lazy">
                                 </a>
                              </li>
                              <li class="">
                                 <a data-fslightbox="gallery" href="@/assets/images/page-img/g8.jpg">
                                    <img src="@/assets/images/page-img/g8.jpg" class="img-fluid" alt="photo-profile"
                                       loading="lazy">
                                 </a>
                              </li>
                              <li class="">
                                 <a data-fslightbox="gallery" href="@/assets/images/page-img/g9.jpg">
                                    <img src="@/assets/images/page-img/g9.jpg" class="img-fluid" alt="photo-profile"
                                       loading="lazy">
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="tab-pane fade" id="Friends" role="tabpanel">
                     <div class="card">
                        <div class="card-body">
                           <ul class="request-list list-inline m-0 p-0">
                              <li class="d-flex align-items-center  flex-wrap">
                                 <div class="user-img img-fluid flex-shrink-0">
                                    <img src="@/assets/images/user/13.jpg" alt="story-img"
                                       class="rounded-circle avatar-40">
                                 </div>
                                 <div class="flex-grow-1 ms-3">
                                    <h6>Paul Misunday</h6>
                                    <p class="mb-0">6 friends</p>
                                 </div>
                                 <div class="d-flex align-items-center mt-2 mt-md-0">
                                    <a href="#" class=" btn btn-primary rounded">Follow</a>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center  flex-wrap">
                                 <div class="user-img img-fluid flex-shrink-0">
                                    <img src="@/assets/images/user/14.jpg" alt="story-img"
                                       class="rounded-circle avatar-40">
                                 </div>
                                 <div class="flex-grow-1  ms-3">
                                    <h6>Reanne</h6>
                                    <p class="mb-0">12 friends</p>
                                 </div>
                                 <div class="d-flex align-items-center mt-2 mt-md-0">
                                    <a href="#" class=" btn btn-primary rounded">Follow</a>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center  flex-wrap">
                                 <div class="user-img img-fluid flex-shrink-0">
                                    <img src="@/assets/images/user/15.jpg" alt="story-img"
                                       class="rounded-circle avatar-40">
                                 </div>
                                 <div class="flex-grow-1 ms-3">
                                    <h6>Reanne </h6>
                                    <p class="mb-0">12 friends</p>
                                 </div>
                                 <div class="d-flex align-items-center mt-2 mt-md-0">
                                    <a href="#" class=" btn btn-primary rounded">Follow</a>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center  flex-wrap">
                                 <div class="user-img img-fluid flex-shrink-0">
                                    <img src="@/assets/images/user/16.jpg" alt="story-img"
                                       class="rounded-circle avatar-40">
                                 </div>
                                 <div class="flex-grow-1 ms-3">
                                    <h6>Reanne</h6>
                                    <p class="mb-0">12 friends</p>
                                 </div>
                                 <div class="d-flex align-items-center mt-2 mt-md-0">
                                    <a href="#" class=" btn btn-primary rounded">Follow</a>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center  flex-wrap">
                                 <div class="user-img img-fluid flex-shrink-0">
                                    <img src="@/assets/images/user/17.jpg" alt="story-img"
                                       class="rounded-circle avatar-40">
                                 </div>
                                 <div class="flex-grow-1 ms-3">
                                    <h6>Reanne </h6>
                                    <p class="mb-0">15 friends</p>
                                 </div>
                                 <div class="d-flex align-items-center mt-2 mt-md-0">
                                    <a href="#" class=" btn btn-primary rounded">Follow</a>
                                 </div>
                              </li>
                              <li class="d-flex align-items-center  flex-wrap mb-0">
                                 <div class="user-img img-fluid flex-shrink-0">
                                    <img src="@/assets/images/user/18.jpg" alt="story-img"
                                       class="rounded-circle avatar-40">
                                 </div>
                                 <div class="flex-grow-1 ms-3">
                                    <h6>Reanne </h6>
                                    <p class="mb-0">21 friends</p>
                                 </div>
                                 <div class="d-flex align-items-center mt-2 mt-md-0">
                                    <a href="#" class=" btn btn-primary rounded">Follow</a>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>

import Viewer from '../../components/custom/Viewer/Viewer.vue'
export default {
   name: 'Profile',
    components: {
      Viewer,
    },
   data() {
      return {
         PostsList: [
            {
               type: 'image',
               src: require('@/assets/images/page-img/51.jpg'),
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
               src: require('@/assets/images/page-img/52.jpg'),
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
               src: require('@/assets/images/page-img/53.jpg'),
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
               src: require('@/assets/images/page-img/54.jpg'),
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
               src: require('@/assets/images/page-img/55.jpg'),
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
               src: require('@/assets/images/page-img/56.jpg'),
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
               src: require('@/assets/images/page-img/57.jpg'),
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
         ],
         SweetAlert: [
            {
               img: require('@/assets/images/user/05.jpg'),
               name: 'Jaques Amole',
               friend: '40  friends'
            },
            {
               img: require('@/assets/images/user/06.jpg'),
               name: 'Lucy Tania',
               friend: '12  friends'
            },
            {
               img: require('@/assets/images/user/07.jpg'),
               name: 'Val Adictorian',
               friend: '0  friends'
            },
            {
               img: require('@/assets/images/user/08.jpg'),
               name: 'Manny Petty',
               friend: '3  friends'
            },
            {
               img: require('@/assets/images/user/09.jpg'),
               name: 'Marsha Mello',
               friend: '15  friends'
            },
            {
               img: require('@/assets/images/user/10.jpg'),
               name: 'Caire Innet',
               friend: '8  friends'
            },
            {
               img: require('@/assets/images/user/11.jpg'),
               name: 'Gio Metric',
               friend: '10  friends'
            },
            {
               img: require('@/assets/images/user/12.jpg'),
               name: 'Chris P. Cream',
               friend: '18  friends'
            },
            {
               img: require('@/assets/images/user/05.jpg'),
               name: 'Paul Misunday',
               friend: '6  friends'
            },
            {
               img: require('@/assets/images/user/14.jpg'),
               name: 'Reanne Carnation',
               friend: '12  friends'
            }
         ]
      }
   },
   methods: {
      deleterequest() {
         const swalWithBootstrapButtons = this.$swal.mixin({
            customClass: {
               confirmButton: 'btn btn-primary btn-lg',
               cancelButton: 'btn btn-outline-primary btn-lg ms-2'
            },
            buttonsStyling: false
         })

         swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            showClass: {
               popup: 'animate__animated animate__zoomIn'
            },
            hideClass: {
               popup: 'animate__animated animate__zoomOut'
            }
         })
            .then((willDelete) => {
               if (willDelete.isConfirmed) {
                  swalWithBootstrapButtons.fire({
                     title: 'Deleted!',
                     text: 'Your Request has been deleted.',
                     icon: 'success',
                     showClass: {
                        popup: 'animate__animated animate__zoomIn'
                     },
                     hideClass: {
                        popup: 'animate__animated animate__zoomOut'
                     }
                  })
               } else {
                  swalWithBootstrapButtons.fire({
                     title: 'Your Request is safe!',
                     showClass: {
                        popup: 'animate__animated animate__zoomIn'
                     },
                     hideClass: {
                        popup: 'animate__animated animate__zoomOut'
                     }
                  })
               }
            })
      }
   }
}
</script>
