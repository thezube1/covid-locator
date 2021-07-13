import { resolveHref } from "next/dist/next-server/lib/router/router";

const axios = require("axios");
const Papa = require("papaparse");
let cases = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    const state = req.body.state;
    const counties = req.body.county.split(" ");
    const datetime = new Date();
    const csv_data = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${(
      "0" +
      (datetime.getMonth() + 1)
    ).slice(-2)}-${("0" + (datetime.getDate() - 1)).slice(
      -2
    )}-${datetime.getFullYear()}.csv`;
    const response = axios
      .get(csv_data)
      .then((res) => Papa.parse(res.data))
      .catch((err) => console.log(err));
    response
      .then((v) => {
        for (const property in v.data) {
          const state_ = v.data[property][2];
          const county_ = v.data[property][1];

          if (state_ === state) {
            counties.map((county) => {
              if (county_ === county) {
                const cases = v.data[property][7];
                res.status(200).send(cases);
                res.end();
              }
            });
          }
        }
      })
      .catch((err) => console.log(err));
  }
}
