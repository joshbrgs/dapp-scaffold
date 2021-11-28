const GRAPH_ID = process.env.ID;
const SUBGRAPH_NAME = process.env.SUBGRAPH_NAME;
const GRAPH_VERSION = process.env.VERSION;

const INFURA_ID = process.env.INFURA_ID;

export const uri = `https://api.studio.thegraph.com/query/${GRAPH_ID}/${SUBGRAPH_NAME}/${GRAPH_VERSION}`;

export const mainNetChainId =
	'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934';

export const Tokens = {
	DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
};
