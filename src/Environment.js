const { Environment, Network, RecordSource, Store } = require("relay-runtime");

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch("https://api.graph.cool/relay/v1/cj7xj485g119t0168dq2zsi4r", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
});

const environment = new Environment({
  network,
  store
});

export default environment;
