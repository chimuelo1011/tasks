import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "cyan",
    "brown",
];

export function ChangeColor(): React.JSX.Element {
    const [Color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            {COLORS.map((c: string) => (
                <Form.Check
                    key={c}
                    type="radio"
                    inline
                    label={c}
                    value={c}
                    style={{ backgroundColor: c }}
                    checked={Color === c}
                    onChange={updateColor}
                ></Form.Check>
            ))}

            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: Color }}
                >
                    {Color}
                </span>
            </div>
        </div>
    );
}
