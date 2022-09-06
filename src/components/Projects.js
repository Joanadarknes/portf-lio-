import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import 'react-multi-carousel/lib/styles.css';

export function Projects() {
  const [starredRepositories, setStarredRepositories] = useState([])
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Joanadarknes/starred')
      .then(response => response.json())
      .then(data => setStarredRepositories(data))
  }, [])

  function showMoreRepo() {
    fetch('https://api.github.com/users/Joanadarknes/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }

  return (
        <><div className="RpGit">
          
      <div className='s="col-xs-12  c  p-3'>
        <div className="our_solution_category">

          {repositories !== [] ? repositories.map(repository => {
            return (
              <div className="solution_cards_box">
                <div className="solution_card">
                  <div className="solu_title">
                    <h3>{repository.name}</h3>
                    <div className="solu_description">
                      <p>{repository.description}</p>
                      <p>{repository.language}</p>
                      <a type="button" href={repository.html_url} className="read_more_btn" target="_blank">Saiba mais</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) : <div></div>}

        </div>
      </div>


    </div><div><button type="button" onClick={showMoreRepo} className="read_more_btn evento">veja mais</button></div></> 
  );
}

