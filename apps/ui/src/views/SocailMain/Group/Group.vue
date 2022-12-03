<template>
  <div class="container">

    <div class="d-grid gap-3 d-grid-template-1fr-19">
      <div class="card mb-0">
        <div class="top-bg-image">
          <img src="@/assets/images/page-img/profile-bg1.jpg" class="img-fluid w-100" alt="group-bg">
        </div>
        <div class="card-body text-center">
            <div class="group-icon">
                <img src="@/assets/images/page-img/gi-1.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
            </div>
            <div class="group-info pt-3 pb-3">
                <h4><router-link :to="{ name: 'social.group-detail'}">Designer</router-link></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                        <p class="mb-0">Post</p>
                        <h6>600</h6>
                    </li>
                    <li class="pe-3 ps-3">
                        <p class="mb-0">Member</p>
                        <h6>320</h6>
                    </li>
                    <li class="pe-3 ps-3">
                        <p class="mb-0">Visit</p>
                        <h6>1.2k</h6>
                    </li>
                </ul>
            </div>
            <div class="group-member mb-3">
                <div class="iq-media-group">
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
                </div>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">Join</button>
        </div>
      </div>
      <div class="card mb-0">
        <div class="top-bg-image">
            <img src="@/assets/images/page-img/profile-bg2.jpg" class="img-fluid w-100" alt="group-bg">
        </div>
        <div class="card-body text-center">
            <div class="group-icon">
                <img src="@/assets/images/page-img/gi-2.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
            </div>
            <div class="group-info pt-3 pb-3">
                <h4><router-link :to="{ name: 'social.group-detail'}">R & D</router-link></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Post</p>
                    <h6>300</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Member</p>
                    <h6>210</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Visit</p>
                    <h6>1.1k</h6>
                    </li>
                </ul>
            </div>
            <div class="group-member mb-3">
                <div class="iq-media-group">
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
                </div>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">Join</button>
        </div>
      </div>
      <div class="card mb-0">
        <div class="top-bg-image">
          <img src="@/assets/images/page-img/profile-bg3.jpg" class="img-fluid w-100" alt="group-bg">
        </div>
        <div class="card-body text-center">
            <div class="group-icon">
                <img src="@/assets/images/page-img/gi-3.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
            </div>
            <div class="group-info pt-3 pb-3">
                <h4><router-link :to="{ name: 'social.group-detail'}">Graphics</router-link></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Post</p>
                    <h6>320</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Member</p>
                    <h6>100</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Visit</p>
                    <h6>1.0k</h6>
                    </li>
                </ul>
            </div>
            <div class="group-member mb-3">
                <div class="iq-media-group">
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
                </div>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">Join</button>
        </div>
      </div>
      <div class="card mb-0">
        <div class="top-bg-image">
          <img src="@/assets/images/page-img/profile-bg4.jpg" class="img-fluid w-100" alt="group-bg">
        </div>
        <div class="card-body text-center">
            <div class="group-icon">
                <img src="@/assets/images/page-img/gi-4.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
            </div>
            <div class="group-info pt-3 pb-3">
                <h4><router-link :to="{ name: 'social.group-detail'}">Developer</router-link></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Post</p>
                    <h6>800</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Member</p>
                    <h6>480</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Visit</p>
                    <h6>2.2k</h6>
                    </li>
                </ul>
            </div>
            <div class="group-member mb-3">
                <div class="iq-media-group">
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
                </div>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">Join</button>
        </div>
      </div>
      <div class="card mb-0">
        <div class="top-bg-image">
          <img src="@/assets/images/page-img/profile-bg5.jpg" class="img-fluid w-100" alt="group-bg">
        </div>
        <div class="card-body text-center">
            <div class="group-icon">
                <img src="@/assets/images/page-img/gi-5.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
            </div>
            <div class="group-info pt-3 pb-3">
                  <h4><router-link :to="{ name: 'social.group-detail'}">Tester</router-link></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Post</p>
                    <h6>200</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Member</p>
                    <h6>100</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Visit</p>
                    <h6>32</h6>
                    </li>
                </ul>
            </div>
            <div class="group-member mb-3">
                <div class="iq-media-group">
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
                </div>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">Join</button>
        </div>
      </div>
      <div class="card mb-0">
        <div class="top-bg-image">
          <img src="@/assets/images/page-img/profile-bg6.jpg" class="img-fluid w-100" alt="group-bg">
        </div>
        <div class="card-body text-center">
            <div class="group-icon">
                <img src="@/assets/images/page-img/gi-6.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
            </div>
            <div class="group-info pt-3 pb-3">
                <h4><router-link :to="{ name: 'social.group-detail'}">Events</router-link></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Post</p>
                    <h6>1000</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Member</p>
                    <h6>500</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Visit</p>
                    <h6>3.2k</h6>
                    </li>
                </ul>
            </div>
            <div class="group-member mb-3">
                <div class="iq-media-group">
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
                </div>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">Join</button>
        </div>
      </div>
      <div class="card">
        <div class="top-bg-image">
          <img src="@/assets/images/page-img/profile-bg7.jpg" class="img-fluid w-100" alt="group-bg">
        </div>
        <div class="card-body text-center">
            <div class="group-icon">
                <img src="@/assets/images/page-img/gi-7.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
            </div>
            <div class="group-info pt-3 pb-3">
                <h4><router-link :to="{ name: 'social.group-detail'}">Coder</router-link></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Post</p>
                    <h6>300</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Member</p>
                    <h6>220</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Visit</p>
                    <h6>25k</h6>
                    </li>
                </ul>
            </div>
            <div class="group-member mb-3">
                <div class="iq-media-group">
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
                </div>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">Join</button>
        </div>
      </div>
      <div class="card">
        <div class="top-bg-image">
          <img src="@/assets/images/page-img/profile-bg9.jpg" class="img-fluid w-100" alt="group-bg">
        </div>
        <div class="card-body text-center">
            <div class="group-icon">
                <img src="@/assets/images/page-img/gi-8.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
            </div>
            <div class="group-info pt-3 pb-3">
                <h4><router-link :to="{ name: 'social.group-detail'}">Themes</router-link></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Post</p>
                    <h6>1200</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Member</p>
                    <h6>800</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Visit</p>
                    <h6>3.2k</h6>
                    </li>
                </ul>
            </div>
            <div class="group-member mb-3">
                <div class="iq-media-group">
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
                </div>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">Join</button>
        </div>
      </div>
      <div class="card">
        <div class="top-bg-image">
          <img src="@/assets/images/page-img/profile-bg1.jpg" class="img-fluid w-100" alt="group-bg">
        </div>
        <div class="card-body text-center">
            <div class="group-icon">
                <img src="@/assets/images/page-img/gi-9.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
            </div>
            <div class="group-info pt-3 pb-3">
                <h4><router-link :to="{ name: 'social.group-detail'}">Review</router-link></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Post</p>
                    <h6>300</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Member</p>
                    <h6>1000</h6>
                    </li>
                    <li class="pe-3 ps-3">
                    <p class="mb-0">Visit</p>
                    <h6>4.5k</h6>
                    </li>
                </ul>
            </div>
            <div class="group-member mb-3">
                <div class="iq-media-group">
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
                </div>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">Join</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Group',
  data () {
    return {
      groupInfo: [
        {
          backgroundimg: require('../../../assets/images/page-img/profile-bg1.jpg'),
          groupimg: require('../../../assets/images/page-img/gi-1.jpg'),
          title: 'Designer',
          text: 'Lorem Ipsum data',
          otherinfo: [
            {
              info: 'post',
              value: '600'
            },
            {
              info: 'Member',
              value: '320'
            },
            {
              info: 'Visit',
              value: '1.2k'
            }
          ],
          groupMember: [
            require('../../../assets/images/user/05.jpg'),
            require('../../../assets/images/user/06.jpg'),
            require('../../../assets/images/user/07.jpg'),
            require('../../../assets/images/user/08.jpg'),
            require('../../../assets/images/user/09.jpg')
          ]
        },
        {
          backgroundimg: require('../../../assets/images/page-img/profile-bg2.jpg'),
          groupimg: require('../../../assets/images/page-img/gi-2.jpg'),
          title: 'R & D',
          text: 'Lorem Ipsum data',
          otherinfo: [
            {
              info: 'post',
              value: '300'
            },
            {
              info: 'Member',
              value: '210'
            },
            {
              info: 'Visit',
              value: '1.1k'
            }
          ],
          groupMember: [
            require('../../../assets/images/user/05.jpg'),
            require('../../../assets/images/user/06.jpg'),
            require('../../../assets/images/user/07.jpg'),
            require('../../../assets/images/user/08.jpg'),
            require('../../../assets/images/user/09.jpg')
          ]
        },
        {
          backgroundimg: require('../../../assets/images/page-img/profile-bg3.jpg'),
          groupimg: require('../../../assets/images/page-img/gi-3.jpg'),
          title: 'Graphics',
          text: 'Lorem Ipsum data',
          otherinfo: [
            {
              info: 'post',
              value: '320'
            },
            {
              info: 'Member',
              value: '310'
            },
            {
              info: 'Visit',
              value: '1.0k'
            }
          ],
          groupMember: [
            require('../../../assets/images/user/05.jpg'),
            require('../../../assets/images/user/06.jpg'),
            require('../../../assets/images/user/07.jpg'),
            require('../../../assets/images/user/08.jpg'),
            require('../../../assets/images/user/09.jpg')
          ]
        },
        {
          backgroundimg: require('../../../assets/images/page-img/profile-bg4.jpg'),
          groupimg: require('../../../assets/images/page-img/gi-4.jpg'),
          title: 'Developer',
          text: 'Lorem Ipsum data',
          otherinfo: [
            {
              info: 'post',
              value: '1000'
            },
            {
              info: 'Member',
              value: '10000'
            },
            {
              info: 'Visit',
              value: '1.5k'
            }
          ],
          groupMember: [
            require('../../../assets/images/user/05.jpg'),
            require('../../../assets/images/user/06.jpg'),
            require('../../../assets/images/user/07.jpg'),
            require('../../../assets/images/user/08.jpg'),
            require('../../../assets/images/user/09.jpg')
          ]
        },
        {
          backgroundimg: require('../../../assets/images/page-img/profile-bg5.jpg'),
          groupimg: require('../../../assets/images/page-img/gi-5.jpg'),
          title: 'Tester',
          text: 'Lorem Ipsum data',
          otherinfo: [
            {
              info: 'post',
              value: '600'
            },
            {
              info: 'Member',
              value: '320'
            },
            {
              info: 'Visit',
              value: '1.2k'
            }
          ],
          groupMember: [
            require('../../../assets/images/user/05.jpg'),
            require('../../../assets/images/user/06.jpg'),
            require('../../../assets/images/user/07.jpg'),
            require('../../../assets/images/user/08.jpg'),
            require('../../../assets/images/user/09.jpg')
          ]
        },
        {
          backgroundimg: require('../../../assets/images/page-img/profile-bg6.jpg'),
          groupimg: require('../../../assets/images/page-img/gi-6.jpg'),
          title: 'Events',
          text: 'Lorem Ipsum data',
          otherinfo: [
            {
              info: 'post',
              value: '200'
            },
            {
              info: 'Member',
              value: '200'
            },
            {
              info: 'Visit',
              value: '1.2k'
            }
          ],
          groupMember: [
            require('../../../assets/images/user/05.jpg'),
            require('../../../assets/images/user/06.jpg'),
            require('../../../assets/images/user/07.jpg'),
            require('../../../assets/images/user/08.jpg'),
            require('../../../assets/images/user/09.jpg')
          ]
        },
        {
          backgroundimg: require('../../../assets/images/page-img/profile-bg7.jpg'),
          groupimg: require('../../../assets/images/page-img/gi-7.jpg'),
          title: 'Coder',
          text: 'Lorem Ipsum data',
          otherinfo: [
            {
              info: 'post',
              value: '300'
            },
            {
              info: 'Member',
              value: '200'
            },
            {
              info: 'Visit',
              value: '1.4k'
            }
          ],
          groupMember: [
            require('../../../assets/images/user/05.jpg'),
            require('../../../assets/images/user/06.jpg'),
            require('../../../assets/images/user/07.jpg'),
            require('../../../assets/images/user/08.jpg'),
            require('../../../assets/images/user/09.jpg')
          ]
        },
        {
          backgroundimg: require('../../../assets/images/page-img/profile-bg8.jpg'),
          groupimg: require('../../../assets/images/page-img/gi-8.jpg'),
          title: 'Themes',
          text: 'Lorem Ipsum data',
          otherinfo: [
            {
              info: 'post',
              value: '800'
            },
            {
              info: 'Member',
              value: '100'
            },
            {
              info: 'Visit',
              value: '1.2k'
            }
          ],
          groupMember: [
            require('../../../assets/images/user/05.jpg'),
            require('../../../assets/images/user/06.jpg'),
            require('../../../assets/images/user/07.jpg'),
            require('../../../assets/images/user/08.jpg'),
            require('../../../assets/images/user/09.jpg')
          ]
        },
        {
          backgroundimg: require('../../../assets/images/page-img/profile-bg9.jpg'),
          groupimg: require('../../../assets/images/page-img/gi-9.jpg'),
          title: 'Review',
          text: 'Lorem Ipsum data',
          otherinfo: [
            {
              info: 'post',
              value: '1200'
            },
            {
              info: 'Member',
              value: '1000'
            },
            {
              info: 'Visit',
              value: '1.2k'
            }
          ],
          groupMember: [
            require('../../../assets/images/user/05.jpg'),
            require('../../../assets/images/user/06.jpg'),
            require('../../../assets/images/user/07.jpg'),
            require('../../../assets/images/user/08.jpg'),
            require('../../../assets/images/user/09.jpg')
          ]
        }
      ]
    }
  }
}
</script>
