<?php
if (empty($_SESSION["user"])) {
  header("Location: index.php");
}
?>
<div class="row">
  <div class="navbar navbar-expand-sm bg-light justify-content-between w-100" style="height: 100px;">
  </div>
</div>
<div class="row">
  <div class="col-lg-2 col-md-1 col-sm-1"></div>
  <div class="col-lg-8 col-md-10 col-sm-10">
    <div class="content">
      <div class="card">
        <div class="card-header bg-sp">
          <div class="card-title mb-0">
            <P class="h2 text-center text-light mb-0 py-2">QUESTION</P>
          </div>
        </div>
        <div class="card-body">
          <!-- ----------------------------------- Section 1 -------------------------------- -->
          <div class="p-4 tab tab-active" id="tab_1"></div>
          <!-- ----------------------------------- Section 2 -------------------------------- -->
          <div class="p-4 tab" id="tab_2"> </div>
          <!-- ------------------------------------Section 3 -------------------------------- -->
          <div class="p-4 tab" id="tab_3"> </div>
          <!-- ----------------------------------- Section 4 --------------------------------- -->
          <div class="p-4 tab" id="tab_4">
            <div id="answer"></div>
            <div id="question_section" class="mt-4"></div>
          </div>
          <div class="p-4 tab" id="tab_5">
          </div>
        </div>
        <div class="px-4 footer d-flex justify-content-between pb-4">
          <button class="btn btn-info px-3 back" disabled>Back</button>
          <button class="btn btn-info px-3 next" disabled>Next</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-lg-2 col-md-1 col-sm-1"></div>
</div>