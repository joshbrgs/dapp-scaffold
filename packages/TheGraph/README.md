https://thegraph.com/docs/developer/quick-start

# Table of Contents

1. [Start Your Subgraph](#start)
2. [Graph CLI](#GraphCLI)
3. [Initialize the Subgraph](#init)
4. [Subgraph](#write)
5. [Deploy to Subgraph Studio](#deploy)
6. [Deployment Check](#logs)
7. [Query from The Graph and/or Front End](#Query)
8. [References](#ref)

# Start your Subgraph with Subgraph Studio! <a name="start"></a>
A subgraph defines which data The Graph will index from Ethereum, and how it will store it. Once deployed, it will form a part of a global graph of blockchain data.

### 1. The Graph CLI is written in JavaScript, and you will need to install either yarn or npm to use it. <a name="GraphCLI"></a>

Install with yarn:
`$ yarn global add @graphprotocol/graph-cli`

Install with npm:
`$ npm install -g @graphprotocol/graph-cli`

### 2. Initialize your Subgraph​ <a name="init"></a>
Initialize your subgraph from an existing contract.
`graph init --studio <SUBGRAPH_SLUG>`

Your subgraph slug is an identifier for your subgraph. The CLI tool will walk you through the steps for creating a subgraph, such as contract address, network, etc

### 3. Write your Subgraph​ <a name="write"></a>
The previous commands creates a scaffold subgraph that you can use as a starting point for building your subgraph. When making changes to the subgraph, you will mainly work with three files:

**Manifest (subgraph.yaml)** - defines the smart contracts your subgraph indexes, which events from these contracts to pay attention to, and how to map event data to entities that Graph Node stores and allows to query. The full specification for subgraph manifests can be found [here](https://github.com/graphprotocol/graph-node/blob/master/docs/subgraph-manifest.md).

Example:

```
specVersion: 0.0.4
description: Gravatar for Ethereum
repository: https://github.com/graphprotocol/example-subgraph
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum/contract
    name: Gravity
    network: mainnet
    source:
      address: '0x2E645469f354BB4F5c8a05B3b30A929361cf77eC'
      abi: Gravity
      startBlock: 6175244
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.5
      language: wasm/assemblyscript
      entities:
        - Gravatar
      abis:
        - name: Gravity
          file: ./abis/Gravity.json
      eventHandlers:
        - event: NewGravatar(uint256,address,string,string)
          handler: handleNewGravatar
        - event: UpdatedGravatar(uint256,address,string,string)
          handler: handleUpdatedGravatar
      callHandlers:
        - function: createGravatar(string,string)
          handler: handleCreateGravatar
      blockHandlers:
        - function: handleBlock
        - function: handleBlockWithCall
          filter:
            kind: call
      file: ./src/mapping.ts
```


**Schema (schema.graphql)**- The GraphQL schema defines what data you wish to retreive from the subgraph.

**AssemblyScript Mappings (mapping.ts)** - This is the code that translates data from your datasources to the entities defined in the schema.

### 4. Deploy to the Subgraph Studio​ <a name="deploy"></a>
Go to the [Subgraph Studio](https://thegraph.com/studio/) and connect your wallet.
Click "Create" and enter the subgraph slug you used in step 2.

Run these commands in the subgraph folder:
`$ graph codegen`
`$ graph build`

Authenticate and deploy your subgraph. The deploy key can be found on the Subgraph page in Subgraph Studio.
`$ graph auth --studio <DEPLOY_KEY>`
`$ graph deploy --studio <SUBGRAPH_SLUG>`

You will be asked for a version label. It's strongly recommended to use the following conventions for naming your versions. Example: 0.0.1, v1, version1

### 5. Check your logs​ <a name="logs"></a>
The logs should tell you if there are any errors. If your subgraph is failing, you can query the subgraph health by using the GraphiQL Playground. Use this [endpoint](https://api.thegraph.com/index-node/graphql). Note that you can leverage the query below and input your deployment ID for your subgraph. In this case, `Qm...` is the deployment ID (which can be located on the Subgraph page under Details).

```
{
  indexingStatuses(subgraphs: ["Qm..."]) {
    node
    synced
    health
    fatalError {
      message
      block {
        number
        hash
      }
      handler
    }
    nonFatalErrors {
      message
      block {
        number
        hash
      }
      handler
    }
    chains {
      network
      chainHeadBlock {
        number
      }
      earliestBlock {
        number
      }
      latestBlock {
        number
      }
      lastHealthyBlock {
        number
      }
    }
    entityCount
  }
}
```

### 6. Query your Subgraph​ <a name="query"></a>
#### A. From The Graph
With the subgraph deployed, visit the Graph Explorer to open up a GraphiQL interface where you can explore the deployed GraphQL API for the subgraph by issuing queries and viewing the schema.

Each subgraph published to the decentralized Graph Explorer has a unique query URL that you can find by navigating to the subgraph details page and clicking on the "Query" button on the top right corner. This will open a side pane that will give you the unique query URL of the subgraph as well as some instructions about how to query it.

![graph image](https://thegraph.com/docs/assets/images/query-subgraph-pane-94df98312744f446b798f606c06ec5e7.png)

As you can notice, this query URL must use a unique API key. You can create and manage your API keys in the [Subgraph Studio](https://thegraph.com/studio) in the "API Keys" section.

Querying subgraphs using your API keys will generate query fees that will be paid in GRT. You can learn more about billing here.

You can also use the GraphQL playground in the "Playground" tab to query a subgraph within The Graph Explorer.
#### B. From your Frontend
The end points you can use to query your new subgraph are:

For Testing:
```
    Queries (HTTP)
    https://api.studio.thegraph.com/query/<ID>/<SUBGRAPH_NAME>/<VERSION>
```
For Production (Graph Explorer)
```
    Queries (HTTP)
    https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>
```

Using the GraphQL endpoint, you can use various GraphQL Client libraries to query the subgraph and populate your app with the data indexed by the subgraph.

**The frontend project is currently using Apollo Client**
[Apollo client](https://www.apollographql.com/docs/) supports web projects including frameworks like React and Vue, as well as mobile clients like iOS, Android, and React Native.

Let's look at how fetch data from a subgraph with Apollo client in a web project.
Query the API with the following code:
```
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const APIURL = 'https://api.studio.thegraph.com/query//<SUBGRAPH_NAME>/'

const tokensQuery = `
  query {
    tokens {
      id
      tokenID
      contentURI
      metadataURI
    }
  }
`

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql(tokensQuery),
  })
  .then((data) => console.log('Subgraph data: ', data))
  .catch((err) => {
    console.log('Error fetching data: ', err)
  })
```
To use variables, you can pass in a variables argument to the query:
```
const tokensQuery = `
  query($first: Int, $orderBy: BigInt, $orderDirection: String) {
    tokens(
      first: $first, orderBy: $orderBy, orderDirection: $orderDirection
    ) {
      id
      tokenID
      contentURI
      metadataURI
    }
  }
`

client
  .query({
    query: gql(tokensQuery),
    variables: {
      first: 10,
      orderBy: 'createdAtTimestamp',
      orderDirection: 'desc',
    },
  })
  .then((data) => console.log('Subgraph data: ', data))
  .catch((err) => {
    console.log('Error fetching data: ', err)
  })
```


### References <a name="ref"></a>

[The Graph Quick Start](https://thegraph.com/docs/developer/quick-start)
[Subgraph Studio](https://thegraph.com/studio)
[Apollo client](https://www.apollographql.com/docs/)
[The Graph](https://thegraph.com)
[The Graph Explorer](https://thegraph.com/explorer)
[Hosted Service](https://thegraph.com/hosted-service/)