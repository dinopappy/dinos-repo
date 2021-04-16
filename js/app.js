//////////////////////////////////////////////////
// Get data from Google Sheets
/////////////////////////////////////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/1_gF9Jwz71nK6o8FToZKJ7h-pNMTrez016mtdOwk4BPw/1/public/full?alt=json")
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


    projects.forEach(prj => {
        
        let $projectCard = $(`
            <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card">
            <img src="${prj.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${prj.project}</h5>
                <p class="card-text">
                        ${prj.description}
                </p>
                <a href="${prj.liveurl}" class="btn btn-primary" target="_blank">Check It Out</a>
            </div>
            </div>
        </div>
        `)
        $('div.row').append($projectCard)
    })
})