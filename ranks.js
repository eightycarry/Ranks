$(document).ready(function(){

    $("form").submit(showRank);

    function showRank(event){

        //stop the flashing form
        event.preventDefault();

        //ask jQuery for first name
        var firstName = $("#firstName").val();

        //ask jQuery for last name
        var lastName = $("#lastName").val();

        //ask jQuery for selected radio boxes
        var selectedBoxes = $("input[name=rank]:checked").val();

        var selectedColor= $("input[name=rank]:checked").data("color");

        //output name and rank to table
        $("#name1").text(firstName);
        $("#name2").text(lastName);
        $("#rankName").text(selectedBoxes);
        $("span").css("color", selectedColor);
    };

});