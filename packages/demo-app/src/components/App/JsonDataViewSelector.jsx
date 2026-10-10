export const JsonDataViewSelector = props => {
    const { radioSelectors, jsonDataExpand, setJsonDataExpand } = props;

    const RadioButtonSvg = props => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className="RadioButton-Svg"
            {...props}
        >
            <circle cx={10} cy={10} r={9} />
            <path d="M10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" className="inner" />
            <path d="M10 1a9 9 0 0 1 0 18 9 9 0 1 1 0-18Z" className="outer" />
        </svg>
    );

    return (
        <div
            className="W8D-SliderDemoSliderDashboardWorldView_JsonContainerData"
            aria-label="change JSON data view expansion"
        >
            {radioSelectors.map(value => (
                <label
                    key={`json-view-${value}`}
                    className="RadioButton-Label"
                >
                    <input
                        type="radio"
                        name="jsonDataExpand"
                        className="RadioButton-Input"
                        value={value}
                        checked={jsonDataExpand === value}
                        onChange={() => setJsonDataExpand(value)}
                    />
                    <RadioButtonSvg />
                    <span className="RadioButton-Label_title">{parseInt(value) + 1}</span>
                </label>
            ))}
        </div>
    );
};
