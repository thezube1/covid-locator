import axios from "axios";
import Papa from "papaparse";

export default async (country) => {
  // create date objects
  const current_date = new Date();
  current_date.setDate(current_date.getDate() - 1);
  const old_date = new Date();
  old_date.setDate(old_date.getDate() - 10);

  // get csv data links
  const new_csv = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${(
    "0" +
    (current_date.getMonth() + 1)
  ).slice(-2)}-${("0" + current_date.getDate()).slice(
    -2
  )}-${current_date.getFullYear()}.csv`;
  const old_csv = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${(
    "0" +
    (old_date.getMonth() + 1)
  ).slice(-2)}-${("0" + (old_date.getDate() - 1)).slice(
    -2
  )}-${old_date.getFullYear()}.csv`;

  const vaccine_link = `https://raw.githubusercontent.com/govex/COVID-19/master/data_tables/vaccine_data/global_data/vaccine_data_global.csv`;

  // make http request
  const new_data_link = axios.get(new_csv);
  const old_data_link = axios.get(old_csv);
  const vaccine_data_link = axios.get(vaccine_link);

  const response = await axios.all([
    new_data_link,
    old_data_link,
    vaccine_data_link,
  ]);

  // begin parsing

  const new_data = Papa.parse(response[0].data);
  const old_data = Papa.parse(response[1].data);
  const vaccine_data = Papa.parse(response[2].data);

  let new_cases = 0;
  let old_cases = 0;
  let fatality_ratio = 0;
  let vaccinated = 0;

  let new_temp = [];
  let old_temp = [];
  let death_temp = [];
  let vaccine_temp = [];

  // cycle new cases
  for (const property in new_data.data) {
    const country_ = new_data.data[property][3];
    if (country_ === country) {
      new_temp.push(new_data.data[property][7]);
      death_temp.push(new_data.data[property][8]);
    }
  }
  // cycle old cases
  for (const property in old_data.data) {
    const country_ = old_data.data[property][3];
    if (country_ === country) {
      old_temp.push(old_data.data[property][7]);
    }
  }

  // begin vaccine data collection

  for (const property in vaccine_data.data) {
    const country_ = vaccine_data.data[property][1];
    if (country_ === country) {
      vaccine_temp.push(vaccine_data.data[property][5]);
      //vaccinated = vaccine_data.data[property][5];
    }
  }

  // add up all data
  new_temp.map((item) => {
    new_cases += parseInt(item);
  });
  old_temp.map((item) => {
    old_cases += parseInt(item);
  });
  death_temp.map((item) => {
    fatality_ratio += parseInt(item);
  });
  fatality_ratio = fatality_ratio / new_cases;

  vaccine_temp.map((item) => {
    item === "" ? (vaccinated += 0) : (vaccinated += parseInt(item));
  });

  return {
    special: false,
    country: country,
    total_cases: new_cases,
    ten_day_cases: new_cases - old_cases,
    vaccinated: vaccinated,
    fatality_ratio: fatality_ratio,
  };
};
