<template>
<!-- Sidebar Menu Start -->
<ul class="navbar-nav iq-main-menu" id="sidebar-menu">
    <li class="nav-item static-item">
        <a class="nav-link static-item disabled" href="#" tabindex="-1">
            <span class="default-icon">Social</span>
            <span class="mini-icon" data-bs-toggle="tooltip" title="Social" data-bs-placement="right">-</span>
        </a>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('social.list') ? 'active nav-link' : 'nav-link'" aria-current="page"
            :to="{name: 'social.list'}">
            <i class="icon material-symbols-outlined">
                newspaper
            </i>
            <span class="item-name">Newsfeed</span>
        </router-link>
    </li>
    <li class="nav-item">
        <a :class="checkActive(profiles) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#profile" role="button" :aria-expanded="checkActive(profiles)"
            aria-controls="profile">
            <i class="icon material-symbols-outlined">
                person
            </i>
            <span class="social.profilemain item-name">Profiles</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(profiles) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="profile" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('social.profilemain') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.profilemain'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> P </i>
                    <span class="item-name"> Profile </span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.profile1') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.profile1'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> P </i>
                    <span class="item-name">Profile 1 </span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.profile2') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.profile2'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> P </i>
                    <span class="item-name">Profile 2 </span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.profile3') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.profile3'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> P </i>
                    <span class="item-name">Profile 3 </span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.profileimage') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.profileimage'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> PI </i>
                    <span class="item-name">Profile Image</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.profilevideo') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.profilevideo'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> PV </i>
                    <span class="item-name">Profile Video</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.profileevent') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.profileevent'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> PE </i>
                    <span class="item-name">Profile Events</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.profilebadges') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.profilebadges'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> PB </i>
                    <span class="item-name">Profile Badges</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.profileforum') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.profileforum'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> PF </i>
                    <span class="item-name">Profile Forum</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a :class="checkActive(friendList) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#friend-list" role="button" :aria-expanded="checkActive(friendList)"
            aria-controls="sidebar-special">
            <i class="icon material-symbols-outlined">
                people
            </i>
            <span class="item-name">Friend</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(friendList) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="friend-list" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('social.friendlist') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.friendlist'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> FL </i>
                    <span class="item-name"> Friend List</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.friendprofile') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.friendprofile'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> FP </i>
                    <span class="item-name">Friend Profile</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.friendrequest') ? 'active nav-link' : 'nav-link'" aria-current="page"
                    :to="{name: 'social.friendrequest'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <span class="item-name">Friend Request</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('social.group') ? 'active nav-link' : 'nav-link'" aria-current="page"
            :to="{name: 'social.group'}">
            <i class="icon material-symbols-outlined">
                groups
            </i>
            <span class="item-name">Group</span>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('social.notification') ? 'active nav-link' : 'nav-link'" aria-current="page"
            :to="{name: 'social.notification'}">
            <i class="icon material-symbols-outlined">
                notifications
            </i>
            <span class="item-name">Notification</span>
        </router-link>
    </li>
    <li class="nav-item static-item">
        <a class="nav-link static-item disabled" href="#" tabindex="-1">
            <span class="default-icon">Featured</span>
            <span class="mini-icon" data-bs-toggle="tooltip" title="Social" data-bs-placement="right">-</span>
        </a>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('social.file') ? 'active nav-link' : 'nav-link'" aria-current="page"
            :to="{name: 'social.file'}">
            <i class="icon material-symbols-outlined">
                insert_drive_file
            </i>
            <span class="item-name">Files</span>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('chat.chat') ? 'active nav-link' : 'nav-link'" aria-current="page"
            :to="{name: 'chat.chat'}">
            <i class="icon material-symbols-outlined">
                message
            </i>
            <span class="item-name">Chat</span>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('app.todo') ? 'active nav-link' : 'nav-link'" aria-current="page"
            :to="{name: 'app.todo'}">
            <i class="icon material-symbols-outlined">
                task_alt
            </i>
            <span class="item-name">Todo</span>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('app.calendar') ? 'active nav-link' : 'nav-link'" aria-current="page"
            :to="{name: 'app.calendar'}">
            <i class="icon material-symbols-outlined">
                calendar_month
            </i>
            <span class="item-name">Calendar</span>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('social.birthday') ? 'active nav-link' : 'nav-link'" aria-current="page"
            :to="{name: 'social.birthday'}">
            <i class="icon material-symbols-outlined">
                cake
            </i>
            <span class="item-name">Birthday</span>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('social.weather') ? 'active nav-link' : 'nav-link'" aria-current="page"
            :to="{name: 'social.weather'}">
            <i class="icon material-symbols-outlined">
                thunderstorm
            </i>
            <span class="item-name">Weather</span>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('social.music') ? 'active nav-link' : 'nav-link'" aria-current="page"
            :to="{name: 'social.music'}">
            <i class="icon material-symbols-outlined">
                play_circle
            </i>
            <span class="item-name">Music</span>
        </router-link>
    </li>
    <li class="nav-item static-item">
        <a class="nav-link static-item disabled" href="#" tabindex="-1">
            <span class="default-icon">Other Pages</span>
            <span class="mini-icon" data-bs-toggle="tooltip" title="otherpages" data-bs-placement="right">-</span>
        </a>
    </li>
    <li class="nav-item">
        <a :class="checkActive(markets) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#market" role="button" :aria-expanded="checkActive(markets)"
            aria-controls="sidebar-special">
            <i class="icon material-symbols-outlined">
                poll
            </i>
            <span class="item-name">Market Place</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(markets) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="market" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('social.market1') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.market1'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> M </i>
                    <span class="item-name">Market 1</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('social.market2') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'social.market2'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> M </i>
                    <span class="item-name">Market 2</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a :class="checkActive('blog.blog-grid') ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#blog" role="button" :aria-expanded="checkActive('blog.blog-grid')"
            aria-controls="sidebar-special">
            <i class="icon material-symbols-outlined">
                article
            </i>
            <span class="item-name">Blog</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(blogs) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="blog" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('blog.blog-grid') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'blog.blog-grid'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> BG </i>
                    <span class="item-name">Blog Grid</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('blog.blog-list') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'blog.blog-list'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> BL </i>
                    <span class="item-name">Blog List</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('blog.blog-detail') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'blog.blog-detail'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> BD </i>
                    <span class="item-name">Blog Detail</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a :class="checkActive(stores) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#store" role="button" :aria-expanded="checkActive(stores)"
            aria-controls="sidebar-special">
            <i class="icon material-symbols-outlined">
                storefront
            </i>
            <span class="item-name">Store</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(stores) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="store" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('store.category-grid') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'store.category-grid'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> CG </i>
                    <span class="item-name">Category Grid</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('store.category-list') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'store.category-list'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> CL </i>
                    <span class="item-name">Category List</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('store.store-detail') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'store.store-detail'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> SD </i>
                    <span class="item-name">Store Detail</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('store.checkout') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'store.checkout'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> C </i>
                    <span class="item-name">Checkout</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">

        <a :class="checkActive(emails) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#mail" role="button" :aria-expanded="checkActive(emails)"
            aria-controls="sidebar-special">
            <i class="icon material-symbols-outlined">
                mail_outline
            </i>
            <span class="item-name">Mail</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(emails) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="mail" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('app.emaillisting') ? 'active nav-link' : 'nav-link'" :to="{name: 'app.emaillisting'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> I </i>
                    <span class="item-name">Inbox</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('app.composebody') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'app.composebody'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> E </i>
                    <span class="item-name">Email Compose</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a :class="checkActive(extraPages) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#sidebar-special" role="button" :aria-expanded="checkActive(extraPages)"
            aria-controls="sidebar-special">
            <i class="icon material-symbols-outlined">
                assignment
            </i>
            <span class="item-name">Special Pages</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(extraPages) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="sidebar-special" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('extra-pages.timelines') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'extra-pages.timelines'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> T </i>
                    <span class="item-name">Timeline</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('extra-pages.invoice') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'extra-pages.invoice'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> I </i>
                    <span class="item-name">Invoice</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('extra-pages.pricing-1') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'extra-pages.pricing-1'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> P </i>
                    <span class="item-name">Pricing 1</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('extra-pages.pricing-2') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'extra-pages.pricing-2'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> P </i>
                    <span class="item-name">Pricing 2</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('extra-pages.faq') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'extra-pages.faq'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> F </i>
                    <span class="item-name">Faq</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#sidebar-auth" role="button" aria-expanded="false"
            aria-controls="sidebar-auth">
            <i class="icon material-symbols-outlined">
                library_books
            </i>
            <span class="item-name">Auth</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul class="sub-nav collapse" id="sidebar-auth" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('auth1.sign-in1') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'auth1.sign-in1'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <span class="item-name">Login</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('auth1.sign-up1') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'auth1.sign-up1'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <span class="item-name">Register</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('auth1.recoverpassword1') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'auth1.recoverpassword1'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <span class="item-name">Recover Password</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('auth1.confirmmail1') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'auth1.confirmmail1'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <span class="item-name">Confirm Mail</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('auth1.lockscreen1') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'auth1.lockscreen1'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <span class="item-name">Lock Screen</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a :class="checkActive(utilities) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#utilities-error" role="button" :aria-expanded="checkActive(utilities) "
            aria-controls="utilities-error">
            <i class="icon material-symbols-outlined">
                turned_in_not
            </i>
            <span class="item-name">Utilities</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(utilities) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="utilities-error" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('default.error404') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'default.error404'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <span class="item-name">Error 404</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('default.error500') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'default.error500'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <span class="item-name">Error 500</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('default.maintenance') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'default.maintenance'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <span class="item-name">Maintence</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('extra-pages.blank-page') ? 'active nav-link' : 'nav-link'"
            :to="{name: 'extra-pages.blank-page'}">
            <i class="icon material-symbols-outlined">
                check_box_outline_blank
            </i>
            <span class="item-name">Blank Page</span>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('extra-pages.admin') ? 'active nav-link' : 'nav-link'" :to="{name: 'extra-pages.admin'}">
            <i class="icon material-symbols-outlined">
                admin_panel_settings
            </i>
            <span class="item-name">Admin</span>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link :class="checkActive('default.coming-soon') ? 'active nav-link' : 'nav-link'"
            :to="{name: 'default.coming-soon'}">
            <i class="icon material-symbols-outlined">
                fiber_smart_record
            </i>
            <span class="item-name">Pages Comingsoon</span>
        </router-link>
    </li>
    <li class="nav-item static-item">
        <a class="nav-link static-item disabled" href="#" tabindex="-1">
            <span class="default-icon">Elements</span>
            <span class="mini-icon" data-bs-toggle="tooltip" title="elements" data-bs-placement="right">-</span>
        </a>
    </li>
    <li class="nav-item">
        <a :class="checkActive(uikit) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#ui-kit" role="button" :aria-expanded="checkActive(uikit)"
            aria-controls="ui-kit">
            <i class="icon material-symbols-outlined">
                adjust
            </i>
            <span class="item-name">Ui Elements</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(uikit) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="ui-kit" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('core.color') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.color'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> U </i>
                    <span class="item-name">Ui Color</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.typography') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.typography'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> T </i>
                    <span class="item-name">Typography</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.alert') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.alert'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> A </i>
                    <span class="item-name">Alerts</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.badges') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.badges'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> B </i>
                    <span class="item-name">Badges</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.breadcrumb') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.breadcrumb'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> B </i>
                    <span class="item-name">Breadcrumb</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.button') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.button'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> B </i>
                    <span class="item-name">Buttons</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.cards') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.cards'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> C </i>
                    <span class="item-name">Cards</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.carousel') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.carousel'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> C </i>
                    <span class="item-name">Carousel</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.embed-video') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.embed-video'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> V </i>
                    <span class="item-name">Video</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.grid') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.grid'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> G </i>
                    <span class="item-name">Grid</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.images') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.images'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> I </i>
                    <span class="item-name">Images</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.listgroup') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.listgroup'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> L </i>
                    <span class="item-name">list Group</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.modal') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.modal'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> M </i>
                    <span class="item-name">Modal</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.notifications') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.notifications'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> N</i>
                    <span class="item-name">Notifications</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.pagination') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.pagination'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> P</i>
                    <span class="item-name">Pagination</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.popovers') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.popovers'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> P</i>
                    <span class="item-name">Popovers</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.progressbars') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.progressbars'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> P</i>
                    <span class="item-name">Progressbars</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.tabs') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.tabs'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> T</i>
                    <span class="item-name">Tabs</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.tooltips') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.tooltips'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> T</i>
                    <span class="item-name">Tooltips</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('core.offcanvas') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'core.offcanvas'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> T</i>
                    <span class="item-name">Offcanvas</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a :class="checkActive(formwizard) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#sidebar-wizard" role="button" :aria-expanded="checkActive(formwizard)"
            aria-controls="sidebar-wizard">
            <i class="icon material-symbols-outlined">
                text_snippet
            </i>
            <span class="item-name">Forms Wizard</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(formwizard) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="sidebar-wizard" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('form-wizard.simple') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'form-wizard.simple'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> SW </i>
                    <span class="item-name">Simple Wizard</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('form-wizard.validatewizard') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'form-wizard.validatewizard'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> VW </i>
                    <span class="item-name">Validate Wizard</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('form-wizard.vertical') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'form-wizard.vertical'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> VW </i>
                    <span class="item-name">Vertical Wizard</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a :class="checkActive(tables) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#sidebar-table" role="button" :aria-expanded="checkActive(tables)"
            aria-controls="sidebar-table">
            <i class="icon material-symbols-outlined">
                table_chart
            </i>
            <span class="item-name">Table</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(tables) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="sidebar-table" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('table.basic') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'table.basic'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> BT </i>
                    <span class="item-name">Basic Tables</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('table.datatable') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'table.datatable'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> D </i>
                    <span class="item-name">Data Table</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('table.editable') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'table.editable'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> E </i>
                    <span class="item-name">Editable Table</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item">
        <a :class="checkActive(forms) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#sidebar-form" role="button" :aria-expanded="checkActive(forms)"
            aria-controls="sidebar-form">
            <i class="icon material-symbols-outlined">
                view_timeline
            </i>
            <span class="item-name">Form</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(forms) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="sidebar-form" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('form.layout') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'form.layout'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> FE </i>
                    <span class="item-name">Form Elements</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('form.validate') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'form.validate'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> FV</i>
                    <span class="item-name">Form Validation</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('form.switch') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'form.switch'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> FS </i>
                    <span class="item-name">Form Switch</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('form.checkbox') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'form.checkbox'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> FC</i>
                    <span class="item-name">Form Checkbox</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('form.radio') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'form.radio'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> FR</i>
                    <span class="item-name">Form Radio</span>
                </router-link>
            </li>
        </ul>
    </li>
    <li class="nav-item mb-4">
        <a :class="checkActive(icons) ? 'active nav-link' : 'nav-link'" data-bs-toggle="collapse" href="#sidebar-icons" role="button" :aria-expanded="checkActive(icons) "
            aria-controls="sidebar-icons">
            <i class="icon material-symbols-outlined">
                error_outline
            </i>
            <span class="item-name">Icons</span>
            <i class="right-icon material-symbols-outlined">chevron_right</i>
        </a>
        <ul :class="checkActive(icons) ? 'show sub-nav collapse' : 'sub-nav collapse'" id="sidebar-icons" data-bs-parent="#sidebar-menu">
            <li class="nav-item">
                <router-link :class="checkActive('icon.fontawesome-5') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'icon.fontawesome-5'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> F </i>
                    <span class="item-name">Font Awesome 5</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('icon.lineawesome') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'icon.lineawesome'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> L </i>
                    <span class="item-name">Line Awesome</span></router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('icon.remixicon') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'icon.remixicon'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> R </i>
                    <span class="item-name">Remixicon</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :class="checkActive('icon.material') ? 'active nav-link' : 'nav-link'"
                    :to="{name: 'icon.material'}">
                    <i class="icon material-symbols-outlined filled">
                        fiber_manual_record
                    </i>
                    <i class="sidenav-mini-icon"> M </i>
                    <span class="item-name">Material</span>
                </router-link>
            </li>
        </ul>
    </li>
</ul>
<!-- Sidebar Menu End -->
</template>
<script>
export default {
  name: 'DefaultSidebar',
  data () {
    return {
      profiles: ['social.profile1', 'social.profile2', 'social.profile3', 'social.profileimage', 'social.profilevideo', 'social.profileevent', 'social.profilebadges', 'social.profileforum'],
      friendList: ['social.friendlist', 'social.friendprofile', 'social.friendrequest'],
      markets: ['social.market1', 'social.market2'],
      blogs: ['blog.blog-grid', 'blog.blog-list', 'blog.blog-detail'],
      stores: ['store.category-grid', 'store.category-list', 'store.store-detail', 'store.checkout'],
      emails: ['app.emaillisting', 'app.composebody'],
      auths: ['extra-pages', 'auth1.sign-in1', 'auth1.sign-up1', 'auth1.recoverpassword1', 'auth1.confirmmail1', 'auth1.lockscreen'],
      extraPages: ['extra-pages.timelines', 'extra-pages.invoice', 'extra-pages.blank-page', 'default.error404', 'default.error500', 'extra-pages.pricing-1', 'extra-pages.pricing-2', 'default.maintenance', 'default.coming-soon', 'extra-pages.faq'],
      utilities: ['default.error404', 'default.error500', 'default.maintenance'],
      uikit: ['core.color', 'core.typography', 'core.alert', 'core.badges', 'core.breadcrumb',
        'core.button', 'core.cards', 'core.carousel', 'core.embed-video', 'core.grid', 'core.images',
        'core.listgroup', 'core.modal', 'core.notifications', 'core.pagination', 'core.popovers', 'core.progressbars', 'core.tabs', 'core.tooltips'],
      forms: ['form.layout', 'form.validate', 'form.switch', 'form.checkbox', 'form.radio'],
      formwizard: ['form-wizard.simple', 'form-wizard.validatewizard', 'form-wizard.vertical'],
      tables: ['table.basic', 'table.editable', 'table.datatable'],
      icons: ['icon.fontawesome-5', 'icon.lineawesome', 'icon.remixicon', 'icon.material']

    }
  },
  methods: {
    checkActive (route) {
      if (this.$route.name === route) {
        return true
      }
      if (route.includes(this.$route.name)) {
        return true
      }
    }
  }
}
</script>
