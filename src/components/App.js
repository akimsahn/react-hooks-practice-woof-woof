import React, {useState, useEffect} from "react";
import DogBar from "./DogBar";
import DogSummary from "./DogSummary";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([])
  const [goodFilter, setGoodFilter] = useState(false)
  const [currentDog, setCurrentDog] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(res => res.json())
    .then(pupData => {
      setDogs(pupData)
      setCurrentDog(pupData[0])
    })
  },[]);

  function handleApplyFilter() {
    setGoodFilter(!goodFilter)
  }

  function handleSelectDog(dog) {
    setCurrentDog(dog)
  }

  function handleToggleGood(updatedDog) {
    setDogs(dogs.map(dog => dog.id === updatedDog.id ? updatedDog : dog))
    setCurrentDog(updatedDog)
  }

  const dogsToDisplay = dogs.filter(dog => goodFilter ? dog.isGoodDog : true)

  return (
    <div className="App">
      <Filter goodFilter={goodFilter} onApplyFilter={handleApplyFilter} />
      <DogBar dogs={dogsToDisplay} onSelectDog={handleSelectDog} />
      <DogSummary dog={currentDog} onToggleGood={handleToggleGood} />
    </div>
  );
}

export default App;
