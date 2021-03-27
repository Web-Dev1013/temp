$(function () {
  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // Init define
  // ---------------------------------------- Start TAB1 ---------------------------------------------
  var tab1_innerHtml = "";
  for (var i = 0; i < tab1_queries.length; i++) {
    tab1_innerHtml += '<div class="question mt-3">';
    tab1_innerHtml += '<p class="h6">' + (i + 1) + "&nbsp;&nbsp; " + tab1_queries[i].question + '</p>';
    tab1_innerHtml += '<div class="mx-3">';
    tab1_innerHtml += '<div class="form-group">';
    tab1_innerHtml += '<input type="radio" name="tab1_query_' + (i + 1) + '" value="2">';
    tab1_innerHtml += '<span class="align-middle px-2">Yes</span></div>';
    tab1_innerHtml += '<div class="form-group">';
    tab1_innerHtml += '<input type="radio" name="tab1_query_' + (i + 1) + '" value="1">';
    tab1_innerHtml += '<span class="align-middle px-2">No</span>';
    tab1_innerHtml += '</div></div><div class="dropdown-divider"></div></div>';
  }
  $("#tab_1").html(tab1_innerHtml);
  $("#tab_1 .question:eq(0)").addClass("q-action d-block");

  // -------------------------------------------- End Tab1 ---------------------------------------------

  // --------------------------------------------- Start Tab2 -------------------------------------------

  var tab2_innerHtml = '<div id="accordion2">';
  for (var i = 0; i < tab2_queries.length; i++) {
    tab2_innerHtml += '<div class="card group_' + (i + 1) + '">';
    tab2_innerHtml += '<div class="card-header">';
    tab2_innerHtml += '<a class="card-link" data-toggle="collapse" href="#collapse' + i + 'One">Query Section &nbsp;&nbsp;' + (i + 1) + ' </a>';
    tab2_innerHtml += '</div><div id="collapse' + i + 'One" class="collapse" data-parent="#accordion2">';
    tab2_innerHtml += '<div class="card-body">';
    for (var j = 0; j < tab2_queries[i].length; j++) {
      if (j == 0) {
        tab2_innerHtml += '<div class="question q-action d-block">';
      } else {
        tab2_innerHtml += '<div class="question">';
      }
      tab2_innerHtml += '<p class="h6">' + (j + 1) + '.&nbsp;&nbsp; ' + tab2_queries[i][j].question + '</p>';
      tab2_innerHtml += '<div class="mx-3">';
      tab2_innerHtml += '<div class="form-group">';
      tab2_innerHtml += '<input type="radio" name="tab2_query_' + i + "_" + j + '" value="' + (i == 0 ? 1 : 2) + '">';
      tab2_innerHtml += '<span class="align-middle px-2">Yes</span></div>';
      tab2_innerHtml += '<div class="form-group">';
      tab2_innerHtml += '<input type="radio" name="tab2_query_' + i + "_" + j + '" value="' + (i == 0 ? 2 : 1) + '">';
      tab2_innerHtml += '<span class="align-middle px-2">No</span>';
      tab2_innerHtml += '</div></div><div class="dropdown-divider"></div></div>';
    }
    tab2_innerHtml += '</div></div></div>';
  }
  $("#tab_2").html(tab2_innerHtml);
  // --------------------------------------------- End Tab2 ---------------------------------------------

  // ---------------------------------------------- Start Tab3 ------------------------------------------
  var tab3_innerHtml = '<div id="accordion3">';
  for (var i = 0; i < tab3_queries.length; i++) {
    tab3_innerHtml += '<div class="card">';
    tab3_innerHtml += '<div class="card-header">';
    tab3_innerHtml += '<a class="card-link" data-toggle="collapse" href="#subCollapse_' + i + '">Query Section &nbsp;&nbsp;' + (i + 1) + ' </a>';
    tab3_innerHtml += '</div>';
    tab3_innerHtml += '<div id="subCollapse_' + i + '" class="collapse" data-parent="#accordion3">';
    tab3_innerHtml += '<div class="card-body p-0">';
    tab3_innerHtml += '<div id="subAccordion_' + i + '">';
    for (var j = 0; j < tab3_queries[i].length; j++) {
      tab3_innerHtml += '<div class="card-header px-5">';
      tab3_innerHtml += '<a class="card-link" data-toggle="collapse" href="#subCollapse_' + i + '_' + j + '"> Query Group &nbsp;&nbsp;' + (j + 1) + '</a>';
      tab3_innerHtml += '</div>';
      tab3_innerHtml += '<div id="subCollapse_' + i + '_' + j + '" class="collapse group" data-parent="#subAccordion_' + i + '"';
      tab3_innerHtml += '<div class="card-body">';
      for (var k = 0; k < tab3_queries[i][j].length; k++) {
        if (k == 0) {
          tab3_innerHtml += '<div class="question px-4 q-action d-block"';
        } else {
          tab3_innerHtml += '<div class="question px-4">';
        }
        tab3_innerHtml += '<p class="h6">' + (k + 1) + '.&nbsp;&nbsp; ' + tab3_queries[i][j][k].question + '</p>';
        tab3_innerHtml += '<div class="mx-3">';
        tab3_innerHtml += '<div class="form-group">';
        tab3_innerHtml += '<input type="radio" name="tab3_query_' + i + "_" + j + "_" + k + '" value="2">';
        tab3_innerHtml += '<span class="align-middle px-2">Yes</span>';
        tab3_innerHtml += '</div>';
        tab3_innerHtml += '<div class="form-group">';
        tab3_innerHtml += '<input type="radio" name="tab3_query_' + i + "_" + j + "_" + k + '" value="1">';
        tab3_innerHtml += '<span class="align-middle px-2">No</span>';
        tab3_innerHtml += '</div>';
        tab3_innerHtml += '</div>';
        tab3_innerHtml += '<div class="dropdown-divider"></div>';
        tab3_innerHtml += '</div>';
      }
      tab3_innerHtml += '</div>'
    }
    tab3_innerHtml += "</div></div></div></div>";
  }
  tab3_innerHtml += '</div></div>'
  $("#tab_3").html(tab3_innerHtml);

  // ----------------------------------------------- End Tab3 -------------------------------------------

  // ---------------------------------------------- Start Tab4 ------------------------------------------
  var answer_innerHtml = "";
  var query_innerHtml = '<p class="h4">Questions</p>';
  for (var i = 0; i < tab4_answer.length; i++) {
    answer_innerHtml += '<div class="form-group">';
    answer_innerHtml += '<span><i class="fa fa-check fa-lg"></i></span>';
    answer_innerHtml += '<span class="px-2">';
    answer_innerHtml += '<span class="answer_title"> Answer ' + (i + 1) + ': </span>';
    answer_innerHtml += '<span>' + tab4_answer[i].answer + '</span>';
    answer_innerHtml += '</span>';
    answer_innerHtml += '</div>';
  }
  for (var jj = 0; jj < tab4_queries.length; jj++) {
    if (jj == 0) {
      query_innerHtml += '<div id="query_' + jj + '" class="query tab pb-2 d-block">';
    } else {
      query_innerHtml += '<div id="query_' + jj + '" class="query tab pb-2">';
    }
    query_innerHtml += '<div class="d-flex justify-content-between">';
    query_innerHtml += '<div class="card-text">' + tab4_queries[jj].question + '</div>';
    query_innerHtml += '<div class="answer-package">';
    query_innerHtml += '<span class="px-1" data-toggle="tooltip" title="Answer 1"><i class="far fa-circle" aria-valuemax="0"></i></span>';
    query_innerHtml += '<span class="px-1" data-toggle="tooltip" title="Answer 2"><i class="far fa-circle" aria-valuemax="1"></i></span>';
    query_innerHtml += '<span class="px-1" data-toggle="tooltip" title="Answer 3"><i class="far fa-circle" aria-valuemax="2"></i></span>';
    query_innerHtml += '<span class="px-1" data-toggle="tooltip" title="Answer 4"><i class="far fa-circle" aria-valuemax="3"></i></span>';
    query_innerHtml += '</div>';
    query_innerHtml += '</div>';
    query_innerHtml += '<div class="dropdown-divider"></div>';
    query_innerHtml += '</div>';
  }
  $("#answer").html(answer_innerHtml);
  $("#question_section").html(query_innerHtml);

  // ------------------------------------------------ End Tab4 ------------------------------------------
  var page_num = 1;
  $("input[type=radio]").on("change", function (e) {
    $(e.target).parents(".question").next().addClass("d-block");
    setTimeout(() => {
      $(e.target).parents(".question").next().addClass("q-action");
    }, 10);
    var flag = 0;
    for (var i = 0; i < $("#tab_" + (page_num) + " .question").length; i++) {
      if ($("#tab_" + (page_num) + " .question:eq(" + i + ")").hasClass("q-action") == true) {
        flag += 0;
      } else {
        flag += 1;
      }
    }
    if (flag == 0) {
      $(".next").removeAttr("disabled");
    }

    //  Score save
    var tab = $(this).parents(".tab").attr("id");
    switch (tab) {
      case "tab_1":
        $.fn.tab1_query_func($(this));
        break;
      case "tab_2":
        $.fn.tab2_query_func($(this));
        break;
      case "tab_3":
        $.fn.tab3_query_func($(this));
        break;
    }
  });


  $(".next").on("click", function (e) {
    if (page_num <= Number($(".tab").length)) {
      $(".tab").removeClass("tab-active");
      $("#tab_" + (page_num + 1)).addClass("tab-active");
      $(this).attr("disabled", true);
      $(".back").removeAttr("disabled");
      page_num++;
    }
  });

  $(".back").on("click", function () {
    if (page_num > 1) {
      $(".tab").removeClass("tab-active");
      $("#tab_" + (page_num - 1)).addClass("tab-active");
      page_num--;
    } else {
      $(this).attr("disabled", "true");
    }
  });

  var tab1_score = [];
  $.fn.tab1_query_func = function (query) {
    if (query.attr("name") == "tab1_query_4") {
      if (tab1_score["tab1_query_3"] == 2 && query.val() == 2) {
        tab1_score["tab1_query_3"] = 2;
      } else {
        tab1_score["tab1_query_3"] = 1;
      }
    } else {
      tab1_score[query.attr("name")] = query.val();
    }
  }

  var tab2_score = [];
  $.fn.tab2_query_func = function (query) {
    if (query.parents(".card").hasClass("group_1") == true) {
      tab2_score[query.attr("name")] = query.val();
    }
    if (query.parents(".card").hasClass("group_2") == true) {
      tab2_score[query.attr("name")] = query.val();
    }
  }

  var tab3_score = [];
  $.fn.tab3_query_func = function (query) {
    var group = query.parents(".group").attr("id");
    tab3_score[group] = 0;
    tab3_score[group] += (query.val() == 2 ? 0 : 1);
  }

  // Tab 4 
  var tab4_score = [];
  var total_score = [];
  $(".query i").on("click", function () {
    var tab1_total_score = 0;
    var tab2_total_score = 0;
    var tab3_total_score = 0;
    var tab4_total_score = 0;
    $(".next").html("Finish");
    $(this).parents(".query").find("i").removeClass("fas fa-check-circle text-info");
    $(this).parents(".query").find("i").addClass("far fa-circle");
    $(this).addClass("fas fa-check-circle text-info");
    $(this).removeClass("far fa-circle");
    $(this).parents(".query").next().addClass("d-block");
    tab4_score[$(this).parents(".query").attr("id")] = $(this).attr("aria-valuemax");
    if ($(this).parents(".query").attr("id") == $(".query").eq($(".query").length - 1).attr("id")) {
      $(".next").removeAttr("disabled");
      for (key in tab1_score) {
        tab1_total_score += Number(tab1_score[key]);
      }
      total_score.push(tab1_total_score);
      for (key in tab2_score) {
        tab2_total_score += Number(tab2_score[key]);
      }
      total_score.push(tab2_total_score);
      for (key in tab3_score) {
        tab3_total_score += (Number(tab3_score[key]) == 0 ? 2 : 1);
      }
      total_score.push(tab3_total_score)
      for (key in tab4_score) {
        tab4_total_score += Number(tab4_score[key]);
      }
      total_score.push(tab4_total_score);

      console.log(total_score, total_score.length);
      setTimeout(() => {
        var total_score_innerHtml = '<div class="d-flex flex-column">';
        total_score_innerHtml += '<p class="h3 text-center py-4">Total Score</p>';
        for (var i = 0; i < total_score.length; i++) {
          total_score_innerHtml += '<div class="form-group mx-auto">';
          total_score_innerHtml += '<span class="h6">Question Part' + (i + 1) + ' Score: </span>';
          total_score_innerHtml += '<span class="h6">&nbsp; &nbsp; &nbsp;' + total_score[i] + '</span>';
          total_score_innerHtml += '</div>';
        }
        total_score_innerHtml += '</div>';
        $("#tab_5").html(total_score_innerHtml);
        $(".footer").remove();
      }, 50);
    }
  });


});