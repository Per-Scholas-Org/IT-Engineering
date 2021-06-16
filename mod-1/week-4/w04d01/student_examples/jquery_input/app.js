$(() => {
  
    const list = [];

    $('form').on('submit', (event)=>{
        let input =  $('#input-box').val();
        list.push(input);

        // console.log(input);
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
        render();
    });

    const render = () => {
        console.log("list:", list);
        $("ul").empty();
        list.forEach((item) => {
                // console.log(item);
                $("ul").append(` <li> ${item} </li>` );
            });
        $('li').on('click', (event)=>{
            $(event.currentTarget).css('text-decoration', "line-through");
            $(event.currentTarget).effect("shake")
        });
    }


});

