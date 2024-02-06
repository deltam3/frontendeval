export const CONSOLIDATED_ACTION = {
  ADD_COMMENT: "addComment" as const,
};

const ConsolidatedActionCreator = {
  addComment: (commentItem: { comment: string; username: string }) => {
    return { type: CONSOLIDATED_ACTION.ADD_COMMENT, payload: commentItem };
  },
  deleteTodo: (commentItem: { id: number }) => {
    return { type: CONSOLIDATED_ACTION.DELETE_COMMENT, payload: commentItem };
  },
  updateTodo: (commentITem: { id: number; todo: string; username: string }) => {
    return { type: CONSOLIDATED_ACTION };
  },
};

export type ConsolidatedActionType = ReturnType<
  typeof ConsolidatedActionCreator.addComment
>;
