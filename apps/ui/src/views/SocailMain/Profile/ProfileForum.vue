<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
          <iq-card>
            <div class="card-body profile-page p-0">
              <div class="profile-header">
                <div class="position-relative">
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
                <div class="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
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
      <div class="col-lg-12">
        <!-- <div class="tab-content forum-content"> -->
          <!-- <div class="tab-pane fade active show" id="topicstart" role="tabpanel"> -->

            <iq-card>
              <div class="card-body p-0">
                <div class="user-tabing p-3">
                  <div class="d-flex flex-wrap align-items-center justify-content-between">
                    <ul class="nav nav-pills d-flex align-items-center text-center profile-forum-items p-0 m-0 w-75">
                      <li v-for="(tab,index) in tabs" :key="index" class="col-sm-3 p-0">
                        <a :class="tab.classname" data-bs-toggle="pill" :href="tab.link">{{tab.title}}</a>
                      </li>
                    </ul>
                    <button type="submit" class="btn btn-primary">Apply Filter</button>
                  </div>
                </div>
              </div>
            </iq-card>
          <!-- </div> -->
        <!-- </div> -->
      </div>
      <div class="col-sm-12">
        <div class="tab-content forum-content">
          <div class="tab-pane fade active show" id="topicstart" role="tabpanel">
            <iq-card >
              <template v-slot:body > 
                <div class="table-responsive">
                  <table class="table forum-table mb-0 rounded">
                    <thead class="bg-primary text-white">
                      <tr>
                        <th>Activity</th>
                        <th>Voices</th>
                        <th>Replies</th>
                        <th>Discussion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(start,index) in started" :key="index" class="mb-4">
                        <td class="col-lg-4">
                          <div class="d-flex align-items-center">
                            <img class="img-fluid rounded-circle avatar-40" :src="start.src" alt="">
                            <div class="media-body ms-3">
                              <h6 class="mb-0"><a href="#">{{start.name}}</a></h6>
                              <p class="mb-0">{{start.date}},{{start.dis2}}</p>
                            </div>
                          </div>
                        </td>
                          <td class="col-lg-2 h6">{{start.voices}}</td>
                          <td class="col-lg-2 h6">{{start.replies}}</td>
                          <td class="col-lg-4">
                              <h6>{{start.desc}}</h6>
                              <p class="mb-0"><span class="text-dark me-2">{{start.name}}</span>{{start.dis2}}<span class="text-primary"> {{start.dis3}}</span></p>
                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
            </iq-card>
          </div>
          <div class="tab-pane fade" id="replies" role="tabpanel">
            <iq-card>
              <template v-slot:body>
                <div class="table-responsive">
                  <table class="table forum-table mb-0 rounded">
                    <thead class="bg-primary text-white">
                      <tr>
                        <th>Activity</th>
                        <th>Voices</th>
                        <th>Replies</th>
                        <th>Discussion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(start,index) in replies" :key="index" class="mb-4">
                        <td class="col-lg-4">
                          <div class="d-flex align-items-center">
                            <img class="img-fluid rounded-circle avatar-40" :src="start.src" alt="">
                            <div class="media-body ms-3">
                              <h6 class="mb-0"><a href="#">{{start.name}}</a></h6>
                              <p class="mb-0">{{start.date}},{{start.dis2}}</p>
                            </div>
                          </div>
                        </td>
                          <td class="col-lg-2 h6">{{start.voices}}</td>
                          <td class="col-lg-2 h6">{{start.replies}}</td>
                          <td class="col-lg-4">
                              <h6>{{start.desc}}</h6>
                              <p class="mb-0"><span class="text-dark me-2">{{start.name}}</span>{{start.dis2}}<span class="text-primary"> {{start.dis3}}</span></p>
                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
            </iq-card>
          </div>
          <div class="tab-pane fade" id="likedtopic" role="tabpanel">
            <iq-card>
              <template v-slot:body>
                <div class="table-responsive">
                  <table class="table forum-table mb-0 rounded">
                    <thead class="bg-primary text-white">
                      <tr>
                        <th>Activity</th>
                        <th>Voices</th>
                        <th>Replies</th>
                        <th>Discussion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(start,index) in topics" :key="index" class="mb-4">
                        <td class="col-lg-4">
                          <div class="d-flex align-items-center">
                            <img class="img-fluid rounded-circle avatar-40" :src="start.src" alt="">
                            <div class="media-body ms-3">
                              <h6 class="mb-0"><a href="#">{{start.name}}</a></h6>
                              <p class="mb-0">{{start.date}},{{start.dis2}}</p>
                            </div>
                          </div>
                        </td>
                          <td class="col-lg-2 h6">{{start.voices}}</td>
                          <td class="col-lg-2 h6">{{start.replies}}</td>
                          <td class="col-lg-4">
                              <h6>{{start.desc}}</h6>
                              <p class="mb-0"><span class="text-dark me-2">{{start.name}}</span>{{start.dis2}}<span class="text-primary"> {{start.dis3}}</span></p>
                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
            </iq-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { socialvue } from '../../../config/pluginInit'
