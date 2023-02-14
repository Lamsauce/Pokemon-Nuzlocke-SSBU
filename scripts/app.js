const defeated = function defeated() {    
    $(document).ready(function() {
        $('img').click(function(event){
            $(this).css({ 'filter': 'saturate(0)'});
            console.log("yes");
        }); 
    });
}


console.log("test");
defeated();