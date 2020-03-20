import React from 'react';
import './Button.css';


class Button extends React.Component {


    render = () => {

     let classForButton = this.props.disabledButton ? 'disabled': 'button';

        return (

            <div>
                <button className={classForButton} disabled={this.props.disabledButton} onClick={this.props.onClickHandler}>{this.props.title}</button>
            </div>
        );
    }
}

export default Button;