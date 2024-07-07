import React, { useState, useEffect } from 'react';
import { Accordion, InputGroup, ToggleButton } from 'react-bootstrap';
import cardsData from '../constants/cardsData.json'; // Adjust the path accordingly

function Menu({ setProgress }) {
    const [buttonStates, setButtonStates] = useState(
        Object.keys(cardsData).reduce((acc, set) => {
            acc[set] = new Array(cardsData[set].length).fill(false);
            return acc;
        }, {})
    );

    useEffect(() => {
        const calculateProgress = () => {
            let totalCards = 0;
            let collectedCards = 0;
    
            // Calculate total and collected cards
            Object.keys(buttonStates).forEach(set => {
                totalCards += buttonStates[set].length;
                collectedCards += buttonStates[set].filter(state => state).length;
            });
    
            // Calculate percentage of collected cards
            const percentage = Math.round((collectedCards / totalCards) * 100);
    
            // Return the number of cards collected
            return collectedCards;
        };
    
        // Set progress as a number
        setProgress(calculateProgress());
    }, [buttonStates, setProgress]);
    

    const handleSelectAll = (set) => {
        const allSelected = buttonStates[set].every(state => state);
        const newButtonStates = { ...buttonStates };
        newButtonStates[set] = new Array(buttonStates[set].length).fill(!allSelected);
        setButtonStates(newButtonStates);
    };

    const handleToggle = (set, index) => {
        const newButtonStates = { ...buttonStates };
        newButtonStates[set][index] = !newButtonStates[set][index];
        setButtonStates(newButtonStates);
    };

    return (
        <div className="div-menu">
            <Accordion className="mx-5 pb-5">
                {Object.keys(cardsData).map((set, setIndex) => (
                    <Accordion.Item eventKey={setIndex.toString()} key={setIndex}>
                        <Accordion.Header>{set}</Accordion.Header>
                        <Accordion.Body>
                            <div className="select">
                                <ToggleButton
                                    id={`select-all-${setIndex}`}
                                    className={'select-all-btn'}
                                    type="checkbox"
                                    variant="primary"
                                    checked={buttonStates[set].every(state => state)}
                                    onChange={() => handleSelectAll(set)}
                                >
                                    Select All
                                </ToggleButton>
                            </div>
                            {cardsData[set].map((card, cardIndex) => (
                                <InputGroup className="mb-2" key={card.card_number}>
                                    <ToggleButton
                                        id={`toggle-check-${setIndex}-${cardIndex}`}
                                        className={buttonStates[set][cardIndex] ? 'toggle-checked' : 'toggle-unchecked'}
                                        type="checkbox"
                                        variant="outline-success"
                                        checked={buttonStates[set][cardIndex]}
                                        onChange={() => handleToggle(set, cardIndex)}
                                    >
                                        {buttonStates[set][cardIndex] ? 'Collected' : 'Not Collected'}
                                    </ToggleButton>
                                    <InputGroup.Text aria-label={`Checkbox for following text input`}>{card.card_name}</InputGroup.Text>
                                </InputGroup>
                            ))}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}

export default Menu;