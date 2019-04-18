const rp = require('request-promise');
const $ = require('cheerio')
const snoho = 'http://www.snoco.org/App4/SPW/PWApp/roads/emclosure/index.html';
const king = 'https://gismaps.kingcounty.gov/MyCommute/rss.aspx';


export function snohomishAlerts() {
  return rp(snoho)
  .then(function(html){
    // Grab table of closures and size of table
    let table = $('table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > div > div > div > table > tbody > tr', html);
    let size = table.length;
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
    let names = [];
    let times = [];
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
        }
    }

    // Consolidate names and times into a single dictionary
    // Keys are road names and values are are the time dictionary
    let dict = {};
    for (let i = 0; i < names.length; i++) {
        dict[names[i]] = times[i];
    }
    // console.log(dict);

    // return dict;

    return { 
      dict
    };
  })
  .catch(function(err){
    console.log("Error Retrieving Data from Snohomish County Alerts")
  });

  // return object;
}

const proxyurl = "https://cors-anywhere.herokuapp.com/"

export function kingAlerts() {
  return rp(proxyurl + king)
  .then(function(html){

    // Grab XML items
    let table = $('item' ,html);
    let size = table.length;
    
    // Loop through items and place road names into names
    //  place link, desc, and date into info
    let names = [];
    let info = [];
    for (let row = 0; row < size; row++) {
      names.push(table[row].children[0].children[0].data);
      let line = {"link": table[row].children[2].data,
                  "desc": table[row].children[3].children[0].data,
                  "date": table[row].children[6].children[0].data};
      info.push(line);
    }

    // Consolidate names and info into a single dictionary
    // Keys are road names and values are the info dictionary
    let dict = {};
    for (let i = 0; i < names.length; i++) {
        dict[names[i]] = info[i];
    }
    // console.log(dict);
    // return {
    //   dict
    // }
    return dict;
  })
  .catch(function(err){
    console.log("Error Retrieving Data from King County Alerts")
  });
}
