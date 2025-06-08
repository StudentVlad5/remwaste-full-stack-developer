import s from "./index.module.scss";
import { Button } from "../../ui/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useThunks } from "../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../store/thunks/quiz.thunks";
import { Modal } from "../../ui/Modal";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { addQuizAnswerThunk } = useThunks(QuizThunks);


  const onClickFinishBtnHandler = () => {
    addQuizAnswerThunk({
      params: {
        endTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      },
    });
    localStorage.removeItem("application_number");
    localStorage.removeItem("id");
    // удаляем данные формы
    localStorage.removeItem("cars");
    localStorage.removeItem("form_id");
    // localStorage.removeItem("car");
    localStorage.removeItem("latitude");
    localStorage.removeItem("longitude");
    // localStorage.removeItem("organization");
    localStorage.removeItem("organizations");
    localStorage.removeItem("travel_time");
    localStorage.removeItem("status");
    localStorage.removeItem("transmitted");
    setIsOpenModal(true);
  };


  const resetChecklist = () =>{
    addQuizAnswerThunk({
      params: {
        anketaStatus: 'canceled',
      },
    });
    localStorage.removeItem("application_number");
    localStorage.removeItem("id");
    // удаляем данные формы
    localStorage.removeItem("cars");
    localStorage.removeItem("form_id");
    // localStorage.removeItem("car");
    localStorage.removeItem("latitude");
    localStorage.removeItem("longitude");
    // localStorage.removeItem("organization");
    localStorage.removeItem("organizations");
    localStorage.removeItem("travel_time");
    localStorage.removeItem("status");
    localStorage.removeItem("transmitted");
    navigate("/");
  }

  return (
    <footer className={s.Footer}>
      
    </footer>
  );
};
