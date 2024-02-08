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
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <InputGroup.Text aria-label="Checkbox for following text input" > Doggone It! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <InputGroup.Text aria-label="Checkbox for following text input" > Choo Choo! </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <InputGroup.Text aria-label="Checkbox for following text input" > Just in Case </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <InputGroup.Text aria-label="Checkbox for following text input" > Community Goals </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <InputGroup.Text aria-label="Checkbox for following text input" > Child's Play </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <InputGroup.Text aria-label="Checkbox for following text input" > Just in Case </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <InputGroup.Text aria-label="Checkbox for following text input" > Missing Treasure </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <InputGroup.Text aria-label="Checkbox for following text input" > Lost & Found </InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-1">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <InputGroup.Text aria-label="Checkbox for following text input" > Story Time </InputGroup.Text>
                        </InputGroup>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>The Top Hat</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Accross The Board</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>The Battleship</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>On A Roll</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>The Thimble</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>Card Quest</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header>The Iron</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header>Maximum Occupancy</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header>The Boot</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                    <Accordion.Header>Utility Fun</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                    <Accordion.Header>The Cannon</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                    <Accordion.Header>Free Parking</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                    <Accordion.Header>Railroad Tycoon</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                    <Accordion.Header>Tokenmania</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="15">
                    <Accordion.Header>Launch Day!</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="16">
                    <Accordion.Header>Fever!</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="17">
                    <Accordion.Header>Dogopoly</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="18">
                    <Accordion.Header>Game Awards</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="19">
                    <Accordion.Header>Ms Monopoly</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="20">
                    <Accordion.Header>Go!</Accordion.Header>
                    <Accordion.Body>
                        Comming Soon!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Menu;