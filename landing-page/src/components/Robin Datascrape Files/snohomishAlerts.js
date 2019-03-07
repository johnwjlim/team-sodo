const rp = require('request-promise');
const $ = require('cheerio')
const snoho = 'http://www.snoco.org/App4/SPW/PWApp/roads/emclosure/index.html';

rp(snoho)
  .then(function(html){
    //success!

    // Grab table of closures and size of table
    let size = $('table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > div > div > div > table > tbody > tr', html).length;
    let table = $('table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > div > div > div > table > tbody > tr', html);

    // OPTION 1
    // Grab road alerts

    // let road_closed = $('.road_closed', html)
    // let road_open = $('.road_open', html).text();
    // let road_times = $('.road_times', html).text();
    // let road_times_lft = $('.road_times_left', html).text();

    // Loop through table and determine open and closed road indexes
    // Loop through list of indexes and pop in elements of either open or closed roads with road times

    // OPTION 2
    // For every table row
    const names = [];
    const times = [];
    for (let row = 0; row < size; row++) {
        if (row % 2 == 0) {
            // EVEN (ROAD NAME)
            names.push(table[row].children[1].children[0].data);
            //console.log(table[row].children[1].children[0].data);
        }
        else {
            // ODD (ROAD TIMES)
            let line = [table[row].children[1].children[0].data.replace(/(\t\n|\n|\t)/gm, ""),  
                        table[row].children[3].children[0].data.replace(/(\t\n|\n|\t)/gm, ""), 
                        table[row].children[5].children[0].data.replace(/(\t\n|\n|\t)/gm, "")];
            times.push(line);
            //times.push(table[row].children[1].children[0].data + table[row].children[3].children[0].data + table[row].children[5].children[0].data);
            //console.log(table[row].children[1].children[0].data + table[row].children[3].children[0].data + table[row].children[5].children[0].data);
        }
    }

    const dict = {};
    for (let i = 0; i < names.length; i++) {
        dict[names[i]] = times[i];
    }

    return {
        dict
    }
  })
  .catch(function(err){
    console.log("Error Retrieving Data from Snohomish County Alerts")
  });
