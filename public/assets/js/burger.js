//Making Sure The Page Loaded
$(document).ready()
{
    $(function()
    {
        //When The Submit Button Is Clicked, Will Create A New Burger
        $("#submitButton").on("click", function(event)
        {
            event.preventDefault();

            //Gets The Name From The User Input
            var newBurger =
            {
                burger_name: $("#newName").val().trim()
            };
            
            //Routes To The API Burger In The burgers_controllers File Using Ajax
            $.ajax("/api/burger",
            {
                type: "POST",
                data: newBurger
            }).then(function(data)
            {
                console.log("Burger Added!");
                // location.reload();
                location.href = "/";
            });
        });

        //When Any Of The Devour Buttons Are Clicked, It Will Update The Burger To devoured = true
        $(".devour").on("click", function(event)
        {
            event.preventDefault();

            //Getting The ID Of The Button Which Shares The Same ID As A Burger Object In The Database
            var id = $(this).data("id");
            var burgerStatus = 
            {
                devoured: true
            };

            //Using Ajax To Route The 'Put' To The api/burger/:id Route In The burgerController.js
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