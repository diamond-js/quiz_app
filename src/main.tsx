import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import './styles/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Quiz from './routes/Quiz';
import SelectCategory from './routes/SelectCategory';
import { Provider } from 'react-redux';
import store from './features/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<App />}
					>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path='category'
							element={<SelectCategory />}
						/>
						<Route
							path='quiz/:category'
							element={<Quiz />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
