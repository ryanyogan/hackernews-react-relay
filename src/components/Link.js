import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Link extends React.Component {
  _voteForLink = async () => {
    // TODO: Implement
  };

  render() {
    return (
      <div>
        <div>
          {this.props.link.description} ({this.props.link.url})
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(
  Link,
  graphql`
    fragment Link_link on Link {
      id
      description
      url
    }
  `
);
