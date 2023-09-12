import React, { useState, useEffect, useRef } from 'react';

const FlexStackButtons = ({ buttonData, maxRows }) => {
    const containerRef = useRef(null);
    const [visibleRows, setVisibleRows] = useState(1);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const calculateButtonsPerRow = () => {
            const containerWidth = containerRef.current.offsetWidth;
            const buttons = Array.from(containerRef.current.querySelectorAll('button'));
            let buttonsWidth = 0;
            let buttonsPerRow = 0;

            buttons.forEach((button) => {
                buttonsWidth += button.offsetWidth;
                if (buttonsWidth <= containerWidth) {
                    buttonsPerRow += 1;
                }
            });

            return buttonsPerRow;
        };

        const handleResize = () => {
            const buttonsPerRow = calculateButtonsPerRow();
            const maxVisibleRows = expanded ? buttonData.length : maxRows;
            setVisibleRows(Math.min(maxVisibleRows, Math.ceil(buttonData.length / buttonsPerRow)));
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [buttonData, maxRows, expanded]);

    return (
        <div>
            <div ref={containerRef} style={{ display: 'flex', flexWrap: 'wrap' }}>
                {buttonData.slice(0, visibleRows).map((button, index) => (
                    <button key={index}>{button.label}</button>
                ))}
            </div>
            {buttonData.length > maxRows && (
                <button onClick={() => setExpanded(!expanded)}>
                    {expanded ? 'See Less' : 'See More'}
                </button>
            )}
        </div>
    );
};

export default FlexStackButtons;
