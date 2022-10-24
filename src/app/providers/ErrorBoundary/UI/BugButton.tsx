import React from 'react';

const BugButton = () => {

    const [error, setError] = React.useState(false)

    const onThrow = () => setError(true)

    React.useEffect(() => {
        if(error) {
            throw new Error()
        }
    }, [error])

    return (
        <div
            onClick={onThrow}
        >
           Throw error
        </div>
    );
};

export default BugButton;