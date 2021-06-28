export interface CountryCases {
    active: number;
    activePerOneMillion: string;
    cases: number;
    casesPerOneMillion: number;
    continent: string;
    country: string;
    countryInfo: {
        flag: string;
        iso2: string;
        iso3: string;
        lat: number;
        long: number;
        _id: number;
    };
    critical: number;
    criticalPerOneMillion: number;
    deaths: number;
    deathsPerOneMillion: number;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    population: number;
    recovered: number;
    recoveredPerOneMillion: string;
    tests: number;
    testsPerOneMillion: number;
    todayCases: number;
    todayDeaths: number;
    todayRecovered: number;
    updated: number;
}