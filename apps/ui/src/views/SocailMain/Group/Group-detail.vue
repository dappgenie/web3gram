<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                <div class="group-info d-flex align-items-center">
                    <div class="me-3">
                        <img class="rounded-circle img-fluid avatar-100" src="@/assets/images/page-img/gi-1.jpg" alt="">
                    </div>
                    <div class="info">
                        <h4>Developer's...</h4>
                        <p class="mb-0"><i class="ri-lock-fill pe-2"></i>Private Group . 323 members</p>
                    </div>
                </div>
                <div class="group-member d-flex align-items-center  mt-md-0 mt-2">
                    <div class="iq-media-group me-3">
                        <a href="#" class="iq-media">
                        <img class="img-fluid avatar-40 rounded-circle" src="@/assets/images/user/05.jpg" alt="">
                        </a>
                        <a href="#" class="iq-media">
                        <img class="img-fluid avatar-40 rounded-circle" src="@/assets/images/user/06.jpg" alt="">
                        </a>
                        <a href="#" class="iq-media">
                        <img class="img-fluid avatar-40 rounded-circle" src="@/assets/images/user/07.jpg" alt="">
                        </a>
                        <a href="#" class="iq-media">
                        <img class="img-fluid avatar-40 rounded-circle" src="@/assets/images/user/08.jpg" alt="">
                        </a>
                        <a href="#" class="iq-media">
                        <img class="img-fluid avatar-40 rounded-circle" src="@/assets/images/user/09.jpg" alt="">
                        </a>
                        <a href="#" class="iq-media">
                        <img class="img-fluid avatar-40 rounded-circle" src="@/assets/images/user/10.jpg" alt="">
                        </a>
                        <a href="#" class="iq-media">
                        <img class="img-fluid avatar-40 rounded-circle" src="@/assets/images/user/11.jpg" alt="">
                        </a>
                        <a href="#" class="iq-media">
                        <img class="img-fluid avatar-40 rounded-circle" src="@/assets/images/user/12.jpg" alt="">
                        </a>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2"><i class="ri-add-line me-1"></i>Invite</button>
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
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="user-img">
                        <img src="@/assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle">
                        </div>
                        <form class="post-text ms-3 w-100 "  data-bs-toggle="modal" data-bs-target="#post-modal" action="javascript:void();">
                        <input type="text" class="form-control rounded" placeholder="Write something here..." style="border:none;">
                        </form>
                    </div>
                    <hr>
                    <ul class=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                        <li class="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src="@/assets/images/small/07.png" alt="icon" class="img-fluid me-2"> Photo/Video</li>
                        <li class="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src="@/assets/images/small/08.png" alt="icon" class="img-fluid me-2"> Tag Friend</li>
                        <li class="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3"><img src="@/assets/images/small/09.png" alt="icon" class="img-fluid me-2"> Feeling/Activity</li>
                        <li class="bg-soft-primary rounded p-2 pointer text-center">
                            <div class="card-header-toolbar d-flex align-items-center">
                            <div class="dropdown">
                                <div class="dropdown-toggle" id="post-option"   data-bs-toggle="dropdown">
                                    <i class="material-symbols-outlined">more_horiz</i>
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
                        <div class="modal-dialog   modal-fullscreen-sm-down">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="post-modalLabel">Create Post</h5>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="ri-close-fill"></i></button>
                            </div>
                            <div class="modal-body">
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
                                <button type="submit" class="btn btn-primary d-block w-100 mt-3">Post</button>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="post-item">
                        <div class="user-post-data py-3">
                            <div class="d-flex justify-content-between">
                                <div class=" me-3">
                                    <img class="rounded-circle img-fluid" src="@/assets/images/user/04.jpg" alt="">
                                </div>
                                <div class="w-100">
                                    <div class="d-flex justify-content-between">
                                        <div class="">
                                            <h5 class="mb-0 d-inline-block"><a href="#" class="">Paige Turner</a></h5>
                                            <p class="mb-0">8 hour ago</p>
                                        </div>
                                        <div class="card-post-toolbar">
                                            <div class="dropdown">
                                                <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                                    <i class="material-symbols-outlined">more_horiz</i>
                                                </span>
                                                <div class="dropdown-menu m-0 p-0">
                                                    <a class="dropdown-item p-3" href="#">
                                                        <div class="d-flex align-items-top">
                                                        <i class="ri-save-line h4"></i>
                                                        <div class="data ms-2">
                                                            <h6>Save Post</h6>
                                                            <p class="mb-0">Add this to your saved items</p>
                                                        </div>
                                                        </div>
                                                    </a>
                                                    <a class="dropdown-item p-3" href="#">
                                                        <div class="d-flex align-items-top">
                                                            <i class="ri-pencil-line h4"></i>
                                                        <div class="data ms-2">
                                                            <h6>Edit Post</h6>
                                                            <p class="mb-0">Update your post and saved items</p>
                                                        </div>
                                                        </div>
                                                    </a>
                                                    <a class="dropdown-item p-3" href="#">
                                                        <div class="d-flex align-items-top">
                                                            <i class="ri-close-circle-line h4"></i>
                                                        <div class="data ms-2">
                                                            <h6>Hide From Timeline</h6>
                                                            <p class="mb-0">See fewer posts like this.</p>
                                                        </div>
                                                        </div>
                                                    </a>
                                                    <a class="dropdown-item p-3" href="#">
                                                        <div class="d-flex align-items-top">
                                                            <i class="ri-delete-bin-7-line h4"></i>
                                                        <div class="data ms-2">
                                                            <h6>Delete</h6>
                                                            <p class="mb-0">Remove thids Post on Timeline</p>
                                                        </div>
                                                        </div>
                                                    </a>
                                                    <a class="dropdown-item p-3" href="#">
                                                        <div class="d-flex align-items-top">
                                                            <i class="ri-notification-line h4"></i>
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
                            <a href="javascript:void();"><img src="@/assets/images/page-img/52.jpg" alt="post-image" class="img-fluid w-100" /></a>
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
                                    <div class="d-flex">
                                        <div class="user-img">
                                        <img src="@/assets/images/user/02.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                                        </div>
                                        <div class="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                        </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="user-img">
                                        <img src="@/assets/images/user/03.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                                        </div>
                                        <div class="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                        </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" class="form-control rounded" placeholder="Enter Your Comment">
                                <div class="comment-attagement d-flex">
                                    <a href="javascript:void();"><i class="ri-link me-3"></i></a>
                                    <a href="javascript:void();"><i class="ri-user-smile-line me-3"></i></a>
                                    <a href="javascript:void();"><i class="ri-camera-line me-3"></i></a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="post-item">
                        <div class="user-post-data py-3">
                            <div class="d-flex justify-content-between">
                            <div class="media-support-user-img me-3">
                                <img class="rounded-circle img-fluid" src="@/assets/images/user/01.jpg" alt="">
                            </div>
                            <div class="w-100">
                                <div class="d-flex justify-content-between">
                                    <div class="">
                                        <h5 class="mb-0 d-inline-block me-1"><a href="#" class="">Pete Sariya</a></h5>
                                        <p class=" mb-0 d-inline-block">Update his Status</p>
                                        <p class="mb-0">7 hour ago</p>
                                    </div>
                                    <div class="card-post-toolbar">
                                        <div class="dropdown">
                                            <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                                <i class="material-symbols-outlined">more_horiz</i>
                                            </span>
                                            <div class="dropdown-menu m-0 p-0">
                                                <a class="dropdown-item p-3" href="#">
                                                    <div class="d-flex align-items-top">
                                                        <i class="ri-save-line h4"></i>
                                                    <div class="data ms-2">
                                                        <h6>Save Post</h6>
                                                        <p class="mb-0">Add this to your saved items</p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a class="dropdown-item p-3" href="#">
                                                    <div class="d-flex align-items-top">
                                                    <i class="ri-pencil-line h4"></i>
                                                    <div class="data ms-2">
                                                        <h6>Edit Post</h6>
                                                        <p class="mb-0">Update your post and saved items</p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a class="dropdown-item p-3" href="#">
                                                    <div class="d-flex align-items-top">
                                                    <i class="ri-close-circle-line h4"></i>
                                                    <div class="data ms-2">
                                                        <h6>Hide From Timeline</h6>
                                                        <p class="mb-0">See fewer posts like this.</p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a class="dropdown-item p-3" href="#">
                                                    <div class="d-flex align-items-top">
                                                    <i class="ri-delete-bin-7-line h4"></i>
                                                    <div class="data ms-2">
                                                        <h6>Delete</h6>
                                                        <p class="mb-0">Remove thids Post on Timeline</p>
                                                    </div>
                                                    </div>
                                                </a>
                                                <a class="dropdown-item p-3" href="#">
                                                    <div class="d-flex align-items-top">
                                                    <i class="ri-notification-line h4"></i>
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
                            <a href="javascript:void();"><img src="@/assets/images/page-img/60.jpg" alt="post-image" class="img-fluid w-100" /></a>
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
                                    <div class="d-flex ">
                                        <div class="user-img">
                                        <img src="@/assets/images/user/02.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                                        </div>
                                        <div class="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                        </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex ">
                                        <div class="user-img">
                                        <img src="@/assets/images/user/03.jpg" alt="userimg" class="avatar-35 rounded-circle img-fluid">
                                        </div>
                                        <div class="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p class="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                            <a href="javascript:void();">like</a>
                                            <a href="javascript:void();">reply</a>
                                            <a href="javascript:void();">translate</a>
                                            <span> 5 min </span>
                                        </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <form class="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" class="form-control rounded" placeholder="Enter Your Comment">
                                <div class="comment-attagement d-flex">
                                    <a href="javascript:void();"><i class="ri-link me-3"></i></a>
                                    <a href="javascript:void();"><i class="ri-user-smile-line me-3"></i></a>
                                    <a href="javascript:void();"><i class="ri-camera-line me-3"></i></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Groups</h4>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-inline p-0 m-0">
                        <li class="mb-3 pb-3 border-bottom">
                            <div class="iq-search-bar members-search p-0">
                                <form action="#" class="searchbox w-auto">
                                    <input type="text" class="text search-input bg-grey bg-soft-primary" placeholder="Type here to search...">
                                    <a class="search-link" href="#"><i class="material-symbols-outlined">search</i></a>
                                </form>
                            </div>
                        </li>
                        <li class="mb-3 d-flex align-items-center">
                            <div class="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                                <i class="material-symbols-outlined">credit_card</i>
                            </div>
                                <h6 class="mb-0">Your Feed</h6>
                        </li>
                        <li class="mb-3 d-flex align-items-center">
                            <div class="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                                <i class="material-symbols-outlined">explore</i>
                            </div>
                                <h6 class="mb-0">Discover</h6>
                        </li>
                        <li>
                            <button type="submit" class="btn btn-primary d-flex align-items-center d-block w-100">
                                <i class="material-symbols-outlined me-2">add</i>
                                Create New Group
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">About</h4>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-inline p-0 m-0">
                        <li class="mb-3">
                            <p class="mb-0">Developer's Group...</p>
                        </li>
                        <li class="mb-3">
                        <div class="d-flex">
                            <div class="flex-shrink-0">
                                <i class="material-symbols-outlined">lock</i>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6>Private</h6>
                                <p class="mb-0">Success in slowing economic activity.</p>
                            </div>
                        </div>
                        </li>
                        <li class="mb-3">
                            <div class="d-flex">
                                <div class="flex-shrink-0">
                                    <i class="material-symbols-outlined">visibility</i>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6>Visible</h6>
                                    <p class="mb-0">Various versions have evolved over the years</p>
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <div class="d-flex">
                                <div class="flex-shrink-0">
                                    <i class="material-symbols-outlined">group</i>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                <h6>General group</h6>
                                <p class="mb-0">There are many variations of passages</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Group-detail',
  data () {
    return {
      header2: [
        require('../../../assets/images/user/05.jpg'),
        require('../../../assets/images/user/06.jpg'),
        require('../../../assets/images/user/07.jpg'),
        require('../../../assets/images/user/08.jpg'),
        require('../../../assets/images/user/09.jpg'),
        require('../../../assets/images/user/10.jpg'),
        require('../../../assets/images/user/11.jpg'),
        require('../../../assets/images/user/12.jpg')
      ],
      headerTitle: [
        {
          hname: "Devloper's...",
          ttext: 'Private Group . 323 members'

        }
      ],
      header1: [
        {
          b1: 'Invite'
        }
      ]
    }
  }
}
</script>
