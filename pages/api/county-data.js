import { resolveHref } from "next/dist/next-server/lib/router/router";

const axios = require("axios");
const Papa = require("papaparse");
let cases = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    const state = req.body.state;
    const counties = req.body.county.split(" ");

    const csv_data =
      "https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv";
    const response = axios
      .get(csv_data)
      .then((res) => Papa.parse(res.data))
      .catch((err) => res.send(false).status(400));
    response.then((v) => {
      for (const property in v.data) {
        const state_ = v.data[property][2];
        const county_ = v.data[property][1];
        if (state_ === state) {
          counties.map((county) => {
            if (county_ === county) {
              const cases = v.data[property][4];
              res.status(200).send(cases);
            }
          });
        }
      }
    });
  }
}
