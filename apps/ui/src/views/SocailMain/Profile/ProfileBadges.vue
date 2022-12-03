<template>
  <div class="row">
    <div class="col-sm-12">
        <iq-card>
          <div class="card-body profile-page p-0">
              <div class="profile-header profile-info">
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
                      <h3 class="">Paul Molive</h3>
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
    </div>
     <div class="col-lg-4 col-md-6 mt-5" v-for="(profile,index) in profiles" :key="index">
        <iq-card className="card-block card-stretch card-height">
          <template v-slot:body>
              <div class="badges text-start">
                <div class="badges-icon">
                    <img class="avatar-80 rounded" :src="profile.src" alt="">
                </div>
                <h5 class="mb-2 title">{{profile.name}}</h5>
                <p>{{profile.desc}}</p>
                <span class="text-uppercase">{{profile.date}}</span>
              </div>
          </template>
        </iq-card>
     </div>
  </div>
</template>
<script>
// import { socialvue } from '../../../config/pluginInit'
export default {
  name: 'ProfileBadges',
  mounted () {
    // socialvue.index()
  },
  components: {
  },
  data () {
    return {
      social: [
        require('../../../assets/images/icon/08.png'),
        require('../../../assets/images/icon/09.png'),
        require('../../../assets/images/icon/10.png'),
        require('../../../assets/images/icon/11.png'),
        require('../../../assets/images/icon/12.png'),
        require('../../../assets/images/icon/13.png')
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
      profiles: [
        {
          src: require('../../../assets/images/badges/01.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/02.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/03.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/04.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/05.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/06.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/07.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/08.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/09.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/10.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/11.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        },
        {
          src: require('../../../assets/images/badges/12.png'),
          name: 'Gold User',
          desc: 'Richard McClintock, a Latin professor consectetur.',
          date: 'Unlock Jan 15th, 2020'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
