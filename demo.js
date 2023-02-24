$(document).ready(function() {
    // $("h1").css("color", "red");
    $("h1").addClass("margin-50 text-style")
    $("h1").click(function(){
        $("h1").css("color", "purple");
    });

    $("button").click(function(){
        $("h1").css("color", "red");
    })

    $(document).keypress(function(event){
        $("h1").text(event.key);
    })

    // $("h1").append("<button>New</button>");
    // $("h1").prepend("<button>New</button>");
    // $("h1").before("<h2>World</h2>");
    // $("h1").after("<h2>World</h2>");
    // $("h2").remove();
    // $("button").remove();
    // $("button").text("Hello World");
    // $("button").html("<em>Hey</em>");
});