$(document).ready()
{
    $(function()
    {
        $("#submitButton").on("click", function(event)
        {
            event.preventDefault();
            var newBurger =
            {
                burger_name: $("#newName").val().trim()
            };

            $.ajax("/api/burger",
            {
                type: "POST",
                data: newBurger
            }).then(function()
            {
                console.log("Burger Added!");
                location.reload();
            })
        })

        $(".devour").on("click", function(event)
        {
            event.preventDefault();
            var id = $(this).data("id");
            var burgerStatus = 
            {
                devoured: true
            };

            $.ajax("/api/burger/" + id,
            {
                type: "PUT",
                data: burgerStatus
            }).then(function()
            {
                console.log("Devoured Burger!");
                location.reload();
            })
        })
    });
}