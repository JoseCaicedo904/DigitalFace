import type { Locale } from "@/i18n/locale";

/**
 * ISO 3166-1 alpha-2 codes. Only the codes are stored: `Intl.DisplayNames`
 * gives us properly localized country names in both locales for free, which
 * beats shipping and maintaining ~500 translated strings.
 */
const COUNTRY_CODES = [
  "AD",
  "AE",
  "AF",
  "AG",
  "AI",
  "AL",
  "AM",
  "AO",
  "AR",
  "AT",
  "AU",
  "AW",
  "AZ",
  "BA",
  "BB",
  "BD",
  "BE",
  "BF",
  "BG",
  "BH",
  "BI",
  "BJ",
  "BM",
  "BN",
  "BO",
  "BR",
  "BS",
  "BT",
  "BW",
  "BY",
  "BZ",
  "CA",
  "CD",
  "CF",
  "CG",
  "CH",
  "CI",
  "CL",
  "CM",
  "CN",
  "CO",
  "CR",
  "CU",
  "CV",
  "CW",
  "CY",
  "CZ",
  "DE",
  "DJ",
  "DK",
  "DM",
  "DO",
  "DZ",
  "EC",
  "EE",
  "EG",
  "ER",
  "ES",
  "ET",
  "FI",
  "FJ",
  "FM",
  "FR",
  "GA",
  "GB",
  "GD",
  "GE",
  "GH",
  "GI",
  "GL",
  "GM",
  "GN",
  "GQ",
  "GR",
  "GT",
  "GU",
  "GW",
  "GY",
  "HK",
  "HN",
  "HR",
  "HT",
  "HU",
  "ID",
  "IE",
  "IL",
  "IN",
  "IQ",
  "IR",
  "IS",
  "IT",
  "JM",
  "JO",
  "JP",
  "KE",
  "KG",
  "KH",
  "KI",
  "KM",
  "KN",
  "KP",
  "KR",
  "KW",
  "KY",
  "KZ",
  "LA",
  "LB",
  "LC",
  "LI",
  "LK",
  "LR",
  "LS",
  "LT",
  "LU",
  "LV",
  "LY",
  "MA",
  "MC",
  "MD",
  "ME",
  "MG",
  "MH",
  "MK",
  "ML",
  "MM",
  "MN",
  "MO",
  "MR",
  "MT",
  "MU",
  "MV",
  "MW",
  "MX",
  "MY",
  "MZ",
  "NA",
  "NE",
  "NG",
  "NI",
  "NL",
  "NO",
  "NP",
  "NR",
  "NZ",
  "OM",
  "PA",
  "PE",
  "PF",
  "PG",
  "PH",
  "PK",
  "PL",
  "PR",
  "PS",
  "PT",
  "PW",
  "PY",
  "QA",
  "RO",
  "RS",
  "RU",
  "RW",
  "SA",
  "SB",
  "SC",
  "SD",
  "SE",
  "SG",
  "SI",
  "SK",
  "SL",
  "SM",
  "SN",
  "SO",
  "SR",
  "SS",
  "ST",
  "SV",
  "SY",
  "SZ",
  "TD",
  "TG",
  "TH",
  "TJ",
  "TL",
  "TM",
  "TN",
  "TO",
  "TR",
  "TT",
  "TV",
  "TW",
  "TZ",
  "UA",
  "UG",
  "US",
  "UY",
  "UZ",
  "VA",
  "VC",
  "VE",
  "VN",
  "VU",
  "WS",
  "YE",
  "ZA",
  "ZM",
  "ZW",
] as const;

/** Surfaced first because they are DigitalFace's primary markets. */
const PRIORITY_CODES = ["US", "CO", "MX", "ES", "AR", "CL", "PE", "EC"];

export type CountryOption = { code: string; name: string };

export function isSupportedCountry(code: string): boolean {
  return (COUNTRY_CODES as readonly string[]).includes(code);
}

/**
 * Localized, alphabetically sorted, with the primary markets pinned to the top.
 * Falls back to the raw code if the runtime has no `Intl.DisplayNames`, which
 * keeps the select usable rather than blank.
 */
export function getCountryOptions(locale: Locale): {
  priority: CountryOption[];
  rest: CountryOption[];
} {
  let display: Intl.DisplayNames | null = null;
  try {
    display = new Intl.DisplayNames([locale], { type: "region" });
  } catch {
    display = null;
  }

  const named: CountryOption[] = COUNTRY_CODES.map((code) => {
    let name = code as string;
    try {
      name = display?.of(code) ?? code;
    } catch {
      name = code;
    }
    return { code, name };
  });

  const collator = new Intl.Collator(locale, { sensitivity: "base" });
  const byName = (a: CountryOption, b: CountryOption) =>
    collator.compare(a.name, b.name);

  return {
    priority: PRIORITY_CODES.map(
      (code) => named.find((option) => option.code === code)!,
    ).filter(Boolean),
    rest: named
      .filter((option) => !PRIORITY_CODES.includes(option.code))
      .sort(byName),
  };
}
