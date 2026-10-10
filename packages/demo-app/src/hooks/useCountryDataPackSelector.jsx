import { useState, useEffect } from 'react';

const getKeyFromValue = (object, value) => {
    if (!object || !value) return;
    return Object.keys(object).find(key => object[key] === value);
};

export const useCountryDataPackSelector = (countryData, initialCountry = 'Abkhazia') => {
    const [selectedCountry, setSelectedCountry] = useState(initialCountry);
    const [selectedCountryDataPack, setSelectedCountryDataPack] = useState({
        alpha2: 'ab',
        name: 'Abkhazia',
        position: 0,
        flag: {
            type: 'webp',
            data: 'data:image/webp;base64,UklGRnoDAABXRUJQVlA4IG4DAADwFwCdASqAAEAAPjEYikQiIYiGAlYQAYJbADLXEn5F+IH7M9ODtP3Z6D43mZn75v7d+VXyA26XmA/Vn/d/6P3zPRLvAHoAfsB6YH7afC3+2kxEx6/7N+QHmZ/gBwFf6djuf7d+QGpEcclFh5tv8b9uXtx+j/Ua/qf/GDyf1wMqGVX/vE38kl8ljRdYu/w9sONWhIrzo6WSW+qLZXLNRAPnpxLT4F14UUpWvs/7p+n+uNSK5bFAPARMEE/SzZ6l1DmsMvETfHtigAD++Eggn1iAwuN/3RcOMnYf8dn2BT9x1+KvnBSe+PRg7n1gpF9x2Q7zEr/+fO4aaKA1iqmf/9S8uKhRn0MflDxhmoP5LT99on+TKoH8yiX9ZtGGaAj0EadkQw1//SIqtPdcjqsfvfWB5ac1bbo21LQB49550/24F191z1qOvf6PxzsUrRSo0v9T//XO0TTURebP/AQEnfIjXjkh+EhHLMn8rKF87S0z3+rxZClEP8YZeN3O39x9FglTNr4Ad6JKXKfPik1KobUv6MMfsCFzW6h/vPu/v9+XIOMFiqXst+ydwyyS0rf730zYaf5Fdjz3puaQRC8je9/RXMKcGDMKPnRGiJ9k2Gslx3F0KwQLkDRgAv+9GWf1B+irv/4rMJXy3T6fMah0bkOn7rxmAPMp2My/rCLITfaaP0pz+TNT2lnUONgJ0tSZokW19z6rLFA3llXffOro++rj4rqW1Hw/9aD6vGK549XbU7j7/vVTiDfXFUatC3RMkC/WDYx//3y5Fw9G1awJ0XfOtBZqSeWCz1T8fZpCZDDqonkMN8Ux/yJVyS0SR3TK/x6ubNWFN7T7LSHe3Tx9IGBAkEdV/uI+r/s2//1UPO4m/sJBLufVmKgXqHQfuU4MWKAhCmikMhcSBzfVTFD4COUKWdtuXXTJkV/L/KqH/bTgqIwPoVl40yOc1XCIwIqpn/u+/f77bmuFuxab03AR1y5J6teAjvflDcPNBRxwN0VGJxYTJjFExrWD8eH7T3AS9mY6PRrov/1jfx3SomLhB5Vxc03vXa9i1sM1/Y77mBPUDncEw/VBYZi++G2z8OkQ9nN8A3uAR7tuKB2U81Uq9Np1y/3KHCOmLV/Ex33x8d/qzxi/JR2AuCNkhIlPVKUI8UjfE0pM2Zy7Zmdk2qAAAA==',
        },
        data: {
            names: {
                alternates: ['Apsny'],
                common: 'Abkhazia',
                official: 'Republic of Abkhazia',
            },
            codes: {
                alpha_2: 'AB',
                alpha_3: '',
                ccn3: '',
                cioc: '',
                fifa: '',
                fips: '',
                gec: '',
            },
            capitals: [
                {
                    coordinates: {
                        lat: 43.0033,
                        lng: 41.0153,
                    },
                    name: 'Sukhumi',
                },
            ],
            flag: {
                description: '',
                emoji: '',
                html_entity: '',
                unicode: '',
                url_png: '',
                url_svg: '',
            },
            region: 'Asia',
            subregion: 'Western Asia',
            area: {
                kilometers: 8665,
                miles: 3345.6,
            },
            calling_codes: ['7'],
            cars: {
                driving_side: 'right',
                signs: [],
            },
            classification: {
                dependency: false,
                dependency_type: '',
                disputed: true,
                iso_status: 'unassigned',
                sovereign: true,
                un_member: false,
                un_observer: false,
            },
            continents: ['Asia'],
            coordinates: {
                lat: 43,
                lng: 41,
            },
            currencies: [
                {
                    code: 'RUB',
                    name: 'Russian ruble',
                    symbol: '₽',
                },
            ],
            date: {
                academic_year_start: {
                    day: 1,
                    month: 9,
                },
                fiscal_year_start: {
                    corporate: {
                        basis: 'convention',
                        day: 1,
                        month: 1,
                    },
                    government: {
                        day: 1,
                        month: 1,
                    },
                    personal: {
                        day: 1,
                        month: 1,
                    },
                },
                start_of_week: 'monday',
            },
            demonyms: {
                eng: {
                    f: 'Abkhaz',
                    m: 'Abkhaz',
                },
                fra: {
                    f: 'Abkhaze',
                    m: 'Abkhaze',
                },
            },
            economy: {
                gini_coefficient: {},
            },
            government_type: 'Unitary presidential republic',
            landlocked: false,
            languages: [
                {
                    bcp47: 'ab',
                    iso639_1: 'ab',
                    iso639_2b: 'abk',
                    iso639_2t: 'abk',
                    iso639_3: 'abk',
                    name: 'Abkhaz',
                    native_name: 'Аҧсуа бызшәа',
                },
                {
                    bcp47: 'ru',
                    iso639_1: 'ru',
                    iso639_2b: 'rus',
                    iso639_2t: 'rus',
                    iso639_3: 'rus',
                    name: 'Russian',
                    native_name: 'русский',
                },
            ],
            links: {
                google_maps: '',
                official: 'http://presidentofabkhazia.org',
                open_street_maps: '',
                wikipedia: 'https://en.wikipedia.org/wiki/Abkhazia',
            },
            memberships: {
                african_union: false,
                arab_league: false,
                asean: false,
                brics: false,
                commonwealth: false,
                eu: false,
                eurozone: false,
                g20: false,
                g7: false,
                nato: false,
                oecd: false,
                opec: false,
                schengen: false,
                un: false,
            },
            number_format: {
                decimal_separator: ',',
                thousands_separator: '.',
            },
            population: 244236,
            postal_code: {
                format: '',
                regex: '',
            },
            timezones: ['UTC+03:00'],
            tlds: [],
            units: {
                measurement_system: 'metric',
                temperature_scale: 'Celsius',
            },
            uuid: '0e1bae13-c4c6-40d7-955f-f2c6062381cc',
            _meta: {
                lastUpdatedTimestamp: 1788151802,
                source: 'api.restcountries.com',
            },
        },
    });

    useEffect(() => {
        // wait until the master data hook has finished loading
        if (!countryData.sql || !countryData.countries || !countryData.flags) return;

        const alpha2 = getKeyFromValue(countryData.countries, selectedCountry) || 'ab';

        // prep the sync data (flag, name, position) for the UI
        const newPackData = {
            alpha2,
            name: selectedCountry,
            position: countryData.alpha_2.indexOf(selectedCountry),
            flag: countryData.flags[alpha2] || { type: 'webp', data: '' },
        };

        // sync state to avoid UI lag on the flag/name while SQLite fetches
        setSelectedCountryDataPack(prev => ({ ...prev, ...newPackData }));

        // fetch the async SQLite payload
        const fetchCountrySql = async () => {
            try {
                const result = await countryData.sql.db.query(`SELECT json_data FROM countries WHERE alpha2 = ?`, [
                    alpha2.toUpperCase(),
                ]);

                if (result && result.length > 0) {
                    setSelectedCountryDataPack(prev => ({
                        ...prev,
                        data: JSON.parse(result[0].json_data),
                    }));
                }
            } catch (error) {
                console.error('Database query failed:', error);
            }
        };

        fetchCountrySql();
    }, [countryData.sql, countryData.countries, countryData.flags, countryData.alpha_2, selectedCountry]);

    return { selectedCountry, setSelectedCountry, selectedCountryDataPack };
};
