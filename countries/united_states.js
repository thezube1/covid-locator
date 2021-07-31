const Papa = require("papaparse");
import axios from "axios";
import convertRegion from "../utils/convertRegion";

export default async (location) => {
  const county = location.data.address.county;
  const state = location.data.address.state;
  const counties = county.split(" ");
  counties.push(county);
  counties.push(`${county} County`);

  // create date objects
  const current_date = new Date();
  const old_date = new Date();
  old_date.setDate(old_date.getDate() - 10);
  const vaccine_date = new Date();
  vaccine_date.setDate(vaccine_date.getDate() - 1);

  // get csv data links
  const new_csv = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${(
    "0" +
    (current_date.getMonth() + 1)
  ).slice(-2)}-${("0" + (current_date.getDate() - 2)).slice(
    -2
  )}-${current_date.getFullYear()}.csv`;
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
      vaccinated = data.data[0].series_complete_pop_pct;
      /*
      res.status(200).send({
        total_cases: newCases,
        ten_day_cases: newCases - oldCases,
        pec_vaccinated: vaccinated,
        fatality_ratio: fatalityRatio,
      });
      */
    }
  });
  console.log(new_cases, old_cases, vaccinated, fatality_ratio);
};

/*
    const state = req.body.state;
    const county = req.body.county;
    const counties = req.body.county.split(" ");
    counties.push(county);
    counties.push(`${county} County`);

    // dates
    const datetime = new Date();
    const datetime_2 = new Date();
    datetime_2.setDate(datetime_2.getDate() - 10);

    const vaccine_date = new Date();
    vaccine_date.setDate(vaccine_date.getDate() - 1);

    // most recent data
    const csv_data = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${(
      "0" +
      (datetime.getMonth() + 1)
    ).slice(-2)}-${("0" + (datetime.getDate() - 2)).slice(
      -2
    )}-${datetime.getFullYear()}.csv`;

    // 10 day old data
    const csv_data_2 = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${(
      "0" +
      (datetime_2.getMonth() + 1)
    ).slice(-2)}-${("0" + (datetime_2.getDate() - 1)).slice(
      -2
    )}-${datetime_2.getFullYear()}.csv`;

    const dataNew = axios.get(csv_data);
    const dataOld = axios.get(csv_data_2);

    axios
      .all([dataNew, dataOld])
      .then(
        axios.spread((...responses) => {
          const dataNew_ = Papa.parse(responses[0].data);
          const dataOld_ = Papa.parse(responses[1].data);

          let newCases = 0;
          let oldCases = 0;
          let fatalityRatio = 0;

          for (const property in dataNew_.data) {
            const state_ = dataNew_.data[property][2];
            const county_ = dataNew_.data[property][1];

            if (state_ === state) {
              counties.map((county) => {
                if (county_ === county) {
                  newCases = dataNew_.data[property][7];
                  fatalityRatio = dataNew_.data[property][13];
                }
              });
            }
          }
          for (const property in dataOld_.data) {
            const state_ = dataOld_.data[property][2];
            const county_ = dataOld_.data[property][1];

            if (state_ === state) {
              counties.map((county) => {
                if (county_ === county) {
                  oldCases = dataOld_.data[property][7];
                }
              });
            }
          }

          console.log(state, county, counties);
          console.log(fatalityRatio);

          let vaccinated = 0;

          counties.map((county) => {
            axios
              .get(
                `https://data.cdc.gov/resource/8xkx-amqh.json?recip_state=${convertRegion(
                  state,
                  2
                )}&recip_county=${county}&date=${
                  vaccine_date.toISOString().split("T")[0] + "T00:00:00.000"
                }`
              )
              .then((data) => {
                if (data.data.length === 1) {
                  vaccinated = data.data[0].series_complete_pop_pct;
                  res.status(200).send({
                    total_cases: newCases,
                    ten_day_cases: newCases - oldCases,
                    pec_vaccinated: vaccinated,
                    fatality_ratio: fatalityRatio,
                  });
                }
              });
          });
        })
      )
      .catch((err) => console.log(err));

      */
