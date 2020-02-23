import {JsonController, Get, Post, QueryParam, QueryParams, Param} from "routing-controllers";

import sequelize from "../db/postgres";

@JsonController("/death")
export class Death {

    @Get("/:state")
    async getDeathByState(@Param("state") state: string) {

      const [results, metadata] = await sequelize.query('\
      SELECT "Year", "Month", SUM("Data_Value") as data_value\
      FROM death_count\
      WHERE "State" = :state_name\
      GROUP BY "Year", "Month"\
      ORDER BY "Year", "Month"\
      ',
      {
        replacements: { state_name: state },
      }
      );
      return results;
    }
}