import { createRef, useEffect, useRef, useState } from 'react';
import JsonView from '@uiw/react-json-view';
import { useCountryDataPackSelector, useWorldDataInitialiser } from '../../hooks';
import { ActiveSliderConfigurations } from './ActiveSliderConfigurations';
import { JsonDataViewSelector } from './JsonDataViewSelector';
import { CircularSlider } from '@watsonised/circular-slider-for-react';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { ArrowUp } from '../../assets/icons';

export const App = () => {
    const [isAirQuality, setIsAirQuality] = useState({ CO2: 1100, CO: 70, TVOC: 650, PM25: 100, HCHO: 90, TEMP: 22 });
    const [isSpeeding, setIsSpeeding] = useState(80);
    const [selectedHue, setSelectedHue] = useState(270);
    const [selectedFruit, setSelectedFruit] = useState('avocado');
    const [starRating, setStarRating] = useState(3);

    // UI state
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem('activeTab') || 0;
    });
    const [isMobile, setIsMobile] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [showMobileCode, setShowMobileCode] = useState(false);

    // world data JSON view
    const [jsonDataExpand, setJsonDataExpand] = useState(1);

    // custom world data hooks
    const { countryData, isWorldDataLoading, error } = useWorldDataInitialiser();
    const { selectedCountry, setSelectedCountry, selectedCountryDataPack } = useCountryDataPackSelector(
        countryData,
        'Abkhazia'
    );

    // check for mobile screen size on component mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 901);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // return to active slider when page reloaded
    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    // store a reference to each slider component for refreshing
    const sliderRefs = useRef(null);

    // give focus to first list item when using tab key
    const activeListItemRef = useRef(null);

    if (sliderRefs.current === null) {
        sliderRefs.current = Array.from({ length: 6 }, () => createRef());
    }

    const handleTabChange = index => {
        setActiveTab(index);
        setDropdownOpen(false);

        // small delay to make sure the new tab's slider is mounted
        setTimeout(() => {
            if (typeof sliderRefs.current[index]?.current?.refresh === 'function') {
                sliderRefs.current[index].current.refresh();
            }
        }, 100);
    };

    const handleTabKeyDown = (event, index) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleTabChange(index);
            return;
        }

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            event.preventDefault(); // stop page from scrolling
            const nextElement = event.target.nextElementSibling;

            if (nextElement) {
                nextElement.focus();
            } else {
                // loop back to the first item if at the end
                event.target.parentNode.firstElementChild.focus();
            }
            return;
        }

        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            event.preventDefault(); // stop page from scrolling
            const prevElement = event.target.previousElementSibling;

            if (prevElement) {
                prevElement.focus();
            } else {
                // loop to the last item if at the beginning
                event.target.parentNode.lastElementChild.focus();
            }
            return;
        }
    };

    const handleCheckboxChange = event => {
        const isOpen = event.target.checked;
        setDropdownOpen(isOpen);

        // wait for the CSS to reveal the menu before attempting to focus
        if (isOpen) {
            setTimeout(() => {
                if (activeListItemRef.current) {
                    activeListItemRef.current.focus();
                }
            }, 50);
        }
    };

    const sliderConfigs = ActiveSliderConfigurations({
        countryData,
        selectedCountryDataPack,
        selectedCountry,
        setSelectedCountry,
        selectedHue,
        setSelectedHue,
        selectedFruit,
        setSelectedFruit,
        isAirQuality,
        setIsAirQuality,
        isSpeeding,
        setIsSpeeding,
        starRating,
        setStarRating,
        isMobile,
    });
    const currentSlider = sliderConfigs[activeTab];

    return (
        <div className="W8D-SliderDemo">
            <div className="W8D-SliderDemoPage">
                <h1 className="W8D-SliderDemoPageTitle">A Circular Slider for the React Framework</h1>

                <p className="W8D-SliderDemoPageIntro">
                    {isMobile
                        ? 'Customizable circular slider for React  projects. Perfect for intuitive dial interfaces.'
                        : 'Customizable circular slider component for React projects. Perfect for temperature controls, volume knobs, timer selectors; or any occassion requiring an intuitive dial interface.'}
                </p>

                {!isMobile ? (
                    <div className="W8D-AppTabContainer">
                        {sliderConfigs.map((tab, index) => (
                            <div
                                key={index}
                                className={`W8D-AppTab ${parseInt(activeTab) === index ? 'W8D-AppTab_active' : ''}`}
                                onClick={() => handleTabChange(index)}
                                onKeyDown={e => handleTabKeyDown(e, index)}
                                tabIndex={0}
                                role="tab"
                                aria-selected={activeTab === index}
                            >
                                {tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="W8D-AppOptionsMenu">
                        <input
                            type="checkbox"
                            id="W8D-AppOptionsDropdownTrigger"
                            className="W8D-AppOptionsDropdownTrigger"
                            aria-label="Toggle options menu"
                            checked={isDropdownOpen}
                            onChange={handleCheckboxChange}
                            tabIndex={-1}
                        />

                        <label
                            htmlFor="W8D-AppOptionsDropdownTrigger"
                            className="W8D-AppOptionsDropdownTrigger_label"
                            role="button"
                            tabIndex={0}
                            onKeyDown={e => {
                                // give keyboard users ability to toggle the checkbox via the label
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    document.getElementById('W8D-AppOptionsDropdownTrigger').click();
                                }
                            }}
                        >
                            <span>Slider Examples</span>
                            <ArrowUp />
                        </label>

                        <ul className="W8D-AppOptionsDropdownMenu" role="menu">
                            {sliderConfigs.map((tab, index) => (
                                <li
                                    key={index}
                                    ref={activeTab === index ? activeListItemRef : null}
                                    className={`W8D-AppTab ${activeTab === index ? 'W8D-AppTab_active' : ''}`}
                                    onClick={() => handleTabChange(index)}
                                    onKeyDown={e => handleTabKeyDown(e, index)}
                                    tabIndex={0}
                                    role="menuitem"
                                >
                                    {tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Current example section */}
                <div className="W8D-SliderDemoSection">
                    <h3 className="W8D-SliderDemoSection_title">{currentSlider.description}</h3>
                    <div className="W8D-SliderDemoContainer">
                        {currentSlider.id === 'air-quality' ? (
                            <div className="W8D-SliderDemoSliderDashboard">
                                {currentSlider.props.map((prop, index) => (
                                    <CircularSlider
                                        key={`slider-${index}-${activeTab}`}
                                        ref={el => (sliderRefs.current[activeTab][index] = el)}
                                        {...prop}
                                    />
                                ))}
                            </div>
                        ) : currentSlider.id === 'world' && isWorldDataLoading ? (
                            /* loading fallback from useWorldDataInitialiser custom hook */
                            <div>...just a moment, we're getting the information for you.</div>
                        ) : currentSlider.id === 'world' ? (
                            <div className="W8D-SliderDemoSliderDashboardWorldView">
                                <CircularSlider
                                    key={`slider-${activeTab}`}
                                    ref={sliderRefs.current[activeTab]}
                                    {...currentSlider.props}
                                />
                                {/* render only if data exists to prevent an undefined error */}
                                {selectedCountryDataPack.data && (
                                    <div className="W8D-SliderDemoSliderDashboardWorldView_JsonContainer">
                                        <div className="W8D-SliderDemoSliderDashboardWorldView_JsonContainer-heading">
                                            data view level selector:{' '}
                                        </div>
                                        <JsonDataViewSelector
                                            radioSelectors={[0, 1, 2, 3, 4]}
                                            jsonDataExpand={jsonDataExpand}
                                            setJsonDataExpand={setJsonDataExpand}
                                        />
                                        <JsonView
                                            value={selectedCountryDataPack.data}
                                            keyName={selectedCountryDataPack.data.names.official}
                                            collapsed={jsonDataExpand}
                                            indent={40}
                                            displayDataTypes={false}
                                        >
                                            <JsonView.Arrow
                                                render={({ 'data-expanded': isExpanded, ...props }) => {
                                                    const svgProps = {
                                                        style: {
                                                            cursor: 'pointer',
                                                            height: '1em',
                                                            width: '1em',
                                                            marginRight: 5,
                                                            userSelect: 'none',
                                                        },
                                                        fill: 'var(--w-rjv-arrow-color, currentColor)',
                                                    };
                                                    if (!isExpanded) {
                                                        return (
                                                            <svg viewBox="0 0 24 24" {...svgProps}>
                                                                <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" />
                                                            </svg>
                                                        );
                                                    }
                                                    return (
                                                        <svg viewBox="0 0 24 24" {...svgProps}>
                                                            <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
                                                        </svg>
                                                    );
                                                }}
                                            />
                                        </JsonView>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Renders World Slider when loaded, or any other slider instantly */
                            <CircularSlider
                                key={`slider-${activeTab}`}
                                ref={sliderRefs.current[activeTab]}
                                {...currentSlider.props}
                            />
                        )}
                    </div>
                </div>

                {/* Code display section */}
                {currentSlider.codeString && (
                    <>
                        {isMobile ? (
                            <div className="W8D-AppCodeViewbox_mobile">
                                <button
                                    className="W8D-AppCodeButton_mobile"
                                    onClick={() => setShowMobileCode(!showMobileCode)}
                                    aria-expanded={showMobileCode}
                                    aria-controls="code-panel"
                                >
                                    {showMobileCode ? 'Hide Code Sample' : 'View Code Sample'}
                                    {/* Include your ArrowUp icon here */}
                                </button>
                                <div className={`W8D-AppCodeWrapper ${showMobileCode ? 'open' : ''}`}>
                                    <div className="W8D-AppCodeContainer">
                                        <CodeBlock code={currentSlider.codeString} language="jsx" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="W8D-AppCodeContainer">
                                <CodeBlock code={currentSlider.codeString} language="jsx" />
                            </div>
                        )}
                    </>
                )}

                {/* Footer with credits */}
                <div className="W8D-AppDemoFooter">
                    <p>• © {new Date().getFullYear()} Circular Slider - <a href="https://pay.watsonised.me" target="_blank" rel="noopener noreferrer" > show your 💗 with money </a> • </p>
                </div>
            </div>
        </div>
    );
};
