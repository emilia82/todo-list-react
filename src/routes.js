export const toTasks = () => "/tasks";
export const toAuthor = () => "/autor";

export const toTask = ({ id } = { id: ":id" }) => `/tasks/${id}`;