//////////////////////////////////////////////////
// Get data from Google Sheets
/////////////////////////////////////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/1T1pz8WHywZm7pRIBYkzpS2mxnAGNrC9A2NfuZRHhvoY/1/public/full?alt=json")
//.then for when the data when arrives
.then((data) => {
    console.log(data)
    // Map over the data, generate a simpler dataset
    const projects = data.feed.entry.map((item) => {
        return {
            description: item.gsx$description.$t,
            giturl: item.gsx$giturl.$t,
            project: item.gsx$project.$t,
            image: item.gsx$image.$t,
            liveurl: item.gsx$liveurl.$t
        }
    })
    console.log(projects)
    /////////////////////////////////////////////////
    // jQuery to render your projects below
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////////////////////////////////////
})

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
menuBtn.addEventListener('click', () => {
    if (menuOpen) {
        $(".main-menu").css("display", "block")
        $(".main-menu, .main-menu li a").css("font-size", "20px")
        $(".main-menu, .main-menu li a").css("background-color", "blue")
        $(".main-menu, .main-menu li a").css("width", "100%")
        $(".main-menu, .main-menu li a").css("text-align", "center")
        $(".main-menu, .main-menu li a").css("list-style-type", "none")
        $(".main-menu, .main-menu li a").css("text-decoration", "none")
        $(".main-menu, .main-menu li a").css("position", "relative")
        $(".main-menu, .main-menu li a").css("color", "red")
        $(".main-menu, .main-menu li a").css("z-index", "3")  
    } else {
        $(".main-menu, .main-menu li a").css("display", "none")
    }
})


//.catch in case of an error
// .catch((error) => {
//     console.error(error)
// })