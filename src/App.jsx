import React from 'react';
import ComponentClass from './components/ClassComponent';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ComponentClass min={1} max={10} />
      </>
    );
  }
}


