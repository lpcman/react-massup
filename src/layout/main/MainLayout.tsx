import * as React from 'react';

class MainLayout extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="row">
          nav bar
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
