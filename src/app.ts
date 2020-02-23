import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import { Drugs } from "./controller/drugs";
import { CrimeRate } from "./controller/crime_rate";
import { Death } from "./controller/death";


// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   cors: true,
   routePrefix: "/api",
   controllers: [Drugs, CrimeRate, Death] // we specify controllers we want to use
});

// run express application on port 3000
app.listen(3001);