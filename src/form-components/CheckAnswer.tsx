import React, { useState } from "react";
import { Form, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="QuestionAnswer">
                <FormLabel>Answer:</FormLabel>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            <div>
                {answer === expectedAnswer && <div>✔️</div>}
                {answer !== expectedAnswer && <div>❌</div>}
            </div>
        </div>
    );
}
