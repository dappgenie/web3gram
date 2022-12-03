<template>
    <div class="row">
      <div class="col-md-3">
        <tab-nav :pills="true" id="tab" class="nav nav-pills basic-info-items list-inline d-block p-0 m-0" >
          <tab-nav-items :active="true" id="pills-contact-info" href="#contact-info" ariaControls="pills-contact-info" role="tab" :ariaSelected="true" title="Contact and Basic Info" />
          <tab-nav-items :active="false" id="pills-about-info" href="#about-info" ariaControls="pills-about-info" role="tab" :ariaSelected="true" title="Hobbies and Interests" />
          <tab-nav-items :active="false" id="pills-family-info" href="#family-info" ariaControls="pills-family-info" role="tab" :ariaSelected="true" title="Family and Relationship" />
          <tab-nav-items :active="false" id="pills-work-info" href="#work-info" ariaControls="pills-work-info" role="tab" :ariaSelected="true" title="Work and Education" />
          <tab-nav-items :active="false" id="pills-address-info" href="#address-info" ariaControls="pills-address-info" role="tab" :ariaSelected="true" title="Places You've Lived" />
        </tab-nav>
      </div>
      <div class="col-md-9">
        <div class="tab-content">
          
          <tab-content-item :active="true" id="contact-info" aria-labelled-by="pills-contact-info">
            <h4>Contact Information</h4>
            <hr>
            <div class="row mb-2">
                                    <div class="col-3">
                                       <h6>About Me:</h6>
                                    </div>
                                    <div class="col-9">
                                       <p class="mb-0">Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56</p>
                                    </div>
                                 </div>
            <div class="row">
              <div class="col-3">
                <h6>Email</h6>
              </div>
              <div class="col-9">
                <p class="mb-0">Bnijohn@gmail.com</p>
              </div>
              <div class="col-3">
                <h6>Mobile</h6>
              </div>
              <div class="col-9">
                <p class="mb-0">(001) 4544 565 456</p>
              </div>
              <div class="col-3">
                <h6>Address</h6>
              </div>
              <div class="col-9">
                <p class="mb-0">United States of America</p>
              </div>
            </div>
            <h4 class="mt-3">Websites and Social Links</h4>
            <hr>
            <div class="row">
              <div class="col-3">
                <h6>Website</h6>
              </div>
              <div class="col-9">
                <p class="mb-0">www.bootstrap.com</p>
              </div>
              <div class="col-3">
                <h6>Social Link</h6>
              </div>
              <div class="col-9">
                <p class="mb-0">www.bootstrap.com</p>
              </div>
            </div>
            <h4 class="mt-3">Basic Information</h4>
            <hr>
            <div class="row">
              <div class="col-3">
                <h6>Birth Date</h6>
              </div>
              <div class="col-9">
                <p class="mb-0">24 January</p>
              </div>
              <div class="col-3">
                <h6>Birth Year</h6>
              </div>
              <div class="col-9">
                <p class="mb-0">1994</p>
              </div>
              <div class="col-3">
                <h6>Gender</h6>
              </div>
              <div class="col-9">
                <p class="mb-0">Female</p>
              </div>
              <div class="col-3">
                <h6>interested in</h6>
              </div>
              <div class="col-9">
                <p class="mb-0">Designing</p>
              </div>
              <div class="col-3">
                <h6>language</h6>
              </div>
              <div class="col-9">
                <p class="mb-0">English, French</p>
              </div>
            </div>
          </tab-content-item>

          <tab-content-item :active="false" id="family-info" aria-labelled-by="pills-family-info">
            <h4 class="mb-3">Relationship</h4>
            <ul class="suggestions-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><span class="material-symbols-outlined md-18">
                                          add
                                          </span></div>
                <div class="media-support-info mS-3">
                  <h6>Add Your Relationship Status</h6>
                </div>
              </li>
            </ul>
            <h4 class="mt-3 mb-3">Family Members</h4>
            <ul class="suggestions-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><span class="material-symbols-outlined md-18">
                                          add
                                          </span></div>
                <div class="media-support-info ms-3">
                  <h6>Add Family Members</h6>
                </div>
              </li>
              <li class="d-flex mb-4 align-items-center justify-content-between"  v-for="(item,index) in friend" :key="index">
                <div class="user-img img-fluid"><img :src="item.img" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="w-100">
                  <div class="d-flex justify-content-between">
                      <div class="ms-3">
                        <h6>{{item.name}}</h6>
                        <p class="mb-0">{{item.name}}</p>
                      </div>
                      <div class="edit-relation"><a href="#" class="d-flex align-items-center"><span class="material-symbols-outlined me-2 md-18">
                        edit
                        </span>Edit</a>
                      </div>
                  </div>
                </div>
              </li>
            </ul>
          </tab-content-item>
          <tab-content-item :active="false" id="work-info" aria-labelled-by="pills-work-info">
            <h4 class="mb-3">Work</h4>
            <ul class="suggestions-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><span class="material-symbols-outlined md-18">
                                          add
                                          </span></div>
                <div class="media-support-info ms-3">
                  <h6>Add Work Place</h6>
                </div>
              </li>
              <li class="d-flex mb-4 align-items-center justify-content-between" v-for="(work,index) in work" :key="index">
                <div class="user-img img-fluid"><img :src="work.img" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="w-100">
                  <div class="d-flex justify-content-between">
                      <div class="ms-3">
                        <h6>{{work.name}}</h6>
                        <p class="mb-0">{{work.dec}}</p>
                      </div>
                      <div class="edit-relation"><a href="#" class="d-flex align-items-center"><span class="material-symbols-outlined me-2 md-18">
                        edit
                        </span>Edit</a>
                      </div>
                  </div>
                </div>
              </li>
            </ul>
            <h4 class="mb-3">Professional Skills</h4>
            <ul class="suggestions-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><span class="material-symbols-outlined md-18">
                                          add
                                          </span></div>
                <div class="media-support-info ms-3">
                  <h6>Add Professional Skills</h6>
                </div>
              </li>
            </ul>
            <h4 class="mt-3 mb-3">College</h4>
            <ul class="suggestions-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><span class="material-symbols-outlined md-18">
                                          add
                                          </span></div>
                <div class="media-support-info ms-3">
                  <h6>Add College</h6>
                </div>
              </li>
              <li class="d-flex mb-4 align-items-center justify-content-between">
                <div class="user-img img-fluid"><img src="../../../../assets/images/user/01.jpg" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="w-100">
                  <div class="d-flex justify-content-between">
                      <div class="ms-3">
                        <h6>Lorem ipsum</h6>
                        <p class="mb-0">USA</p>
                      </div>
                      <div class="edit-relation"><a href="#" class="d-flex align-items-center"><span class="material-symbols-outlined me-2 md-18">
                        edit
                        </span>Edit</a>
                      </div>
                  </div>
                </div>
              </li>
            </ul>
          </tab-content-item>
          <tab-content-item :active="false" id="address-info" aria-labelled-by="pills-address-info">
            <h4 class="mb-3">Current City and Hometown</h4>
            <ul class="suggestions-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center justify-content-between">
                <div class="user-img img-fluid"><img src="../../../../assets/images/user/01.jpg" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="w-100">
                  <div class="d-flex justify-content-between">
                      <div class="ms-3">
                        <h6>Georgia</h6>
                        <p class="mb-0">Georgia State</p>
                      </div>
                      <div class="edit-relation"><a href="#" class="d-flex align-items-center"><span class="material-symbols-outlined me-2 md-18">
                        edit
                        </span>Edit</a>
                      </div>
                  </div>
                </div>
              </li>
              <li class="d-flex mb-4 align-items-center justify-content-between">
                <div class="user-img img-fluid"><img src="../../../../assets/images/user/02.jpg" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="w-100">
                  <div class="d-flex justify-content-between">
                      <div class="ms-3">
                        <h6>Atlanta</h6>
                        <p class="mb-0">Atlanta State</p>
                      </div>
                      <div class="edit-relation"><a href="#" class="d-flex align-items-center"><span class="material-symbols-outlined me-2 md-18">
                        edit
                        </span>Edit</a>
                      </div>
                  </div>
                </div>
              </li>
            </ul>
            <h4 class="mt-3 mb-3">Other Places Lived</h4>
            <ul class="suggestions-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center">
                <div class="user-img img-fluid"><span class="material-symbols-outlined md-18">
                                          add
                                          </span></div>
                <div class="media-support-info ms-3">
                  <h6>Add Place</h6>
                </div>
              </li>
            </ul>
          </tab-content-item>
          <tab-content-item :active="false" id="about-info" aria-labelled-by="pills-about-info">
            <h4 class="mt-2">Hobbies and Interests</h4>
            <hr>
            <h6 class="mb-1">Hobbies:</h6>
            <p>Hi, I’m Bni, I’m 26 and I work as a Web Designer for the iqonicdesign.I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.</p>
            <h6 class="mt-2 mb-1">Favourite TV Shows:</h6>
            <p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
            <h6 class="mt-2 mb-1">Favourite Movies:</h6>
            <p>Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad, Ferrum Man.</p>
            <h6 class="mt-2 mb-1">Favourite Games:</h6>
            <p>The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.</p>
            <h6 class="mt-2 mb-1">Favourite Music Bands / Artists:</h6>
            <p>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</p>
            <h6 class="mt-2 mb-1">Favourite Books:</h6>
            <p>The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</p>
            <h6 class="mt-2 mb-1">Favourite Writers:</h6>
            <p>Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandria Platt, Marcus Roth.</p>
          </tab-content-item>
        </div>
      </div>
    </div>
</template>
<script>
// import { socialvue } from '../../../../config/pluginInit'
export default {
  name: 'About',
  mounted () {
    // socialvue.index()
  },
  components: {
  },
  data () {
    return {
      friend: [
        {
          img: require('../../../../assets/images/user/01.jpg'),
          name: 'Paul Molive',
          realtion: 'Brothe'
        },
        {
          img: require('../../../../assets/images/user/02.jpg'),
          name: 'Anna Mull',
          realtion: 'Sister'
        },
        {
          img: require('../../../../assets/images/user/03.jpg'),
          name: 'Paige Turner',
          realtion: 'Cousin'
        }
      ],
      work: [
        {
          img: require('../../../../assets/images/user/01.jpg'),
          name: 'Themeforest',
          des: 'Web Designer'
        },
        {
          img: require('../../../../assets/images/user/02.jpg'),
          name: 'iqonicdesign',
          des: 'Web Developer'
        },
        {
          img: require('../../../../assets/images/user/03.jpg'),
          name: 'W3school',
          des: 'Designer'
        }
      ]
    }
  }

}
</script>
