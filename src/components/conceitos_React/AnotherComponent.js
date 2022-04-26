const AnotherComponent = () => {
    const handleClick = () => {
        console.log("Clicou no botão");
    }

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Clique</button>
        </div>
    );
}

export default AnotherComponent;