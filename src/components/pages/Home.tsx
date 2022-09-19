
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    <h1> Home Page</h1>
    <Link to="/list">list / </Link>
    <Link to="/about">About / </Link>
    <Link to="/guide">Guide / </Link>
    </>
  );
}

export default Home;
