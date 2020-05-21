import React from 'react';
import './ButtonArea.css';
import Button from './Button/Button';


class ButtonArea extends React.Component {



    render = () => {


        return (
            <div className= 'buttonArea'>

                <Button onClickHandler={this.props.resetCounter}
                        title={'reset'}
                        disabledButton = {this.props.disabledRes}
                        />
                <Button onClickHandler={this.props.increaseCounter}
                        title={'inc'}
                        disabledButton = {this.props.disabledInc}
                        />
                <Button onClickHandler={this.props.showSet}
                        title={'set'}
                        // disabledButton = {this.props.disabledInc}

                />

            </div>
        );
    }
}

export default ButtonArea;

