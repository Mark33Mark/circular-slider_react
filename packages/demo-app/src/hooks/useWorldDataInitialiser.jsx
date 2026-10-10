import { useState, useEffect } from 'react';
import { createDbWorker } from 'sql.js-httpvfs';

export const useWorldDataInitialiser = () => {
    const [countryData, setCountryData] = useState({ alpha_2: [], countries: null, flags: null, sql: null });
    const [isWorldDataLoading, setIsWorldDataLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const initData = async () => {
            setIsWorldDataLoading(true);
            try {
                const baseUrl = import.meta.env.BASE_URL;

                const initDbPromise = createDbWorker(
                    [{
                        from: 'inline',
                        config: {
                            serverMode: 'full',
                            url: `${baseUrl}data/countries_sql_db.sqlite`,
                            requestChunkSize: 4096,
                        },
                    }],
                    `${baseUrl}sqlite.worker.js`,
                    `${baseUrl}sql-wasm.wasm`
                );
                
                const codesPromise = fetch(`${baseUrl}data/alpha2_country_code.json`).then(res => res.json());
                const flagsPromise = fetch(`${baseUrl}data/flags.json`).then(res => res.json());

                // fetch everything concurrently
                const [worker, codes, flags] = await Promise.all([
                    initDbPromise,
                    codesPromise,
                    flagsPromise
                ]);

                // update state once
                if (isMounted) {
                    setCountryData({
                        sql: worker,
                        countries: codes,
                        alpha_2: Object.values(codes).sort(),
                        flags: flags,
                        sql_db_created: new Date().getTime(),
                        updated: new Date().getTime()
                    });
                    setIsWorldDataLoading(false);
                }
            } catch (err) {
                console.error("Failed to initialize world data:", err);
                if (isMounted) {
                    setError(err);
                    setIsWorldDataLoading(false);
                }
            }
        };

        initData();

        return () => { isMounted = false; };
    }, []);

    return { countryData, isWorldDataLoading, error };
};
