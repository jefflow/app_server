import {JsonController, Get, Post, QueryParam, QueryParams, Param} from "routing-controllers";

import sequelize from "../db/postgres";

@JsonController("/analytics")
export class CrimeRate {

    @Get("/:state")
    async getCrimeByState(@Param("state") state: string) {

      const [results, metadata] = await sequelize.query('\
      SELECT SUM(larceny)as larceny, SUM(burglary) as burglary, SUM(agg_assault) as assault, SUM(vehicle_theft) as vehicle_theft\
      FROM crime_rate\
      WHERE "year" = 2015 and jurisdiction = :state_name\
      ',
      {
        replacements: { state_name: state },
      }
      );
      return results;
    }

    
}