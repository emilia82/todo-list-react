import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import Button from "../Button";
import { 
    selectHideDone, 
    setAllDone, 
    toggleHideDone, 
    selectAreTasksEmpty, 
    selectIsEveryTaskDone, 
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

        return (
        <Wrapper>
            
        {!areTasksEmpty > 0 && (
            <>
                <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={isEveryTaskDone}
                >
                    Ukończ wszystkie
            </Button>
            </>
        )}
    </Wrapper>

)};
export default Buttons;