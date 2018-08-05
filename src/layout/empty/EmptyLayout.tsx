import * as React from 'react';

class EmptyLayout extends React.Component {
  public render() {
    return (
      <div className="EmptyLayout">
        {this.props.children}
      </div>
    );
  }
}
export default EmptyLayout;
