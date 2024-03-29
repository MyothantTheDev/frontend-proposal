
//execute script after page load
window.onload = function digital_fn(){

    //toggle button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(e){
        //console.log(toggle);
        collapse.classList.toggle('active');
    });

    //monsonry js
    let grid = document.querySelector("#site-main .recent-work-area .images-flex");
    let msnry = new Masonry(grid,{
        itemSelector: '.flex-item',
        gutter: 20,
        percentPosition: true,
    })
}