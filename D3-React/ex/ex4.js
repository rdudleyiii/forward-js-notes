// Ex 4

// *  Add an 'onChange' handler to the input field.
// *  Then, render the dog name inside the "p" element

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null }
  }
  
  handleChange(evt) {
    const name = evt.target.value;
    this.setState({ name: name });
  }
  
  render() {
    return <div>
      <input id="dog-input" onChange={this.handleChange.bind(this)}/>
      <p id="dog-name">My dog's name is: {this.state.name} </p>
    </div>
  }
}

ReactDOM.render(<Dog />, document.getElementById('app'));

// *  Tests that you're rendering the element correctly. Don't change. 
describe('Exercise Tests', function() {
  it('should render an input field that updates the dog name', () => {
    const Simulate = React.addons.TestUtils.Simulate;
    const div = document.createElement('div');
    const component = ReactDOM.render(<Dog/>, div);
    const input = div.querySelector('#dog-input');
    Simulate.change(input, {target: {value: 'Fido'}});
    const name = div.querySelector('#dog-name');
    expect(name.innerHTML).toContain("Fido");
  });
});