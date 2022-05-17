window.addEventListener('load', (event) => {
    document.getElementById("search").addEventListener("click",function ()
    { console.log(document.querySelector(".header-search"));
        document.querySelector(".header-search").classList.toggle("hidden");

    })
});