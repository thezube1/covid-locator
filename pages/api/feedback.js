require("dotenv").config;
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const key = process.env.KEY;
    const token = process.env.TOKEN;
    const link = `https://api.trello.com/1/cards?key=${key}&token=${token}&idList=611234809d772384bb68c13a&name=${req.body.first} ${req.body.last}&desc=Email: ${req.body.email} --> \n\n${req.body.feedback}`;
    await axios.post(link);
    res.send(true);
  } else {
    res.send({ data: "Invalid HTTP request" });
  }
}
