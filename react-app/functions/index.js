// import Papa from 'papaparse';

const fetch = require("node-fetch");
const Papa = require('papaparse');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const proxyurl = "https://cors-anywhere.herokuapp.com/"
const dialysisSource = proxyurl + 'http://raw.githubusercontent.com/kelsiej/csv/master/dialysis.csv';

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {

  const object = {text: "hello from firebase"}
  response.set("Content-Type", "text/plain");
  response.set("Access-Control-Allow-Origin","*");
  response.send(object);
});

exports.parseDialysis = functions.https.onRequest(async (request, response) => {
  let csvData = await fetchCSV(dialysisSource);

  let data = [];
  await Papa.parse(csvData, {
    complete: (result) => {
      return data = result.data;
    }
  });

  let allArray = [];
  for (let i = 1; i < data.length - 1; i++) {
    let blah = {
        providerNumber: data[i][0], Network: data[i][1], facilityName: data[i][2],
        addressLine1: data[i][3], addressLine2: data[i][4], City: data[i][5],
        State: data[i][6], Zip: data[i][7], County: data[i][8], phoneNumber: data[i][9],
        profitOrNonProfit: data[i][10], chainOwned: data[i][11], chainOrganization: data[i][12],
        lateShift: data[i][13], numberOfDialysisStations: data[i][14], offersInCenterHemodialysis: data[i][15],
        offersInCenterPeritonealDialysis: data[i][16], offersHomeHemodialysisTraining: data[i][7], Location: data[i][18]
    };
    allArray.push(blah);
  }

  response.set("Content-Type", "text/plain");
  response.set("Access-Control-Allow-Origin","*");
  response.send({dialysis: allArray})

})



function fetchCSV(source) {
  return fetch(source).then(function (response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder('utf-8');

      return reader.read().then(function (result) {
          return decoder.decode(result.value);
      });
  });
}


