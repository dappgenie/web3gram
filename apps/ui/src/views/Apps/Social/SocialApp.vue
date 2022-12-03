<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-12 row m-0 p-0">
          <div class="col-sm-12">
            <tab-content id="pills-tabContent-2">
              <tab-content-item :active="true" id="profile-feed" aria-labelled-by="pills-feed-tab">
                <AddSocialPost @addPost="addPost"></AddSocialPost>
              </tab-content-item>
            </tab-content>
          </div>
          <tab-content id="pills-tabContent-2">
            <tab-content-item :active="true" id="profile-feed" aria-labelled-by="pills-feed-tab">
              <SocialPost/>
            </tab-content-item>
          </tab-content>
      </div>

      <div class="col-sm-12 text-center">
        <img src="../../../assets/images/page-img/page-load-loader.gif" alt="loader" style="height: 100px;">
      </div>
    </div>
  </div>
</template>
<script>
// import { socialvue } from '../../../config/pluginInit'
import SocialPost from './Components/SocialPost'
import { Posts } from '../../../FackApi/api/SocialPost'
import AddSocialPost from './Components/AddSocialPost'
export default {
  name: 'SocialApp',
  components: { AddSocialPost, SocialPost },
  mounted () {
    // socialvue.index()
  },
  data () {
    return {
      suggestionEvent: [
        {
          img: require('../../../assets/images/page-img/42.png'),
          title: 'Iqonic Studio',
          des: 'Lorem Ipsum',
          otherImg: require('../../../assets/images/small/img-1.jpg')
        },
        {
          img: require('../../../assets/images/page-img/42.png'),
          title: 'Cakes & Bakes ',
          des: 'Lorem Ipsum',
          otherImg: require('../../../assets/images/small/img-2.jpg')
        }
      ],
      event: [
        {
          img: require('../../../assets/images/page-img/s4.jpg'),
          heading: 'Web Workshop',
          time: '1 hour ago'
        },
        {
          img: require('../../../assets/images/page-img/s5.jpg'),
          heading: 'Fun Events and Festivals',
          time: '4 hour ago'
        }
      ],
      user: {
        background: require('../../../assets/images/page-img/profile-bg1.jpg'),
        profile: require('../../../assets/images/user/11.png'),
        name: 'Nik Jone',
        role: ' - Web designer',
        about: 'Lorem ipsum dolor sit amet, contur adipiscing elit.',
        email: 'nikjone@demoo.com',
        phone: '001 2351 256 12',
        location: 'USA',
        careated_date: '07 Jan 2020'
      },
      socialPosts: Posts,
      galary: [
        { image: require('../../../assets/images/page-img/g1.jpg'), href: 'javascript:void(0);' },
        { image: require('../../../assets/images/page-img/g2.jpg'), href: 'javascript:void(0);' },
        { image: require('../../../assets/images/page-img/g3.jpg'), href: 'javascript:void(0);' },
        { image: require('../../../assets/images/page-img/g4.jpg'), href: 'javascript:void(0);' },
        { image: require('../../../assets/images/page-img/g5.jpg'), href: 'javascript:void(0);' },
        { image: require('../../../assets/images/page-img/g6.jpg'), href: 'javascript:void(0);' },
        { image: require('../../../assets/images/page-img/g7.jpg'), href: 'javascript:void(0);' },
        { image: require('../../../assets/images/page-img/g8.jpg'), href: 'javascript:void(0);' },
        { image: require('../../../assets/images/page-img/g9.jpg'), href: 'javascript:void(0);' }
      ],
      action: [
        {
          icon: 'ri-eye-fill mr-2',
          title: 'View'
        },
        {
          icon: 'ri-delete-bin-6-fill mr-2',
          title: 'Delete'
        },
        {
          icon: 'ri-pencil-fill mr-2',
          title: 'Edit'
        },
        {
          icon: 'ri-printer-fill mr-2',
          title: 'Print'
        },
        {
          icon: 'ri-file-download-fill mr-2',
          title: 'Download'
        }
      ],
      timelineItems: [
        {
          color: 'primary',
          title: 'Client Login',
          right: '24 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'success',
          title: 'Scheduled Maintenance',
          right: '23 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'danger',
          title: 'Dev Meetup',
          right: '20 November 2019',
          description: 'Bonbon macaroon jelly <b-link href="">beans gummi</b-link> bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
              require('../../../assets/images/user/user-1.jpg'),
              require('../../../assets/images/user/user-2.jpg'),
              require('../../../assets/images/user/user-3.jpg'),
              require('../../../assets/images/user/user-4.jpg'),
              require('../../../assets/images/user/user-5.jpg'),
              require('../../../assets/images/user/user-6.jpg')
            ]
          }
        },
        {
          color: 'primary',
          title: 'Client Call',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'warning',
          title: 'Mega Event',
          right: '15 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        }
      ],
      friends: [
        { name: 'Paul Molive', role: 'Web Designer', image: require('../../../assets/images/user/user-1.jpg') },
        { name: 'Paul Molive', role: 'trainee', image: require('../../../assets/images/user/user-1.jpg') }
      ],
      userBio: [
        { title: 'Joined', description: 'November 15, 2012' },
        { title: 'Lives', description: 'United States of America' },
        { title: 'Email', description: '<a href="mailto:nikjone@gmail.com"> nikjone@gmail.com</a>' },
        { title: 'Url', description: '<a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target="_blank"> www.bootstrap.com </a>' },
        { title: 'Contact', description: '<a href="tel:001 4544 565 456">(001) 4544 565 456</a>' }
      ],
      story: [
        { title: 'Web Design', time: '1 hour ago', image: require('../../../assets/images/page-img/s2.jpg'), class: 'mb-4', isActive: 'active' },
        { title: 'App Design', time: '4 hour ago', image: require('../../../assets/images/page-img/s3.jpg'), class: 'mb-4', isActive: '' },
        { title: 'Abstract Design', time: '9 hour ago', image: require('../../../assets/images/page-img/s1.jpg'), class: '', isActive: '' }
      ],
      suggestions: [
        { name: 'Anna Sthesia', mutual_friend: 'Today', image: require('../../../assets/images/user/01.jpg') },
        { name: 'Paul Molive', mutual_friend: 'Tomorrow', image: require('../../../assets/images/user/02.jpg') }
      ],
      news: [
        { description: 'there is a meetup in your city on friday at 19:00.<a href="#">see details</a>' },
        { description: '20% off coupon on selected items at pharmaprix' }
      ],
      twitterFeed: [
        {
          image: require('../../../assets/images/page-img/42.png'),
          name: 'UI/Ux Designer',
          description: 'Creativity Design'
        },
        {
          image: require('../../../assets/images/page-img/43.png'),
          name: 'Marketing',
          description: 'Accounting'
        },
        {
          image: require('../../../assets/images/page-img/44.png'),
          name: 'Web Developer',
          description: 'uniq Concept'
        },
        {
          image: require('../../../assets/images/page-img/45.png'),
          name: 'Latest News',
          description: 'Line information'
        }
      ],
      recentPages: [
        {
          image: require('../../../assets/images/page-img/46.png'),
          name: 'Food town'
        },
        {
          image: require('../../../assets/images/page-img/47.png'),
          name: 'Touro Univercity'
        },
        {
          image: require('../../../assets/images/page-img/48.jpg'),
          name: 'Moviehouse & Eatery'
        },
        {
          image: require('../../../assets/images/page-img/48.jpg'),
          name: 'Coffee + Crisp'
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
