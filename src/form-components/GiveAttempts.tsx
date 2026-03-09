import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<string>("3");
    const atLeftNum = parseInt(attemptsLeft) || 0;

    const [attemptsReq, setAttemptsReq] = useState<string>("0");
    const atReqNum = parseInt(attemptsReq) || 0;

    function updateAtemptsReq(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsReq(event.target.value);
        //setAttemptsLeft(event.target.value);
    }

    return (
        <div>
            <div>Attempts Left = {attemptsLeft}</div>

            <Form.Group controlId="numOfAttempts">
                <Form.Label>Attempts Required: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={updateAtemptsReq}
                ></Form.Control>
            </Form.Group>

            <Button
                onClick={() => {
                    setAttemptsLeft(String(atLeftNum - 1));
                }}
                disabled={atLeftNum === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(String(atLeftNum + atReqNum));
                }}
            >
                Gain
            </Button>
        </div>
    );
}
