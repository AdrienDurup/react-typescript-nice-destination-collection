// Imports
import { Dispatch, SetStateAction, useEffect } from 'react';

// Components

// Styling
import './style.scss';

// props
interface SwitchUII {
    value: boolean,
    setValue: Dispatch<SetStateAction<boolean>>,
}

const SwitchUI = ({ value, setValue }: SwitchUII) => {
    const stringValue:string=value.toString();
    const handleToggle = () => {
        setValue(!value);
    };
    return (
        <div className="switch__wrapper">
            <label htmlFor="switch-ui" className="switch__label">
                <input type="checkbox" className="switch" value={stringValue} name="switch-ui" onChange={handleToggle} />
                <span className="switch__handle" />
            </label>
        </div>
    );
};


export default SwitchUI;