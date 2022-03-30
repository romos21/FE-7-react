import './SelectField.css';
import {useState, useRef} from "react";

function SelectField({value, index, onChangeSelectors}) {

    //const selectState = useState({value, index});
    const selectRef = useRef(null);

    const handleOnChange = () => {
        onChangeSelectors(selectRef.current.value, index);
    }

    return (
        <select ref={selectRef} onChange={handleOnChange}>
            {Array.from(Array(17).keys()).map(el =>
                <option key={el} value={el+1}>{el+1} years old</option>
            )}
        </select>
    )
}

export default SelectField;
