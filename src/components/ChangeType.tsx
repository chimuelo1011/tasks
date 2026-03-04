import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");

    function changeT(): void {
        setQType(
            qType === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    }

    return (
        <div>
            <Button onClick={changeT}>Change Type</Button>
            {qType === "multiple_choice_question" && <div>Multiple Choice</div>}
            {qType === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
