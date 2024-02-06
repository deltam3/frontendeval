export const DATE_ACTION = {
  ADD_DATE: "addDate" as const,
  DELETE_TODO: "delete" as const,
};

const DateActionCreator = {
  addDate: (dateItem: { city: string; time: Date }) => {
    return { type: DATE_ACTION.ADD_DATE, payload: dateItem };
  },
  deleteDate: (dateItem: { id: number }) => {
    return { type: DATE_ACTION.DELETE_TODO, payload: dateItem };
  },
};

export type ConsolidatedActionType = ReturnType<
  typeof DateActionCreator.addDate
>;
