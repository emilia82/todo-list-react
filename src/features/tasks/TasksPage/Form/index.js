
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { Button, Input, StyledForm } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!newTaskContent.trim()) {
            setNewTaskContent("");
            return;
        }

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));


        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />

            <Button>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;