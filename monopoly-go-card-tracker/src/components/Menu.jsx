import { useState } from 'react';
import { Accordion, ProgressBar, InputGroup, ToggleButton, Card } from 'react-bootstrap';

function Menu() {
    const [collected, setCollected] = useState(false);

    // TODO ADD DB FUNCTIONALITY

    // const handleToggle = async () => {
    //   };

    const handleToggle = () => {
        setCollected(!collected);
    };

    return (
        <div className="div-menu">
            <Accordion className="mx-5 pb-5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Best Beginnings
                        <ProgressBar now={60} />
                    </Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Peek of the Past </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Doggone It! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Choo Choo! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Just in Case </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Community Goals </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Child's Play </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Missing Treasure </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Lost & Found </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Love At First Sight </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Before Billions </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Money-Minded </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Master Plan </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Moving On Up </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Obsession </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Rich! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Long-Awaited </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Vision </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Circle Back </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Get The Point </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Fun, Squared! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > True Colors </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Let's GO! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Good Deeds </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Throw the Dice </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Bark Voyage </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > My Captain! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Sonar Peek </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > First Stop </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Born to Fly </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Map it Out </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Adiós, Artic! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Co-Captains </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Whittling Whiz </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > A Bit Wonky </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Prototype </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Fun, Squared! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Pro </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Dice-Bot 3000 </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Dream Come True </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Squared Joy </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Thimble Factory </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > In-Line </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Prized Possession </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Jackpot! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Lucky Charm </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Bank Error! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Finally First </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Dividends </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Adventure Time </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > No Chance </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Wrapped Up </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Waterlogged </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Jungle Clue </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Enchanted </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > To The Moon! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Under Your Nose </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Antique Hunting </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Here It Is! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Memories </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > In The Fire </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Oops! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Little Help </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > New Iron! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Token Factory </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > A Good Sign! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Blueprints </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Globe Trottin' </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Round-The-World </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Palettable </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Dirty Deeds </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > First Try </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Flood The Market </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Mr. M's Tale </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Doing Chores </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Boot Awards </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Fashion Fiasco </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Suit Up </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > To The Awards </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Nominees </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Award Winner </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Paperwork Punt </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Bills?! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Not Today </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Hands On! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Nailing It! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Electric Company </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Water Works </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Sparkling Fun </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > MNPL Labs </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Mr. Captain </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Confetti Fun </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > On the Ball </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Cannonball </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Throw the Dice </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Money Rain </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Secret Weapon </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Fine Ride </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Not So Fast </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Laissez-faire </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Parking Pains </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Car Collection </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Auto Inspo </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Le Artist </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Free Parking </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Free Parking </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                    <Accordion.Header>Railroad Tycoon</Accordion.Header>
                    <Accordion.Body>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Something's Missing </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Train Town </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Hello There! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Any Ideas? </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Traintastic </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Gimmie! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Sketch Out </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Rad Railroads </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Teachable Tokens </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > All Set! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Showroom </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Blueprints </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Memoir </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Tradition </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Dog Model </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Wonder-fur! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Grand Opening </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Get in Line! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Mr. Mascot </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Wonder Aisle </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Pleeease! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Pay Off </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Little Break </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Cha-Ching! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Extra, Extra! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > All Over </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Up & Up </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Go Far </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Late Night Chat </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Everywhere </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Good News </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > On the Rise </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Born to Chew </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Pup Genius </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Printing Prints </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Final Approval </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Chance Leap </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > See Me Rollin' </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Doghouse </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Big Dog </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Glitz and Glam </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Game Awards </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Red Carpet </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Paparazzi! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Fingers Crossed </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > A-Shoo In! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Special Speech </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Impressions </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Little Ms. M </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Tot Tycoon </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Playbook </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Study Hard </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Well Done! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Early Hits </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Rich List</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Play The Game </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Eureka! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Dream </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Shared Vision </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > The Fun Begins </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Cool Concepts </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Mug-nificent </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > Behind The Scenes </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
                            </ToggleButton>
                            <InputGroup.Text aria-label="Checkbox for following text input" > QA Pals </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-success"
                                checked={collected}
                                value={1}
                                onChange={handleToggle}
                            >
                                {collected ? 'Collected' : 'Not Collected'}
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