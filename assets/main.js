window.addEventListener('load', (event) => {
    document.getElementById("search").addEventListener("click",function ()
    {
       document.getElementById("search-container").classList.toggle("hidden");
        this.classList.toggle("bg-red");

    })
});