const List = () => {

    const items = [
        {
            id: 1,
            name: "Nick"
        }, 
        
        {
            id: 2,
            name: "Ivan"
        },
        
        {
            id: 3,
            name: "Alex"
        } 
    ];
    return(
        <div>
            {
                items.map((item) => {
                   return <p key={item.id}>ID: {item.id} - <strong>Nome:</strong> {item.name}</p>
                })
            }
        </div>
    );
}

export default List;