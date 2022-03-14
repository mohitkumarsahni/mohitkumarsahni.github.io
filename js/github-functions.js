function getLastUpdateTime() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.github.com/repos/mohitkumarsahni/mohitkumarsahni.github.io/branches/master", false ); // false for synchronous request
    xmlHttp.send( null );
    document.getElementById("last-update-date").innerHTML = new Date(JSON.parse(xmlHttp.responseText).commit.commit.committer.date).toLocaleDateString("en-US", options);
}

function getNumberOfAnimeTales() {
    const url = "https://api.github.com/repos/mohitkumarsahni/mohitkumarsahni.github.io/contents/anime-tales";
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    document.getElementById("anime-tales").innerHTML = "<span class=\"heading\">" + (JSON.parse(xmlHttp.responseText).length - 1) + "</span><span class=\"description\">Anime Tales</span>";
}

function getNumberOfTechTales() {
    const url = "https://api.github.com/repos/mohitkumarsahni/mohitkumarsahni.github.io/contents/tech-tales";
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    document.getElementById("tech-tales").innerHTML = "<span class=\"heading\">" + (JSON.parse(xmlHttp.responseText).length - 1) + "</span><span class=\"description\">Tech Tales</span>";
}

function getNumberOfComicTales() {
    const url = "https://api.github.com/repos/mohitkumarsahni/mohitkumarsahni.github.io/contents/comic-tales";
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    document.getElementById("comic-tales").innerHTML = "<span class=\"heading\">" + (JSON.parse(xmlHttp.responseText).length - 1) + "</span><span class=\"description\">Comic Tales</span>";
}

function getNumberOfAllTales() {}

