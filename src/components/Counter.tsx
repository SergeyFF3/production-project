import React from 'react';
import classes from './test.module.scss'

const Counter = () => {

    let [ count, setCount] = React.useState<number>(0)

    const inc = () => {
        setCount(count + 1)
    }

    const dec = () => {
        setCount(count - 1)
    }

    const clear = () => {
        setCount(count = 0)
    }

    return (
        <div>
            {count + 1}
            <div>
                <button className={classes.btn} onClick={inc}>+</button>
                <button onClick={dec}>-</button>
                <button onClick={clear}>Clear</button>
            </div>
        </div>
    );
};

export default Counter;