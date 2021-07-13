const axios = require("axios");
const Papa = require("papaparse");

export default function handler(req, res) {
  if (req.method === "POST") {
    //https://dev.socrata.com/foundry/data.cdc.gov/8xkx-amqh
    axios
      .get("https://data.cdc.gov/resource/8xkx-amqh.json?recip_state=WA")
      .then((res) => console.log(res.data));
    const state = req.body.state;
    const counties = req.body.county.split(" ");

    // dates
    const datetime = new Date();
    const datetime_2 = new Date();
    datetime_2.setDate(datetime_2.getDate() - 10);

    // most recent data
    const csv_data = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${(
      "0" +
      (datetime.getMonth() + 1)
    ).slice(-2)}-${("0" + (datetime.getDate() - 1)).slice(
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

          for (const property in dataNew_.data) {
            const state_ = dataNew_.data[property][2];
            const county_ = dataNew_.data[property][1];

            if (state_ === state) {
              counties.map((county) => {
                if (county_ === county) {
                  newCases = dataNew_.data[property][7];
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
          res.status(200).send({
            total_cases: newCases,
            ten_day_cases: newCases - oldCases,
          });
        })
      )
      .catch((err) => console.log(err));
  }
}
