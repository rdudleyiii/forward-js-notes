// Ex 7

// *  Refactor this component to use stateless functional components where it makes sense.

class Pets extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      catCount: 0,
      dogCount: 0
    };
  }
  
  moreCats() {
    const newCount = this.state.catCount + 1;
    this.setState({catCount: newCount});
  }
  
  moreDogs() {
    const newCount = this.state.dogCount + 1;
    this.setState({dogCount: newCount});
  }
  
  render() {
    return <div>
      <Animal name="cats"
        count={this.state.catCount}
        handleClick={this.moreCats.bind(this)}/>
      <Animal name="dogs"
        count={this.state.dogCount}
        handleClick={this.moreDogs.bind(this)}/>
    </div>
  }
}

function Animal({handleClick, count, name}) {
    return <div>
      <button onClick={handleClick}>More {name}</button>
      <p>I have {count} {name}.</p>
    </div>
}

ReactDOM.render(<Pets />, document.getElementById('app'));


/**
*  Tests that you're rendering the element correctly. Don't change. 

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