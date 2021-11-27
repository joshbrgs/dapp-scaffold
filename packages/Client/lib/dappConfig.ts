import { ChainId, Config } from '@usedapp/core';
import { mainNetChainId } from './constants';

const dappConfig: Config = {
	readOnlyChainId: ChainId.Mainnet,
	readOnlyUrls: {
		[ChainId.Mainnet]: mainNetChainId,
	},
};

export default dappConfig;
