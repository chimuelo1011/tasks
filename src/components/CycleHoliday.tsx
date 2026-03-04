import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays =
    | "Holiday: ✝️"
    | "Holiday: 🎄"
    | "Holiday: 🎃"
    | "Holiday: 🧉"
    | "Holiday: 👑";

export function CycleHoliday(): React.JSX.Element {
    const [hol, setHol] = useState<Holidays>("Holiday: ✝️");

    function nextAlphabetically(): void {
        setHol(
            hol === "Holiday: ✝️" ? "Holiday: 🎄"
            : hol === "Holiday: 🎄" ? "Holiday: 🧉"
            : hol === "Holiday: 🧉" ? "Holiday: 🎃"
            : hol === "Holiday: 🎃" ? "Holiday: 👑"
            : "Holiday: ✝️",
        );
    }

    function nextDate(): void {
        setHol(
            hol === "Holiday: ✝️" ? "Holiday: 🧉"
            : hol === "Holiday: 🧉" ? "Holiday: 🎃"
            : hol === "Holiday: 🎃" ? "Holiday: 🎄"
            : hol === "Holiday: 🎄" ? "Holiday: 👑"
            : "Holiday: ✝️",
        );
    }

    return (
        <div>
            <span>{hol}</span>
            <div>
                <Button onClick={nextAlphabetically}>
                    Advance by Alphabet
                </Button>
                <Button onClick={nextDate}>Advance by Year</Button>
            </div>
        </div>
    );
}
