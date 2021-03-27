<div class="row mt-5">
  <div class="col-lg-3 col-md-2 col-sm-1"></div>
  <div class="col-lg-6 col-md-8 col-sm-10 mx-auto p-0">
    <div class="login-box tab tab-active">
      <div class="login-snip">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked>
        <label for="tab-1" class="tab">Login</label>
        <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up
        </label>
        <div class="login-space">
          <div class="login mt-4">
            <div class="group mt-3">
              <label for="login_email" class="label">Email</label>
              <input id="login_email" name="login_email" type="email" class="input" placeholder="Enter your email address" required>
            </div>
            <div class="group mt-3">
              <label for="login_pass" class="label">Password</label>
              <input id="login_pass" name="login_pass" type="password" class="input" data-type="password" placeholder="Enter your password">
            </div>
            <div class="group mt-3">
              <input id="check" type="checkbox" class="check" checked>
            </div>
            <div class="group mt-5">
              <input type="button" name="sign_id" id="sign_in" class="button" value="Sign In">
            </div>
            <div class="hr"></div>
          </div>
          <div class="sign-up-form">
            <div class="group">
              <label for="reg_email" class="label">Email Address</label>
              <input id="reg_email" name="reg_email" type="text" class="input" placeholder="Enter your email address" required>
            </div>
            <div class="group">
              <label for="reg_pass" class="label">Password</label>
              <input id="reg_pass" name="reg_pass" type="password" class="input" data-type="password" placeholder="Create your password" required>
            </div>
            <div class="group">
              <label for="repeat_pass" class="label">Repeat Password</label>
              <input id="repeat_pass" name="repeat" type="password" class="input" data-type="password" placeholder="Repeat your password" required>
            </div>
            <div class="group">
              <input type="button" name="sign_up" id="sign_up" class="button" value="Sign Up" required>
            </div>
            <div class="hr"></div>
            <div class="foot">
              <label for="tab-1">Already Member?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-info tab">
      <div class="card">
        <div class="card-header bg-sp">
          <div class="card-title">
            <p class="h2 text-center text-light mb-0 py-2">USER INFO</p>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-3 col-md-2 col-sm-1"></div>
            <div class="col-lg-6 col-md-8 col-sm-10">
              <div class="form-group">
                <label for="full_name" class="sub-title">Full Name</label>
                <input type="text" id="full_name" class="form-control" required>
              </div>
              <div class="form-group">
                <div class="form-inline">
                  <input type="radio" name="gender" value="male" class="form-control">
                  <span class="px-2">Male</span>
                  <input type="radio" name="gender" value="female" class="form-control">
                  <span class="px-2">Female</span>
                </div>
              </div>
              <div class="form-group">
                <label for="place" class="sub-title">Place of Birth</label>
                <input type="text" id="place" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="birth" class="sub-title">Date of Birth</label>
                <input type="date" id="birthday" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="phone" class="sub-title">Phone Number</label>
                <input type="phone" id="phone" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="address" class="sub-title">Full Address</label>
                <input type="text" id="address" class="form-control" required>
              </div>
              <div class="form-group d-flex justify-content-end">
                <button class="btn btn-info px-3" id="submit">Submit</button>
              </div>
            </div>
            <div class="col-lg-3 col-md-2 col-sm-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-2 col-sm-1"></div>
</div>