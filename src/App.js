import React from 'react';
import DocumentTitle from 'react-document-title';

import Header from './parts/Header';
import Footer from './parts/Footer';

class App extends React.Component {
  render() {
    return (
      <DocumentTitle title='Stormpath Express + React Example'>
        <div className='App'>
          <Header />
          { this.props.children }
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
