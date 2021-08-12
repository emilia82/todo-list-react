import { all } from "@redux-saga/core/effects";
import { selectTasks } from "../features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        selectTasks(),
    ]);
}