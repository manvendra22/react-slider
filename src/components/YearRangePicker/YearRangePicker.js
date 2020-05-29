import React, { Component } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import './_yearRangePicker.scss'

import Body from './Body/Body'
import Header from './Header/Header'

class YearRangerPicker extends Component {
    state = {
        panelOpen: false,
        selectedLeftValue: '',
        selectedRightValue: '',
        initalLeftValue: '',
        initialRightValue: '',
    };

    componentDidMount = () => {
        const {
            startValue = new Date().getFullYear(),
        } = this.props;

        document.addEventListener('click', this.handleClick);

        this.setState({
            initalLeftValue: Number(startValue),
            initialRightValue: Number(startValue) + 1,
            selectedLeftValue: Number(startValue),
        });
    };

    componentWillUnmount = () => {
        document.removeEventListener('click', this.handleClick);
    };

    componentDidUpdate = async (prevProps, prevState) => {
        const { startValue } = this.props;

        if (prevProps.startValue !== startValue) {
            this.setState({
                initalLeftValue: Number(startValue),
                initialRightValue: Number(startValue) + 1,
                selectedLeftValue: Number(startValue),
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

    handleStartYear = selectedLeftValue => {
        this.setState({
            selectedLeftValue,
            initialRightValue: selectedLeftValue + 1,
        });
        // this.props.onStartChange(selectedLeftValue);
    };

    handleEndYear = selectedRightValue => {
        this.setState({
            selectedRightValue,
        });
        // this.props.onEndChange(selectedRightValue);
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
            selectedLeftValue,
            selectedRightValue,
            initalLeftValue,
            initialRightValue,
        } = this.state;

        const {
            endValue
        } = this.props

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
                        <Header
                            startValue={initalLeftValue}
                            handleLeftClick={() => this.handleLeftClick('initalLeftValue')}
                            handleRightClick={() => this.handleRightClick('initalLeftValue')}
                        />
                        <div className="selected-range">
                            {selectedLeftValue} - {selectedRightValue}
                        </div>
                        <Header
                            startValue={initialRightValue}
                            handleLeftClick={() => this.handleLeftClick('initialRightValue')}
                            handleRightClick={() => this.handleLeftClick('initialRightValue')}
                        />
                    </div>
                    <div className="panel-body">
                        <Body startValue={initalLeftValue} endValue={endValue} handleValue={this.handleStartYear} />
                        <Body startValue={initialRightValue} endValue={endValue} handleValue={this.handleEndYear} />
                    </div>
                </div>
            </div>
        );
    }
}

export default YearRangerPicker;
