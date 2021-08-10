// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Projects } from "../../Projects";
export default function helloAPI(req, res) {
  res.status(200).send(JSON.stringify(Projects));
}
