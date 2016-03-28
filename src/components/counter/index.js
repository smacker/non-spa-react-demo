import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    const { value } = props;

    return (
        <div className="counter">
            Button pressed <span>{value || 0}</span> times
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        value: state.counter
    };
}

export default connect(mapStateToProps)(Counter);
