import './FormCounter.css';
import {useRef, useState} from "react";

function FormCounter({additionalChanges = null, label, min, max, name, type}) {

    const [value, setValue] = useState(min);
    const inputRef = useRef(null);

    const onDecrement = () => {
        if (value > min) {
            if (additionalChanges) {
                additionalChanges(value - 1)
            }
            setValue(value - 1);
        }
    }

    const onIncrement = () => {
        if (value < max) {
            if (additionalChanges) {
                additionalChanges(value + 1)
            }
            setValue(value + 1);
        }
    }

    const handleOnChange = () => {
        setValue(inputRef.current.value);
    }

    return (
        <label>
            {label}:
            <button type="button" onClick={onDecrement}>-</button>
            <input
                className='input-field'
                ref={inputRef}
                value={value}
                onChange={handleOnChange}
                name={name}
                type={type}
            />
            <button type="button" onClick={onIncrement}>+</button>
        </label>
    );
}

export default FormCounter;
