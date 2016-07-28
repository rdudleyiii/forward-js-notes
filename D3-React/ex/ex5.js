// Ex 5

// *  Create a "Counter" component that renders a button that increments the counter by 1 and renders that value to the DOM.
// *  Set the initial state of the counter to 0.

class Counter extends React.Component {
	constructor( props ) {
		super( props );
		this.state = { counter: 0 }
	}

	addCount() {
		const newCount = this.state.counter + 1;
		this.setState( { counter: newCount } );
	}

	subtractCount() {
		const newCount = this.state.counter - 1;
		this.setState( { counter: newCount } );
	}

	render() {
		const theCount = this.state.counter;
		return <div>
			<button onClick={this.addCount.bind(this)}>Add</button>
			<button onClick={this.subtractCount.bind(this)}>Subtract</button>
			<div> {theCount} </div>
		</div>
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// *  Tests that you're rendering the element correctly. Don't change. 
describe('Exercise Tests', function() {
  it('should render an input field that updates the dog name', () => {
    const Simulate = React.addons.TestUtils.Simulate;
    const div = document.createElement('div');
    const component = ReactDOM.render(<Counter />, div);
    const button = div.querySelector('button');
    Simulate.click(button);
    Simulate.click(button);
    expect(div.innerHTML).toContain("2");
  });
});