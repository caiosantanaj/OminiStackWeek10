import React, { useState, useEffect} from 'react';
import api from "./services/api";

import './App.css'
import './global.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //console.log(position)
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault(); //previne o comportamento padrão

    const response = await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });

    console.log(response.data)
  }

  return (
    <div id="app">
      <aside>
        <strong>Registo</strong>
        <form onSubmit={ handleAddDev }>
          <div className="input-block">
            <label htmlFor="github_username">Github username</label>
            <input 
              name="github_username"
              id="github_username"
              value = { github_username }
              onChange = { e => setGithubUsername(e.target.value) }
              required>
              </input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs"
                id="techs"
                value = { techs }
                onChange = { e => setTechs(e.target.value) }
                required>
            </input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number"
                name="latitude"
                id="latitude"
                value={ latitude }
                onChange={ e => setLatitude(e.target.value) } 
                required>
              </input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number"
                name="longitude"
                id="longitude"
                value={ longitude }
                onChange={ e => setLongitude(e.target.value) } 
                required>
              </input>
            </div>
          </div>
          <button type="submit">Guardar</button>
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/23464520?s=460&v=4" alt="github perfil"/>
              <div className="user-info">
                <strong>Caio Jacobina</strong>
                <span>ReactJs, React Native, Node.Js</span>
              </div>
            </header>
            <p>Descrição GitHub</p>
            <a href="https://github.com/caiosantanaj">Acessar perfil GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/23464520?s=460&v=4" alt="github perfil"/>
              <div className="user-info">
                <strong>Caio Jacobina</strong>
                <span>ReactJs, React Native, Node.Js</span>
              </div>
            </header>
            <p>Descrição GitHub</p>
            <a href="https://github.com/caiosantanaj">Acessar perfil GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/23464520?s=460&v=4" alt="github perfil"/>
              <div className="user-info">
                <strong>Caio Jacobina</strong>
                <span>ReactJs, React Native, Node.Js</span>
              </div>
            </header>
            <p>Descrição GitHub</p>
            <a href="https://github.com/caiosantanaj">Acessar perfil GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
