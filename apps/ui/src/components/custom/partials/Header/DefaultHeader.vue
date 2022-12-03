
<template>
<div class="iq-top-navbar">
    <nav class="nav navbar navbar-expand-lg navbar-light iq-navbar p-lg-0">
        <div class="container-fluid navbar-inner">
            <div class="d-flex align-items-center gap-3">
                <router-link :to="{ name: 'social.list'}" class="d-flex align-items-center gap-2 iq-header-logo d-none d-lg-flex iq-logo-none">
                    <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.67733 9.50001L7.88976 20.2602C9.81426 23.5936 14.6255 23.5936 16.55 20.2602L22.7624 9.5C24.6869 6.16666 22.2813 2 18.4323 2H6.00746C2.15845 2 -0.247164 6.16668 1.67733 9.50001ZM14.818 19.2602C13.6633 21.2602 10.7765 21.2602 9.62181 19.2602L9.46165 18.9828L9.46597 18.7275C9.48329 17.7026 9.76288 16.6993 10.2781 15.8131L12.0767 12.7195L14.1092 16.2155C14.4957 16.8803 14.7508 17.6132 14.8607 18.3743L14.9544 19.0239L14.818 19.2602ZM16.4299 16.4683L19.3673 11.3806C18.7773 11.5172 18.172 11.5868 17.5629 11.5868H13.7316L15.8382 15.2102C16.0721 15.6125 16.2699 16.0335 16.4299 16.4683ZM20.9542 8.63193L21.0304 8.5C22.1851 6.5 20.7417 4 18.4323 4H17.8353L17.1846 4.56727C16.6902 4.99824 16.2698 5.50736 15.9402 6.07437L13.8981 9.58676H17.5629C18.4271 9.58676 19.281 9.40011 20.0663 9.03957L20.9542 8.63193ZM14.9554 4C14.6791 4.33499 14.4301 4.69248 14.2111 5.06912L12.0767 8.74038L10.0324 5.22419C9.77912 4.78855 9.48582 4.37881 9.15689 4H14.9554ZM6.15405 4H6.00746C3.69806 4 2.25468 6.50001 3.40938 8.50001L3.4915 8.64223L4.37838 9.04644C5.15962 9.40251 6.00817 9.58676 6.86672 9.58676H10.2553L8.30338 6.22943C7.9234 5.57587 7.42333 5.00001 6.8295 4.53215L6.15405 4ZM5.07407 11.3833L7.88909 16.2591C8.05955 15.7565 8.28025 15.2702 8.54905 14.8079L10.4218 11.5868H6.86672C6.26169 11.5868 5.66037 11.5181 5.07407 11.3833Z" fill="currentColor"/>
                    </svg>
                </router-link>
                    <h3 class="logo-title d-none d-lg-block" data-setting="app_name">web3gram</h3>
            </div>
            <div class="d-block d-lg-none">
                <router-link :to="{ name: 'social.list'}" class="d-flex align-items-center gap-2 iq-header-logo">
                <svg width="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.67733 9.50001L7.88976 20.2602C9.81426 23.5936 14.6255 23.5936 16.55 20.2602L22.7624 9.5C24.6869 6.16666 22.2813 2 18.4323 2H6.00746C2.15845 2 -0.247164 6.16668 1.67733 9.50001ZM14.818 19.2602C13.6633 21.2602 10.7765 21.2602 9.62181 19.2602L9.46165 18.9828L9.46597 18.7275C9.48329 17.7026 9.76288 16.6993 10.2781 15.8131L12.0767 12.7195L14.1092 16.2155C14.4957 16.8803 14.7508 17.6132 14.8607 18.3743L14.9544 19.0239L14.818 19.2602ZM16.4299 16.4683L19.3673 11.3806C18.7773 11.5172 18.172 11.5868 17.5629 11.5868H13.7316L15.8382 15.2102C16.0721 15.6125 16.2699 16.0335 16.4299 16.4683ZM20.9542 8.63193L21.0304 8.5C22.1851 6.5 20.7417 4 18.4323 4H17.8353L17.1846 4.56727C16.6902 4.99824 16.2698 5.50736 15.9402 6.07437L13.8981 9.58676H17.5629C18.4271 9.58676 19.281 9.40011 20.0663 9.03957L20.9542 8.63193ZM14.9554 4C14.6791 4.33499 14.4301 4.69248 14.2111 5.06912L12.0767 8.74038L10.0324 5.22419C9.77912 4.78855 9.48582 4.37881 9.15689 4H14.9554ZM6.15405 4H6.00746C3.69806 4 2.25468 6.50001 3.40938 8.50001L3.4915 8.64223L4.37838 9.04644C5.15962 9.40251 6.00817 9.58676 6.86672 9.58676H10.2553L8.30338 6.22943C7.9234 5.57587 7.42333 5.00001 6.8295 4.53215L6.15405 4ZM5.07407 11.3833L7.88909 16.2591C8.05955 15.7565 8.28025 15.2702 8.54905 14.8079L10.4218 11.5868H6.86672C6.26169 11.5868 5.66037 11.5181 5.07407 11.3833Z" fill="currentColor"/>
                </svg>
                <h3 class="logo-title d-none d-sm-block" data-setting="app_name">web3gram</h3>
                </router-link>
            </div>

            <div class="offcanvas offcanvas-end iq-profile-menu-responsive" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">General Setting</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body pt-0">
                <ul class="navbar-nav  ms-auto pe-4 navbar-list">
                    <li class="nav-item">
                        <router-link :to="{ name: 'social.list'}" class="d-flex align-items-center">
                            <i class="material-symbols-outlined">home</i>
                            <span class="mobile-text d-lg-none ms-3">Home</span>
                        </router-link>
                    </li>

                    <li class="nav-item dropdown d-none d-lg-block">
                        <router-link :to="{name: 'social.friendrequest'}" class="d-flex align-items-center">
                          <span class="material-symbols-outlined">group</span>
                        </router-link>
                     
                    </li>
                    <li class="nav-item d-lg-none">
                        <router-link :to="{name: 'social.friendrequest'}" class="d-flex align-items-center">
                            <span class="material-symbols-outlined">group</span>
                            <span class="mobile-text  ms-3">Friend Request</span>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown d-none d-lg-block">
                      <router-link :to="{name: 'social.notification'}" class="d-flex align-items-center">
                        <i class="material-symbols-outlined">notifications</i>
                      </router-link>
                    </li>
                    <li class="nav-item dropdown d-none d-lg-block">
                      <router-link :to="{name: 'chat.chat'}" class="d-flex align-items-center">
                        <i class="material-symbols-outlined">chat</i>
                      </router-link>
                    </li>
                    <li class="nav-item dropdown d-none d-lg-block">
                        <a href="javascript:void(0);" class="d-flex align-items-center dropdown-toggle" id="drop-down-arrow" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="@/assets/images/user/1.jpg" class="img-fluid rounded-circle me-3" alt="user" loading="lazy">
                            <div class="caption">
                            <h6 class="mb-0 line-height">0x9e...7d8</h6>
                            </div>
                        </a>
                        <div class="sub-drop dropdown-menu caption-menu" aria-labelledby="drop-down-arrow">
                            <div class="card shadow-none m-0">
                            <div class="card-header ">
                                <div class="header-title">
                                    <h5 class="mb-0 ">Hello </h5>
                                </div>
                            </div>
                            <div class="card-body p-0 ">
                                <div class="d-flex align-items-center iq-sub-card border-0">
                                    <span class="material-symbols-outlined">
                                        line_style
                                    </span>
                                    <div class="ms-3">
                                        <router-link :to="{ name: 'social.profilemain'}" class="mb-0 h6">
                                        My Profile
                                        </router-link>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center iq-sub-card border-0">
                                    <span class="material-symbols-outlined">
                                        edit_note
                                    </span>
                                    <div class="ms-3">
                                        <router-link :to="{ name: 'user.profile-edit'}" class="mb-0 h6">
                                        Edit Profile
                                        </router-link>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center iq-sub-card">
                                    <span class="material-symbols-outlined">
                                        login
                                    </span>
                                    <div class="ms-3">
                                        <router-link :to="{ name: 'auth1.sign-in1'}" class="mb-0 h6">
                                        Sign out
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'DefaultHeader',
  props: {
    image: {
      type: String,
      default: require('@/assets/images/logo.png')
    }
  },
  setup () {
    const store = useStore()
    const sidebarType = computed(() => store.getters['setting/sidebar_type'])
    const toggleSidebar = () => {
      // Code Here
      if (sidebarType.value.includes('sidebar-mini')) {
        store.dispatch(
          'setting/sidebar_type',
          sidebarType.value.filter((item) => item !== 'sidebar-mini')
        )
      } else {
        store.dispatch('setting/sidebar_type', [...sidebarType.value, 'sidebar-mini'])
      }
    }
    return {
      store,
      sidebarType,
      toggleSidebar
    }
  }
}
</script>
