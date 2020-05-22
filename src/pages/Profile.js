import React, {useContext, useEffect} from 'react';
import {GitHubContext} from "../hooks/context/github/githubContect";
import {Link} from "react-router-dom";
import Repos from "../components/Repos";

const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GitHubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const {

    name, company, avatar_url,
    location, bio, blog, login,
    html_url, followers, public_repos,
    public_gists, following
  } = user

  return (
    <>
      <Link to={'/'} className="btn btn-link">На глввную</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{
                width: 150
              }}/>
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}

            </div>
            <div className="col">
              {
                bio && <>
                  <h3>BIO<p>{bio}</p></h3>
                </>
              }
              <a
                href={html_url}
                className="btn badge-success"
                target="_blank"
                rel="noopener noreferrer"
              >Открыть Профиль</a>
              <ul>
                {login && <li><strong>Username: </strong>{login}</li>}
                {company && <li><strong>Компания: </strong>{company}</li>}
                {blog && <li>
                  <strong>WebSite: </strong>
                  <a href={blog} target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-outline-danger"
                  >{blog}</a></li>}
              </ul>
              <div className="badge badge-primary">Подписчеки: {followers}</div>
              <div className="badge badge-success">Подписан: {following}</div>
              <div className="badge badge-info">Репозитория: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </>
  );

};

export default Profile;