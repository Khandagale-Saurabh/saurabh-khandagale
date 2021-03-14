let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
let request = require('request');
let cheerio = require('cheerio');
console.log("Before");
request(url, cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        console.log(html);

    }
}















function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let teamNameElemArr = selectorTool(".Collapsible h5");
    let teamNameArr = [];
    for (let i = 0; i < teamNameElemArr.length; i++) {
        let teamName = selectorTool(teamNameElemArr[i].txt());
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        teamName.push(teamName);
    }

    let batsmantableArr = selectorTool(".table.batsman");
    for (let i = 0; i < batsmantableArr.length; i++) {
        let batsman = selectorTool(batsmantableArr[i].find("tbody tr .batsman-cell"));
        for (let j = 0; j < batsmanName.length; j++) {
            let name = selectorTool(batsmanName[j]).text();
            let teamNAme = teamNameArr[i];
            let link = selectorTool(batsmanNameAnchor[j]).text();
            //    let link = selectorTool(batsmanNameAnchor[j]).text();
            //console.log(name+" of "+teamNameArr[i]);
            printBirthday(link, name, teamName);
        }
    }
}



function printBirthday(link, name, teamName) {
    request(link, cb);

    function cb(error, response, html) {
        if (error) {
            console.log(error);
        } else {
            extractBirthday(html, name, teamName);
            console.log("--------------------");
        }
    }
}


function extractBirthday(html, name, teamName) {
    let selectorTool = cheerio.load(html);
    let birthdayElem = selector(".ciPlayerinformationtxt span");
    let birthday = selectorTool(birthdayElem[1]).text();
    console.log(name + " Plays for" + teamName + " was born on " + birthday);
}