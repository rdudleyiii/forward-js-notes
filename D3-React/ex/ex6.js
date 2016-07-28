// Ex 6

// *  Without looking at the prior example, 
// *  create a "Pets" component that renders a just a "Cats"
// *  component with a button to increment the cat count and renders the current count.

class Pets extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {count: 0};
	}
	addToCats() {
		const newCount = this.state.count + 1;
		this.setState( { count: newCount } );
	}

	render() {
		return <div>
			<Cats handleClick={this.addToCats.bind(this)} count={this.state.count}/>
		</div>
	}
}

class Cats extends React.Component {
	render() {
		return <div>
			<button onClick={this.props.handleClick}>Add to Cats</button>
			<div>{this.props.count}</div>
		</div>
	}
}

ReactDOM.render(<Pets />, document.getElementById('app'));

// *  Tests that you're rendering the element correctly. Don't change. 
describe('Exercise Tests', function() {
  it('should render an input field that updates the cat count', () => {
    const Simulate = React.addons.TestUtils.Simulate;
    const div = document.createElement('div');
    const component = ReactDOM.render(<Pets />, div);
    const button = div.querySelector('button');
    Simulate.click(button);
    Simulate.click(button);
    expect(div.innerHTML).toContain("2");
  });
});