import axios from "axios";
import path from "path";
import getConfig from "next/config";
import util from "util";
import fs from "fs";
const { serverRuntimeConfig } = getConfig();

import defaultFunc from "./countries/default";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // get geolocation & country
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const location = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );

    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    const country = regionNames.of(
      location.data.address.country_code.toUpperCase()
    );

    console.log(country, location.data.address.country_code); // here

    // read custom country files
    // variable files returns array
    let files;
    const readdir = util.promisify(fs.readdir);
    try {
      files = await readdir(
        path.join(serverRuntimeConfig.PROJECT_ROOT, "api/countries")
      );
    } catch (err) {
      console.log(err);
      files = [];
    }

    console.log(files);

    // scan if country is in files
    // and mark if case is special or default

    let countryCase = "default";

    files.map((item) => {
      const file = item.replace(".js", "");
      const formatCountry = country.toLowerCase().replace(" ", "_");
      if (file === formatCountry) {
        console.log(formatCountry); // here
        countryCase = formatCountry;
        console.log(countryCase); // here
      }
    });

    console.log(countryCase); // here

    // run default case or special case
    if (countryCase === "default") {
      // default
      const defaultReturn = await defaultFunc(country);
      res.send(defaultReturn);
    } else {
      // special case
      const countryFunc = await import(`./countries/${countryCase}`);
      const funcReturn = await countryFunc.default(location);
      res.status(200).send(funcReturn);
    }
  } else {
    res.send({
      data: "Not a POST",
    });
  }
}

// Database Documentation

// Vaccine docs: https://dev.socrata.com/foundry/data.cdc.gov/8xkx-amqh
// COVID Infection Docs: https://github.com/CSSEGISandData/COVID-19
// Reverse Geolocator: https://nominatim.org/release-docs/latest/api/Reverse/

/*

Special Function Regulation:

File Naming -->
- Always make the file name the formatted version of the country name
- Must be in all lowercase and all spaces must become '_'

Return values structure -->
{
  special: (boolean)
  data: [
    [value, display_label, special type (optional i.e percent, num, etc)]
  ]
}

MUST ADHERE TO STRUCTURE

*/
