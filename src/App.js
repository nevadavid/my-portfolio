import ListItem from './components/ListItem/ListItem';
import Icon from './components/Icon/Icon';

import pkg from '../package.json';
import references from './references';

import './App.scss';

function App() {
	return (
		<main>
			<h1>
				{process.env.REACT_APP_AUTHOR}

				<sub>
					{process.env.REACT_APP_TITLE}
				</sub>
			</h1>

			<ul>
				{references.map(
					(reference) => (
						<ListItem
							key={reference.label}
							label={reference.label}
							url={reference.url}
							badges={reference.badges}
						></ListItem>
					)
				)}
			</ul>

			<h3>
				<a
					href={pkg.homepage}
					target="_blank"
					rel="noreferrer"
				>
					<Icon
						name="github"
					></Icon>
				</a>

				<a
					href={`mailto:${pkg.author.email}`}
				>
					{pkg.author.email}
				</a>
			</h3>
		</main>
	);
}

export default App;
