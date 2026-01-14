import { useMemo } from 'react';
import './app.css';

function App() {
	const handleOpen = () => {
		window.open('https://career.habr.com/orlov_kirill', '_blank', 'noopener,noreferrer');
	};

	const experienceYears = useMemo(() => {
		type Ym = { year: number; month: number };
		const toTotalMonths = ({ year, month }: Ym) => year * 12 + (month - 1);
		const countInclusiveMonths = (start: Ym, end: Ym) =>
			Math.max(0, toTotalMonths(end) - toTotalMonths(start) + 1);

		const now = new Date();
		const currentYm: Ym = { year: now.getFullYear(), month: now.getMonth() + 1 };

		const totalMonths =
			countInclusiveMonths({ year: 2020, month: 3 }, { year: 2023, month: 2 }) +
			countInclusiveMonths({ year: 2023, month: 8 }, currentYm);

		return Math.floor(totalMonths / 12);
	}, []);

	return (
		<main className="app-container">
			<header className="header">
				<h1>Кирилл Орлов</h1>
				<p className="subtitle">
					Frontend-разработчик с {experienceYears}-летним опытом разработки сложных веб-приложений
				</p>
				<button onClick={handleOpen} className="download-button" aria-label="Подробнее обо мне">
					Подробнее обо мне
				</button>
			</header>

			<section className="social-links">
				<ul className="links-list">
					<li>
						<a href="https://t.me/orlovkirill" target="_blank" rel="noopener noreferrer">
							Telegram
						</a>
					</li>
					<li>
						<a href="mailto:kirillorlovufa@gmail.com" target="_blank" rel="noopener noreferrer">
							kirillorlovufa@gmail.com
						</a>
					</li>
				</ul>
			</section>
		</main>
	);
}

export default App;
