import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
// import Spinner from '../layout/Spinner';

const Repos = ({ repos, loading }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.PropTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
