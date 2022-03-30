import './Form.css';
import FormCounter from "../FormCounter/FormCounter";
import {useRef, useState} from "react";
import Selectors from "../Selectors/Selectors";
import Hotels from "../Hotels/Hotels";

function Form() {

    const [childrenSelectors, setChildrenSelectors] = useState([]);
    const [hotelsResponse, setHotelsResponse] = useState([]);

    const formFields = [
        {
            min: 1,
            max: 5,
            label: 'adults',
            name: 'adults',
            type: 'number',
        },
        {
            min: 0,
            max: 10,
            label: 'children',
            name: 'children',
            type: 'number',
            additionalChanges: (counter) => {
                if(counter > childrenSelectors.length) {
                    setChildrenSelectors([...childrenSelectors, 1])
                } else {
                setChildrenSelectors(childrenSelectors.slice(0,counter))
                }
            },
        },
        {
            min: 1,
            max: 10,
            label: 'rooms',
            name: 'rooms',
            type: 'number',
        }
    ];

    const formRef = useRef(null);


    const onSubmit = async (event) => {
        event.preventDefault();
        const children = childrenSelectors.toString(),
        adults = event.target.adults.value,
        rooms = event.target.rooms.value;
        const res = await fetch(` https://fe-student-api.herokuapp.com/api/hotels?search=us&adults=${adults}&children=${children}&rooms=${rooms}`)
        const resJSON = await res.json();
        setHotelsResponse(resJSON);
    }

    return (
        <div className="App">
            <form onSubmit={onSubmit} ref={formRef}>
                {formFields.map(field =>
                    <FormCounter key={field.label} {...field}/>
                )}
                <button>search</button>
            </form>
            {
                childrenSelectors.length > 0 &&
                <Selectors
                    childrenSelectors={childrenSelectors}
                    setChildrenSelectors={setChildrenSelectors}
                />
            }
            <Hotels hotels={hotelsResponse}/>
        </div>
    );
}

export default Form;
