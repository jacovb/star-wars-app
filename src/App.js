import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Person from './components/Person';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let tempPeople = [];
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      tempPeople.push(...data.results);
      while (data.next) {
        res = await fetch(data.next);
        data = await res.json();
        tempPeople.push(...data.results);
      }
      setPeople(tempPeople);
      setLoading(false);
    }

    async function fetchPlanets() {
      let tempPlanets = [];
      let res = await fetch('https://swapi.dev/api/planets/');
      let data = await res.json();
      tempPlanets.push(...data.results);
      while (data.next) {
        res = await fetch(data.next);
        data = await res.json();
        tempPlanets.push(...data.results);
      }
      setPlanets(tempPlanets);
      setLoading(false);
    }

    async function fetchSpecies() {
      let tempSpecies = [];
      let res = await fetch('https://swapi.dev/api/species/');
      let data = await res.json();
      tempSpecies.push(...data.results);
      while (data.next) {
        res = await fetch(data.next);
        data = await res.json();
        tempSpecies.push(...data.results);
      }
      setSpecies(tempSpecies);
      setLoading(false);
    }

    async function fetchStarships() {
      let tempStarships = [];
      let res = await fetch('https://swapi.dev/api/starships/');
      let data = await res.json();
      tempStarships.push(...data.results);
      while (data.next) {
        res = await fetch(data.next);
        data = await res.json();
        tempStarships.push(...data.results);
      }
      setStarships(tempStarships);
      setLoading(false);
    }

    async function fetchVehicles() {
      let tempVehicles = [];
      let res = await fetch('https://swapi.dev/api/vehicles/');
      let data = await res.json();
      tempVehicles.push(...data.results);
      while (data.next) {
        res = await fetch(data.next);
        data = await res.json();
        tempVehicles.push(...data.results);
      }
      setVehicles(tempVehicles);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
    fetchSpecies();
    fetchStarships();
    fetchVehicles();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="mainContainer">
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted id="loader">
                Loading
              </Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/people">
                <People data={people} planets={planets} />
              </Route>
              <Route exact path="/planets">
                <Planets data={planets} />
              </Route>
              <Route exact path="/species">
                <Species data={species} />
              </Route>
              <Route exact path="/starships">
                <Starships data={starships} />
              </Route>
              <Route exact path="/vehicles">
                <Vehicles data={vehicles} />
              </Route>
              <Route exact path="/people/:person">
                <Person data={people} />
              </Route>
            </Switch>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