export default {
  name: 'ProfileForum',
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
      tabs: [
        {
          classname: 'nav-link active',
          link: '#topicstart',
          title: 'Topic Started'
        },
        {
          classname: 'nav-link',
          link: '#replies',
          title: 'My Replies'
        },
        {
          classname: 'nav-link ',
          link: '#likedtopic',
          title: 'Liked Topics'
        }
      ],
      started: [
        {
          src: require('../../../assets/images/user/08.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/09.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/05.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/01.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/06.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/07.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/02.jpg'),
          name: 'Anna Mull',
          date: '3 hours',
          voices: '10',
          replies: '8',
          desc: 'There are many variations of passages.',
          dis2: '20 minutes ago ',
          dis3: '- Community Hangout'
        },
        {
          src: require('../../../assets/images/user/03.jpg'),
          name: 'Terry Aki',
          date: '3 hours',
          voices: '8',
          replies: '8',
          desc: 'There are many variations of passages.',
          dis2: '18 minutes ago ',
          dis3: '- Community'
        },
        {
          src: require('../../../assets/images/user/04.jpg'),
          name: 'Alex Jhon',
          date: '2 hours',
          voices: '7',
          replies: '6',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/05.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        }
      ],
      replies: [
        {
          src: require('../../../assets/images/user/01.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/02.jpg'),
          name: 'Anna Mull',
          date: '3 hours',
          voices: '10',
          replies: '8',
          desc: 'There are many variations of passages.',
          dis2: '20 minutes ago ',
          dis3: '- Community Hangout'
        },
        {
          src: require('../../../assets/images/user/03.jpg'),
          name: 'Terry Aki',
          date: '3 hours',
          voices: '8',
          replies: '8',
          desc: 'There are many variations of passages.',
          dis2: '18 minutes ago ',
          dis3: '- Community'
        },
        {
          src: require('../../../assets/images/user/04.jpg'),
          name: 'Alex Jhon',
          date: '2 hours',
          voices: '7',
          replies: '6',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/05.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/06.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/07.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/08.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/09.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/05.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        }
      ],
      topics: [
        {
          src: require('../../../assets/images/user/02.jpg'),
          name: 'Anna Mull',
          date: '3 hours',
          voices: '10',
          replies: '8',
          desc: 'There are many variations of passages.',
          dis2: '20 minutes ago ',
          dis3: '- Community Hangout'
        },
        {
          src: require('../../../assets/images/user/01.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/03.jpg'),
          name: 'Terry Aki',
          date: '3 hours',
          voices: '8',
          replies: '8',
          desc: 'There are many variations of passages.',
          dis2: '18 minutes ago ',
          dis3: '- Community'
        },
        {
          src: require('../../../assets/images/user/04.jpg'),
          name: 'Alex Jhon',
          date: '2 hours',
          voices: '7',
          replies: '6',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/05.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/06.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/07.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/08.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/09.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        },
        {
          src: require('../../../assets/images/user/05.jpg'),
          name: 'Bearded Wonder',
          date: '3 hours',
          voices: '12',
          replies: '3',
          desc: 'There are many variations of passages.',
          dis2: '22 minutes ago ',
          dis3: '- Comics'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
