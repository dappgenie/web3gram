<template>
<div class="chat-page p-0">
    <div class="sidebar sidebar-chat sidebar-base border-end shadow-none">
        <div class="chat-search mt-6 pt-2 ps-3">
            <ToggleButton toggleShow="#user-detail-popup">
                <template v-slot:media>
                    <img :src="user.image" alt="chat-user" class="avatar-60 ">
                </template>
                <template v-slot:body>
                    <h5 class="mb-0">{{ user.name }}</h5>
                    <p class="m-0">{{ user.role }}</p>
                </template>
            </ToggleButton>
            <ToggleContent id="user-detail-popup" body-class="text-left">
                <template v-slot:media>
                    <img :src="user.image" alt="avatar">
                </template>
                <template v-slot:title>
                    <div class="user-name mt-4">
                        <h4>{{ user.name }}</h4>
                    </div>
                    <div class="user-desc">
                        <p>{{ user.role }}</p>
                    </div>
                </template>
                <template v-slot:body>
                    <h5 class="mt-4 mb-4">About</h5>
                    <p>It is long established fact that a reader will be distracted bt the reddable.</p>
                    <h5 class="mt-3 mb-3">Status</h5>
                    <ul class="user-status p-0">
                        <li class="mb-1 d-flex align-items-center">
                            <i class="material-symbols-outlined filled text-success pe-1 md-14">
                                circle
                            </i>
                            <span>Online</span>
                        </li>
                        <li class="mb-1 d-flex align-items-center">
                            <i class="material-symbols-outlined filled text-warning pe-1 md-14">
                                circle
                            </i>
                            <span>Away</span>
                        </li>
                        <li class="mb-1 d-flex align-items-center">
                            <i class="material-symbols-outlined filled text-danger pe-1 md-14">
                                circle
                            </i>
                            <span>Do Not Disturb</span>
                        </li>
                        <li class="mb-1 d-flex align-items-center">
                            <i class="material-symbols-outlined filled text-light pe-1 md-14">
                                circle
                            </i>
                            <span>Offline</span>
                        </li>
                    </ul>
                </template>
            </ToggleContent>
            <div class="chat-searchbar mt-4">
                <div class="form-group chat-search-data m-0">
                    <input type="text" class="form-control round" id="chat-search" placeholder="Search" v-model="search">
                    <i class="material-symbols-outlined">
                        search
                    </i>
                </div>
            </div>
        </div>
        <div class="chat-sidebar-channel scroller mt-4 ps-3">
            <h5>Public Channel</h5>
            <tab-nav :pills="true" :vertical="true" class="iq-chat-ui" id="chat-list-data">
                <template v-for="(item,index) in privateList" :key="index">
                    <tab-nav-items :id="`v-pills-${item.id}`" href="#v-pills-home" :ariaControls="`v-pills-${item.id}`" role="tab" @click="active=false">
                        <template v-slot:title>
                            <ChatItem :item="item" />
                        </template>
                    </tab-nav-items>
                </template>
            </tab-nav>
            <h5>Private Channel</h5>
            <tab-nav :pills="true" :vertical="true" class="iq-chat-ui" id="chat-list-data">
                <template v-for="(item,index) in publicList" :key="index">
                    <tab-nav-items :id="`v-pills-${item.id}`" href="#v-pills-home" :ariaControls="`v-pills-${item.id}`" role="tab" @click="active=false">
                        <template v-slot:title>
                            <ChatItem :item="item" />
                        </template>
                    </tab-nav-items>
                </template>
            </tab-nav>
        </div>
    </div>
    <!-- <div class="col-lg-9 chat-data p-0 chat-data-right" :style="`background: url(${require('../../../assets/images/page-img/100.jpg')}) no-repeat scroll center center;background-size: cover;`">
                </div> -->
    <main class="main-content">
        <tab-content id="v-pills-tabContent">
            <tab-content-item :active="active" id="v-pills-default" aria-labelled-by="v-pills-default">
                <ToggleButton :mini-toggle="true" :close-button="false" toggleShow="#chat-user-detail-popup" mediaClass="chat-user-profile">
                    <template v-slot:media>
                    </template>
                    <template v-slot:body>
                    </template>
                </ToggleButton>
                <div class="chat-start">
                    <span class="text-primary avatar-100 rounded-pill bg-white d-flex align-items-center justify-content-center">
                        <i class="material-symbols-outlined md-42" style="font-size:3rem;">sms</i>
                    </span>
                    <button id="chat-start" class="btn bg-white mt-3">Start
                        Conversation!</button>
                </div>
            </tab-content-item>
            <tab-content-item id="v-pills-home" aria-labelled-by="v-pills-default">
                <div class="chat-head">
                    <header class="d-flex justify-content-between align-items-center bg-white pt-3 pe-3 pb-3">
                        <ToggleButton :mini-toggle="true" :close-button="false" toggleShow="#chat-user-detail-popup" mediaClass="chat-user-profile">
                            <template v-slot:media>
                                <img :src="checkUser(5, 'image')" alt="avatar" class="avatar-50 ">
                            </template>
                            <template v-slot:body>
                                <h5 class="mb-0">{{ checkUser(5, 'name') }}</h5>
                            </template>
                        </ToggleButton>
                        <ToggleContent id="chat-user-detail-popup" bodyClass="chatuser-detail" center>
                            <template v-slot:media>
                                <img :src="checkUser(5,'image')" alt="avatar">
                            </template>
                            <template v-slot:title>
                                <div class="user-name mt-4">
                                    <h4>{{ checkUser(5, 'name') }}</h4>
                                </div>
                                <div class="user-desc">
                                    <p>Cape Town, RSA</p>
                                </div>
                            </template>
                            <template v-slot:body>
                                <div class="row">
                                    <div class="col-6 col-md-6 title">Nik Name:</div>
                                    <div class="col-6 col-md-6 text-right">{{ checkUser(5, 'name') }}</div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-6 col-md-6 title">Tel:</div>
                                    <div class="col-6 col-md-6 text-right">072 143 9920</div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-6 col-md-6 title">Date Of Birth:</div>
                                    <div class="col-6 col-md-6 text-right">July 12, 1989</div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-6 col-md-6 title">Gender:</div>
                                    <div class="col-6 col-md-6 text-right">Male</div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-6 col-md-6 title">Language:</div>
                                    <div class="col-6 col-md-6 text-right">Engliah</div>
                                </div>
                            </template>
                        </ToggleContent>
                        <div class="chat-header-icons d-flex">
                            <a href="#" class="chat-icon-phone bg-soft-primary d-flex align-items-center justify-content-center">
                                <i class="material-symbols-outlined md-18">phone</i>
                            </a>
                            <a href="#" class="chat-icon-video bg-soft-primary d-flex align-items-center justify-content-center">
                                <i class="material-symbols-outlined md-18">videocam</i>
                            </a>
                            <a href="#" class="chat-icon-delete bg-soft-primary d-flex align-items-center justify-content-center">
                                <i class="material-symbols-outlined md-18">delete</i>
                            </a>

                            <span class="dropdown bg-soft-primary d-flex align-items-center justify-content-center">
                                <svg class="icon-20 nav-hide-arrow cursor-pointer pe-0" id="dropdownMenuButton-09" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20.6788C10 21.9595 11.0378 23 12.3113 23C13.5868 23 14.6265 21.9595 14.6265 20.6788C14.6265 19.3981 13.5868 18.3576 12.3113 18.3576C11.0378 18.3576 10 19.3981 10 20.6788ZM10 12.0005C10 13.2812 11.0378 14.3217 12.3113 14.3217C13.5868 14.3217 14.6265 13.2812 14.6265 12.0005C14.6265 10.7198 13.5868 9.67929 12.3113 9.67929C11.0378 9.67929 10 10.7198 10 12.0005ZM12.3113 5.64239C11.0378 5.64239 10 4.60192 10 3.3212C10 2.04047 11.0378 1 12.3113 1C13.5868 1 14.6265 2.04047 14.6265 3.3212C14.6265 4.60192 13.5868 5.64239 12.3113 5.64239Z" fill="currentColor"></path>
                                </svg>
                                <span class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton-09">
                                    <a class="dropdown-item d-flex align-items-center" href="#"><i class="material-symbols-outlined md-18 me-1">push_pin</i>Pin to top</a>
                                    <a class="dropdown-item d-flex align-items-center" href="#"><i class="material-symbols-outlined md-18 me-1">delete_outline</i>Delete chat</a>
                                    <a class="dropdown-item d-flex align-items-center" href="#"><i class="material-symbols-outlined md-18 me-1">watch_later</i>Block</a>
                                </span>
                            </span>
                        </div>
                    </header>
                </div>
                <div class="chat-content scroller">
                    <template v-for="(item,index) in chat" :key="index">
                        <div class="chat d-flex other-user" v-if="!item.me">
                            <div class="chat-user">
                                <a class="avatar m-0">
                                    <img :src="checkUser(item.userId, 'image')" alt="avatar" class="avatar-35 " />
                                </a>
                                <span class="chat-time mt-1">{{ item.time }}</span>
                            </div>
                            <div class="chat-detail">
                                <div class="chat-message">
                                    <p>{{ item.text }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="chat chat-left" :key="index" v-if="item.me">
                            <div class="chat-user">
                                <a class="avatar m-0">
                                    <img :src="checkUser(item.userId,'image')" alt="avatar" class="avatar-35 " />
                                </a>
                                <span class="chat-time mt-1">{{ item.time }}</span>
                            </div>
                            <div class="chat-detail">
                                <div class="chat-message">
                                    <p>{{ item.text }}</p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="chat-footer p-3 bg-white">
                    <form class="d-flex align-items-center" action="javascript:void(0);">
                        <div class="chat-attagement d-flex">
                            <a href="#" class="d-flex align-items-center"><i class="material-symbols-outlined pe-3" aria-hidden="true">sentiment_satisfied</i></a>
                            <a href="#" class="d-flex align-items-center"><i class="material-symbols-outlined pe-3" aria-hidden="true">attach_file</i></a>
                        </div>
                        <input type="text" class="form-control me-3" placeholder="Type your message">
                        <button type="submit" class="btn btn-primary d-flex align-items-center p-2"><i class="far fa-paper-plane"></i><span class="d-none d-lg-block ms-1">Send</span></button>
                    </form>
                </div>
            </tab-content-item>
        </tab-content>
    </main>
</div>
</template>

<script>
import {
    socialvue
} from '../../../config/pluginInit'
import ChatItem from '../../../components/custom/Chat/ChatItem'
import ToggleButton from '../../../components/custom/Chat/ToggleButton'
import ToggleContent from '../../../components/custom/Chat/ToggleContent'
import {
    Users,
    MessagesUser1
} from '../../../FackApi/api/chat'
import User from '../../../Model/User'

export default {
    name: 'Index',
    components: {
        ChatItem,
        ToggleButton,
        ToggleContent
    },
    mounted() {
        socialvue.index()
    },
    computed: {
        filteredList() {
            return this.usersList.filter(item => {
                return item.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },
        publicList() {
            return this.usersList.filter(item => {
                return !item.isPrivate ? item.name.toLowerCase().includes(this.search.toLowerCase()) : false
            })
        },
        privateList() {
            return this.usersList.filter(item => {
                return item.isPrivate ? item.name.toLowerCase().includes(this.search.toLowerCase()) : false
            })
        }
    },
    data() {
        return {
            search: '',
            user: new User({
                id: 1,
                name: 'Bni Jordan',
                role: 'Web Designer',
                image: require('../../../assets/images/user/1.jpg'),
                isActive: true
            }),
            usersList: Users,
            chat: MessagesUser1,
            active: true
        }
    },
    methods: {
        checkUser(item, type) {
            const user = this.usersList.find(user => user.id === item)
            let final
            if (user !== undefined) {
                switch (type) {
                    case 'name':
                        final = user.name
                        break
                    case 'image':
                        final = user.image
                        break
                    case 'role':
                        final = user.role
                        break
                }
                return final
            }
            return require('../../../assets/images/user/user-5.jpg')
        }
    }
}
</script>

<style>
.remove-toggle::after {
    content: unset;
}
</style>
