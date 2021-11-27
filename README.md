# dapp-scaffold
A scaffold of an Ethereum dapp monorepo. NextJS Typescript FrontEnd with useDapp, Apollo CLient, Tailwind CSS, and Daisy UI. HardHat for testing and local network spin ups, as well as Chainlink and OpenZepplin to help buidl your smart contracts, and The Graph to buidl a subgraph to easily query your contract on chain.

## Packages

### Client

This is a Nextjs Project setup with Tailwind CSS and Daisy UI to help you build your frontend UI fast and efficiently. This project also comes pre intalled with useDapp, a package that uses ethersjs under the hood to give you react hooks that enable quick implementation of web3 necessities like connecting a wallet and reading balances. This project also comes pre equiped with Apollo Client for your query needs with The Graph, if you choose to use a subgraph to query your smart contracts.

### Hardhat

Hardhat is a smart contract testing environment that comes with a bunch of developer tools, even the ability to add console statements in your contracts to help debug. This suite has started to gain popularity recently and is a replacement to Truffle testing framework. In this project, Chainlink and OpenZepplin if you want verified randomness, or to create your own ERC-20 token, they are available to utilize in your smart contract development!
### The Graph

The Graph gives you the ability to use GraphQL to query your smart contract events on the Ethereum blockchain! If you come from a web2 background and know about REST APIs, but maybe not so much about GraphQL, I encourage you to check out the benefits of this technology. In some cases, REST queries can provide you with a bunch of unnecessary or unused data, but with GraphQL you can specify what data you want back and from one endpoint, your query will give you just the information needed, this can help reduce bloat in http calls. The Graph is a project that brings this ability to web3 developers like you!
