import { useEthers, shortenIfAddress } from '@usedapp/core';
import React, { FC } from 'react';

const WalletConnect: FC = ({ children }) => {
	const { activateBrowserWallet, account, deactivate } = useEthers();
	return (
		<>
			{!account ? (
				<button
					className="btn btn-primary"
					onClick={() => activateBrowserWallet()}>
					{children}
				</button>
			) : (
				<>
					<p className="mr-2">{shortenIfAddress(account)}</p>
					<button className="btn btn-primary" onClick={() => deactivate()}>
						Disconnect
					</button>
				</>
			)}
		</>
	);
};

export default WalletConnect;
