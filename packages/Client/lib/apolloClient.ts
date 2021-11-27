import { ApolloClient, InMemoryCache } from '@apollo/client';
import { uri } from './constants';

export const apolloClient = new ApolloClient({
	uri: uri,
	cache: new InMemoryCache(),
});
