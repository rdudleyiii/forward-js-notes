// Ex 3

// *  Create a parent component that passes some data to 2 children.
// *  The children must have a class name of "child".

class MainComp extends React.Component {
	render() {
		return <div>
			<Header title="Olympic Weightlifters" />
			<Lifter name="Kendrick Farris" />
			<Lifter name="Morghan King" />
		</div>
	}
}

class Header extends React.Component {
	render() {
		const title = this.props.title;
		return <h1 className="headeer">{ title }</h1>
	}
}

class Lifter extends React.Component {
	render() {
		const lifterName = this.props.name;
		return <p className="child">{ lifterName }</p>
	}
}

ReactDOM.render( <MainComp /> , document.getElementById('app'));

// *  Tests that you're rendering the element correctly. Don't change. 
describe('Exercise Tests', function() {
  it('should render the right component', () => {
    const element = document.querySelectorAll('.child');
    expect(element.length).toBe(2);
  });
});