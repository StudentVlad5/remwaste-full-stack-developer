import s from './index.module.scss';

import {Outlet} from "react-router-dom";
import { Header } from "../../components/Header";
import {useAppSelector, useThunks} from "../../../common/helpers/reduxHook";
import {QuizState} from "../../../store/reducers/quiz.reducer";
import Skeleton from "../../ui/Skeleton";
import {useEffect} from "react";
import {QuizThunks} from "../../../store/thunks/quiz.thunks";
import HorizontalSideBar from '../../components/HorizontalSideBar';

export const AppLayout = () => {
    const { getQuizListThunk } = useThunks(QuizThunks);
    const { quizIsLoading } = useAppSelector(QuizState);

    useEffect(() => {
        getQuizListThunk()
    }, []);

    return (
        <div className={s.App}>
            { quizIsLoading && <Skeleton/> }
            <Header/>
            <HorizontalSideBar/>
            <Outlet/>
        </div>
    );
};
