import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './remark.module.css';

export default function IndexPage() {
	const data = useStaticQuery(graphql`
		query {
			introRemark: markdownRemark(fileAbsolutePath: { glob: "**/intro.md" }) {
				html
			}
		}
	`);
	const { introRemark } = data;
	return (
		<Layout>
			<SEO title="Home" />
			<div
				className={`my-12 leading-relaxed lg:leading-loose text-center text-lg lg:text-xl ${styles.content}`}
				dangerouslySetInnerHTML={{ __html: introRemark.html }}
			/>
		</Layout>
	);
}
