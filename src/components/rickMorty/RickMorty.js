function RickMorty({characters}) {
    return (
        <div>
            {
                characters.map(value => (
                    <>
                        <ul>
                            <li>Id - {value.id}</li>
                            <li>Name -  {value.name}</li>
                            <li>Status - {value.status}</li>
                            <li>Species - {value.species}</li>
                            <li>Gender - {value.gender}</li>
                        </ul>
                        <img src={value.image} alt={value.name}/>
                    </>
                ))
            }
        </div>
    );
}

export default RickMorty;