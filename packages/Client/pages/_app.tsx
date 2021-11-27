import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DAppProvider } from '@usedapp/core';
import { ApolloProvider } from '@apollo/client';
import dappConfig from '../lib/dappConfig';
import { apolloClient } from '../lib/apolloClient';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<DAppProvider config={dappConfig}>
				<Component {...pageProps} />
			</DAppProvider>
		</ApolloProvider>
	);
}

export default MyApp;
