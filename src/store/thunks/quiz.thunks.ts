import { AppDispatch, RootState } from "../ReduxStore";
import { QuizActions } from "../reducers/quiz.reducer";
import { baseUrl, postcode, area } from "../../common/config";

export const QuizThunks = {
  getQuizListThunk:
    () =>
    async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
      try {
        dispatch(QuizActions.setQuizIsLoadingAction(true));

        // @ts-ignore
        const urlParams = new URLSearchParams({
          postcode,
          area,
        }).toString();

        const response = await fetch(`${baseUrl}?${urlParams}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const res = await response.json();
        if (res && Array.isArray(res)) {
          dispatch(QuizActions.setQuizListAction(res));
        } else {
          console.error("Invalid data structure received", res);
        }
      } catch (e) {
        console.log(e);
      } finally {
        dispatch(QuizActions.setQuizIsLoadingAction(false));
      }
    },
};
