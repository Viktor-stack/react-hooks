import React, {useContext} from 'react';
import Search from "../components/Search";
import Card from "../components/Card";
import {GitHubContext} from "../hooks/context/github/githubContect";

const Home = () => {
  const {loading, users} = useContext(GitHubContext)
  return (
    <>
      <Search/>
      <div className="row">
        {loading ?
          <div className="container">
            <p className="text-center">Загрузка...</p>
          </div>
          : users.map(user => (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card user={user}/>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Home;