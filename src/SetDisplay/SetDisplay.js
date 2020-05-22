import React from 'react';
import './SetDisplay.css';
import Button from "../ButtonArea/Button/Button";

class SetDisplay extends React.Component {

  onInputStart = (e) => {
    this.props.onStartValueChange(e.currentTarget.value)
  };
  onInputMax = (e) => {
    this.props.onMaxValueChange(e.currentTarget.value)
  };


  render = () => {

    let inputClass = this.props.disabledSet ? 'redinput' : 'input';

    return (<div className="box">
        <div className="display">
          <div>
            <span>start value </span>
            <input value={this.props.startCount}
                   onChange={this.onInputStart}
                   className={inputClass}
                   type='number'/>
          </div>
          <div>
            <span>max value </span> <input value={this.props.maxValue}
                                           onChange={this.onInputMax}
                                           className={inputClass}
                                           type='number'/>
          </div>
        </div>
        <div>
          <Button title={'set'}
                  onClickHandler={this.props.onValueChange}
                  disabledButton={this.props.disabledSet}
          />
        </div>
      </div>
    );
  }
}


export default SetDisplay;
