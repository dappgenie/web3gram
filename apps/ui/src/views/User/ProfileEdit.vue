<template>
  <div class="row">
    <div class="col-lg-12">
      <iq-card>
        <div class="iq-card-body p-0">
          <div class="iq-edit-list">
            <tab-nav :pills="true" id="pills-tab" class="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items edit-profile">
              <tab-nav-items class="col-sm-3 p-0" :active="true" id="pills-peronal-tab" href="#personal-information" ariaControls="pills-personal" role="tab" :ariaSelected="true" title="Personal Information" />
              <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-password-tab" href="#chang-pwd" ariaControls="pills-password" role="tab" :ariaSelected="false" title="Change Password" />
              <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-sms-tab" href="#emailandsms" ariaControls="pills-sms" role="tab" :ariaSelected="false" title="Email and SMS" />
              <tab-nav-items class="col-sm-3 p-0" :active="false" id="pills-contact-tab" href="#manage-contact" ariaControls="pills-contact" role="tab" :ariaSelected="false" title="Manage Contact" />
            </tab-nav>
          </div>
        </div>
      </iq-card>
    </div>
    <div class="col-lg-12">
      <div class="iq-edit-list-data">
        <div class="tab-content">
          <tab-content-item :active="true" id="personal-information" aria-labelled-by="pills-peronal-tab">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Personal Information</h4>
              </template>
              <template v-slot:body>
                <form>
                  <div class="form-group row align-items-center">
                    <div class="col-md-12">
                      <div class="profile-img-edit">
                        <img class="profile-pic" src="@/assets/images/user/11.png" alt="profile-pic">
                        <div class="p-image">
                          <i class="ri-pencil-line upload-button text-white"></i>
                          <input class="file-upload" type="file" accept="image/*"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" row align-items-center">
                    <div class="form-group col-sm-6">
                        <label for="fname"  class="form-label">First Name:</label>
                        <input type="text" class="form-control" id="fname" placeholder="Bni">
                    </div>
                    <div class="form-group col-sm-6">
                        <label for="lname" class="form-label">Last Name:</label>
                        <input type="text" class="form-control" id="lname" placeholder="Jhon">
                    </div>
                    <div class="form-group col-sm-6">
                        <label for="uname" class="form-label">User Name:</label>
                        <input type="text" class="form-control" id="uname" placeholder="Bni@01">
                    </div>
                    <div class="form-group col-sm-6">
                        <label for="cname" class="form-label">City:</label>
                        <input type="text" class="form-control" id="cname" placeholder="Atlanta">
                    </div>
                    <div class="form-group col-sm-6">
                        <label class="form-label d-block">Gender:</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" value="option1">
                            <label class="form-check-label" for="inlineRadio10"> Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio11" value="option1">
                            <label class="form-check-label" for="inlineRadio11">Female</label>
                        </div>
                    </div>
                    <div class="form-group col-sm-6">
                        <label for="dob" class="form-label">Date Of Birth:</label>
                        <input  class="form-control" id="dob" placeholder="1984-01-24">
                    </div>
                    <div class="form-group col-sm-6">
                        <label class="form-label">Marital Status:</label>
                    <select class="form-select" aria-label="Default select example">
                            <option selected="">Single</option>
                            <option>Married</option>
                            <option>Widowed</option>
                            <option>Divorced</option>
                            <option>Separated </option>
                        </select>
                    </div>
                    <div class="form-group col-sm-6">
                        <label class="form-label">Age:</label>
                        <select class="form-select" aria-label="Default select example 2">
                        <option>46-62</option>
                        <option>63 > </option>
                        </select>
                    </div>
                    <div class="form-group col-sm-6">
                        <label class="form-label">Country:</label>
                        <select class="form-select" aria-label="Default select example 3">
                        <option>Caneda</option>
                        <option>Noida</option>
                        <option selected="">USA</option>
                        <option>India</option>
                        <option>Africa</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-6">
                        <label class="form-label">State:</label>
                        <select class="form-select" aria-label="Default select example 4">
                            <option>California</option>
                            <option>Florida</option>
                            <option selected="">Georgia</option>
                            <option>Connecticut</option>
                            <option>Louisiana</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-12">
                        <label class="form-label">Address:</label>
                        <textarea class="form-control" name="address" rows="5" style="line-height: 22px;">
                        37 Cardinal Lane
                        Petersburg, VA 23803
                        United States of America
                        Zip Code: 85001
                        </textarea>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary me-2">Submit</button>
                  <button type="reset" class="btn bg-soft-danger">Cancle</button>
                </form>
              </template>
            </iq-card>
          </tab-content-item>
          <tab-content-item :active="false" id="chang-pwd" aria-labelled-by="pills-password-tab">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Change Password</h4>
              </template>
              <template v-slot:body>
                <form>
                  <div class="form-group">
                    <label for="cpass" class="form-label">Current Password:</label>
                    <a href="javascripe:void();" class="float-end">Forgot Password</a>
                    <input type="Password" class="form-control" id="cpass" value="">
                  </div>
                  <div class="form-group">
                    <label for="npass" class="form-label">New Password:</label>
                    <input type="Password" class="form-control" id="npass" value="">
                  </div>
                  <div class="form-group">
                    <label for="vpass" class="form-label">Verify Password:</label>
                    <input type="Password" class="form-control" id="vpass" value="">
                  </div>
                  <button type="submit" class="btn btn-primary me-2">Submit</button>
                  <button type="reset" class="btn bg-soft-danger">Cancle</button>
                </form>
              </template>
            </iq-card>
          </tab-content-item>
          <tab-content-item :active="false" id="emailandsms" aria-labelled-by="pills-sms-tab">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Email and SMS</h4>
              </template>
              <template v-slot:body>
                <form>
                  <div class="form-group row align-items-center">
                    <label class="col-md-3" for="emailnotification">Email Notification:</label>
                    <div class="col-md-9 form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked11" checked>
                      <label class="form-check-label" for="flexSwitchCheckChecked11">Checked switch checkbox input</label>
                    </div>
                  </div>
                  <div class="form-group row align-items-center">
                    <label class="col-md-3" for="smsnotification">SMS Notification:</label>
                    <div class="col-md-9 form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked12" checked>
                        <label class="form-check-label" for="flexSwitchCheckChecked12">Checked switch checkbox input</label>
                    </div>
                  </div>
                  <div class="form-group row align-items-center">
                    <label class="col-md-3" for="npass">When To Email</label>
                    <div class="col-md-9">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault12">
                        <label class="form-check-label" for="flexCheckDefault12">
                            You have new notifications.
                        </label>
                      </div>
                      <div class="form-check d-block">
                        <input class="form-check-input" type="checkbox" value="" id="email02">
                        <label class="form-check-label" for="email02">You're sent a direct message</label>
                      </div>
                      <div class="form-check d-block">
                        <input type="checkbox" class="form-check-input" id="email03" checked="">
                        <label class="form-check-label" for="email03">Someone adds you as a connection</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row align-items-center">
                    <label class="col-md-3" for="npass">When To Escalate Emails</label>
                    <div class="col-md-9">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="email04">
                        <label class="form-check-label" for="email04">
                            Upon new order.
                        </label>
                      </div>
                      <div class="form-check d-block">
                        <input class="form-check-input" type="checkbox" value="" id="email05">
                        <label class="form-check-label" for="email05">New membership approval</label>
                      </div>
                      <div class="form-check d-block">
                        <input type="checkbox" class="form-check-input" id="email06" checked="">
                        <label class="form-check-label" for="email06">Member registration</label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary me-2">Submit</button>
                  <button type="reset" class="btn bg-soft-danger">Cancle</button>
                </form>
              </template>
            </iq-card>
          </tab-content-item>
          <tab-content-item :active="false" id="manage-contact" aria-labelled-by="pills-contact-tab">
            <iq-card>
              <template v-slot:headerTitle>
                  <h4 class="card-title">Manage Contact</h4>
              </template>
              <template v-slot:body>
                <form>
                  <div class="form-group">
                    <label for="cno"  class="form-label">Contact Number:</label>
                    <input type="text" class="form-control" id="cno" value="001 2536 123 458">
                  </div>
                  <div class="form-group">
                    <label for="email"  class="form-label">Email:</label>
                    <input type="text" class="form-control" id="email" value="Bnijone@demo.com">
                  </div>
                  <div class="form-group">
                    <label for="url"  class="form-label">Url:</label>
                    <input type="text" class="form-control" id="url" value="https://getbootstrap.com">
                  </div>
                  <button type="submit" class="btn btn-primary me-2">Submit</button>
                  <button type="reset" class="btn bg-soft-danger">Cancle</button>
                </form>
              </template>
            </iq-card>
          </tab-content-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { socialvue } from '../../config/pluginInit'

