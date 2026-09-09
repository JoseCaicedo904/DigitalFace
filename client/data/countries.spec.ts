import { describe, expect, it } from "vitest";
import { getCountries } from "libphonenumber-js";
import { getPhoneCountryOptions } from "./countries";

describe("getPhoneCountryOptions", () => {
  it("provides every supported phone country with flag, name and dial code", () => {
    const options = getPhoneCountryOptions("en");
    const all = [...options.priority, ...options.rest];
    const unitedStates = all.find((option) => option.code === "US");
    const colombia = all.find((option) => option.code === "CO");

    expect(new Set(all.map((option) => option.code)).size).toBe(
      getCountries().length,
    );
    expect(unitedStates).toMatchObject({
      name: "United States",
      dialCode: "1",
    });
    expect(colombia).toMatchObject({
      name: "Colombia",
      dialCode: "57",
    });
  });

  it("localizes country names for the Spanish form", () => {
    const options = getPhoneCountryOptions("es");
    const unitedStates = [...options.priority, ...options.rest].find(
      (option) => option.code === "US",
    );

    expect(unitedStates?.name).toBe("Estados Unidos");
  });
});
