import { defaults } from '../utilities';

export const Labels = ({
    label,
    labelAppendValue = defaults.labelAppendValue,
    labelBottom = defaults.labelBottom,
    labelColor = defaults.labelColor,
    labelFontSize = defaults.labelFontSize,
    labelHideValue = defaults.labelHideValue,
    labelValueHorizontalOffset = defaults.labelValueHorizontalOffset,
    labelValueVerticalOffset = defaults.labelValueVerticalOffset,
    labelAppendCss = defaults.labelAppendCss,
    labelPrependCss = defaults.labelPrependCss,
    labelPrependValue = defaults.labelPrependValue,
    labelValueFontSize = defaults.labelValueFontSize,
    labelHorizontalOffset = defaults.labelHorizontalOffset,
    labelVerticalOffset = defaults.labelVerticalOffset,
    value,
}) => {
    const styles = {
        labelPrependAndAppend: {
            color: labelColor,
            left: labelValueHorizontalOffset,
            top: labelValueVerticalOffset,
        },
        value: {
            fontSize: labelValueFontSize,
            color: labelColor,
        },
        labelsOffset: {
            marginBottom: labelVerticalOffset,
            marginLeft: labelHorizontalOffset
        },
        hide: {
            display: 'none',
        },
        appended: {
            ...labelAppendCss
        },
        prepended: {
            ...labelPrependCss
        }
    };

    return (
        <div className="W8D-CircularSliderLabelContainer" style={{ ...styles.labelPrependAndAppend, ...(labelHideValue ? styles.hide : {}) }}>
            {!labelBottom && <div className="W8D-CircularSliderLabel_top" style={{ fontSize: labelFontSize, ...styles.labelsOffset }}>{label}</div>}
            <div className="W8D-CircularSliderLabelValueWrapper" style={{ ...styles.value }}>
                <code className="W8D-CircularSliderLabelValue" >
                    <span className="W8D-CircularSliderLabelValue_prepend" style={styles.prepended} >{labelPrependValue}</span>
                    {value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    <span className="W8D-CircularSliderLabelValue_append" style={styles.appended} >{labelAppendValue}</span>
                </code>
            </div>
            {labelBottom && <div className="W8D-CircularSliderLabel_bottom" style={{ fontSize: labelFontSize, ...styles.labelsOffset }}>{label}</div>}
        </div>
    );
};
