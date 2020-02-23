import {JsonController, Get, Post, QueryParam, QueryParams, Param} from "routing-controllers";

import userModel from "../model/userModel";

import sequelize from "../db/postgres";

@JsonController("/drug")
export class Drugs {

    @Get("/user/:state")
    async getDrugUserByState(@Param("state") state: string) {

      const [results, metadata] = await sequelize.query("\
      SELECT drug_name, SUM(number_opioid_users_unique) as total_users\
      FROM drugs\
      WHERE provider_state = :state_name\
      GROUP BY drug_name\
      ORDER BY total_users DESC\
      ",
      {
        replacements: { state_name: state },
      }
      );
      return results;
    }

    @Get("/order/:state")
    async getDrugOrderByState(@Param("state") state: string) {

      const [results, metadata] = await sequelize.query("\
      SELECT drug_name, SUM(number_opioid_ordered) as total_users\
      FROM drugs\
      WHERE provider_state = :state_name\
      GROUP BY drug_name\
      ORDER BY total_users DESC\
      ",
      {
        replacements: { state_name: state },
      }
      );
      return results;
    
    
    }

    @Get("/supply/:state")
    async getDrugSupplyByState(@Param("state") state: string) {

      const [results, metadata] = await sequelize.query("\
      SELECT drug_name, SUM(total_day_supply) as total_users\
      FROM drugs\
      WHERE provider_state = :state_name\
      GROUP BY drug_name\
      ORDER BY total_users DESC\
      ",
      {
        replacements: { state_name: state },
      }
      );
      return results;
    }

    @Get("/cost/:state")
    async getDrugCostByState(@Param("state") state: string) {

      const [results, metadata] = await sequelize.query("\
      SELECT drug_name, SUM(total_drug_cost) as total_users\
      FROM drugs\
      WHERE provider_state = :state_name\
      GROUP BY drug_name\
      ORDER BY total_users DESC\
      ",
      {
        replacements: { state_name: state },
      }
      );
      return results;
    }
    
}