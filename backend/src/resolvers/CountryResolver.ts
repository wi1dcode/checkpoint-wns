import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Country, NewCountryInput } from "../entities/Country";
import { Continent } from "../entities/Continent";
import { GraphQLError } from "graphql";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return Country.find({ relations: { continent: true } });
  }

  @Query(() => Country)
  async country(@Arg("code") code: string) {
    return Country.findOne({ where: { code }, relations: { continent: true } });
  }

  @Mutation(() => Country)
  async addCountry(@Arg("data", { validate: true }) data: NewCountryInput) {
    if (await Country.findOneBy({ code: data.code })) {
      throw new GraphQLError("a country with that code already exists", {
        extensions: { code: "CODE_ALREADY_EXISTS" },
      });
    }

    const newCountry = new Country();
    Object.assign(newCountry, data);

    if (data.continent) {
      const continent = await Continent.findOne({ where: { id: data.continent } });
      if (!continent) {
        throw new GraphQLError("Invalid continent ID", {
          extensions: { code: "INVALID_CONTINENT_ID" },
        });
      }
      newCountry.continent = continent;
    }

    const { id } = await newCountry.save();
    return Country.findOne({ where: { id }, relations: { continent: true } });
  }
}
