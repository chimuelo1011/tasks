import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                <h1>
                    <span style={{ color: "blue" }}>
                        {" "}
                        UD CISC275 with React Hooks and TypeScript
                    </span>
                </h1>

                <ul>
                    <li>Ri</li>
                    <li>cardo</li>
                    <li>Fort</li>
                </ul>
            </header>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ColoredBox></ColoredBox>

            <hr></hr>
            <ChooseTeam></ChooseTeam>

            <hr></hr>
            <ShoveBox></ShoveBox>

            <hr></hr>
            <Counter></Counter>

            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <CycleHoliday></CycleHoliday>

            <hr />
            <CheckAnswer expectedAnswer={""}></CheckAnswer>

            <hr />
            <GiveAttempts></GiveAttempts>

            <hr />
            <EditMode></EditMode>

            <hr />
            <ChangeColor></ChangeColor>

            <hr />
            <MultipleChoiceQuestion
                options={["guatemala", "fernet", "toby fox"]}
                expectedAnswer={"fernet"}
            ></MultipleChoiceQuestion>
        </div>
    );
}

export default App;
