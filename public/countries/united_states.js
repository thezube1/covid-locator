const Papa = require("papaparse");
import axios from "axios";
import convertRegion from "../../utils/convertRegion";

export default async (location) => {
  const latitude = location.data.lat;
  const longitude = location.data.lon;
  const county = location.data.address.county;
  const state = location.data.address.state;
  const counties = county.split(" ");
  counties.push(county);
  counties.push(`${county} County`);

  // handle census data first
  const fcc_data = await axios.get(
    `https://geo.fcc.gov/api/census/area?lat=${latitude}&lon=${longitude}&format=json`
  );

  const state_fips = fcc_data.data.results[0].state_fips;
  const county_fips = fcc_data.data.results[0].county_fips.replace(
    state_fips,
    ""
  );
  const census_data = await axios.get(
    `https://api.census.gov/data/2019/pep/charagegroups?get=POP&for=county:${county_fips}&in=state:${state_fips}`
  );
  console.log(census_data.data);

  // create date objects
  const current_date = new Date();
  current_date.setDate(current_date.getDate() - 2);
  console.log(current_date);
  const old_date = new Date();
  old_date.setDate(old_date.getDate() - 10);
  const vaccine_date = new Date();
  vaccine_date.setDate(vaccine_date.getDate() - 1);

  // get csv data links
  const new_csv = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${(
    "0" +
    (current_date.getMonth() + 1)
  ).slice(-2)}-${("0" + current_date.getDate()).slice(
    -2
  )}-${current_date.getFullYear()}.csv`;
  console.log(new_csv);
  const old_csv = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${(
    "0" +
    (old_date.getMonth() + 1)
  ).slice(-2)}-${("0" + (old_date.getDate() - 1)).slice(
    -2
  )}-${old_date.getFullYear()}.csv`;

  // make http request
  const new_data_link = axios.get(new_csv);
  const old_data_link = axios.get(old_csv);

  const response = await axios.all([new_data_link, old_data_link]);

  const new_data = Papa.parse(response[0].data);
  const old_data = Papa.parse(response[1].data);

  let new_cases = 0;
  let old_cases = 0;
  let fatality_ratio = 0;

  for (const property in new_data.data) {
    const state_ = new_data.data[property][2];
    const county_ = new_data.data[property][1];

    if (state_ === state) {
      counties.map((county) => {
        if (county_ === county) {
          new_cases = new_data.data[property][7];
          fatality_ratio = new_data.data[property][13];
        }
      });
    }
  }
  for (const property in old_data.data) {
    const state_ = old_data.data[property][2];
    const county_ = old_data.data[property][1];

    if (state_ === state) {
      counties.map((county) => {
        if (county_ === county) {
          old_cases = old_data.data[property][7];
        }
      });
    }
  }

  let vaccinated = 0;

  await Promise.all(
    counties.map(async (county) => {
      const request = await axios.get(
        `https://data.cdc.gov/resource/8xkx-amqh.json?recip_state=${convertRegion(
          state,
          2
        )}&recip_county=${county}&date=${
          vaccine_date.toISOString().split("T")[0] + "T00:00:00.000"
        }`
      );

      if (request.data.length === 1) {
        vaccinated = request.data[0].series_complete_pop_pct;
      }
    })
  );

  return {
    special: true,
    data: [
      [state, "State"],
      [county, "County"],
      [new_cases, "Total Cases", "num"],
      [new_cases - old_cases, "Cases In 10 Days", "num"],
      [vaccinated, "Vaccinated", "percent"],
      [fatality_ratio, "Fatality Ratio"],
    ],
  };
};

// US Census Data instructions
// https://www.census.gov/data/developers/guidance/api-user-guide.Overview.html

// First you MUST get FIPS information from FCC reverse geolocation
// Census API doesn't take the name of counties as a string

// -- step 1 --

// https://geo.fcc.gov/api/census/area?lat=47.608013&lon=-122.335167&format=json
// lat and long can change

// -- step 2 --

// https://api.census.gov/data/2019/pep/charagegroups?get=NAME,POP&for=county:033&in=state:53
// county = county FIPS (without state fips), and state = state fips

// -- step 3 --
// retrieve the data
