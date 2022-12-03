<template>
  <div >
    <iq-card  id="post-modal-data" body-class="iq-card iq-card-block iq-card-stretch iq-card-height" >
      <template v-slot:headerTitle >
        <h4 class="card-title">Create Post</h4>
      </template>
      <template v-slot:body>
        <div class="d-flex align-items-center">
            <div class="user-img">
            <img class="avatar-60 rounded-circle" src="../../../../assets/images/user/user-1.jpg">
            </div>
            <form  class="post-text ml-3 w-100">
            <input type="text" placeholder="Write something about post..." class="rounded form-control" style="border:none;" data-bs-toggle="modal" data-bs-target="#modals"/>
            </form>
        </div>
        <hr />
         <ul class=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
            <li class="me-3 mb-md-0 mb-2"><a href="#" class="btn btn-soft-primary"><img src="../../../../assets/images/small/07.png" alt="icon" class="img-fluid me-2"> Photo/Video</a></li>
            <li class="me-3 mb-md-0 mb-2"><a href="#" class="btn btn-soft-primary"><img src="../../../../assets/images/small/08.png" alt="icon" class="img-fluid me-2"> Tag Friend</a></li>
            <li class="me-3 mb-md-0 mb-2"><a href="#" class="btn btn-soft-primary"><img src="../../../../assets/images/small/09.png" alt="icon" class="img-fluid me-2"> Feeling/Activity</a></li>
            <!-- <li>
              <div class="btn btn-soft-primary">
                <div class="card-header-toolbar d-flex align-items-center">
                  <div class="dropdown">
                    <div class="dropdown-toggle lh-1" id="post-option"   data-bs-toggle="dropdown">
                      <span class="material-symbols-outlined">
                        more_horiz
                      </span>
                    </div>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="post-option" style="">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Check in</a>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Live Video</a>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Gif</a>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Watch Party</a>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Play with Friend</a>
                    </div>
                  </div>
                </div>
              </div>
            </li> -->
            <li>
              <div class="btn btn-soft-primary">
                           <div class="card-header-toolbar d-flex align-items-center">
                              <div class="dropdown">
                                 <div class="dropdown-toggle lh-1" id="post-option" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-symbols-outlined">
                                    more_horiz
                                    </span>
                                 </div>
                                 <div class="dropdown-menu dropdown-menu-right" aria-labelledby="post-option" style="">
                                    <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Check in</a>
                                    <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Live Video</a>
                                    <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Gif</a>
                                    <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Watch Party</a>
                                    <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Play with Friend</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
        </ul>
      </template>
      <modal id="modals" dialogClass="modal-fullscreen-sm-down" tabindex="-1" title="Create Post" aria-labelledby="modalsLabel" aria-hidden="true">
        <model-header>
          <h5 class="modal-title" id="modalsLabel">Create Post</h5>
         <a href="javascript:void(0);" class="lh-1" data-bs-dismiss="modal">
                                          <span class="material-symbols-outlined">close</span>
                                       </a>
        </model-header>
        <model-body>
          <div class="d-flex align-items-center">
            <div class="user-img">
              <img src="@/assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle img-fluid">
            </div>
            <form class="post-text ms-3 w-100" action="javascript:void();">
              <input type="text" class="form-control rounded" placeholder="Write something here..." style="border:none;">
            </form>
          </div>
          <hr>
          <ul class="d-flex flex-wrap align-items-center list-inline m-0 p-0">
            <li class="col-md-6 mb-3">
              <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/07.png" alt="icon" class="img-fluid"> Photo/Video</div>
            </li>
            <li class="col-md-6 mb-3">
              <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/08.png" alt="icon" class="img-fluid"> Tag Friend</div>
            </li>
            <li class="col-md-6 mb-3">
              <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/09.png" alt="icon" class="img-fluid"> Feeling/Activity</div>
            </li>
            <li class="col-md-6 mb-3">
              <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/10.png" alt="icon" class="img-fluid"> Check in</div>
            </li>
            <li class="col-md-6 mb-3">
              <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/11.png" alt="icon" class="img-fluid"> Live Video</div>
            </li>
            <li class="col-md-6 mb-3">
              <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/12.png" alt="icon" class="img-fluid"> Gif</div>
            </li>
            <li class="col-md-6 mb-3">
              <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/13.png" alt="icon" class="img-fluid"> Watch Party</div>
            </li>
            <li class="col-md-6 mb-3">
              <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/14.png" alt="icon" class="img-fluid"> Play with Friends</div>
            </li>
          </ul>
          <hr>
          <div class="other-option">
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="user-img me-3">
                      <img src="@/assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle img-fluid">
                  </div>
                  <h6>Your Story</h6>
                </div>
                <div class="card-post-toolbar">
                  <div class="dropdown">
                      <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                      <span class="btn btn-primary">Friend</span>
                      </span>
                      <div class="dropdown-menu m-0 p-0">
                        <a class="dropdown-item p-3" href="#">
                            <div class="d-flex align-items-top">
                              <span class="material-symbols-outlined">
                                                            save
                                                            </span>
                              <div class="data ms-2">
                                  <h6>Public</h6>
                                  <p class="mb-0">Anyone on or off Facebook</p>
                              </div>
                            </div>
                        </a>
                        <a class="dropdown-item p-3" href="#">
                            <div class="d-flex align-items-top">
                              <i class="ri-close-circle-line h4"></i>
                              <div class="data ms-2">
                                  <h6>Friends</h6>
                                  <p class="mb-0">Your Friend on facebook</p>
                              </div>
                            </div>
                        </a>
                        <a class="dropdown-item p-3" href="#">
                            <div class="d-flex align-items-top">
                              <i class="ri-user-unfollow-line h4"></i>
                              <div class="data ms-2">
                                  <h6>Friends except</h6>
                                  <p class="mb-0">Don't show to some friends</p>
                              </div>
                            </div>
                        </a>
                        <a class="dropdown-item p-3" href="#">
                            <div class="d-flex align-items-top">
                              <i class="ri-notification-line h4"></i>
                              <div class="data ms-2">
                                  <h6>Only Me</h6>
                                  <p class="mb-0">Only me</p>
                              </div>
                            </div>
                        </a>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          <button class="btn btn-primary d-block w-100 mt-3" @click="addNewPost(post)">Post</button>
        </model-body>
      </modal>
   
    </iq-card>
  </div>
