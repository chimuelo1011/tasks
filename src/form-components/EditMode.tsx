import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    function updateIsEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }

    function updateStudentName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-in-edit-mode"
                label="Edit Mode"
                checked={isEdit}
                onChange={updateIsEdit}
            ></Form.Check>

            {isEdit && (
                <Form.Group controlId="studentEdit">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={studentName}
                        onChange={updateStudentName}
                    ></Form.Control>

                    <Form.Label>Is a student:</Form.Label>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    ></Form.Check>
                </Form.Group>
            )}

            <div>
                {" "}
                {studentName} is {isStudent ? "a student" : "not a student"}{" "}
            </div>
        </div>
    );
}
