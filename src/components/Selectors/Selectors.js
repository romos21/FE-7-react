import './Selectors.css';
import SelectField from "./SelectField/SelectField";

function Selectors ({childrenSelectors, setChildrenSelectors}) {


    const onChangeSelectors = (value, index) => {
        const childrenSelectorsTmp = childrenSelectors;
        childrenSelectorsTmp[index] = Number(value);
        setChildrenSelectors(childrenSelectorsTmp);
        console.log("childrenSelectors: ", childrenSelectors);
    }

    return childrenSelectors.map((value, index) =>
        <SelectField
            key={index}
            value={value}
            index={index}
            onChangeSelectors={onChangeSelectors}
        />
    )
}

export default Selectors;
