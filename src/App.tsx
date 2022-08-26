import Dropdown from './dropdown/Dropdown';
import Login from './form/Login';

function App() {
	return (
		<div className='App'>
			<Dropdown
				listItems={[
					{
						label: 'List1',
						callback: () => {
							console.log(1);
						},
					},
					{
						label: 'List2',
						callback: () => {
							console.log(2);
						},
					},
				]}
			/>
			<Login />
		</div>
	);
}

export default App;
