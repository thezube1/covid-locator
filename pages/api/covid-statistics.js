const axios = require("axios");
const fs = require("fs");
const util = require("util");
const Papa = require("papaparse");

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

    // read custom country files
    // variable files returns array
    let files;
    const readdir = util.promisify(fs.readdir);
    try {
      files = await readdir("countries/");
    } catch (err) {
      files = [];
    }

    // scan if country is in files
    // and mark if case is special or default

    let countryCase = "default";
    files.map((item) => {
      const file = item.replace(".js", "");
      const formatCountry = country.toLowerCase().replace(" ", "_");
      if (file === formatCountry) {
        countryCase = formatCountry;
      }
    });

    // run default case or special case
    if (countryCase === "default") {
      // run default function
      console.log("Default has been ran!");
    } else {
      console.log(`Special case: ${countryCase}`);

      // import country function
      const countryFunc = await import(`../../countries/${countryCase}`);
      const funcReturn = await countryFunc.default();
      console.log(funcReturn);
    }
  } else {
    res.send({
      data: "Not a POST",
    });
  }
}

// Documentation

// Vaccine docs: https://dev.socrata.com/foundry/data.cdc.gov/8xkx-amqh
// COVID Infection Docs: https://github.com/CSSEGISandData/COVID-19
// Reverse Geolocator: https://nominatim.org/release-docs/latest/api/Reverse/
