import React, { Children, PropTypes } from 'react';

export default class DocumentContext extends React.Component {
  static propTypes = {
    document: PropTypes.object.isRequired,
    window: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    document: PropTypes.object.isRequired,
    window: PropTypes.object.isRequired,
  };

  static displayName = 'DocumentContext';

  getChildContext(){
    const { document, window } = this.props;
    return { document, window };
  }

  render() {
    return Children.only(this.props.children);
  }
}
