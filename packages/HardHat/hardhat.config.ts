import * as dotenv from 'dotenv';

import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

dotenv.config();

const REPORT_GAS = process.env.REPORT_GAS;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const INFURA_ID = process.env.INFURA_ID;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
	solidity: '0.8.4',
	paths: {
		artifacts: '../client/artifacts',
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
		// rinkeby: {
		// 	url: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
		// 	accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
		// },
	},
	gasReporter: {
		enabled: REPORT_GAS !== undefined,
		currency: 'USD',
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
	typechain: {
		outDir: './types',
		target: 'ethers-v5',
	},
};

export default config;
