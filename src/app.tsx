import { Component, render, version, Fragment } from 'inferno';
import { Incrementer } from './components/Incrementer';

const container = document.getElementById('app');

class MyComponent extends Component<any, any> {
	private readonly tsxVersion: number;

	constructor(props: any, context: any) {
		super(props, context);

		this.tsxVersion = 3.7;
	}

	public render = () => (
		<Fragment>
			<h1>Welcome to Inferno {version} TSX {this.tsxVersion}</h1>
			<Incrementer name="Crazy Button" />
		</Fragment>
	);
}

render(<MyComponent />, container);
