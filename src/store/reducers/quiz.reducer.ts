import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../ReduxStore";

interface QuizItem {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

interface OrderItem {
  id: number;
  quantity: number;
}

interface StateType {
  quizList: QuizItem[];
  quizIsLoading: boolean;
  orderedItems: OrderItem[]; 
}

const initialState: StateType = {
  quizList: [],
  quizIsLoading: false,
  orderedItems: [], 
};

export const slice = createSlice({
  name: "QuizReducer",
  initialState,
  reducers: {
    setQuizListAction: (state, action: PayloadAction<QuizItem[]>) => {
      state.quizList = action.payload;
    },
    setQuizListOrders: (state, action: PayloadAction<OrderItem[]>) => {
      state.orderedItems = action.payload;
    },
    setQuizIsLoadingAction: (state, action: PayloadAction<boolean>) => {
      state.quizIsLoading = action.payload;
    },
    updateOrderItem: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.orderedItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity; 
      }
    },
    addOrderItem: (state, action: PayloadAction<OrderItem>) => {
      state.orderedItems.push(action.payload);
    },
    removeOrderItem: (state, action: PayloadAction<number>) => {
      state.orderedItems = state.orderedItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const QuizReducer = slice.reducer;
export const QuizActions = slice.actions;
export const QuizState = (state: RootState) => state.QuizReducer;
