import { useEffect, useDeferredValue, lazy, Suspense } from 'react';
import { Drag, OneStar, TwoStars, ThreeStars, FourStars, FiveStars } from '../../assets/icons';
import { FRUIT_CONFIG } from '../../assets/utilities';

export const ActiveSliderConfigurations = ({
    countryData,
    selectedCountryDataPack,
    selectedHue,
    setSelectedHue,
    setSelectedCountry,
    selectedFruit,
    setSelectedFruit,
    isAirQuality,
    setIsAirQuality,
    starRating,
    setStarRating,
    isSpeeding,
    setIsSpeeding,
    isMobile,
}) => {

    /**
     *  lazy & cache loading the fruit icons
     */

    // useDeferredValue to wait for lazy method to resolve
    const deferredFruit = useDeferredValue(selectedFruit);
    const FRUIT_KEYS = Object.keys(FRUIT_CONFIG);

    const preloadAround = currentFruitString => {
        const currentIndex = FRUIT_KEYS.indexOf(currentFruitString);

        // if the string isn't in config, abort to prevent errors
        if (currentIndex === -1) return;

        // target the previous, current, and next indices
        const indicesToLoad = [currentIndex - 1, currentIndex, currentIndex + 1];

        // preload the files
        indicesToLoad.forEach(index => {
            // make sure staying inside bounds
            if (index >= 0 && index < FRUIT_KEYS.length) {
                const fruitKey = FRUIT_KEYS[index];
                const config = FRUIT_CONFIG[fruitKey];

                // execute the dynamic import to cache the chunk
                if (config && config.importFn) {
                    config.importFn();
                }
            }
        });
    };

    // caching the icon components so they aren't recreated on every render
    const LazyIcons = {};
    FRUIT_KEYS.forEach(key => {
        LazyIcons[key] = lazy(FRUIT_CONFIG[key].importFn);
    });

    const FruitIconRenderer = ({ selectedFruit }) => {
        const activeKey = FRUIT_CONFIG[selectedFruit] ? selectedFruit : 'coconut';
        const IconComponent = LazyIcons[activeKey];
        const { props } = FRUIT_CONFIG[activeKey];

        return (
            // fallback with the expected dimensions to prevent layout shift (UI jitter)
            <Suspense fallback={<div style={{ width: props.width, height: props.height }} />}>
                <IconComponent {...props} />
            </Suspense>
        );
    };

    // run the preloader every time the string changes
    useEffect(() => {
        preloadAround(selectedFruit);
    }, [selectedFruit]);

    // preload the second item on mount so the first slide is perfectly smooth
    useEffect(() => {
        preloadAround('blueberry');
    }, []);

    const getStarIcon = rating => {
        const size = isMobile ? 50 : 65;
        const StarComponents = {
            1: OneStar,
            2: TwoStars,
            3: ThreeStars,
            4: FourStars,
            5: FiveStars,
        };

        const SelectedStar = StarComponents[rating] || OneStar;

        return <SelectedStar width={size} height={size} x={isMobile ? '6px' : '16px'} y={isMobile ? '6px' : '16px'} />;
    };

    const baseAirQualityProps = {
        direction: 'anti-clockwise',
        keypressStep: 1,
        knobAnimated: false,
        knobHide: false,
        knobHideRing: false,
        knobPosition: 'left',
        knobRingRadius: 0.5,
        knobSize: 44,
        labelFontSize: '1.5rem',
        labelValueFontSize: isMobile ? '1.5rem' : '1.25rem',
        limitDragRange: true,
        progressSize: 20,
        trackColor: '#c8ccd1',
        trackDraggable: true,
        trackSize: 20,
        width: isMobile ? 250 : 150,
    };

    return [
        /*== TAB 0: AIR QUALITY ==*/
        {
            id: 'air-quality',
            description:
                "The slider's max and min point starts / ends at the left, with the °C symbol appended to the displayed value. " +
                'Responsive color, changes when the value moves past your set points.',
            props: [
                {
                    ...baseAirQualityProps,
                    dataIndex: 1000,
                    knobColor:
                        isAirQuality.CO2 >= 1600
                            ? '#ff0000'
                            : isAirQuality.CO2 >= 1200
                              ? '#ee7112'
                              : isAirQuality.CO2 >= 800
                                ? '#699c0b'
                                : '#a4fc00',
                    label: 'CO₂',
                    labelAppendValue: 'PPM',
                    labelAppendCss: { fontSize: '0.85rem', marginLeft: '0.25rem' },
                    labelColor:
                        isAirQuality.CO2 >= 1600
                            ? '#ff0000'
                            : isAirQuality.CO2 >= 1200
                              ? '#ee7112'
                              : isAirQuality.CO2 >= 800
                                ? '#4c7008'
                                : '#699c0b',
                    labelHorizontalOffset: '1.25rem',
                    labelValueHorizontalOffset: '-0.25rem',
                    max: 2000,
                    min: 100,
                    onChange: value =>
                        setIsAirQuality(prevReadings => {
                            return { ...prevReadings, CO2: Number(value) };
                        }),
                    progressGradient: [
                        { offset: '0%', stopColor: '#b6ff2e' },
                        { offset: '20%', stopColor: '#a4fc00' },
                        { offset: '50%', stopColor: '#699c0b' },
                        { offset: '65%', stopColor: '#588308' },
                        { offset: '90%', stopColor: '#ff7b00' },
                        { offset: '100%', stopColor: '#ff0000' },
                    ],
                },
                {
                    ...baseAirQualityProps,
                    dataIndex: 70,
                    knobColor:
                        isAirQuality.CO >= 100
                            ? '#ff0000'
                            : isAirQuality.CO >= 50
                              ? '#ee7112'
                              : isAirQuality.CO >= 25
                                ? '#699c0b'
                                : '#a4fc00',
                    label: 'CO',
                    labelAppendValue: 'PPM',
                    labelAppendCss: { fontSize: '0.85rem', marginLeft: '0.25rem' },
                    labelColor:
                        isAirQuality.CO >= 100
                            ? '#ff0000'
                            : isAirQuality.CO >= 50
                              ? '#ee7112'
                              : isAirQuality.CO >= 25
                                ? '#4c7008'
                                : '#699c0b',
                    max: 150,
                    min: 0,
                    onChange: value =>
                        setIsAirQuality(prevReadings => {
                            return { ...prevReadings, CO: Number(value) };
                        }),
                    progressGradient: [
                        { offset: '0%', stopColor: '#a4fc00' },
                        { offset: '20%', stopColor: '#a4fc00' },
                        { offset: '50%', stopColor: '#588308' },
                        { offset: '65%', stopColor: '#ff7b00' },
                        { offset: '90%', stopColor: '#ff7b00' },
                        { offset: '100%', stopColor: '#ff0000' },
                    ],
                },
                {
                    ...baseAirQualityProps,
                    dataIndex: 90,
                    knobColor:
                        isAirQuality.HCHO >= 150
                            ? '#ff0000'
                            : isAirQuality.HCHO >= 100
                              ? '#ee7112'
                              : isAirQuality.HCHO >= 50
                                ? '#699c0b'
                                : '#a4fc00',
                    label: 'Formaldehyde',
                    labelAppendValue: 'μg/m³',
                    labelAppendCss: { fontSize: '0.85rem', marginLeft: '0.25rem' },
                    labelColor:
                        isAirQuality.HCHO >= 150
                            ? '#ff0000'
                            : isAirQuality.HCHO >= 100
                              ? '#ee7112'
                              : isAirQuality.HCHO >= 50
                                ? '#4c7008'
                                : '#699c0b',
                    labelFontSize: isMobile ? '1.25rem' : '1rem',
                    max: 200,
                    min: 0,
                    onChange: value =>
                        setIsAirQuality(prevReadings => {
                            return { ...prevReadings, HCHO: Number(value) };
                        }),
                    progressGradient: [
                        { offset: '0%', stopColor: '#a4fc00' },
                        { offset: '20%', stopColor: '#a4fc00' },
                        { offset: '65%', stopColor: '#699c0b' },
                        { offset: '75%', stopColor: '#588308' },
                        { offset: '90%', stopColor: '#ff7b00' },
                        { offset: '100%', stopColor: '#ff0000' },
                    ],
                },
                {
                    ...baseAirQualityProps,
                    dataIndex: 650,
                    knobColor:
                        isAirQuality.TVOC >= 1000
                            ? '#ff0000'
                            : isAirQuality.TVOC >= 500
                              ? '#ee7112'
                              : isAirQuality.TVOC >= 300
                                ? '#699c0b'
                                : '#a4fc00',
                    label: 'TVOC',
                    labelAppendValue: 'μg/m³',
                    labelAppendCss: { fontSize: '0.85rem', marginLeft: '0.25rem' },
                    labelColor:
                        isAirQuality.TVOC >= 1000
                            ? '#ff0000'
                            : isAirQuality.TVOC >= 500
                              ? '#ee7112'
                              : isAirQuality.TVOC >= 300
                                ? '#4c7008'
                                : '#699c0b',
                    max: 1200,
                    min: 0,
                    onChange: value =>
                        setIsAirQuality(prevReadings => {
                            return { ...prevReadings, TVOC: Number(value) };
                        }),
                    progressGradient: [
                        { offset: '0%', stopColor: '#a4fc00' },
                        { offset: '20%', stopColor: '#699c0b' },
                        { offset: '50%', stopColor: '#699c0b' },
                        { offset: '60%', stopColor: '#ff7b00' },
                        { offset: '70%', stopColor: '#ff7b00' },
                        { offset: '100%', stopColor: '#ff0000' },
                    ],
                },
                {
                    ...baseAirQualityProps,
                    dataIndex: 100,
                    knobColor:
                        isAirQuality.PM25 >= 150
                            ? '#ff0000'
                            : isAirQuality.PM25 >= 75
                              ? '#ee7112'
                              : isAirQuality.PM25 >= 35
                                ? '#699c0b'
                                : '#a4fc00',
                    label: 'PM₂.₅',
                    labelAppendValue: 'μg/m³',
                    labelAppendCss: { fontSize: '0.85rem', marginLeft: '0.25rem' },
                    labelColor:
                        isAirQuality.PM25 >= 150
                            ? '#ff0000'
                            : isAirQuality.PM25 >= 75
                              ? '#ee7112'
                              : isAirQuality.PM25 >= 35
                                ? '#4c7008'
                                : '#699c0b',
                    max: 200,
                    min: 0,
                    onChange: value =>
                        setIsAirQuality(prevReadings => {
                            return { ...prevReadings, PM25: Number(value) };
                        }),
                    progressGradient: [
                        { offset: '0%', stopColor: '#a4fc00' },
                        { offset: '20%', stopColor: '#699c0b' },
                        { offset: '50%', stopColor: '#699c0b' },
                        { offset: '60%', stopColor: '#ff7b00' },
                        { offset: '70%', stopColor: '#ff7b00' },
                        { offset: '100%', stopColor: '#ff0000' },
                    ],
                },
                {
                    ...baseAirQualityProps,
                    dataIndex: 41,
                    knobColor:
                        isAirQuality.TEMP >= 45
                            ? '#ff0000'
                            : isAirQuality.TEMP >= 32
                              ? '#ee7112'
                              : isAirQuality.TEMP >= -5
                                ? '#699c0b'
                                : '#001d7c',
                    label: 'Temperature',
                    labelAppendCss: { fontSize: '0.85rem', marginLeft: '0.25rem' },
                    labelAppendValue: '°C',
                    labelColor:
                        isAirQuality.TEMP >= 45
                            ? '#ff0000'
                            : isAirQuality.TEMP >= 32
                              ? '#ec5f00'
                              : isAirQuality.TEMP >= -5
                                ? '#699c0b'
                                : '#001d7c',
                    labelFontSize: isMobile ? '1.25rem' : '1rem',
                    max: 60,
                    min: -20,
                    onChange: value =>
                        setIsAirQuality(prevReadings => {
                            return { ...prevReadings, TEMP: Number(value) };
                        }),
                    progressGradient: [
                        { offset: '0%', stopColor: '#001d7c' },
                        { offset: '20%', stopColor: '#38bdf8' },
                        { offset: '30%', stopColor: '#38bdf8' },
                        { offset: '40%', stopColor: '#38bdf8' },
                        { offset: '60%', stopColor: '#699c0b' },
                        { offset: '72%', stopColor: '#699c0b' },
                        { offset: '85%', stopColor: '#ec5f00' },
                        { offset: '90%', stopColor: '#ec5f00' },
                        { offset: '100%', stopColor: '#ff0000' },
                    ],
                },
            ],
            codeString: `
// create an object with your baseline props and then 'add' 
// it to your circular slider components

<CircularSlider
  ...baseAirQualityProps,
  dataIndex={1000}
  knobColor={isAirQuality.CO2 >= 1600
                            ? '#ff0000'
                            : isAirQuality.CO2 >= 1200
                              ? '#ee7112'
                              : isAirQuality.CO2 >= 800
                                ? '#699c0b'
                                : '#a4fc00',}
  label={"CO₂"}
  labelAppendValue={"PPM"}
  labelColor=isAirQuality.CO2 >= 1600
                            ? '#ff0000'
                            : isAirQuality.CO2 >= 1200
                              ? '#ee7112'
                              : isAirQuality.CO2 >= 800
                                ? '#699c0b'
                                : '#a4fc00'}
  labelHorizontalOffset={}'1.25rem'}
  labelValueHorizontalOffset={'-0.25rem'}
  max={2000}
  min={100}
  onChange={ value =>
            setIsAirQuality( prevReadings => {
                return { ...prevReadings, CO2: Number(value) };
            })
        }
  progressGradient={[
    { offset: '0%',  stopColor: '#b6ff2e' },
    { offset: '20%', stopColor: '#a4fc00' },
    { offset: '50%', stopColor: '#699c0b' },
    { offset: '65%', stopColor: '#588308' },
    { offset: '90%', stopColor: '#ff7b00' },
    { offset: '100%', stopColor: '#ff0000'},
  ]}
/>`,
        },
        /*== TAB 1: SAVINGS ==*/
        {
            id: 'investing',
            description: 'Displayed value uses the "labelAppendValue"</code>" and "labelPrependValue" props, with a custom icon for the knob.',
            props: {
                dataIndex: 0,
                direction: 'clockwise',
                knobAnimated: true,
                knobColor: '#166534',
                knobHide: false,
                knobHideRing: false,
                knobRingRadius: 0.45,
                knobSize: isMobile ? 50 : 60,
                knobPosition: 30,
                label: 'Invested',
                labelAppendValue: 'k',
                labelAppendCss: { paddingLeft: '0.15rem', fontSize: '1.85rem' },
                labelPrependCss: { paddingRight: '0.15rem', top: '-0.5rem', fontSize: '1.25rem' },
                labelBottom: true,
                labelColor: '#166534',
                labelFontSize: '1.5rem',
                labelHorizontalOffset: '-1rem',
                labelPrependValue: 'AUD$',
                labelValueFontSize: isMobile ? '1.75rem' : '2.25rem',
                labelValueHorizontalOffset: '0.25rem',
                labelValueVerticalOffset: null,
                labelVerticalOffset: '-0.25rem',
                limitDragRange: true,
                max: 100,
                min: 0,
                progressColorFrom: '#22c55e',
                progressColorTo: '#16a34a',
                progressSize: isMobile ? 20 : 24,
                trackColor: '#e2e8f0',
                trackDraggable: true,
                trackSize: 6,
                width: isMobile ? '220' : '320',
                children: (
                    <Drag
                        x={isMobile ? '12' : '14.5'}
                        y={isMobile ? '12' : '14.5'}
                        width={isMobile ? '26px' : '32px'}
                        height={isMobile ? '26px' : '32px'}
                    />
                ),
            },
            codeString: `<CircularSlider
  knobColor={"#166534"}
  knobRingRadius={0.45}
  knobSize={isMobile ? 50 : 60}
  knobPosition={30}
  label={"Invesment"}
  labelAppendValue={"k"}
  labelAppendCss={{ paddingLeft: '0.15rem', fontSize: '1.85rem' }}
  labelPrependCss={{ paddingRight: '0.15rem', top: '-0.5rem', fontSize: '1.25rem' }}
  labelBottom={true}
  labelColor={"#166534"}
  labelPrependValue={"AUD$"}
  labelValueFontSize={isMobile ? "1.75rem" : "2.25rem"},
  limitDragRange={true}
  max={100}
  min={0}
  progressColorFrom={"#22c55e"}
  progressColorTo={"#16a34a"}
  progressSize={isMobile ? 20 : 24}
  trackColor={"#e2e8f0"}
  trackDraggable={true}
  trackSize={6}
  width={isMobile ? '220' : '320'}
>
  <Drag 
      x={isMobile ? "12" : "14.5"}
      y={isMobile ? "12" : "14.5"}
      width={isMobile ? "26px"" : "32px"} 
      height={isMobile ? "26px" : "32px"} 
   />
</CircularSlider>`,
        },
        /*== TAB 2: WORLD VIEW ==*/
        {
            id: 'world',
            description: 'An interactive display of information with 254 data points.',
            props: {
                data: countryData?.alpha_2 || [],
                dataIndex: 0,
                direction: 'clockwise',
                knobAnimated: false,
                knobColor: '#ffffff',
                knobHide: false,
                knobHideRing: true,
                knobPosition: 45,
                knobSize: 8,
                label: 'countries of the world',
                labelColor: '#166534',
                labelFontSize: isMobile ? '0.95rem' : '1.5rem',
                labelValueFontSize: isMobile ? '1rem' : '1.85rem',
                limitDragRange: true,
                onChange: value => setSelectedCountry(value),
                progressColorFrom: '#505050',
                progressColorTo: '#303030',
                progressSize: isMobile ? 10 : 12,
                trackColor: '#e2e8f0',
                trackDraggable: true,
                trackSize: 6,
                width: isMobile ? '220' : '320',
                children: (
                    <image href={selectedCountryDataPack.flag.data} x={`${-16 - (0.33*selectedCountryDataPack.position)}px`} y={'-30px'} width={120} height={60} />
                ),
            },
            codeString: `<CircularSlider
  data={countryData?.alpha_2 || []}
  knobAnimate={false}
  knobColor={"#166534"}
  knobColor={"#fff"}
  knobHideRing={true}
  knobPosition={45}
  knobSize={8}
  label={"countries of the world"}
  labelColor={"#166534"}
  labelFontSize={isMobile ? "0.95rem" : "1.5rem"},
  labelValueFontSize={isMobile ? "1rem" : "1.85rem"},
  limitDragRange={true}
  onChange: value => setSelectedCountry(value)
  progressColorFrom={"#505050"}
  progressColorTo={"#303030"}
  progressSize={isMobile ? 20 : 12}
  trackColor={"#e2e8f0"}
  trackDraggable={true}
  trackSize={6}
  width={isMobile ? '220' : '320'}
>
  <image 
        href={selectedCountryDataPack.flag.data} 
        x={-selectedCountryDataPack.position + 'px'}
        y={'-30px'} 
        width={120} 
        height={60} 
   />
</CircularSlider>`,
        },
        /*== TAB 2: FRUITS ==*/
        {
            id: 'fruity',
            description:
                'Utilising text (characters) as data points, and a responsive / changing custom icon for the knob.',
            props: {
                data: [
                    'avocado',
                    'blueberry',
                    'coconut',
                    'dragonfruit',
                    'elderberry',
                    'feijoa',
                    'guava',
                    'honeydew',
                    'imbe',
                    'jackfruit',
                    'kiwifruit',
                    'lime',
                    'mango',
                    'nectarine',
                    'olive',
                    'papaya',
                    'quince',
                    'rambutan',
                    'starfruit',
                    'tamarind',
                    'ugli',
                    'vanilla',
                    'watermelon',
                    'ximenia',
                    'yuzu',
                    'ziziphus',
                ],
                dataIndex: 0,
                direction: 'clockwise',
                knobColor: 'transparent',
                knobSize: 60,
                label: 'Fruity',
                labelColor: '#4b5563',
                labelFontSize: '1.25rem',
                labelValueFontSize: isMobile ? '1.5rem' : '2rem',
                labelVerticalOffset: isMobile ? '0.75rem' : '1rem',
                limitDragRange: true,
                onChange: value => setSelectedFruit(value),
                progressColorFrom: '#f59e0b',
                progressColorTo: '#d97706',
                progressSize: Number(selectedFruit?.charCodeAt(0) - 92),
                trackColor: '#e5e7eb',
                trackDraggable: true,
                trackSize: 4,
                width: 250,
                children: <FruitIconRenderer selectedFruit={deferredFruit} />,
            },
            codeString: `<CircularSlider
  data={["avocado", "blueberry", "coconut", "dragonfruit", ...]}
  knobColor={"transparent"}
  knobSize={60}
  label={"Fruity"}
  labelColor={"#4b5563"}
  labelFontSize={"1.25rem"}
  labelValueFontSize="6rem"
  labelVerticalOffset="1rem"
  limitDragRange={true}
  onChange={value => setSelectedFruit(value)}
  progressColorFrom={"#f59e0b"}
  progressColorTo={"#d97706"}
  progressSize={Number(selectedFruit?.charCodeAt(0) - 92)}
  trackColor={"#e5e7eb"}
  trackDraggable={true}
  trackSize={4}
  width={250}
>
  <FruitIconRenderer selectedFruit={deferredFruit} />
</CircularSlider>`,
        },
        /*== TAB 3: STAR RATING ==*/
        {
            id: 'star rating',
            description:
                'Suggested slider use for user ratings, with a custom icon for the drag handle and custom track and progress colours.',
            props: {
                dataIndex: 2,
                direction: 'clockwise',
                knobColor: 'transparent',
                knobSize: isMobile ? 60 : 100,
                label: 'Star Rating',
                labelColor: '#f59e0b',
                labelValueFontSize: isMobile ? '4rem' : '5rem',
                limitDragRange: true,
                max: 5,
                min: 1,
                onChange: value => setStarRating(value),
                progressColorFrom: '#fbbf24',
                progressColorTo: '#f59e0b',
                progressSize: 10,
                trackColor: '#fef3c7',
                trackSize: 6,
                width: 250,
                children: getStarIcon(starRating),
            },
            codeString: `<CircularSlider
  dataIndex={2}
  knobColor={"#facc15"}
  knobSize={isMobile ? 60 : 68}
  label={"Star Rating"}
  labelColor={"#f59e0b"}
  labelValueFontSize={isMobile ? "4rem" : "5rem"}
  limitDragRange={true}
  max={5}
  min={1}
  onChange={value => setStarRating(value)}
  progressColorFrom={"#fbbf24"}
  progressColorTo={"#f59e0b"}
  progressSize={10}
  trackColor={}"#fef3c7"}
  trackSize={6}
  width={250}
>
  {/* parse in any svg icon - we're using a function here to select */}
  {getStarIcon(starRating)}
</CircularSlider>`,
        },
        /*== TAB 4: SPECTRUM ==*/
        {
            id: 'spectrum',
            description:
                'Custom gradient shading for the track and progress bars, using progressGradient and trackGradient',
            props: {
                dataIndex: 270,
                direction: 'clockwise',
                knobColor: selectedHue ? `oklch(0.8 0.2 ${selectedHue})` : `oklch(0.8 0.2 1)`,
                knobPosition: 'bottom',
                knobSize: isMobile ? 60 : 62,
                label: 'Spectrum',
                labelAppendValue: '°',
                labelColor: selectedHue ? `oklch(0.637 0.208 ${selectedHue})` : `oklch(0.637 0.208 1)`,
                limitDragRange: false,
                labelValueFontSize: isMobile ? '3.5rem' : '4rem',
                max: 359,
                min: 0,
                onChange: value => setSelectedHue(Number(value)),
                progressGradient: [
                    { offset: '0%', stopColor: '#ef4444' },
                    { offset: '20%', stopColor: '#f97316' },
                    { offset: '40%', stopColor: '#e6ea08' },
                    { offset: '55%', stopColor: '#22c55e' },
                    { offset: '70%', stopColor: '#3b82f6' },
                    { offset: '85%', stopColor: '#6366f1' },
                    { offset: '100%', stopColor: '#8b5cf6' },
                ],
                progressLineCap: 'round',
                progressSize: 30,
                trackDraggable: true,
                trackGradient: [
                    { offset: '0%', stopColor: '#fecaca', stopOpacity: 0.4 },
                    { offset: '50%', stopColor: '#bbf7d0', stopOpacity: 0.4 },
                    { offset: '100%', stopColor: '#c4b5fd', stopOpacity: 0.4 },
                ],
                trackSize: 20,
                width: 250,
            },
            codeString: `<CircularSlider
  dataIndex={270}
  knobColor={selectedHue ? \`oklch(0.8 0.2 \${selectedHue})\` : "oklch(0.8 0.2 1)"}
  knobPosition={"bottom"}
  knobSize={isMobile ? 60 : 62}
  label={"Spectrum"}
  labelAppendValue={"°"}
  labelColor={isMobile ? "3.5rem" : "4rem"}
  labelValueFontSize={isMobile ? "3.5rem" : "4rem"}
  max={359}
  min={0}
  onChange={value => setSelectedHue(Number(value))}
  progressGradient={[
    { offset: "0%",  stopColor: "#ef4444" },
    { offset: "20%", stopColor: "#f97316" },
    { offset: "40%", stopColor: "#eab308" },
    { offset: "55%", stopColor: "#22c55e" },
    { offset: "70%", stopColor: "#3b82f6" },
    { offset: "85%", stopColor: "#6366f1" },
    { offset: "100%", stopColor: "#8b5cf6" },
  ]}
  progressSize={30}
  trackDraggable={true}
  trackGradient={[
    { offset: "0%", stopColor: "#fecaca", stopOpacity: 0.4 },
    { offset: "50%", stopColor: "#bbf7d0", stopOpacity: 0.4 },
    { offset: "100%", stopColor: "#c4b5fd", stopOpacity: 0.4 },
  ]}
  trackSize={20}
  width={250}
/>`,
        },
        /*== TAB 5: SPEEDOMETER ==*/
        {
            id: 'speedometer',
            description:
                'Turn the slider into an arc-slider by using arcStart and arcEnd to create a gauge-style control',
            props: {
                arcEnd: 135,
                arcStart: 225,
                dataIndex: 80,
                direction: 'clockwise',
                knobColor: isSpeeding >= 170 ? '#dc2626' : isSpeeding >= 90 ? '#d67921ec' : '#0b9627',
                knobSize: isMobile ? 50 : 60,
                knobPosition: 1500, //ignored and warning issued to the console.
                label: 'Speedometer',
                labelColor: isSpeeding >= 170 ? '#dc2626' : isSpeeding >= 90 ? '#d67921ec' : '#0b9627',
                labelValueFontSize: isMobile ? '2rem' : '2.5rem',
                limitDragRange: true,
                max: 250,
                min: 0,
                onChange: value => setIsSpeeding(value),
                progressGradient: [
                    { offset: '0%', stopColor: '#22c55e' },
                    { offset: '45%', stopColor: '#ffd000' },
                    { offset: '55%', stopColor: '#ffae00' },
                    { offset: '100%', stopColor: '#dc2626' },
                ],
                progressLineCap: 'butt',
                progressSize: 24,
                trackColor: '#e5e7eb',
                trackDraggable: true,
                trackSize: 24,
                width: 250,
            },
            codeString: `<CircularSlider
  arcEnd={135}
  arcStart={225}
  dataIndex={80}
  knobColor={isSpeeding >= 170 ? "#dc2626" : isSpeeding >= 90 ? "#d67921ec" : "#0b9627"}
  knobSize={isMobile ? 50 : 60}
  knobPosition: {1500} // ⚠️ will be ignored with warning issued to the browser console
  label={"Speedometer"}
  labelColor={isSpeeding >= 170 ? "#dc2626" : isSpeeding >= 90 ? "#d67921ec" : "#0b9627"}
  labelValueFontSize={isMobile ? "2rem" : "2.5rem"}
  limitDragRange={true}
  max={250}
  min={0}
  onChange={value => setIsSpeeding(value)}
  progressGradient={[
    { offset: "0%", stopColor: "#22c55e" },
    { offset: "45%", stopColor: "#ffd000" },
    { offset: "55%", stopColor: "#ffae00" },
    { offset: "100%", stopColor: "#dc2626" },
  ]}
  progressLineCap="butt"
  progressSize={24}
  trackColor="#e5e7eb"
  trackDraggable={true}
  trackSize={24}
  width={250}
/>`,
        },
        /*== TAB 6: DEFAULT ==*/
        {
            id: 'default',
            description: 'The render without passing any props',
            props: {
                // direction: 'anti-clockwise',
            },
            codeString: `<CircularSlider />`,
        },
    ];
};
