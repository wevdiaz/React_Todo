import { useState, useEffect } from "react";

const Hooks = () => {
    const [age, setAge] = useState(35);

    const changeAge = () => {
        setAge(36);
        console.log(age);
    }


    return (
        <div>
            <p>Idade: {age}</p>
            <button onClick={changeAge}>Mudar Idade</button>
        </div>
    );
}

export default Hooks;