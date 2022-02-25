// Imports
import { Dispatch, SetStateAction, useEffect } from 'react';

// Components

// Styling
import './style.scss';

// props
interface switchUII {
    value: boolean,
    setValue: Dispatch<SetStateAction<boolean>>,
}

const SwitchUI = ({ value, setValue }: switchUII) => {
    const stringValue:string=value.toString();
    const handleToggle = () => {
        setValue(!value);
    };
    // useEffect(() => {
    //     if (value) document.body.classList.add('--on');
    //     else document.body.classList.remove('--on');
    // }, [value]);
    return (
        <div className="switch__wrapper">
            <label htmlFor="switch-ui" className="switch__label">
                <input type="checkbox" className="switch" value={stringValue} name="switch-ui" onChange={handleToggle} />
                <span className="switch__handle" />
            </label>
            <span className="switch__label__tag">{value ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
    );
};


export default SwitchUI;