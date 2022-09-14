import Wilder from 'components/wilder/Wilder';
import 'App.css';
import WILDERS from 'data/wildersData';

function App() {
	// fetch list of wilders from API

	return (
		<div>
			<header>
				<div className="container">
					<h1>Wilders Book</h1>
				</div>
			</header>
			<main className="container">
				<h2>Wilders</h2>
				<section className="card-row">
					{WILDERS.map((wilder) => (
						<Wilder
							key={wilder.id}
							firstName={wilder.firstName}
							lastName={wilder.lastName}
							skills={wilder.skills}
						/>
					))}
				</section>
			</main>
			<footer>
				<div className="container">
					<p>&copy; 2022 Wild Code School</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
