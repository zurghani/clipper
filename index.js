import React from 'react';
import FlexStackButtons from './FlexStackButtons';

const buttonData = [
    // Define your button data here
];

function App() {
    return (
        <div className="App">
            <FlexStackButtons buttonData={buttonData} maxRows={3} />
        </div>
    );
}

export default App;
