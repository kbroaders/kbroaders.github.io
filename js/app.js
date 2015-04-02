//@codekit-prepend "../bower_components/jquery/dist/jquery.js"
//@codekit-prepend "../bower_components/fastclick/lib/fastclick.js"
//@codekit-prepend "../bower_components/foundation/js/foundation/foundation.js"
//@codekit-prepend "../bower_components/foundation/js/foundation/foundation.accordion.js"
//@codekit-prepend "../bower_components/foundation/js/foundation/foundation.interchange.js"
//@codekit-prepend "../bower_components/foundation/js/foundation/foundation.orbit.js"

$(document).foundation();

$(".accordion dd").on("click", "a:eq(0)", function (event)
      {
        var dd_parent = $(this).parent();

        if(dd_parent.hasClass('active')){
          $(".accordion dd div.content:visible").slideToggle("normal");
				}
        else
        {
          $(".accordion dd div.content:visible").slideToggle("normal");
          $(this).parent().find(".content").slideToggle("normal");
        }
      });