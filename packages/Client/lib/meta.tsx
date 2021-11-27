import React, { FC } from 'react';

const Meta: FC = ({ children }) => {
	const title = 'Dapp Scaffold';
	const keywords = 'dapp, scaffold, nextjs, ethers, solidity';
	const canonicalUrl = 'https://www.ethereum.org';
	const description = 'A Dapp Scaffold';
	const ogType = 'website';
	const ogLocale = 'en_US';
	const icon = '/favicon.ico';
	const twitterHandle = '@bankless';

	return (
		<>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<title>{title}</title>
			<meta name="keywords" content={keywords} key="metakeywords" />

			<link rel="icon" href={icon} key="metaicon" />
			<link rel="canonical" href={canonicalUrl} key="metacanonical" />
			<meta
				name="robots"
				content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				key="metarobots"
			/>
			<meta name="description" content={description} key="metadescription" />

			<meta property="og:title" content={title} key="ogtitle" />
			<meta property="og:type" content={ogType} key="ogtype" />
			<meta property="og:locale" content={ogLocale} key="oglocale" />
			<meta
				property="og:description"
				content={description}
				key="ogdescription"
			/>
			<meta property="og:url" content={canonicalUrl} key="ogurl" />
			<meta property="og:site_name" content={title} key="ogsitename" />
			<meta
				property="og:image"
				content={`${canonicalUrl}${icon}`}
				key="ogimage"
			/>

			<meta
				name="twitter:card"
				content="summary_large_image"
				key="twittercard"
			/>
			<meta name="twitter:site" content="@tumee" key="twittersite" />
			<meta name="twitter:creator" content="@tumee" key="twittercreator" />

			{/* Material UI */}
			<link
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
				rel="stylesheet"
			/>

			{children}
		</>
	);
};

export default Meta;
