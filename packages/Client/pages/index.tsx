import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core';
import { formatEther, formatUnits } from '@ethersproject/units';
import { themeChange } from 'theme-change';
import type { NextPage } from 'next';
import Image from 'next/image';
import WalletConnect from '../components/WalletConnect';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import { Tokens } from '../lib/constants';

const DAI = Tokens.DAI;

const Home: NextPage = () => {
	const { account } = useEthers();
	const etherBalance = useEtherBalance(account);
	const tokenBalance = useTokenBalance(DAI, account);

	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<>
			<div className="navbar bg-neutral shadow-lg text-neutral-content ">
				<div className="flex-1 mx-2">
					<span className="text-lg font-bold px-2 ">Dapp Scaffold</span>
					<div className="form-control">
						<label className="label">
							<span className="material-icons mr-2">light_mode</span>
							<input
								data-toggle-theme="dark,light"
								type="checkbox"
								className="toggle toggle-primary cursor-pointer"
							/>
							<span className="material-icons ml-2">dark_mode</span>
						</label>
					</div>
				</div>
				<div>
					<WalletConnect>Connect Wallet</WalletConnect>
				</div>
			</div>
			<div className={styles.container}>
				<main className={styles.main}>
					<h1 className={styles.title}>
						Welcome to <a>Dapp Scaffold!</a>
					</h1>

					<p className={styles.description}>
						Get started by editing{' '}
						<code className={styles.code}>pages/index.tsx</code>
					</p>
					{etherBalance && (
						<p className="">Eth Balance: {formatEther(etherBalance)}</p>
					)}

					{tokenBalance && (
						<p className="">DAI Balance: {formatUnits(tokenBalance, 18)}</p>
					)}

					<div className={styles.grid}>
						<a href="https://nextjs.org/docs" className={styles.card}>
							<h2>Next.js Docs &rarr;</h2>
							<p>Find in-depth information about Next.js features and API.</p>
						</a>
						<a href="https://usedapp.io/" className={styles.card}>
							<h2>UseDapp &rarr;</h2>
							<p>
								A React Hook based library that makes Front End Dapp
								developement a breeze.
							</p>
						</a>
						<a href="https://tailwindcss.com/" className={styles.card}>
							<h2>Tailwind CSS&rarr;</h2>
							<p>Explore the utility based css framework Tailwind CSS.</p>
						</a>
						<a href="https://daisyui.com/" className={styles.card}>
							<h2>Daisy UI&rarr;</h2>
							<p>Daisy UI is a flexible component wrapper of Tailwind.</p>
						</a>
						<a href="https://thegraph.com/en/" className={styles.card}>
							<h2>The Graph &rarr;</h2>
							<p>
								Learn about The Graph and how to query the blockchain with gql!
							</p>
						</a>
						<a
							href="https://www.apollographql.com/docs/react/why-apollo/"
							className={styles.card}>
							<h2>Apollo Client&rarr;</h2>
							<p>
								Apollo Client enables you to write gql to query your api or
								smart contract in our case.
							</p>
						</a>
						<a href="https://hardhat.org/" className={styles.card}>
							<h2>Hardhat &rarr;</h2>
							<p>Discover the popular smart contract testing environment.</p>
						</a>
						<a
							href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							className={styles.card}>
							<h2>Deploy &rarr;</h2>
							<p>
								Instantly deploy your Next.js site to a public URL with Vercel.
							</p>
						</a>
					</div>
				</main>

				<footer className={styles.footer}>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer">
						Powered by{' '}
						<span className={styles.logo}>
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								width={72}
								height={16}
							/>
						</span>
					</a>
				</footer>
			</div>
		</>
	);
};

export default Home;
