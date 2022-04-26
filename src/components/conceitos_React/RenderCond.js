const RenderCond = ({x, y}) => {
    
    return (
        <div>
            {
                x > 5 ? (
                    <p>O valor de x é maior que 5.</p>
                )
                : (
                    <p>O número é menor</p>
                )
            }

            { y !== "" && <p>Renderizando usando Condicional no React - {y}</p>}
        </div>
    );
}

export default RenderCond;