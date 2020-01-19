import { Component, render, version } from 'inferno';

const container = document.getElementById('app');

class MyComponent extends Component<any, any> {
	private readonly tsxVersion: number;

	constructor(props: any, context: any) {
		super(props, context);

		this.tsxVersion = 3.7;
	}

	public render = () => (
		<div>
			<h1>Welcome to Inferno {version} TSX {this.tsxVersion}</h1>
		</div>
	);
}

render(<MyComponent />, container);