</template>
<script>
import Post from '../../../../Model/Post'
export default {
  name: 'AddSocialPost',
  data () {
    return {
      post: new Post(),
      tab: [
        {
          icon: require('../../../../assets/images/small/07.png'),
          name: ' Photo/Video'
        },
        {
          icon: require('../../../../assets/images/small/08.png'),
          name: ' Tag Friend'
        },
        {
          icon: require('../../../../assets/images/small/09.png'),
          name: 'Feeling/Activity'
        },
        {
          icon: require('../../../../assets/images/small/10.png'),
          name: 'Check in'
        },
        {
          icon: require('../../../../assets/images/small/11.png'),
          name: 'Live Video'
        },
        {
          icon: require('../../../../assets/images/small/12.png'),
          name: ' Gif'
        },
        {
          icon: require('../../../../assets/images/small/13.png'),
          name: 'Watch Party'
        },
        {
          icon: require('../../../../assets/images/small/14.png'),
          name: ' Play with Friends'
        }
      ]
    }
  },
  methods: {
    addNewPost (post) {
      this.$emit('addPost', post)
      this.post = new Post()
      this.$bvModal.hide('modal1')
    },
    resetPost () {
      this.post = new Post()
    },
    previewImage: function (event) {
      const files = event.target.files
      Object.keys(files).forEach(i => {
        const file = files[i]
        const reader = new FileReader()
        reader.onload = (e) => {
          this.post.images.push(e.target.result)
        }
        reader.readAsDataURL(file)
      })
    }
  }
}
</script>
