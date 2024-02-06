import { DateActionType, DATE_ACTION } from "./DateActionCreator";

export type DateItemType = {
  id: number;
  city: string;
  date: Date;
};

export type DateStatesType = { dateList: Array<DateItemType> };

const initialState: DateStatesType = {
  dateList: [
    { id: 1, city: "Seoul", date: new Date() },
    { id: 2, city: "Los Angeles", date: new Date() },
  ],
};

const DateReducer = (
  state: DateStatesType = initialState,
  action: DateActionType
) => {
  switch (action.type) {
    case DATE_ACTION.ADD_DATE:
      return {
        ...state,
        dateList: [
          ...state.dateList,
          { id: new Math.random(), city: action.city, date: action.date },
        ],
      };
    case DATE_ACTION.DELETE_DATE:
      return {
        ...state,
        dateList: state.dateList.filter((date) => date.id !== action.id),
      };
    default:
      return state;
  }
};

export default DateReducer;
