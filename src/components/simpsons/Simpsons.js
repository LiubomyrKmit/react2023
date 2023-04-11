function Simpsons({simpsons}) {
    return (
        <div className="alignCenter">
            {
                simpsons.map (value => (
                    <p>
                        <h2>{value.name} {value.surname}</h2>
                        <h3>age - {value.age}</h3>
                        <p>{value.info}</p>
                        <img src={value.photo} alt={value.name}/>
                    </p>
                ))
            }
        </div>
    );
}

export default Simpsons;