import React from 'react';
import s from './App.module.css';
import CountDisplay from './CountDisplay/CountDisplay'
import SetDisplay from "./SetDisplay/SetDisplay";
import {
    changeMaxValueAC,
    changeStartValueAC,
    increaseCounterAC,
    resetCounterAC,
    setValuesAC, showSetAC
} from "./redux/reducer";
import {connect} from "react-redux";


class App extends React.Component {

    state = {
        // startCount: 0,
        // value: 'Enter values',
        // maxValue: 0,
        // isHidden: false,
        // desabled: false
    };

    increaseCounter = () => {
        if (this.props.value < this.props.maxValue) {
            let value = this.props.value + 1;
            this.props.increaseCounter(value)
        }
    };
    resetCounter = () => {
        let startValue = this.props.startCount;
        this.props.resetCounter(startValue)
        // this.setState({value: this.state.startCount})
    };


    onStartValueChange = (value) => {
        this.props.changeStartValue(Number(value))
        // this.setState({startCount: Number(value)})
    };
    onMaxValueChange = (maxValue) => {
        this.props.changeMaxValue(Number(maxValue))
        // this.setState({maxValue: Number(value)})
    };
    onValueChange = () => {
        this.props.setValues();
        // this.setState({value: this.state.startCount});
        // this.setState({desabled: true});
        // this.setState({ isHidden:true})
    };
    showSet = () => {
        this.props.showSet()
    };


    render = () => {

        let disabledSet = (this.props.startCount >= this.props.maxValue) || ((this.props.maxValue || this.props.startCount) < 0);
        let disabledRes = (this.props.value === this.props.startCount) && this.props.disabled === true;
        let disabledInc = this.props.value === this.props.maxValue;

        return (

            <div className={s.app}>

                {!this.props.isHidden && <div className={s.container}>

                    <SetDisplay {...this.props}
                                onStartValueChange={this.onStartValueChange}
                                onMaxValueChange={this.onMaxValueChange}
                                title={'set'}
                                disabledSet={disabledSet}
                                onValueChange={this.onValueChange}/>
                </div>}


                {this.props.isHidden && <div className={s.container}>
                    <CountDisplay {...this.props}
                                  value={this.props.value}
                        //           maxValue={this.props.maxValue}
                        //           startCount={this.props.startCount}
                                  disabledClass={disabledSet}
                                  resetCounter={this.resetCounter}
                                  increaseCounter={this.increaseCounter}
                                  showSet={this.showSet}
                                  disabledRes={disabledRes}
                                  disabledInc={disabledInc}
                    />
                </div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        startCount: state.startCount,
        value: state.value,
        maxValue: state.maxValue,
        isHidden: state.isHidden,
        disabled: state.disabled
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: (value) => {
            dispatch(increaseCounterAC(value))
        },
        resetCounter: (resetValue) => {
            dispatch(resetCounterAC(resetValue))
        },
        changeStartValue: (value) => {
            dispatch(changeStartValueAC(value))
        },
        changeMaxValue: (value) => {
            dispatch(changeMaxValueAC(value))
        },
        setValues: (startValue) => {
            dispatch(setValuesAC(startValue))
        },
        showSet: () => {
            dispatch(showSetAC())
        }

    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;