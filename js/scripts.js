function destination(location, landmarks, date) {
    this.location = location;
    this.landmarks = landmarks;
    this.date = date;
  
};

$(function() {

    $("#destination").submit(function(event) {
        event.preventDefault();

        var location = $("#location").val();
        var landmarks = $("#landmarks").val();
        var date = $("#date").val();

        var newDestination = new destination(location, landmarks, date);

        $("#input-destinations").append("<li><span class='destinations'>" + newDestination.location + "</span></li>");


    $(".destinations").last().click(function() {

        $("#show-details").show();
        $("#show-details h2").text(newDestination.location);
        $(".location").text(newDestination.location);
        $(".landmarks").text(newDestination.landmarks);
        $(".date").text(newDestination.date);

        });        
    });
});