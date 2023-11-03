import React from 'react';
import Button from '../../../elements/button';

function Search() {
  return (
    <>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Шукати" aria-label="Шукати"/>
        <Button text="Шукати"/>
      </form>
    </>
  );
}

export default Search;