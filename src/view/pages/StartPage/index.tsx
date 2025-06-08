import s from './index.module.scss';
import { Button } from "../../ui/Button";
import {useEffect, useMemo, useState} from "react";
import { useAppSelector, useThunks } from "../../../common/helpers/reduxHook";
import { QuizThunks } from "../../../store/thunks/quiz.thunks";
import { QuizState } from "../../../store/reducers/quiz.reducer";
import Skeleton from "../../ui/Skeleton";
import { useNavigate} from "react-router-dom";
import ClueImg from '../../../assets/images/clue.png'
import {Modal} from "../../ui/Modal";
import { IMaskInput } from 'react-imask';
import {InputNumber} from "../../ui/InputNumber";
import classNames from "classnames";
import { baseUrl } from '../../../common/config';

export const StartPage = () => {
    const navigate = useNavigate();
    const { addQuizAnswerThunk } = useThunks(QuizThunks);
    const { quizIsLoading } = useAppSelector(QuizState);

    const [number, setNumber] = useState<string>('');
    const [employeeID, setEmployeeID] = useState<string>('');
    const [employeeName, setEmployeeName] = useState<string>(' ');
    const [isOpenClue, setIsOpenClue] = useState<boolean>(false);
    const [isOpenClue2, setIsOpenClue2] = useState<boolean>(false);
    const [invalidMessage, setInvalidMessage] = useState('');

    useEffect(() => {
    async function getData() {
    await fetch(`${baseUrl}/getvrach?employeeID=${employeeID}`)
        .then(response => {if (!response.ok) {throw new Error('Response was not ok');}
        return response.json();
        })
        .then(newrData => {
            if(newrData?.discription){setEmployeeName(newrData.discription)};
        })
        .catch(error => {
            console.error('Error:', error);
        });
        }      
          if(employeeID && employeeID.length > 4 && number && number.length > 0){getData() }
      }, [employeeID, number]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);

    useMemo(() => {
        if (employeeID && employeeID.length !== 5) setInvalidMessage('Введите 5 символов')
        else setInvalidMessage('')
    }, [employeeID])

    const onChange = (e: any) => {
        console.log(number)
        setNumber(e.target.value)
    }

    const onSubmitFormHandler = async () => {
        localStorage.setItem('id', Date.now().toString());
        localStorage.setItem('application_number', number);
        addQuizAnswerThunk({ params: {
            employeeID: employeeID,
        } })
        navigate('/1')
    }

    return (
        <div className={s.StartPage}>
            { quizIsLoading && <Skeleton /> }
            <div className={s.inputWrapper}>
                <IMaskInput className={s.textInput} value={number} inputMode='numeric'
                            onChange={onChange}
                            placeholder='Введите № бригады СМП' mask={"00"}/>
                <button type="button" title="The brigade number" className={s.clue} onClick={() => setIsOpenClue(true)}>
                    <img src={ClueImg} alt=""/>
                </button>
            </div>
            <div className={classNames(s.inputWrapper, s.oneItem)}>
                {invalidMessage && <span className={s.invalidMessage}>{invalidMessage}</span>}
                <InputNumber value={employeeID}
                             placeholder={'Идентификатор сотрудника'}
                             inputMode={'numeric'}
                             onChange={e => setEmployeeID(e.target.value)}
                             maxLength={5} minLength={5}/>
                <button type="button" title="Employee ID" className={s.clue} onClick={() => setIsOpenClue2(true)}>
                    <img src={ClueImg} alt=""/>
                </button>
            </div>
            <p className={s.employeeName}>{employeeName}</p>
            <Button disabled={!number || quizIsLoading || !!invalidMessage || !employeeID} onClick={onSubmitFormHandler}>Заполнить новый чек-лист</Button>
            <Modal isVisible={isOpenClue} onClose={() => setIsOpenClue(false)} content={<p>Введите № бригады. Например, "15"</p>}/>
            <Modal isVisible={isOpenClue2} onClose={() => setIsOpenClue2(false)} content={<p>Введите идентификатор сотрудника. Например, "12345"</p>}/>
        </div>
    );
};
