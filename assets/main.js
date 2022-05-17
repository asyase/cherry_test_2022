window.addEventListener('load', (event) => {
    document.getElementById("search").addEventListener("click",function ()
    {
       document.getElementById("search-container").classList.toggle("hidden");
        this.classList.toggle("bg-red");

    })

    document.getElementById("burger").addEventListener("click",function ()
    {
        this.classList.add("hidden");
        document.getElementById("close-img").classList.remove("hidden");
        document.getElementById("mob-menu").classList.remove("hidden");

    })

    document.getElementById("close-img").addEventListener("click",function ()
    {
        this.classList.add("hidden");
        document.getElementById("burger").classList.remove("hidden");
        document.getElementById("mob-menu").classList.add("hidden");

    })
});