import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [curOpt, setCurOpt] = useState<string>(options[0]);

    function updateCurOpt(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurOpt(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="correctOpt">
                <Form.Select value={curOpt} onChange={updateCurOpt}>
                    {options.map((o: string) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            {curOpt === expectedAnswer && <div>✔️</div>}
            {curOpt !== expectedAnswer && <div>❌</div>}
        </div>
    );
}
