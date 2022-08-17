import React from "react";

function DogSummary({dog, onToggleGood}) {
    const {id, name, isGoodDog, image} = dog

    function toggleGood () {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isGoodDog: !isGoodDog,
            }),
        })
        .then(res => res.json())
        .then(dog => onToggleGood(dog))
    }
    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <button onClick={toggleGood}>{isGoodDog ? 'Good Dog!' : 'Bad Dog!'}</button>
            </div>
        </div>
    )
}

export default DogSummary