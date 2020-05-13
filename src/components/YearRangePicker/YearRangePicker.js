import React, { Component } from 'react';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from 'react-icons/fa';

import './_yearRangePicker.scss'

class YearRangerPicker extends Component {
    state = {
        panelOpen: false,
        selectedStartValue: '',
        selectedEndValue: '',
        initialStartValue: '',
        initialEndValue: '',
        finalStartValue: '',
        finalEndValue: '',
        disableStartLeft: false,
        disableStartRight: false,
        disableEndLeft: false,
        disableEndRight: false,
    };

    componentDidMount = () => {
        const {
            startValue = new Date().getFullYear(),
            endValue = new Date().getFullYear() + 64,
        } = this.props;

        document.addEventListener('click', this.handleClick);

        this.setState({
            finalStartValue: Number(startValue),
            finalEndValue: Number(endValue),
            initialStartValue: Number(startValue),
            initialEndValue: Number(startValue) + 1,
            selectedStartValue: Number(startValue),
        });
    };

    componentWillUnmount = () => {
        document.removeEventListener('click', this.handleClick);
    };

    componentDidUpdate = async (prevProps, prevState) => {
        const { startValue, endValue } = this.props;

        if (prevProps.startValue !== startValue) {
            this.setState({
                finalStartValue: Number(startValue),
                initialStartValue: Number(startValue),
                initialEndValue: Number(startValue) + 1,
                selectedStartValue: Number(startValue),
            });
        }

        if (prevProps.endValue !== endValue) {
            this.setState({
                finalEndValue: Number(endValue),
            });
        }
    };

    handleClick = evt => {
        if (!evt.target.closest('.year-range-picker')) {
            this.setState({
                panelOpen: false,
            });
        }
    }

    openPanel = () => {
        this.setState({
            panelOpen: true,
        });
    };

    handleStartYear = selectedStartValue => {
        this.setState({
            selectedStartValue,
            initialEndValue: selectedStartValue + 1,
        });
        this.props.onStartChange(selectedStartValue);
    };

    handleEndYear = selectedEndValue => {
        this.setState({
            selectedEndValue,
        });
        this.props.onEndChange(selectedEndValue);
    };

    initializeArray = initialValue => {
        const { finalStartValue, finalEndValue } = this.state;

        const years = Array.from({ length: 16 }, (value, index) => index + initialValue);

        return years.filter(year => year >= finalStartValue && year <= finalEndValue);
    };

    handleLeftClick = label => {
        this.setState(prevState => {
            return {
                [label]: prevState[label] - 16,
            };
        });
    };

    handleRightClick = label => {
        this.setState(prevState => {
            return {
                [label]: prevState[label] + 16,
            };
        });
    };

    render() {
        const {
            panelOpen,
            selectedStartValue,
            selectedEndValue,
            initialStartValue,
            initialEndValue,
            disableStartLeft,
            disableStartRight,
            disableEndLeft,
            disableEndRight,
        } = this.state;

        return (
            <div className="year-range-picker"
                onClick={this.openPanel}
            >
                <div className="year-range-select"><FaCalendarAlt /> Select Range</div>
                <div
                    className="year-range-panel-wraper"
                    style={{ display: panelOpen ? 'inline-block' : 'none' }}
                >
                    <div className="panel-header">
                        <div className="left-header">
                            <div
                                className={`range-arrow ${disableStartLeft && 'disabled'}`}
                                onClick={() => this.handleLeftClick('initialStartValue')}
                            >
                                <FaChevronLeft />
                            </div>
                            <div>
                                {`${initialStartValue} - ${initialStartValue + 15}`}
                            </div>
                            <div
                                className={`range-arrow ${disableStartRight && 'disabled'}`}
                                onClick={() => this.handleRightClick('initialStartValue')}
                            >
                                <FaChevronRight />
                            </div>
                        </div>
                        <div className="selected-range">
                            {selectedStartValue} - {selectedEndValue}
                        </div>
                        <div className="right-header">
                            <div
                                className={`range-arrow ${disableEndLeft && 'disabled'}`}
                                onClick={() => this.handleLeftClick('initialEndValue')}
                            >
                                <FaChevronLeft />
                            </div>
                            <div>
                                {`${initialEndValue} - ${initialEndValue + 15}`}
                            </div>
                            <div
                                className={`range-arrow ${disableEndRight && 'disabled'}`}
                                onClick={() => this.handleRightClick('initialEndValue')}
                            >
                                <FaChevronRight />
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="left-body">
                            {this.initializeArray(initialStartValue).map(year => (
                                <div onClick={() => this.handleStartYear(year)}
                                    className={`year ${year === selectedStartValue && 'active'}`}
                                >
                                    {year}
                                </div>
                            ))}
                        </div>
                        <div className="right-body">
                            {this.initializeArray(initialEndValue).map(year => (
                                <div onClick={() => this.handleEndYear(year)}
                                    className={`year ${year === selectedEndValue && 'active'}`}
                                >
                                    {year}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default YearRangerPicker;
