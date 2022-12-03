<template>
  <div class="row">
    <div class="col-sm-12" v-for="(item,index) in friendRequest" :key="index">
        <iq-card>
          <template v-slot:headerTitle>
                <h4 class="card-title">{{item.title}}</h4>
          </template>
          <template v-slot:body>
              <ul class="request-list list-inline m-0 p-0">
                <li class="d-flex align-items-center  justify-content-between flex-wrap" v-for="(list,index1) in item.list" :key="index1">
                    <div class="user-img img-fluid flex-shrink-0">
                      <img :src="list.img" alt="story-img" class="rounded-circle avatar-40">
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h6>{{list.name}}</h6>
                      <p class="mb-0">{{list.friend}}</p>
                    </div>
                    <div class="d-flex align-items-center mt-2 mt-md-0">
                      <div class="confirm-click-btn">
                          <a href="#" class="me-3 btn btn-primary rounde d-flex align-items-center">
                            <span class="material-symbols-outlined md-18 me-1">
{{item.iconName}}
                                  </span>
                                  {{item.btn1}}</a>
                          <a href="@/app/profile.html" class="me-3 btn btn-primary rounded request-btn" style="display: none;"></a>
                      </div>
                      <a href="#" class="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item" @click="deleterequest">{{item.btn2}}</a>
                    </div>
                </li>
                <li class="d-block text-center mb-0 pb-0"  v-if="item.title == 'Friend Request'">
                    <a href="#" class="me-3 btn btn-primary">View More Request</a>
                </li>
              </ul>
          </template>
        </iq-card>
    </div>
  </div>
</template>
<script>
import { socialvue } from '../../../config/pluginInit'
export default {
  name: 'FriendRequest',
  mounted () {
    socialvue.index()
  },
  data () {
    return {
      friendRequest: [
        {
          title: 'Friend Request',
          btn1: 'Confirm',
          btn2: 'Delete Request',
          list: [
            {
              img: require('../../../assets/images/user/05.jpg'),
              name: 'Jaques Amole',
              friend: '40  friends'
            },
            {
              img: require('../../../assets/images/user/06.jpg'),
              name: 'Lucy Tania',
              friend: '12  friends'
            },
            {
              img: require('../../../assets/images/user/07.jpg'),
              name: 'Val Adictorian',
              friend: '0  friends'
            },
            {
              img: require('../../../assets/images/user/08.jpg'),
              name: 'Manny Petty',
              friend: '3  friends'
            },
            {
              img: require('../../../assets/images/user/09.jpg'),
              name: 'Marsha Mello',
              friend: '15  friends'
            },
            {
              img: require('../../../assets/images/user/10.jpg'),
              name: 'Caire Innet',
              friend: '8  friends'
            },
            {
              img: require('../../../assets/images/user/11.jpg'),
              name: 'Gio Metric',
              friend: '10  friends'
            },
            {
              img: require('../../../assets/images/user/12.jpg'),
              name: 'Chris P. Cream',
              friend: '18  friends'
            },
            {
              img: require('../../../assets/images/user/05.jpg'),
              name: 'Paul Misunday',
              friend: '6  friends'
            },
            {
              img: require('../../../assets/images/user/13.jpg'),
              name: 'Reanne Carnation',
              friend: '12  friends'
            }
          ]

        },
        {
          title: 'People You May Know',
          btn1: 'Add Friend',
          btn2: 'Remove',
          iconName: 'person_add',
          list: [
            {
              img: require('../../../assets/images/user/14.jpg'),
              name: 'Jen Youfelct',
              friend: '4 friends'
            },
            {
              img: require('../../../assets/images/user/15.jpg'),
              name: 'Jen Youfelct',
              friend: '20  friends'
            },
            {
              img: require('../../../assets/images/user/16.jpg'),
              name: 'Jaques Amole',
              friend: '40  friends'
            },
            {
              img: require('../../../assets/images/user/17.jpg'),
              name: 'Earl E. Riser',
              friend: '40  friends'
            },
            {
              img: require('../../../assets/images/user/18.jpg'),
              name: 'Cliff Diver',
              friend: '40  friends'
            },
            {
              img: require('../../../assets/images/user/19.jpg'),
              name: 'Cliff Diver',
              friend: '40  friends'
            },
            {
              img: require('../../../assets/images/user/05.jpg'),
              name: 'Joyce Tick',
              friend: '40  friends'
            },
            {
              img: require('../../../assets/images/user/18.jpg'),
              name: 'Vinny Gret',
              friend: '40  friends'
            },
            {
              img: require('../../../assets/images/user/06.jpg'),
              name: 'Paul Samic',
              friend: '40  friends'
            },
            {
              img: require('../../../assets/images/user/07.jpg'),
              name: 'Gustav Wind',
              friend: '40  friends'
            },
            {
              img: require('../../../assets/images/user/05.jpg'),
              name: 'Minnie Strone',
              friend: '40  friends'
            },
            {
              img: require('../../../assets/images/user/04.jpg'),
              name: 'Ray Volver',
              friend: '40  friends'
            }
          ]
        }
      ]
    }
  },
  methods: {
    deleterequest () {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: 'btn btn-primary btn-lg',
          cancelButton: 'btn btn-outline-primary btn-lg ms-2'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut'
        }
      })
        .then((willDelete) => {
          if (willDelete.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: 'Deleted!',
              text: 'Your Request has been deleted.',
              icon: 'success',
              showClass: {
                popup: 'animate__animated animate__zoomIn'
              },
              hideClass: {
                popup: 'animate__animated animate__zoomOut'
              }
            })
          } else {
            swalWithBootstrapButtons.fire({
              title: 'Your Request is safe!',
              showClass: {
                popup: 'animate__animated animate__zoomIn'
              },
              hideClass: {
                popup: 'animate__animated animate__zoomOut'
              }
            })
          }
        })
    }
  }
}
</script>
