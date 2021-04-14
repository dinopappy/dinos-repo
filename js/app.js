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
    if (!menuOpen) {
        $("nav .main-menu").css("display", "none")
    } else {
        $("nav .main-menu").css("display", "block")
    }
})


//.catch in case of an error
// .catch((error) => {
//     console.error(error)
// })