import Document, { Head, Html, Main, NextScript } from 'next/document';
import HeadScripts from '../lib/headScripts';
import Meta from '../lib/meta';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en" data-theme="light">
				<Head>
					<HeadScripts />
					<Meta />
				</Head>
				<body>
					<title>Dapp Scaffold</title>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
