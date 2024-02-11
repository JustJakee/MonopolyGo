import { useState } from 'react';
import { Accordion, ProgressBar, InputGroup, ToggleButton, Card } from 'react-bootstrap';
// ----- Future Imports for DB Integration Below ----
//import { generateClient } from "aws-amplify/api";
// import { updateMonopolyUserCards } from './graphql/mutations';

function Menu() {
    // const client = generateClient()
    const [buttonStates, setButtonStates] = useState(Array(189).fill(false));
    const [progress, setProgress] = useState(0);

    //TODO Progress Bar inside Accordion to track set progress
    //TODO Share state with header to update the overall card tracker

    // Example here <ProgressBar now={calculateProgress()} label={`${calculateProgress()}%`} className="ml-auto" />

    // const updatedMonopolyUserCards = await client.graphql({
    //     query: updateMonopolyUserCards,
    //     variables: {
    //         input: {
    //         "MonopolyUsers": [],
    //         "MonopoloyCards": []
    //     }
    //     }
    // });

    // const calculateProgress = () => {}

    // setButtonStates(buttonStates.slice(0,9).fill(true));

    const handleSelectAll = (set) => {
        console.log(set);
        switch (set) {
            case 0:
                setButtonStates(buttonStates.slice(0, 9).fill(true));
                break;
            case 1:
                setButtonStates(buttonStates.slice(9, 18).fill(true));
                break;
            case 2:
                setButtonStates(buttonStates.slice(18, 27).fill(true));
                break;
            case 3:
                setButtonStates(buttonStates.slice(27, 36).fill(true));
                break;
            case 4:
                setButtonStates(buttonStates.slice(36, 45).fill(true));
                break;
            case 5:
                setButtonStates(buttonStates.slice(45, 54).fill(true));
                break;
            case 6:
                setButtonStates(buttonStates.slice(54, 63).fill(true));
                break;
            case 7:
                setButtonStates(buttonStates.slice(63, 72).fill(true));
                break;
            case 8:
                setButtonStates(buttonStates.slice(72, 81).fill(true));
                break;
            case 9:
                setButtonStates(buttonStates.slice(81, 90).fill(true));
                break;
            case 10:
                setButtonStates(buttonStates.slice(90, 99).fill(true));
                break;
            case 11:
                setButtonStates(buttonStates.slice(99, 108).fill(true));
                break;
            case 12:
                setButtonStates(buttonStates.slice(108, 117).fill(true));
                break;
            case 13:
                setButtonStates(buttonStates.slice(117, 126).fill(true));
                break;
            case 14:
                setButtonStates(buttonStates.slice(126, 135).fill(true));
                break;
            case 15:
                setButtonStates(buttonStates.slice(135, 144).fill(true));
                break;
            case 16:
                setButtonStates(buttonStates.slice(144, 153).fill(true));
                break;
            case 17:
                setButtonStates(buttonStates.slice(153, 162).fill(true));
                break;
            case 18:
                setButtonStates(buttonStates.slice(162, 171).fill(true));
                break;
            case 19:
                setButtonStates(buttonStates.slice(171, 180).fill(true));
                break;
            case 20:
                setButtonStates(buttonStates.slice(180, 189).fill(true));
                break;
            default:
                break;
        }
    }

    const handleToggle = (index) => {
        const newButtonStates = [...buttonStates];
        newButtonStates[index] = !newButtonStates[index];
        setButtonStates(newButtonStates);
        console.log(newButtonStates)
    };

    return (
        <div className="div-menu">
            <Accordion className="mx-5 pb-5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Best Beginnings
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="select">
                            <ToggleButton
                                id="select-all-0"
                                className={'select-all-btn'}
                                type="checkbox"
                                variant="primary"
                                checked={true}
                                onChange={() => handleSelectAll(0)}
                            >
                                Select All
                            </ToggleButton>
                        </div>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-0"
                                className={buttonStates[0] ? 'toggle-checked' : 'toggle-unchecked'}
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[0]}
                                onChange={() => handleToggle(0)}
                            >
                                {buttonStates[0] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Peek of the Past </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-1"
                                className={buttonStates[1] ? 'toggle-checked' : 'toggle-unchecked'}
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[1]}
                                onChange={() => handleToggle(1)}
                            >
                                {buttonStates[1] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Doggone It! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-2"
                                className={buttonStates[2] ? 'toggle-checked' : 'toggle-unchecked'}
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[2]}
                                onChange={() => handleToggle(2)}
                            >
                                {buttonStates[2] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Choo Choo! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-3"
                                className={buttonStates[3] ? 'toggle-checked' : 'toggle-unchecked'}
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[3]}
                                onChange={() => handleToggle(3)}
                            >
                                {buttonStates[3] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Just in Case </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-4"
                                className={buttonStates[4] ? 'toggle-checked' : 'toggle-unchecked'}
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[4]}
                                onChange={() => handleToggle(4)}
                            >
                                {buttonStates[4] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Community Goals </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-5"
                                className={buttonStates[5] ? 'toggle-checked' : 'toggle-unchecked'}
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[5]}
                                onChange={() => handleToggle(5)}
                            >
                                {buttonStates[5] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Child's Play </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-6"
                                className={buttonStates[6] ? 'toggle-checked' : 'toggle-unchecked'}
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[6]}
                                onChange={() => handleToggle(6)}
                            >
                                {buttonStates[6] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Missing Treasure </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-7"
                                className={buttonStates[7] ? 'toggle-checked' : 'toggle-unchecked'}
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[7]}
                                onChange={() => handleToggle(7)}
                            >
                                {buttonStates[7] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Lost & Found </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-8"
                                className={buttonStates[8] ? 'toggle-checked' : 'toggle-unchecked'}
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[8]}
                                onChange={() => handleToggle(8)}
                            >
                                {buttonStates[8] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Story Time </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>The Top Hat</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-9"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[9]}
                                onChange={() => handleToggle(9)}
                            >
                                {buttonStates[9] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Love At First Sight </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-10"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[10]}
                                onChange={() => handleToggle(10)}
                            >
                                {buttonStates[10] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Before Billions </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-11"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[11]}
                                value={1}
                                onChange={() => handleToggle(11)}
                            >
                                {buttonStates[11] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Money-Minded </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-12"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[12]}
                                onChange={() => handleToggle(12)}
                            >
                                {buttonStates[12] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Master Plan </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-13"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[13]}
                                onChange={() => handleToggle(13)}
                            >
                                {buttonStates[13] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Moving On Up </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-14"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[14]}
                                onChange={() => handleToggle(14)}
                            >
                                {buttonStates[14] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Obsession </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-15"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[15]}
                                value={1}
                                onChange={() => handleToggle(15)}
                            >
                                {buttonStates[15] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Rich! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-16"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[16]}
                                onChange={() => handleToggle(16)}
                            >
                                {buttonStates[16] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Long-Awaited </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-17"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[17]}
                                onChange={() => handleToggle(17)}
                            >
                                {buttonStates[17] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Top Hat </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Accross The Board</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-18"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[18]}
                                onChange={() => handleToggle(18)}
                            >
                                {buttonStates[18] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Vision </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-19"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[19]}
                                onChange={() => handleToggle(19)}
                            >
                                {buttonStates[19] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Circle Back </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-20"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[20]}
                                onChange={() => handleToggle(20)}
                            >
                                {buttonStates[20] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Get The Point </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-21"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[21]}
                                onChange={() => handleToggle(21)}
                            >
                                {buttonStates[21] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Fun, Squared! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-22"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[22]}
                                onChange={() => handleToggle(22)}
                            >
                                {buttonStates[22] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > True Colors </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-23"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[23]}
                                onChange={() => handleToggle(23)}
                            >
                                {buttonStates[23] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Let's GO! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-24"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[24]}
                                onChange={() => handleToggle(24)}
                            >
                                {buttonStates[24] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Good Deeds </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-25"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[25]}
                                onChange={() => handleToggle(25)}
                            >
                                {buttonStates[25] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Throw the Dice </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-26"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[26]}
                                onChange={() => handleToggle(26)}
                            >
                                {buttonStates[26] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Across the Board </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>The Battleship</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-27"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[27]}
                                onChange={() => handleToggle(27)}
                            >
                                {buttonStates[27] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Bark Voyage </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-28"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[28]}
                                onChange={() => handleToggle(28)}
                            >
                                {buttonStates[28] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > My Captain! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-29"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[29]}
                                onChange={() => handleToggle(29)}
                            >
                                {buttonStates[29] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Sonar Peek </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-30"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[30]}
                                onChange={() => handleToggle(30)}
                            >
                                {buttonStates[30] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > First Stop </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-31"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[31]}
                                onChange={() => handleToggle(31)}
                            >
                                {buttonStates[31] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Born to Fly </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-32"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[32]}
                                onChange={() => handleToggle(32)}
                            >
                                {buttonStates[32] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Map it Out </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-33"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[33]}
                                onChange={() => handleToggle(33)}
                            >
                                {buttonStates[33] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Adiós, Artic! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-34"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[34]}
                                onChange={() => handleToggle(34)}
                            >
                                {buttonStates[34] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Co-Captains </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-35"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[35]}
                                onChange={() => handleToggle(35)}
                            >
                                {buttonStates[35] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Battleship </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>On A Roll</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-36"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[36]}
                                onChange={() => handleToggle(36)}
                            >
                                {buttonStates[36] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Whittling Whiz </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-37"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[37]}
                                onChange={() => handleToggle(37)}
                            >
                                {buttonStates[37] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > A Bit Wonky </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-38"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[38]}
                                onChange={() => handleToggle(38)}
                            >
                                {buttonStates[38] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Prototype </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[39]}
                                onChange={() => handleToggle(39)}
                            >
                                {buttonStates[39] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Fun, Squared! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-40"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[40]}
                                onChange={() => handleToggle(40)}
                            >
                                {buttonStates[40] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Pro </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-41"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[41]}
                                onChange={() => handleToggle(41)}
                            >
                                {buttonStates[41] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Dice-Bot 3000 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-42"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[42]}
                                onChange={() => handleToggle(42)}
                            >
                                {buttonStates[42] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Dream Come True </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-43"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[43]}
                                onChange={() => handleToggle(43)}
                            >
                                {buttonStates[43] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Squared Joy </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-44"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[44]}
                                onChange={() => handleToggle(44)}
                            >
                                {buttonStates[44] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Perfect Pair </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>The Thimble</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-45"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[45]}
                                onChange={() => handleToggle(45)}
                            >
                                {buttonStates[45] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Thimble Factory </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-46"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[46]}
                                onChange={() => handleToggle(46)}
                            >
                                {buttonStates[46] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > In-Line </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-47"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[47]}
                                onChange={() => handleToggle(47)}
                            >
                                {buttonStates[47] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Prized Possession </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-48"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[48]}
                                onChange={() => handleToggle(48)}
                            >
                                {buttonStates[48] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Jackpot! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-49"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[49]}
                                onChange={() => handleToggle(49)}
                            >
                                {buttonStates[49] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Lucky Charm </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-50"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[50]}
                                onChange={() => handleToggle(50)}
                            >
                                {buttonStates[50] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Bank Error! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-51"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[51]}
                                onChange={() => handleToggle(51)}
                            >
                                {buttonStates[51] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Finally First </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-52"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[52]}
                                onChange={() => handleToggle(52)}
                            >
                                {buttonStates[52] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Dividends </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-53"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[53]}
                                onChange={() => handleToggle(53)}
                            >
                                {buttonStates[53] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Thimble </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>Card Quest</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-54"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[54]}
                                onChange={() => handleToggle(54)}
                            >
                                {buttonStates[54] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Adventure Time </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-55"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[55]}
                                onChange={() => handleToggle(55)}
                            >
                                {buttonStates[55] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > No Chance </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-56"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[56]}
                                onChange={() => handleToggle(56)}
                            >
                                {buttonStates[56] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Wrapped Up </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-57"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[57]}
                                onChange={() => handleToggle(57)}
                            >
                                {buttonStates[57] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Waterlogged </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[58]}
                                onChange={() => handleToggle(58)}
                            >
                                {buttonStates[58] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Jungle Clue </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-59"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[59]}
                                onChange={() => handleToggle(59)}
                            >
                                {buttonStates[59] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Enchanted </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-60"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[60]}
                                onChange={() => handleToggle(60)}
                            >
                                {buttonStates[60] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > To The Moon! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-61"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[61]}
                                onChange={() => handleToggle(61)}
                            >
                                {buttonStates[61] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Under Your Nose </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-62"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[62]}
                                onChange={() => handleToggle(62)}
                            >
                                {buttonStates[62] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Treasured Cards </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header>The Iron</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-63"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[63]}
                                onChange={() => handleToggle(63)}
                            >
                                {buttonStates[63] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Antique Hunting </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-64"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[64]}
                                onChange={() => handleToggle(64)}
                            >
                                {buttonStates[64] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Here It Is! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-65"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[65]}
                                onChange={() => handleToggle(65)}
                            >
                                {buttonStates[65] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Memories </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-66"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[66]}
                                onChange={() => handleToggle(66)}
                            >
                                {buttonStates[66] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > In The Fire </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-67"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[67]}
                                onChange={() => handleToggle(67)}
                            >
                                {buttonStates[67] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Oops! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-67"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[67]}
                                onChange={() => handleToggle(67)}
                            >
                                {buttonStates[67] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Little Help </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-68"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[68]}
                                onChange={() => handleToggle(68)}
                            >
                                {buttonStates[68] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > New Iron! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-69"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[69]}
                                onChange={() => handleToggle(69)}
                            >
                                {buttonStates[69] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Token Factory </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-70"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[70]}
                                onChange={() => handleToggle(70)}
                            >
                                {buttonStates[70] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Iron </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header>Maximum Occupancy</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-71"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[71]}
                                onChange={() => handleToggle(71)}
                            >
                                {buttonStates[71] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > A Good Sign! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-72"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[72]}
                                onChange={() => handleToggle(72)}
                            >
                                {buttonStates[72] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Blueprints </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-73"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[73]}
                                onChange={() => handleToggle(73)}
                            >
                                {buttonStates[73] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Globe Trottin' </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-74"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[74]}
                                onChange={() => handleToggle(74)}
                            >
                                {buttonStates[74] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Round-The-World </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-75"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[75]}
                                onChange={() => handleToggle(75)}
                            >
                                {buttonStates[75] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Palettable </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-76"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[76]}
                                onChange={() => handleToggle(76)}
                            >
                                {buttonStates[76] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Dirty Deeds </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-77"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[77]}
                                onChange={() => handleToggle(77)}
                            >
                                {buttonStates[77] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > First Try </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-78"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[78]}
                                onChange={() => handleToggle(78)}
                            >
                                {buttonStates[78] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Flood The Market </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-79"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[79]}
                                onChange={() => handleToggle(79)}
                            >
                                {buttonStates[79] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Room to Rent! </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header>The Boot</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-80"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[80]}
                                onChange={() => handleToggle(80)}
                            >
                                {buttonStates[80] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Mr. M's Tale </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-81"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[81]}
                                onChange={() => handleToggle(81)}
                            >
                                {buttonStates[81] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Doing Chores </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-82"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[82]}
                                onChange={() => handleToggle(82)}
                            >
                                {buttonStates[82] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Boot Awards </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-83"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[83]}
                                onChange={() => handleToggle(83)}
                            >
                                {buttonStates[83] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Fashion Fiasco </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-84"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[84]}
                                onChange={() => handleToggle(84)}
                            >
                                {buttonStates[84] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Suit Up </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-85"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[85]}
                                onChange={() => handleToggle(85)}
                            >
                                {buttonStates[85] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > To The Awards </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-86"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[86]}
                                onChange={() => handleToggle(86)}
                            >
                                {buttonStates[86] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Nominees </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-87"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[87]}
                                onChange={() => handleToggle(87)}
                            >
                                {buttonStates[87] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Award Winner </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-88"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[88]}
                                onChange={() => handleToggle(8)}
                            >
                                {buttonStates[88] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Boot </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                    <Accordion.Header>Utility Fun</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-89"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[89]}
                                onChange={() => handleToggle(89)}
                            >
                                {buttonStates[89] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Paperwork Punt </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-90"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[90]}
                                onChange={() => handleToggle(90)}
                            >
                                {buttonStates[90] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Bills?! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-91"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[91]}
                                onChange={() => handleToggle(91)}
                            >
                                {buttonStates[91] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Not Today </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-92"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[92]}
                                onChange={() => handleToggle(92)}
                            >
                                {buttonStates[92] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Hands On! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-93"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[93]}
                                onChange={() => handleToggle(93)}
                            >
                                {buttonStates[93] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Nailing It! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-94"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[94]}
                                onChange={() => handleToggle(94)}
                            >
                                {buttonStates[94] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Electric Company </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-95"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[95]}
                                onChange={() => handleToggle(95)}
                            >
                                {buttonStates[95] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Water Works </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-96"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[96]}
                                onChange={() => handleToggle(96)}
                            >
                                {buttonStates[96] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Sparkling Fun </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-97"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[97]}
                                onChange={() => handleToggle(97)}
                            >
                                {buttonStates[97] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Making a Splash </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                    <Accordion.Header>The Cannon</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-98"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[98]}
                                onChange={() => handleToggle(98)}
                            >
                                {buttonStates[98] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > MNPL Labs </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-99"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[99]}
                                onChange={() => handleToggle(99)}
                            >
                                {buttonStates[99] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Mr. Captain </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-100"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[100]}
                                onChange={() => handleToggle(100)}
                            >
                                {buttonStates[100] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Confetti Fun </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-101"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[101]}
                                onChange={() => handleToggle(101)}
                            >
                                {buttonStates[101] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > On the Ball </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-102"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[102]}
                                onChange={() => handleToggle(102)}
                            >
                                {buttonStates[102] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Cannonball </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-103"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[103]}
                                onChange={() => handleToggle(103)}
                            >
                                {buttonStates[103] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Throw the Dice </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-104"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[104]}
                                onChange={() => handleToggle(104)}
                            >
                                {buttonStates[104] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Money Rain </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-105"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[105]}
                                onChange={() => handleToggle(105)}
                            >
                                {buttonStates[105] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Secret Weapon </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-106"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[106]}
                                onChange={() => handleToggle(106)}
                            >
                                {buttonStates[106] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Cannon </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                    <Accordion.Header>Free Parking</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-107"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[107]}
                                onChange={() => handleToggle(107)}
                            >
                                {buttonStates[107] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Fine Ride </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-108"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[108]}
                                onChange={() => handleToggle(108)}
                            >
                                {buttonStates[108] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Not So Fast </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-109"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[109]}
                                onChange={() => handleToggle(109)}
                            >
                                {buttonStates[109] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Laissez-faire </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-110"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[110]}
                                onChange={() => handleToggle(110)}
                            >
                                {buttonStates[110] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Parking Pains </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-111"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[111]}
                                onChange={() => handleToggle(111)}
                            >
                                {buttonStates[111] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Car Collection </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-112"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[112]}
                                onChange={() => handleToggle(112)}
                            >
                                {buttonStates[112] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Auto Inspo </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-113"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[113]}
                                onChange={() => handleToggle(113)}
                            >
                                {buttonStates[113] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Le Artist </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-114"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[114]}
                                onChange={() => handleToggle(114)}
                            >
                                {buttonStates[114] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Free Parking </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-115"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[115]}
                                onChange={() => handleToggle(115)}
                            >
                                {buttonStates[115] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Spot Rebel </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                    <Accordion.Header>Railroad Tycoon</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-116"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[116]}
                                onChange={() => handleToggle(116)}
                            >
                                {buttonStates[116] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Something's Missing </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-117"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[117]}
                                onChange={() => handleToggle(117)}
                            >
                                {buttonStates[117] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Train Town </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-118"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[118]}
                                onChange={() => handleToggle(118)}
                            >
                                {buttonStates[118] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Hello There! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-119"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[119]}
                                onChange={() => handleToggle(119)}
                            >
                                {buttonStates[119] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Any Ideas? </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-120"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[120]}
                                onChange={() => handleToggle(120)}
                            >
                                {buttonStates[120] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Traintastic </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-121"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[121]}
                                onChange={() => handleToggle(121)}
                            >
                                {buttonStates[121] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Gimmie! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-122"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[122]}
                                onChange={() => handleToggle(122)}
                            >
                                {buttonStates[122] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Sketch Out </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-123"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[123]}
                                onChange={() => handleToggle(123)}
                            >
                                {buttonStates[123] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Rad Railroads </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-124"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[124]}
                                onChange={() => handleToggle(124)}
                            >
                                {buttonStates[124] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Locomotion </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                    <Accordion.Header>Tokenmania</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-125"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[125]}
                                onChange={() => handleToggle(125)}
                            >
                                {buttonStates[125] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Teachable Tokens </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-126"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[126]}
                                onChange={() => handleToggle(126)}
                            >
                                {buttonStates[126] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > All Set! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-127"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[127]}
                                onChange={() => handleToggle(127)}
                            >
                                {buttonStates[127] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Showroom </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-128"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[128]}
                                onChange={() => handleToggle(128)}
                            >
                                {buttonStates[128] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Blueprints </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-129"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[129]}
                                onChange={() => handleToggle(129)}
                            >
                                {buttonStates[129] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Memoir </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-130"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[130]}
                                onChange={() => handleToggle(130)}
                            >
                                {buttonStates[130] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Tradition </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-131"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[131]}
                                onChange={() => handleToggle(131)}
                            >
                                {buttonStates[131] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Dog Model </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-132"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[132]}
                                onChange={() => handleToggle(132)}
                            >
                                {buttonStates[132] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Wonder-fur! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-133"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[133]}
                                onChange={() => handleToggle(133)}
                            >
                                {buttonStates[133] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Soul Mates </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="15">
                    <Accordion.Header>Launch Day!</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-134"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[134]}
                                onChange={() => handleToggle(134)}
                            >
                                {buttonStates[134] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Grand Opening </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-135"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[135]}
                                onChange={() => handleToggle(135)}
                            >
                                {buttonStates[135] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Get in Line! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-136"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[136]}
                                onChange={() => handleToggle(136)}
                            >
                                {buttonStates[136] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Mr. Mascot </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-137"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[137]}
                                onChange={() => handleToggle(137)}
                            >
                                {buttonStates[137] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Wonder Aisle </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-138"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[138]}
                                onChange={() => handleToggle(138)}
                            >
                                {buttonStates[138] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Pleeease! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-139"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[139]}
                                onChange={() => handleToggle(139)}
                            >
                                {buttonStates[139] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Pay Off </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-140"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[140]}
                                onChange={() => handleToggle(140)}
                            >
                                {buttonStates[140] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Little Break </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-141"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[141]}
                                onChange={() => handleToggle(141)}
                            >
                                {buttonStates[141] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Cha-Ching! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-142"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[142]}
                                onChange={() => handleToggle(142)}
                            >
                                {buttonStates[142] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Happy Shopping </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="16">
                    <Accordion.Header>Fever!</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-145"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[145]}
                                onChange={() => handleToggle(145)}
                            >
                                {buttonStates[145] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Extra, Extra! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-146"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[146]}
                                onChange={() => handleToggle(146)}
                            >
                                {buttonStates[146] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > All Over </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-147"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[147]}
                                onChange={() => handleToggle(147)}
                            >
                                {buttonStates[147] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Up & Up </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-148"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[148]}
                                onChange={() => handleToggle(148)}
                            >
                                {buttonStates[148] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Go Far </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-149"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[149]}
                                onChange={() => handleToggle(149)}
                            >
                                {buttonStates[149] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Late Night Chat </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-150"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[150]}
                                onChange={() => handleToggle(150)}
                            >
                                {buttonStates[150] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Everywhere </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-151"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[151]}
                                onChange={() => handleToggle(151)}
                            >
                                {buttonStates[151] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Good News </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-152"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[152]}
                                onChange={() => handleToggle(152)}
                            >
                                {buttonStates[152] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > On the Rise </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-153"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[153]}
                                onChange={() => handleToggle(153)}
                            >
                                {buttonStates[153] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Sweet Success </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="17">
                    <Accordion.Header>Dogopoly</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-154"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[154]}
                                onChange={() => handleToggle(154)}
                            >
                                {buttonStates[154] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Born to Chew </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-155"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[155]}
                                onChange={() => handleToggle(155)}
                            >
                                {buttonStates[155] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Pup Genius </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-156"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[156]}
                                onChange={() => handleToggle(156)}
                            >
                                {buttonStates[156] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Printing Prints </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-157"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[157]}
                                onChange={() => handleToggle(157)}
                            >
                                {buttonStates[157] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Final Approval </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-158"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[158]}
                                onChange={() => handleToggle(158)}
                            >
                                {buttonStates[158] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Chance Leap </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-159"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[159]}
                                onChange={() => handleToggle(159)}
                            >
                                {buttonStates[159] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > See Me Rollin' </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-160"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[160]}
                                onChange={() => handleToggle(160)}
                            >
                                {buttonStates[160] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Doghouse </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-161"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[161]}
                                onChange={() => handleToggle(161)}
                            >
                                {buttonStates[161] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Big Dog </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-162"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[162]}
                                onChange={() => handleToggle(162)}
                            >
                                {buttonStates[162] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Pooch Perfect </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="18">
                    <Accordion.Header>Game Awards</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-163"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[163]}
                                onChange={() => handleToggle(163)}
                            >
                                {buttonStates[163] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Glitz and Glam </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-164"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[164]}
                                onChange={() => handleToggle(164)}
                            >
                                {buttonStates[164] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Game Awards </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-165"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[165]}
                                onChange={() => handleToggle(165)}
                            >
                                {buttonStates[165] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Red Carpet </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-166"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[166]}
                                onChange={() => handleToggle(166)}
                            >
                                {buttonStates[166] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Paparazzi! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-167"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[167]}
                                onChange={() => handleToggle(167)}
                            >
                                {buttonStates[167] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Fingers Crossed </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-168"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[168]}
                                onChange={() => handleToggle(168)}
                            >
                                {buttonStates[168] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > A-Shoo In! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-169"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[169]}
                                onChange={() => handleToggle(169)}
                            >
                                {buttonStates[169] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Special Speech </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-170"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[170]}
                                onChange={() => handleToggle(170)}
                            >
                                {buttonStates[170] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Impressions </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-171"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[171]}
                                onChange={() => handleToggle(171)}
                            >
                                {buttonStates[171] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Photo Op </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="19">
                    <Accordion.Header>Ms Monopoly</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-172"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[172]}
                                onChange={() => handleToggle(172)}
                            >
                                {buttonStates[172] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Little Ms. M </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-173"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[173]}
                                onChange={() => handleToggle(173)}
                            >
                                {buttonStates[173] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Tot Tycoon </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-174"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[174]}
                                onChange={() => handleToggle(174)}
                            >
                                {buttonStates[174] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Playbook </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-175"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[175]}
                                onChange={() => handleToggle(175)}
                            >
                                {buttonStates[175] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Study Hard </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-176"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[176]}
                                onChange={() => handleToggle(176)}
                            >
                                {buttonStates[176] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Well Done! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-177"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[177]}
                                onChange={() => handleToggle(177)}
                            >
                                {buttonStates[177] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Early Hits </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-178"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[178]}
                                onChange={() => handleToggle(178)}
                            >
                                {buttonStates[178] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Rich List</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-179"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[179]}
                                onChange={() => handleToggle(179)}
                            >
                                {buttonStates[179] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Play The Game </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-180"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[180]}
                                onChange={() => handleToggle(180)}
                            >
                                {buttonStates[180] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Surprise! </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="20">
                    <Accordion.Header>Go!</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-181"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[181]}
                                onChange={() => handleToggle(181)}
                            >
                                {buttonStates[181] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Eureka! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check-182"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[182]}
                                onChange={() => handleToggle(182)}
                            >
                                {buttonStates[182] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Dream </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-183"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[183]}
                                onChange={() => handleToggle(183)}
                            >
                                {buttonStates[183] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Shared Vision </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-184"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[184]}
                                onChange={() => handleToggle(184)}
                            >
                                {buttonStates[184] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Fun Begins </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-185"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[185]}
                                onChange={() => handleToggle(185)}
                            >
                                {buttonStates[185] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Cool Concepts </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-186"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[186]}
                                onChange={() => handleToggle(186)}
                            >
                                {buttonStates[186] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Mug-nificent </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-187"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[187]}
                                onChange={() => handleToggle(187)}
                            >
                                {buttonStates[187] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Behind The Scenes </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-188"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[188]}
                                onChange={() => handleToggle(188)}
                            >
                                {buttonStates[188] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > QA Pals </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check-189"
                                type="checkbox"
                                variant="outline-success"
                                checked={buttonStates[189]}
                                onChange={() => handleToggle(189)}
                            >
                                {buttonStates[189] ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Let's GO! </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Menu;