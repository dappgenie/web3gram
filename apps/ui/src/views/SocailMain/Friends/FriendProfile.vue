<template>
    <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
            <div class="card-body profile-page p-0">
                <div class="profile-header profile-info">
                    <div class="cover-container">
                        <img src="@/assets/images/page-img/profile-bg1.jpg" alt="profile-bg" class="rounded img-fluid">
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
                        <img src="@/assets/images/user/11.png" alt="profile-img" class="avatar-130 img-fluid" />
                        </div>
                        <div class="profile-detail">
                        <h3 class="">Paul Molive</h3>
                        </div>
                    </div>
                    <div class="profile-info p-4 d-flex align-items-center justify-content-between position-relative">
                        <div class="social-links">
                        <ul class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                            <li class="text-center pe-3">
                                <a href="#"><img src="@/assets/images/icon/08.png" class="img-fluid rounded" alt="facebook"></a>
                            </li>
                            <li class="text-center pe-3">
                                <a href="#"><img src="@/assets/images/icon/09.png" class="img-fluid rounded" alt="Twitter"></a>
                            </li>
                            <li class="text-center pe-3">
                                <a href="#"><img src="@/assets/images/icon/10.png" class="img-fluid rounded" alt="Instagram"></a>
                            </li>
                            <li class="text-center pe-3">
                                <a href="#"><img src="@/assets/images/icon/11.png" class="img-fluid rounded" alt="Google plus"></a>
                            </li>
                            <li class="text-center pe-3">
                                <a href="#"><img src="@/assets/images/icon/12.png" class="img-fluid rounded" alt="You tube"></a>
                            </li>
                            <li class="text-center pe-3">
                                <a href="#"><img src="@/assets/images/icon/13.png" class="img-fluid rounded" alt="linkedin"></a>
                            </li>
                        </ul>
                        </div>
                        <div class="social-info">
                        <ul class="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                            <li class="text-center pe-3">
                                <h6>Posts</h6>
                                <p class="mb-0">690</p>
                            </li>
                            <li class="text-center pe-3">
                                <h6>Followers</h6>
                                <p class="mb-0">206</p>
                            </li>
                            <li class="text-center pe-3">
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
        <div class="row">
            <div class="col-lg-4">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">About</h4>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-inline p-0 m-0">
                     <li class="mb-2 d-flex align-items-center">
                        <span class="material-symbols-outlined md-18">
                        person
                        </span>
                        <p class="mb-0 ms-2">Web Developer</p>
                     </li>
                     <li class="mb-2 d-flex align-items-center">
                        <span class="material-symbols-outlined md-18">
                        gpp_good
                        </span>
                        <p class="mb-0 ms-2">Success in slowing economic activity.</p>
                     </li>
                     <li class="mb-2 d-flex align-items-center">
                        <span class="material-symbols-outlined md-18">
                        place
                        </span>
                        <p class="mb-0 ms-2">USA</p>
                     </li>
                     <li class="d-flex align-items-center">
                        <span class="material-symbols-outlined md-18">
                        favorite_border
                        </span>
                        <p class="mb-0 ms-2">Single</p>
                     </li>
                  </ul>
                </div>
            </div>
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
                        <li class=""><a data-fslightbox="gallery" :href="require('@/assets/images/page-img/g1.jpg')"><img src="@/assets/images/page-img/g1.jpg" alt="gallary-image" class="img-fluid"></a></li>
                        <li class=""><a data-fslightbox="gallery" :href="require('@/assets/images/page-img/g2.jpg')"><img src="@/assets/images/page-img/g2.jpg" alt="gallary-image" class="img-fluid"></a></li>
                        <li class=""><a data-fslightbox="gallery" :href="require('@/assets/images/page-img/g3.jpg')"><img src="@/assets/images/page-img/g3.jpg" alt="gallary-image" class="img-fluid"></a></li>
                        <li class=""><a data-fslightbox="gallery" :href="require('@/assets/images/page-img/g4.jpg')"><img src="@/assets/images/page-img/g4.jpg" alt="gallary-image" class="img-fluid"></a></li>
                        <li class=""><a data-fslightbox="gallery" :href="require('@/assets/images/page-img/g5.jpg')"><img src="@/assets/images/page-img/g5.jpg" alt="gallary-image" class="img-fluid"></a></li>
                        <li class=""><a data-fslightbox="gallery" :href="require('@/assets/images/page-img/g6.jpg')"><img src="@/assets/images/page-img/g6.jpg" alt="gallary-image" class="img-fluid"></a></li>
                        <li class=""><a data-fslightbox="gallery" :href="require('@/assets/images/page-img/g7.jpg')"><img src="@/assets/images/page-img/g7.jpg" alt="gallary-image" class="img-fluid"></a></li>
                        <li class=""><a data-fslightbox="gallery" :href="require('@/assets/images/page-img/g8.jpg')"><img src="@/assets/images/page-img/g8.jpg" alt="gallary-image" class="img-fluid"></a></li>
                        <li class=""><a data-fslightbox="gallery" :href="require('@/assets/images/page-img/g9.jpg')"><img src="@/assets/images/page-img/g9.jpg" alt="gallary-image" class="img-fluid"></a></li>
                    </ul>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Friends</h4>
                    </div>
                    <div class="card-header-toolbar d-flex align-items-center">
                        <p class="m-0"><a href="javacsript:void();">Add New </a></p>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="profile-img-gallary p-0 m-0 list-unstyled">
                        <li class="">
                        <a href="#">
                        <img src="@/assets/images/user/05.jpg" alt="gallary-image" class="img-fluid"></a>
                        <h6 class="mt-2 text-center">Anna Rexia</h6>
                        </li>
                        <li class="">
                        <a href="#"><img src="@/assets/images/user/06.jpg" alt="gallary-image" class="img-fluid"></a>
                        <h6 class="mt-2 text-center">Tara Zona</h6>
                        </li>
                        <li class="">
                        <a href="#"><img src="@/assets/images/user/07.jpg" alt="gallary-image" class="img-fluid"></a>
                        <h6 class="mt-2 text-center">Polly Tech</h6>
                        </li>
                        <li class="">
                        <a href="#"><img src="@/assets/images/user/08.jpg" alt="gallary-image" class="img-fluid"></a>
                        <h6 class="mt-2 text-center">Bill Emia</h6>
                        </li>
                        <li class="">
                        <a href="#"><img src="@/assets/images/user/09.jpg" alt="gallary-image" class="img-fluid"></a>
                        <h6 class="mt-2 text-center">Moe Fugga</h6>
                        </li>
                        <li class="">
                        <a href="#"><img src="@/assets/images/user/10.jpg" alt="gallary-image" class="img-fluid"></a>
                        <h6 class="mt-2 text-center">Hal Appeno </h6>
                        </li>
                        <li class="">
                        <a href="#"><img src="@/assets/images/user/07.jpg" alt="gallary-image" class="img-fluid"></a>
                        <h6 class="mt-2 text-center">Zack Lee</h6>
                        </li>
                        <li class="">
                        <a href="#"><img src="@/assets/images/user/06.jpg" alt="gallary-image" class="img-fluid"></a>
                        <h6 class="mt-2 text-center">Terry Aki</h6>
                        </li>
                        <li class="">
                        <a href="#"><img src="@/assets/images/user/05.jpg" alt="gallary-image" class="img-fluid"></a>
                        <h6 class="mt-2 text-center">Greta Life</h6>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div class="col-lg-8">
            <div id="post-modal-data" class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Create Post</h4>
                    </div>
                </div>
               <div class="card-body" data-toggle="modal" data-target="#post-modal">
                    <div class="d-flex align-items-center">
                        <div class="user-img">
                        <img src="@/assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle img-fluid">
                        </div>
                        <form class="post-text ms-3 w-100" action="javascript:void();" data-bs-toggle="modal" data-bs-target="#post-modal">
                        <input type="text" class="form-control rounded" placeholder="Write something here..." style="border:none;">
                         </form>
                    </div>
                    <hr>
                    <ul class=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                     <li class="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src="@/assets/images/small/07.png" alt="icon" class="img-fluid me-2" loading="lazy"> Photo/Video</li>
                     <li class="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src="@/assets/images/small/08.png" alt="icon" class="img-fluid me-2" loading="lazy"> Tag Friend</li>
                     <li class="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3"><img src="@/assets/images/small/09.png" alt="icon" class="img-fluid me-2" loading="lazy"> Feeling/Activity</li>
                     <li class="bg-soft-primary rounded p-2 pointer text-center">
                        <div class="card-header-toolbar d-flex align-items-center">
                           <div class="dropdown">
                              <div class="dropdown-toggle material-symbols-outlined" id="post-option"   data-bs-toggle="dropdown">
                                 more_horiz
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
                     </li>
                  </ul>
                </div>
               <div class="modal fade" id="post-modal" tabindex="-1"  aria-labelledby="post-modalLabel" aria-hidden="true" >
                  <div class="modal-dialog  modal-lg modal-fullscreen-sm-down">
                     <div class="modal-content">
                        <div class="modal-header">
                           <h5 class="modal-title" id="post-modalLabel">Create Post</h5>
                           <a href="javascript:void(0);" class="lh-1" data-bs-dismiss="modal">
                              <span class="material-symbols-outlined">close</span>
                           </a>
                        </div>
                        <div class="modal-body">
                           <div class="d-flex align-items-center">
                              <div class="user-img">
                                 <img src="@/assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle img-fluid" loading="lazy">
                              </div>
                              <form class="post-text ms-3 w-100" action="javascript:void();">
                                 <input type="text" class="form-control rounded" placeholder="Write something here..." style="border:none;">
                              </form>
                           </div>
                           <hr>
                           <ul class="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                              <li class="col-md-6 mb-3">
                                 <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/07.png" alt="icon" class="img-fluid" loading="lazy"> Photo/Video</div>
                              </li>
                              <li class="col-md-6 mb-3">
                                 <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/08.png" alt="icon" class="img-fluid" loading="lazy"> Tag Friend</div>
                              </li>
                              <li class="col-md-6 mb-3">
                                 <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/09.png" alt="icon" class="img-fluid" loading="lazy"> Feeling/Activity</div>
                              </li>
                              <li class="col-md-6 mb-3">
                                 <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/10.png" alt="icon" class="img-fluid" loading="lazy"> Check in</div>
                              </li>
                              <li class="col-md-6 mb-3">
                                 <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/11.png" alt="icon" class="img-fluid" loading="lazy"> Live Video</div>
                              </li>
                              <li class="col-md-6 mb-3">
                                 <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/12.png" alt="icon" class="img-fluid" loading="lazy"> Gif</div>
                              </li>
                              <li class="col-md-6 mb-3">
                                 <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/13.png" alt="icon" class="img-fluid" loading="lazy"> Watch Party</div>
                              </li>
                              <li class="col-md-6 mb-3">
                                 <div class="bg-soft-primary rounded p-2 pointer me-3"><a href="#"></a><img src="@/assets/images/small/14.png" alt="icon" class="img-fluid" loading="lazy"> Play with Friends</div>
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
                                                <span class="material-symbols-outlined">
                                                cancel
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Friends</h6>
                                                   <p class="mb-0">Your Friend on facebook</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                person_remove
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Friends except</h6>
                                                   <p class="mb-0">Don't show to some friends</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                notifications
                                                </span>
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
                           <button type="submit" class="btn btn-primary d-block w-100 mt-3">Post</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="post-item">
                        <div class="user-post-data p-3">
                        <div class="d-flex justify-content-between">
                            <div class="me-3">
                                <img class="rounded-circle  avatar-60" src="@/assets/images/user/05.jpg" alt="">
                            </div>
                            <div class="w-100">
                                <div class="d-flex justify-content-between flex-wrap">
                                    <div class="">
                                    <h5 class="mb-0 d-inline-block"><a href="#" class="">Anna Sthesia</a></h5>

                                    <p class="mb-0">8 hour ago</p>
                                    </div>
                                    <div class="card-post-toolbar">
                                    <div class="dropdown">
                                       <span class="dropdown-toggle material-symbols-outlined" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                       more_horiz
                                       </span>
                                       <div class="dropdown-menu m-0 p-0" style="">
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                save
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Save Post</h6>
                                                   <p class="mb-0">Add this to your saved items</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                cancel
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Hide Post</h6>
                                                   <p class="mb-0">See fewer posts like this.</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                person_remove
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Unfollow User</h6>
                                                   <p class="mb-0">Stop seeing posts but stay friends.</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                notifications
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Notifications</h6>
                                                   <p class="mb-0">Turn on notifications for this post</p>
                                                </div>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div class="user-post">
                        <a href="javascript:void();"><img src="@/assets/images/page-img/59.jpg" alt="post-image" class="img-fluid w-100" /></a>
                        </div>
                        <div class="comment-area mt-3">
                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                                <div class="like-block position-relative d-flex align-items-center">
                                    <div class="d-flex align-items-center">
                                        <div class="like-data">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            <img src="@/assets/images/icon/01.png" class="img-fluid" alt="">
                                            </span>
                                            <div class="dropdown-menu py-2">
                                                <a class="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="@/assets/images/icon/01.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="@/assets/images/icon/02.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="@/assets/images/icon/03.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="@/assets/images/icon/04.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="@/assets/images/icon/05.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Sade" ><img src="@/assets/images/icon/06.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="@/assets/images/icon/07.png" class="img-fluid" alt=""></a>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="total-like-block ms-2 me-3">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            140 Likes
                                            </span>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Max Emum</a>
                                                <a class="dropdown-item" href="#">Bill Yerds</a>
                                                <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                                <a class="dropdown-item" href="#">Tara Misu</a>
                                                <a class="dropdown-item" href="#">Midge Itz</a>
                                                <a class="dropdown-item" href="#">Sal Vidge</a>
                                                <a class="dropdown-item" href="#">Other</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="total-comment-block">
                                        <div class="dropdown">
                                        <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        20 Comment
                                        </span>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Max Emum</a>
                                            <a class="dropdown-item" href="#">Bill Yerds</a>
                                            <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                            <a class="dropdown-item" href="#">Tara Misu</a>
                                            <a class="dropdown-item" href="#">Midge Itz</a>
                                            <a class="dropdown-item" href="#">Sal Vidge</a>
                                            <a class="dropdown-item" href="#">Other</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                    <div class="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                        <a class="d-flex align-items-center" href="#" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn"><span class="material-symbols-outlined md-18">share</span>
                                        <span class="ms-1">99 Share</span></a>
                                    </div>
                                    <offcanvas mainClass="bottom share-offcanvas" :tabindex="-1" id="share-btn" aria-labelledby="shareBottomLabel">
                                        <offcanvas-header>
                                            <h5 class="offcanvas-title" id="shareBottomLabel">Share</h5>
                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </offcanvas-header>
                                        <offcanvas-body bodyClass="small">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/08.png" class="img-fluid mb-2" alt="">
                                                    <h6>Facebook</h6>
                                                </div>
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/09.png" class="img-fluid mb-2" alt="">
                                                    <h6>Twitter</h6>
                                                </div>
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/10.png" class="img-fluid mb-2" alt="">
                                                    <h6>Instagram</h6>
                                                </div>
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/11.png" class="img-fluid mb-2" alt="">
                                                    <h6>Google Plus</h6>
                                                </div>
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/13.png" class="img-fluid mb-2" alt="">
                                                    <h6>In</h6>
                                                </div>
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/12.png" class="img-fluid mb-2" alt="">
                                                    <h6>YouTube</h6>
                                                </div>
                                            </div>
                                        </offcanvas-body>
                                        </offcanvas>
                            </div>
                            <hr>
                            <ul class="post-comments p-0 m-0">
                                <li class="mb-2">
                                    <div class="d-flex flex-wrap">
                                        <div class="user-img">
                                        <img src="@/assets/images/user/02.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                                        </div>
                                        <div class="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="#">like</a>
                                            <a href="#">reply</a>
                                            <a href="#">translate</a>
                                            <span> 5 min </span>
                                        </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex flex-wrap">
                                        <div class="user-img">
                                        <img src="@/assets/images/user/03.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                                        </div>
                                        <div class="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="#">like</a>
                                            <a href="#">reply</a>
                                            <a href="#">translate</a>
                                            <span> 5 min </span>
                                        </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" class="form-control rounded" placeholder="Enter Your Comment">
                            <div class="comment-attagement d-flex">
                                <a href="javascript:void(0);" class="material-symbols-outlined me-3 link">
                                insert_link
                                </a>
                                <a href="javascript:void(0);" class="material-symbols-outlined  me-3">
                                sentiment_satisfied
                                </a>
                                <a href="javascript:void(0);" class="material-symbols-outlined  me-3">
                                photo_camera
                                </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- <div class="post-item">
                        <div class="user-post-data p-3">
                        <div class="d-flex justify-content-between">
                            <div class="me-3">
                                <img class="rounded-circle  avatar-60" src="@/assets/images/user/1.jpg" alt="">
                            </div>
                            <div class="w-100">
                                <div class="d-flex justify-content-between flex-wrap">
                                    <div class="">
                                    <h5 class="mb-0 d-inline-block"><a href="#" class="">Bni Cyst</a></h5>
                                    <p class="ms-1 mb-0 d-inline-block">Update his Status</p>
                                    <p class="mb-0">7 hour ago</p>
                                    </div>
                                    <div class="card-post-toolbar">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle material-symbols-outlined" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            more_horiz
                                            </span>
                                            <div class="dropdown-menu m-0 p-0" style="">
                                                <a class="dropdown-item p-3" href="#">
                                                    <div class="d-flex align-items-top">
                                                        <span class="material-symbols-outlined">
                                                        save
                                                        </span>
                                                        <div class="data ms-2">
                                                        <h6>Save Post</h6>
                                                        <p class="mb-0">Add this to your saved items</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a class="dropdown-item p-3" href="#">
                                                    <div class="d-flex align-items-top">
                                                        <span class="material-symbols-outlined">
                                                        cancel
                                                        </span>
                                                        <div class="data ms-2">
                                                        <h6>Hide Post</h6>
                                                        <p class="mb-0">See fewer posts like this.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a class="dropdown-item p-3" href="#">
                                                    <div class="d-flex align-items-top">
                                                        <span class="material-symbols-outlined">
                                                        person_remove
                                                        </span>
                                                        <div class="data ms-2">
                                                        <h6>Unfollow User</h6>
                                                        <p class="mb-0">Stop seeing posts but stay friends.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a class="dropdown-item p-3" href="#">
                                                    <div class="d-flex align-items-top">
                                                        <span class="material-symbols-outlined">
                                                        notifications
                                                        </span>
                                                        <div class="data ms-2">
                                                        <h6>Notifications</h6>
                                                        <p class="mb-0">Turn on notifications for this post</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="user-post">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                        <div class="comment-area mt-3">
                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                                <div class="like-block position-relative d-flex align-items-center">
                                    <div class="d-flex align-items-center">
                                        <div class="like-data">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            <img src="@/assets/images/icon/01.png" class="img-fluid" alt="">
                                            </span>
                                            <div class="dropdown-menu py-2">
                                                <a class="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="@/assets/images/icon/01.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="@/assets/images/icon/02.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="@/assets/images/icon/03.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="@/assets/images/icon/04.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="@/assets/images/icon/05.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Sade" ><img src="@/assets/images/icon/06.png" class="img-fluid" alt=""></a>
                                                <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="@/assets/images/icon/07.png" class="img-fluid" alt=""></a>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="total-like-block ms-2 me-3">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            140 Likes
                                            </span>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Max Emum</a>
                                                <a class="dropdown-item" href="#">Bill Yerds</a>
                                                <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                                <a class="dropdown-item" href="#">Tara Misu</a>
                                                <a class="dropdown-item" href="#">Midge Itz</a>
                                                <a class="dropdown-item" href="#">Sal Vidge</a>
                                                <a class="dropdown-item" href="#">Other</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="total-comment-block">
                                        <div class="dropdown">
                                        <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        20 Comment
                                        </span>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Max Emum</a>
                                            <a class="dropdown-item" href="#">Bill Yerds</a>
                                            <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                            <a class="dropdown-item" href="#">Tara Misu</a>
                                            <a class="dropdown-item" href="#">Midge Itz</a>
                                            <a class="dropdown-item" href="#">Sal Vidge</a>
                                            <a class="dropdown-item" href="#">Other</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                    <div class="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                        <a class="d-flex align-items-center" href="#" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn"><span class="material-symbols-outlined md-18">share</span>
                                        <span class="ms-1">99 Share</span></a>
                                    </div>
                                    <offcanvas mainClass="bottom share-offcanvas" :tabindex="-1" id="share-btn" aria-labelledby="shareBottomLabel">
                                        <offcanvas-header>
                                            <h5 class="offcanvas-title" id="shareBottomLabel">Share</h5>
                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </offcanvas-header>
                                        <offcanvas-body bodyClass="small">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/08.png" class="img-fluid mb-2" alt="">
                                                    <h6>Facebook</h6>
                                                </div>
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/09.png" class="img-fluid mb-2" alt="">
                                                    <h6>Twitter</h6>
                                                </div>
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/10.png" class="img-fluid mb-2" alt="">
                                                    <h6>Instagram</h6>
                                                </div>
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/11.png" class="img-fluid mb-2" alt="">
                                                    <h6>Google Plus</h6>
                                                </div>
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/13.png" class="img-fluid mb-2" alt="">
                                                    <h6>In</h6>
                                                </div>
                                                <div class="text-center me-3 mb-3">
                                                    <img src="@/assets/images/icon/12.png" class="img-fluid mb-2" alt="">
                                                    <h6>YouTube</h6>
                                                </div>
                                            </div>
                                        </offcanvas-body>
                                        </offcanvas>
                            </div>
                            <hr>
                            <ul class="post-comments p-0 m-0">
                                <li class="mb-2">
                                    <div class="d-flex flex-wrap">
                                        <div class="user-img">
                                        <img src="@/assets/images/user/02.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                                        </div>
                                        <div class="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="#">like</a>
                                            <a href="#">reply</a>
                                            <a href="#">translate</a>
                                            <span> 5 min </span>
                                        </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex flex-wrap">
                                        <div class="user-img">
                                        <img src="@/assets/images/user/03.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                                        </div>
                                        <div class="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="#">like</a>
                                            <a href="#">reply</a>
                                            <a href="#">translate</a>
                                            <span> 5 min </span>
                                        </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" class="form-control rounded" placeholder="Enter Your Comment">
                            <div class="comment-attagement d-flex">
                                <a href="javascript:void(0);" class="material-symbols-outlined me-3 link">
                                insert_link
                                </a>
                                <a href="javascript:void(0);" class="material-symbols-outlined  me-3">
                                sentiment_satisfied
                                </a>
                                <a href="javascript:void(0);" class="material-symbols-outlined  me-3">
                                photo_camera
                                </a>
                                </div>
                            </form>
                        </div>
                    </div> -->
                    
                </div>
            </div>
            <div class="card">
               <div class="card-body">
                  <div class="post-item">
                     <div class="user-post-data pb-3">
                        <div class="d-flex justify-content-between">
                           <div class="me-3">
                              <img class="rounded-circle  avatar-60" src="@/assets/images/user/1.jpg" alt="" loading="lazy">
                           </div>
                           <div class="w-100">
                              <div class="d-flex justify-content-between flex-wrap">
                                 <div class="">
                                    <h5 class="mb-0 d-inline-block"><a href="#" class="">Bni Cyst</a></h5>
                                    <p class="ms-1 mb-0 d-inline-block">Update his Status</p>
                                    <p class="mb-0">7 hour ago</p>
                                 </div>
                                 <div class="card-post-toolbar">
                                    <div class="dropdown">
                                       <span class="dropdown-toggle material-symbols-outlined" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                       more_horiz
                                       </span>
                                       <div class="dropdown-menu m-0 p-0">
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                save
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Save Post</h6>
                                                   <p class="mb-0">Add this to your saved items</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                cancel
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Hide Post</h6>
                                                   <p class="mb-0">See fewer posts like this.</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                person_remove
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Unfollow User</h6>
                                                   <p class="mb-0">Stop seeing posts but stay friends.</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                notifications
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Notifications</h6>
                                                   <p class="mb-0">Turn on notifications for this post</p>
                                                </div>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="user-post">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                     </div>
                     <div class="comment-area mt-3">
                        <div class="d-flex justify-content-between align-items-center">
                           <div class="like-block position-relative d-flex align-items-center">
                              <div class="d-flex align-items-center">
                                 <div class="like-data">
                                    <div class="dropdown">
                                       <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                       <img src="@/assets/images/icon/01.png" class="img-fluid" alt="">
                                       </span>
                                       <div class="dropdown-menu">
                                          <a class="ms-2 me-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Like"><img src="@/assets/images/icon/01.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Love"><img src="@/assets/images/icon/02.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Happy"><img src="@/assets/images/icon/03.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="HaHa"><img src="@/assets/images/icon/04.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Think"><img src="@/assets/images/icon/05.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sade"><img src="@/assets/images/icon/06.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="mr-2" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Lovely"><img src="@/assets/images/icon/07.png" class="img-fluid" alt="" loading="lazy"></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="total-like-block ms-2 me-3">
                                    <div class="dropdown">
                                       <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                       140 Likes
                                       </span>
                                       <div class="dropdown-menu">
                                          <a class="dropdown-item" href="#">Max Emum</a>
                                          <a class="dropdown-item" href="#">Bill Yerds</a>
                                          <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                          <a class="dropdown-item" href="#">Tara Misu</a>
                                          <a class="dropdown-item" href="#">Midge Itz</a>
                                          <a class="dropdown-item" href="#">Sal Vidge</a>
                                          <a class="dropdown-item" href="#">Other</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="total-comment-block">
                                 <div class="dropdown">
                                    <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                    20 Comment
                                    </span>
                                    <div class="dropdown-menu">
                                       <a class="dropdown-item" href="#">Max Emum</a>
                                       <a class="dropdown-item" href="#">Bill Yerds</a>
                                       <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                       <a class="dropdown-item" href="#">Tara Misu</a>
                                       <a class="dropdown-item" href="#">Midge Itz</a>
                                       <a class="dropdown-item" href="#">Sal Vidge</a>
                                       <a class="dropdown-item" href="#">Other</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                              <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn" class="d-flex align-items-center"><span class="material-symbols-outlined md-18">
                              share
                              </span>
                              <span class="ms-1">99 Share</span></a>
                           </div>
                        </div>
                        <hr>
                        <ul class="post-comments p-0 m-0">
                           <li class="mb-2">
                              <div class="d-flex flex-wrap">
                                 <div class="user-img">
                                    <img src="@/assets/images/user/02.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid" loading="lazy">
                                 </div>
                                 <div class="comment-data-block ms-3">
                                    <h6>Monty Carlo</h6>
                                    <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div class="d-flex flex-wrap align-items-center comment-activity">
                                       <a href="javascript:void(0);">like</a>
                                       <a href="javascript:void(0);">reply</a>
                                       <a href="javascript:void(0);">translate</a>
                                       <span> 5 min </span>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div class="d-flex flex-wrap">
                                 <div class="user-img">
                                    <img src="@/assets/images/user/03.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid" loading="lazy">
                                 </div>
                                 <div class="comment-data-block ms-3">
                                    <h6>Paul Molive</h6>
                                    <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div class="d-flex flex-wrap align-items-center comment-activity">
                                       <a href="javascript:void(0);">like</a>
                                       <a href="javascript:void(0);">reply</a>
                                       <a href="javascript:void(0);">translate</a>
                                       <span> 5 min </span>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                        <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                           <input type="text" class="form-control rounded">
                           <div class="comment-attagement d-flex align-items-center">
                              <a href="javascript:void(0);" class="material-symbols-outlined me-3 link">
                              insert_link
                              </a>
                              <a href="javascript:void(0);" class="material-symbols-outlined  me-3">
                              sentiment_satisfied
                              </a>
                              <a href="javascript:void(0);" class="material-symbols-outlined  me-3">
                              photo_camera
                              </a>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div class="card">
               <div class="card-body">
                  <div class="post-item">
                     <div class="user-post-data pb-3">
                        <div class="d-flex justify-content-between">
                           <div class="me-3">
                              <img class="rounded-circle  avatar-60" src="@/assets/images/user/05.jpg" alt="" loading="lazy">
                           </div>
                           <div class="w-100">
                              <div class="d-flex justify-content-between flex-wrap">
                                 <div class="">
                                    <h5 class="mb-0 d-inline-block"><a href="#" class="">Bni Cyst</a></h5>
                                    <p class="ms-1 mb-0 d-inline-block">Update his Status</p>
                                    <p class="mb-0">7 hour ago</p>
                                 </div>
                                 <div class="card-post-toolbar">
                                    <div class="dropdown">
                                       <span class="dropdown-toggle material-symbols-outlined" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                       more_horiz
                                       </span>
                                       <div class="dropdown-menu m-0 p-0">
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                save
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Save Post</h6>
                                                   <p class="mb-0">Add this to your saved items</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                cancel
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Hide Post</h6>
                                                   <p class="mb-0">See fewer posts like this.</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                person_remove
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Unfollow User</h6>
                                                   <p class="mb-0">Stop seeing posts but stay friends.</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a class="dropdown-item p-3" href="#">
                                             <div class="d-flex align-items-top">
                                                <span class="material-symbols-outlined">
                                                notifications
                                                </span>
                                                <div class="data ms-2">
                                                   <h6>Notifications</h6>
                                                   <p class="mb-0">Turn on notifications for this post</p>
                                                </div>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="user-post">
                        <div class=" d-grid grid-rows-2 grid-flow-col gap-3">
                           <div class="row-span-2 row-span-md-1">
                              <img src="@/assets/images/page-img/p2.jpg" alt="post-image" class="img-fluid rounded w-100" loading="lazy">
                           </div>
                           <div class="row-span-1">
                              <img src="@/assets/images/page-img/p1.jpg" alt="post-image" class="img-fluid rounded w-100" loading="lazy">
                           </div>
                           <div class="row-span-1 ">
                              <img src="@/assets/images/page-img/p3.jpg" alt="post-image" class="img-fluid rounded w-100" loading="lazy">
                           </div>
                        </div>
                     </div>
                     <div class="comment-area mt-3">
                        <div class="d-flex justify-content-between align-items-center">
                           <div class="like-block position-relative d-flex align-items-center">
                              <div class="d-flex align-items-center">
                                 <div class="like-data">
                                    <div class="dropdown">
                                       <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                       <img src="@/assets/images/icon/01.png" class="img-fluid" alt="">
                                       </span>
                                       <div class="dropdown-menu py-2 ">
                                          <a class="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="@/assets/images/icon/01.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="@/assets/images/icon/02.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="@/assets/images/icon/03.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="@/assets/images/icon/04.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="@/assets/images/icon/05.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Sade" ><img src="@/assets/images/icon/06.png" class="img-fluid" alt="" loading="lazy"></a>
                                          <a class="me-2" href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="@/assets/images/icon/07.png" class="img-fluid" alt="" loading="lazy"></a>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="total-like-block ms-2 me-3">
                                    <div class="dropdown">
                                       <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                       140 Likes
                                       </span>
                                       <div class="dropdown-menu">
                                          <a class="dropdown-item" href="#">Max Emum</a>
                                          <a class="dropdown-item" href="#">Bill Yerds</a>
                                          <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                          <a class="dropdown-item" href="#">Tara Misu</a>
                                          <a class="dropdown-item" href="#">Midge Itz</a>
                                          <a class="dropdown-item" href="#">Sal Vidge</a>
                                          <a class="dropdown-item" href="#">Other</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="total-comment-block">
                                 <div class="dropdown">
                                    <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                    20 Comment
                                    </span>
                                    <div class="dropdown-menu">
                                       <a class="dropdown-item" href="#">Max Emum</a>
                                       <a class="dropdown-item" href="#">Bill Yerds</a>
                                       <a class="dropdown-item" href="#">Hap E. Birthday</a>
                                       <a class="dropdown-item" href="#">Tara Misu</a>
                                       <a class="dropdown-item" href="#">Midge Itz</a>
                                       <a class="dropdown-item" href="#">Sal Vidge</a>
                                       <a class="dropdown-item" href="#">Other</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                              <a href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn" class="d-flex align-items-center"><span class="material-symbols-outlined md-18">
                              share
                              </span>
                              <span class="ms-1">99 Share</span></a>
                           </div>
                        </div>
                        <hr>
                        <ul class="post-comments p-0 m-0">
                           <li class="mb-2">
                              <div class="d-flex flex-wrap">
                                 <div class="user-img">
                                    <img src="@/assets/images/user/02.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                                 </div>
                                 <div class="comment-data-block ms-3">
                                    <h6>Monty Carlo</h6>
                                    <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div class="d-flex flex-wrap align-items-center comment-activity">
                                       <a href="javascript:void(0);">like</a>
                                       <a href="javascript:void(0);">reply</a>
                                       <a href="javascript:void(0);">translate</a>
                                       <span> 5 min </span>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div class="d-flex flex-wrap">
                                 <div class="user-img">
                                    <img src="@/assets/images/user/03.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                                 </div>
                                 <div class="comment-data-block ms-3">
                                    <h6>Paul Molive</h6>
                                    <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div class="d-flex flex-wrap align-items-center comment-activity">
                                       <a href="javascript:void(0);">like</a>
                                       <a href="javascript:void(0);">reply</a>
                                       <a href="javascript:void(0);">translate</a>
                                       <span> 5 min </span>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                        <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                           <input type="text" class="form-control rounded">
                           <div class="comment-attagement d-flex align-items-center">
                              <a href="javascript:void(0);" class="material-symbols-outlined me-3 link">
                              insert_link
                              </a>
                              <a href="javascript:void(0);" class="material-symbols-outlined  me-3">
                              sentiment_satisfied
                              </a>
                              <a href="javascript:void(0);" class="material-symbols-outlined  me-3">
                              photo_camera
                              </a>
                           </div>
                        </form>
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
export default {
  name: 'FriendProfile'
}
</script>
