import * as React from 'react';

class EmptyLayout extends React.Component {
  public render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
export default EmptyLayout;
