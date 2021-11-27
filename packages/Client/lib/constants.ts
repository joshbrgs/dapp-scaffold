export const API_KEY = process.env.API_KEY;
const ID = process.env.ID;
const SUBGRAPH_NAME = process.env.SUBGRAPH_NAME;
const VERSION = process.env.VERSION;

export const uri = `https://api.studio.thegraph.com/query/${ID}/${SUBGRAPH_NAME}/${VERSION}`;

export const mainNetChainId =
	'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934';
