import s from './index.module.scss';

export const RadioButton = ({
    id,
    currentValue,
    name,
    value,
    onChange
} : {
    id: string,
    currentValue: string,
    name: string
    value: string,
    onChange: (str: string) => void
}) => {
    return (
        <div className={s.RadioButton}>
            <label className={s.box} htmlFor={id}>
                <input id={id} name={name} type="radio" onChange={e => {
                    if (e.target.checked) onChange(value)
                }} checked={currentValue === value}/>
                <div className={s.controlIndicator}></div>
                <span>{value}</span>
            </label>
        </div>
    );
};
