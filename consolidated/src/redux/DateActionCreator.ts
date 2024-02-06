export const DATE_ACTION = {
  ADD_DATE: "addDate" as const,
  DELETE_DATE: "delete" as const,
};

const DateActionCreator = {
  addDate: (dateItem: { city: string; time: Date }) => {
    return { type: DATE_ACTION.ADD_DATE, payload: dateItem };
  },
  deleteDate: (dateItem: { id: number }) => {
    return { type: DATE_ACTION.DELETE_DATE, payload: dateItem };
  },
};

export type DateActionType =
  | ReturnType<typeof DateActionCreator.addDate>
  | ReturnType<typeof DateActionCreator.deleteDate>;
