import React, {useContext, useState} from 'react';
import {AlertContext} from "../hooks/context/alert/alertContext";
import {GitHubContext} from "../hooks/context/github/githubContect";

const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GitHubContext)
  const oSubmit = event => {
    if (event.key !== 'Enter'){
      return
    }
    github.clearUsers()
    if (value.trim()){
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Ведите даные пользователя')
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Ведите ник пользователья..."
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={oSubmit}
      />
    </div>
  );
};

export default Search;