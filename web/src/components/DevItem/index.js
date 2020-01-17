import React from 'react';

import "./styles.css"

function DevItem(props) {
  const{ user } = props;

  return(
    <li className="dev-item">
      <header>
        <img src={ user.avatar_url } alt="avatar github"/>
        <div className="user-info">
          <strong>{ user.name }</strong>
          <span>{ user.techs.join(", ") }</span>
        </div>
      </header>
      <p>{ user.bio }</p>
      <a 
        target='_blank' 
        rel="noopener noreferrer"
        href={ `https://github.com//${user.github_username}`} >
          Acessar perfil GitHub
      </a>
    </li>
  )
}

export default DevItem;