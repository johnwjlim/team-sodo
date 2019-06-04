import Papa from 'papaparse';

// const dialysisSource = 'https://cors.io/?http://raw.githubusercontent.com/kelsiej/csv/master/dialysis.csv'

const proxyurl = "https://cors-anywhere.herokuapp.com/"

// const dialysisSource = proxyurl + 'http://raw.githubusercontent.com/kelsiej/csv/master/dialysis.csv';
// const cancerSource = proxyurl + 'http://raw.githubusercontent.com/kelsiej/csv/master/Cancer-Treatment-Facility-Spreadsheet-inprogress.csv'
// const emSource = proxyurl + 'http://raw.githubusercontent.com/kelsiej/csv/master/Tri-County-Emergency-Management-Resources.csv'

const dialysisSource = proxyurl + 'https://raw.githubusercontent.com/johnwjlim/team-sodo/master/landing-page/public/data/Dialysis.csv';
const cancerSource = proxyurl + 'https://raw.githubusercontent.com/johnwjlim/team-sodo/master/landing-page/public/data/Cancer.csv'
const emSource = proxyurl + 'https://github.com/johnwjlim/team-sodo/blob/master/landing-page/public/data/Emergency%20Management.csv'



export async function getDialysisData() {
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
  return allArray;
}

function fetchCSV(source) {
  return fetch(source).then(function (response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder('utf-8');

      return reader.read().then(function (result) {
          return decoder.decode(result.value);
      });
  });
}

export async function getCancerData() {
  let csvData = await fetchCSV(cancerSource);

  let data = [];
  await Papa.parse(csvData, {
    complete: (result) => {
      return data = result.data;
    }
  });

  let objectArray = data.map((array, index) => {
    return {
      facilityName: array[0],
      addressLine1: array[1],
      city: array[2],
      phone: array[3]
    }
  })
  objectArray.pop();
  return objectArray;
}

export async function getEMContacts() {
  let csvData = await fetchCSV(emSource);

  let data = [];
  await Papa.parse(csvData, {
    complete: (result) => {
      return data = result.data;
    }
  });

  let allArray = []
  for (let i = 1; i < data.length - 1; i++) {
    let blah = {
        county: data[i][0], city: data[i][1], EMOfficePhone: data[i][2], 
        TTY: data[i][3], emergencyManager: data[i][4], title: data[i][5],
        email: data[i][6], phone: data[i][7],
          };

    allArray.push(blah);
  }

  return allArray;
}