export default {
  name: 'ProfileEdit',
  mounted () {
    // socialvue.index()
  },
  data () {
    return {
      user: {
        fname: '',
        lname: '',
        name: '',
        username: '',
        email: '',
        password: '',
        address1: '',
        address2: '',
        company_name: '',
        profile_image: require('../../assets/images/user/11.png'),
        mobile_no: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        role: '',
        gender: '',
        dob: '',
        url: ''
      },
      currentPassword: '',
      countries: [
        { value: 'Canada', text: 'Canada' },
        { value: 'Niada', text: 'Niada' },
        { value: 'USA', text: 'USA' },
        { value: 'India', text: 'India' },
        { value: 'Africa', text: 'Africa' }
      ],
      states: [
        { value: 'California', text: 'California' },
        { value: 'Florida', text: 'Florida' },
        { value: 'Georgia', text: 'Georgia' },
        { value: 'Connecticut', text: 'Connecticut' },
        { value: 'Louisiana', text: 'Louisiana' }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.user.name = this.user.fname + ' ' + this.user.lname
      this.$router.replace('/user/user-list')
    },
    previewImage: function (event) {
      const input = event.target

      if (input.files && input.files[0]) {
        const reader = new FileReader()

        reader.onload = (e) => {
          this.user.profile_image = e.target.result
        }

        reader.readAsDataURL(input.files[0])
      }
    },
    changePassword: function () {
    }
  }
}
</script>
<style>
.profile-img-edit{
  position: relative;
    display: inline-block;
    height: 150px;
    width: 150px;
}
.profile-pic{
  max-width: 100%;
    display: block;
}
.p-image{
  position: absolute;
    top: auto;
    right: 8px;
    bottom: 10px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: #50b5ff;
    color: #fff;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    line-height: 28px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
}
.file-upload{
  display: none;
}
.upload-button{
  font-size: 1.5em;
}
</style>
