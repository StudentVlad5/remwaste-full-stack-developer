import s from './index.module.scss';
import {Title} from "../../ui/Title";
import FormDataForHospital from '../FormDataForHospital';

export const FirstSection = () => {
   

    return (
        <div className={s.PatientInformation}>
            <Title>Условия доставки пациента в пункт назначения</Title>
            <div className={s.inner}>
            <FormDataForHospital/>
            </div>
        </div>
    );
};
