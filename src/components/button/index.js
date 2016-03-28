import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter } from '../../store';

const Button = (props) => {
    const { onClick } = props;

    return <button onClick={onClick}>Click me</button>;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(increaseCounter())
    }
};

export default connect(null, mapDispatchToProps)(Button);
