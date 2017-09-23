import React from 'react';

import CreateLinkMutation from '../mutations/CreateLinkMutation';


class CreateLink extends React.Component {
  state = {
    description: "",
    url: ""
  };

  _createLink = e => {
    const { description, url } = this.state;
    CreateLinkMutation(description, url, () =>
      console.log("Mutation Completed")
    );
  };

  render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={this.state.url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="A URL for the link"
          />
        </div>
        <div className="button" onClick={() => this._createLink()}>
          Submit
        </div>
      </div>
    );
  }
}

export default CreateLink;
