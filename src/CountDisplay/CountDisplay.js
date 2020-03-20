import React from 'react';
import './CountDisplay.css';
import ButtonArea from "../ButtonArea/ButtonArea";

class CountDisplay extends React.Component {


    render = () => {
        let displayValue = (this.props.disabledClass && this.props.maxValue !== 0) ? "'Error! Check values'" : this.props.value;
        let classForCount = (this.props.value === this.props.maxValue) ? 'countred' :
            (this.props.disabledClass) ? 'messagered' : 'count';

        return (<div>
            <div className="counterDisplay">
                    <div className={classForCount}>
                        {displayValue}
                    </div>
            </div>
                <div>
                    <ButtonArea resetCounter={this.props.resetCounter}
                                increaseCounter={this.props.increaseCounter}
                                showSet={this.props.showSet}
                                disabledRes={this.props.disabledRes}
                                disabledInc={this.props.disabledInc}
                    />
                </div>
            </div>
        );
    }
}

export default CountDisplay;