// Freddy Rangel - HelloSign, @frangel85
	// react under the hood: book

// Swizec Teller - Engineer, @swizec
	// React+D3 es6, Data Visualization with d3

// http://react-university.github.io/react-and-d3-workshop/
// https://es6cheatsheet.com/?key=ForwardJS

// Module 1: Why React and D3
	// Benefits of Componentization
	// Declarative Data Visualization
	// Reusability
	// Structure at a Glance
	// Better Testing and Debugging

// Module 2: React 101
	// Declarative components.
	<div id="app"></div>

	class HelloWorld extends React.Component {
	  render() {
	  	// return React.createElement('h1', {className: 'header'}, 'Hello World!');
	    return <h1 className="header">Hello, World!</h1>
	  }
	}

	ReactDOM.render(<HelloWorld />, document.getElementById('app'));

	// Ex 1 /ex/ex1.js

	// Reusing components.
	// it's all about parents and trees to diff
	class HelloWorld extends React.Component {
	  render() {
	    return <h1 className="header">Hello, World!</h1>
	  }
	}

	class Header extends React.Component {
	  render() {
	  	// have to wrap in div because can't return two things in js. Must wrap to build parent/child
	    return <div>
	      <HelloWorld />
	      <h2>React all the things!</h2>
	    </div>
	  }
	}

	ReactDOM.render(<Header />, document.getElementById('app'));

	// Ex 2 /ex/ex2.js

	// Props and Unidirectional Data Flow.
	class Article extends React.Component {
	  render() {
	    return <div>
	      <Header title="My Awesome Cats"/>
	      <Author name="Chia"/>
	    </div>
	  }
	}

	class Header extends React.Component {
	  render() {
	    const title = this.props.title;
	    return <h1 className="header">{ title }</h1>
	  }
	}

	class Author extends React.Component {
	  render() {
	    const name = this.props.name;
	    return <p className={`m-${name}`}>{ name }</p>
	  }
	}

	ReactDOM.render(<Article />, document.getElementById('app'));

	// Managing State.
	class Cats extends React.Component {
	  constructor(props){
	  	// do super(props) because React needs to know what to track so it can do the diff when changes happen
	    super(props);
	    // initialize state
	    this.state = { count: 1 };
	  }
	  
	  render() {
	    const cats = [];
	    const count = this.state.count;
	    for (let i = 0; i < count; i++) {
	      cats.push(<CatImage />)
	    }
	    return <div>
	      <button onClick={this.moreCats.bind(this)}>More Cats!</button>
	      <button onClick={this.noCats.bind(this)}>Ok that is too many...</button>
	      <div>
	        {cats}
	      </div>
	    </div>
	  }
	  
	  // function to do stuff
	  moreCats() {
	    const newCount = this.state.count + 1;
	    // setState: have to tell react something changed. will re-render component and children
	    this.setState({ count: newCount });
	    // only have to pass an obj of what state is changing
	  }
	  
	  noCats() {
	    const newCount = this.state.count - 1;
	    this.setState({ count: newCount });
	  }
	}

	class CatImage extends React.Component {
	  render() {
	    return <img width="200" src="http://thecatapi.com/api/images/get?format=src&type=gif"/>
	  }
	}

	ReactDOM.render(<Cats />, document.getElementById('app'));
	
	// Props vs State.
	// state: things that change over time. user input, data from server
	// state: largest source of bugs
		// state seems to be a lot like $scope in Angular
	class Pets extends React.Component {
	  constructor( props ) {
	    super( props );
	    this.state = {
	      catCount: 0,
	      dogCount: 0
	    };
	  }
	  
	  moreCats() {
	    const newCount = this.state.catCount + 1;
	    this.setState( { catCount: newCount } );
	  }
	  
	  moreDogs() {
	    const newCount = this.state.dogCount + 1;
	    this.setState( { dogCount: newCount } );
	  }
	  
	  render() {
	    return <div>
	      <Cats count={this.state.catCount} handleClick={this.moreCats.bind(this)}/>
	      <Dogs count={this.state.dogCount} handleClick={this.moreDogs.bind(this)}/>
	    </div>
	  }
	}

	class Cats extends React.Component {
	  render() {
	    return <div>
	      <button onClick={this.props.handleClick}>More Cats</button>
	      <p>I have {this.props.count} cats.</p>
	    </div>
	  }
	}

	class Dogs extends React.Component {
	  render() {
	  	// value of handleClick is a function, and set as a prop in the Pets Parent Component
	    return <div>
	      <button onClick={this.props.handleClick}>More Dogs</button>
	      <p>I have {this.props.count} dogs.</p>
	    </div>
	  }
	}

	ReactDOM.render(<Pets />, document.getElementById('app'));

	// React is Just JavaScript.
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
	      <Cats count={this.state.catCount} handleClick={this.moreCats.bind(this)}/>
	      <Dogs count={this.state.dogCount} handleClick={this.moreDogs.bind(this)}/>
	    </div>
	  }
	}

	class Cats extends React.Component {
	  render() {
	    return <div>
	      <button onClick={this.props.handleClick}>More Cats</button>
	      <p>I have {this.props.count} cats.</p>
	    </div>
	  }
	}

	class Dogs extends React.Component {
	  render() {
	    return <div>
	      <button onClick={this.props.handleClick}>More Dogs</button>
	      <p>I have {this.props.count} dogs.</p>
	    </div>
	  }
	}

	ReactDOM.render(<Pets />, document.getElementById('app'));
	// refactored version
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

	class Animal extends React.Component {
	  render() {
	    return <div>
	      <button onClick={this.props.handleClick}>More {this.props.name}</button>
	      <p>I have {this.props.count} {this.props.name}.</p>
	    </div>
	  }
	}

	// to make is functional
	function Animal({handleClick, count, name}) {
		return <div>
			<button onClick={handleClick}>More {name}</button>
      <p>I have {count} {name}.</p>
		</div>
	}

	ReactDOM.render(<Pets />, document.getElementById('app'));

	// React is Functional.
	// stateless functional components
		// rendered as a value, no state tracked
	function Person(props) {
	  return <h1>Hi my name is: {props.name}</h1>
	}

	ReactDOM.render(<Person name="Freddy Rangel" />, document.getElementById('app'));

	class Thing extends React.Component {
		render() {

		}

		// checks to see if component was attached to DOM
		componentDidMount() {

		}

		// checks to see if component changed by comparing diffs in state
		componentDidUpdate() {

		}
	}

// Module 3: D3.js 101
	// Scales: map domain to range.

		// Ordinal Scale
		let ordinal = d3.scale.ordinal()
		  .domain([1, 2, 3])
	  	.range(['D', 'C', 'C', 'B', 'A']);

		const div = document.createElement('div');
		div.innerHTML = [ordinal(1), ordinal(2), ordinal(3)];
		document.body.appendChild(div);

		// Linear Scale
		let linear = d3.scale.linear()
  		.domain([-1, 1])
	  	.range([-100, 100]);

		const div = document.createElement('div');
		div.innerHTML = [linear(-1), linear(0), linear(1)];
		document.body.appendChild(div);

		// Power Scale
		let pow = d3.scale.pow()
		  .exponent(3);

		const div = document.createElement('div');
		div.innerHTML = [pow(1), pow(2), pow(3)];
		document.body.appendChild(div);

		// Log Scale
		let log = d3.scale.log()

		const div = document.createElement('div');
		div.innerHTML = [log(1), log(2), log(3)];
		document.body.appendChild(div);

	// Array Operations: helpful data manipulations.
		// D3 can make arrays
		let data = d3.range(0, 100, 5);

		const div = document.createElement('div');
		div.innerHTML = data;
		document.body.appendChild(div);
	
		
		// D3 can tell you things about the array
		let data = d3.range(0, 100, 5);

		let min = d3.min(data); // 0
		let max = d3.max(data); // 95
		let extent = d3.extent(data); //[0, 95]

		const div = document.createElement('div');
		div.innerHTML = [min, max,extent];
		document.body.appendChild(div);

		
		// D3 does basic statistics
		let data = d3.range(0, 100, 5);

		const mean = d3.mean(data); 
		const median = d3.median(data); 
		const quantile = d3.quantile(data, 1); 
		const variance = d3.variance(data); 
		const deviation = d3.deviation(data);

		const div = document.createElement('div');
		div.innerHTML = [mean, median, quantile, variance, deviation];
		document.body.appendChild(div);
		
		
		// Nesting
		let data = d3.range(0, 100, 5);

		let array_of_object;

		let grouped = d3.nest()
		                .key((d) => d.name)
		                .sortKeys(d3.ascending)
		                .entries(array_of_object);
	
		
	// Data loading: talk to any remote source.
		try {
		  d3.csv('./2016-FCC-New-Coders-Survey-Data.csv')
		    .row((d) => fixRow(parseRow(d)))
		    .get((err, data) => {
		      /**
		      *  [{field1: '...', field2: '...' }
		      *  {field1: '..., field2: '...}]
		      */
		    })
		} catch(e) {
		  
		}
	
	// D3 The Good Parts
		// Selections: for selecting things.
			try {
			  let node = d3.select('.some-css-class');
			  let alsoNode = d3.select(findDOMNode(ref));
			} catch(e) {
			  
			}


		// Axes: make your graphs understandable.
			let scale = d3.scaleLinear();
			let axis = d3.axisBottom(scale);

			d3.select(node).call(axis);

			// makes the following to the DOM

			/*
				_________________________________________
				0			1,000			2,000			3,000			4,000

			*/

		// Shapes: build the basics for you to draw.
			// Build the most common thing you need.
			// Calculate coordinates.
			// You do the rendering.

		// Transitions: simple animations.


// Module 4: D3 + React Integration
	// D3 Does Props
	const Component = React.Component;

	class Line extends Component {
	  constructor(props) {
	    super(props);
	    
	    // Set up scales and a line generator
	    this.yScale = d3.scaleLinear();
	    this.xScale = d3.scaleLinear();

	    this.line = d3.line()
						.x(d => this.xScale(d[0]))
						.y(d => this.yScale(d[1]))

	    this.updateD3(props);
	  }
	  
	  componentWillReceiveProps(newProps) {
	    this.updateD3(newProps);
	  }
	  
	  updateD3(props) {
	    const { start, end } = props;
	    
	    // update scales
	    this.xScale.domain( [ start[0], end[0] ] )
	    			.range([10, 200]);

		this.yScale.domain( [ start[1], end[1] ] )
					.range([10, 200]);
	  }
	  
	  render() {
	    const { start, end } = this.props;
	    
	    // use the line generator for the `d` attribute
	    const otherPoints = [ 2.5, 1 ];
	    const dataPoints = [ start, end, otherPoints ];
	    const D = this.line( dataPoints );

	    return (
	      <path d={D} />
	    )
	  }
	}

	class App extends Component {
	  render() {
	    return (
	      <svg width="100%" height="200">
	        <Line start={[1, 1]} end={[2, 3]} />
	      </svg>
	    )
	  }
	}

	ReactDOM.render(<App />, document.getElementById('app'));

	
	// Blackbox Components
	const Component = React.Component;

	class Axis extends Component {  
	  // render an axis whenever component updates
	  
	  renderAxis() {
	    // axis generator
	    let axis = d3.axisBottom(this.props.scale);
	    
	    // this.refs.wrapper to add to wrapper element
	    d3.select(this.refs.wrapper).call(axis);
	  }
	  
	  componentDidMount() { // called after first time component renders. We know it's on the page
	  	this.renderAxis() ;
	  }
	  componentDidUpdate() { // called after render is done. We can be sure that the DOM node is in the page and can be manipulated. for d3.select() manipulation outside of react
	  	this.renderAxis();
	  }
	  
	  render() {
	    const transform = `translate(${this.props.x}, ${this.props.y})`;
	    return <g ref="wrapper" transform={transform}></g>
	  }
	}

	class App extends Component {
	  render() {
	    let xScale = d3.scaleLinear().domain([0, 1]).range([0, 300]);
	    // let xScale = d3.scaleLinear().domain([0, 100]).range([0, 400]);
	    
	    return (
	      <svg width="100%" height="200">
	        <Axis x={10} y={50} scale={xScale}/>
	      </svg>
	    )
	  }
	}

	ReactDOM.render(<App />, document.getElementById('app'));


	// Simple Animations
	const Component = React.Component;

	const Circle = ({ x, y }) => (
	  <circle cx={x} cy={y} r={5} />
	);

	class App extends Component {
	  constructor() {
	    super();
	    
	    this.state = { 
	      x: 10,
	      vx: 1.5,
	      x2: 200
	    };
	  }
	  
	  componentDidMount() {
	    // keep changing state.x
	    this.timer = d3.timer(() => {
	      let { x, vx, x2 } = this.state;
	      x = x+vx;
	      x2 = x2-vx;
	      
	      if (x > 200 || x < 10) {
	        vx = -vx;
	      }
	      
	      this.setState( { x, vx, x2 });
	    })
	  }

	  componentWillUnmount() {
	    // clean up after yourself
	    this.timer.stop();
	  }
	  
	  render() {
	    return (
	      <svg width="100%" height="200">
	        <Circle x={this.state.x} y={50} />
	        <Circle x={this.state.x2} y={100} />
	      </svg>
	    )
	  }
	}

	ReactDOM.render(<App />, document.getElementById('app'));


	// transitions
	const Component = React.Component;

	class Circle extends Component {
	  constructor( props ) {
	    super( props );
	    
	    // copy x, y props to state
	    this.state = { x: props.x, y: props.y }
	    
	  }
	  
	  componentWillReceiveProps(newProps) {
	    // use d3 to change attributes with a transition
	    d3.select(this.refs.circle)
	      .transition()
	      .attr('cy', newProps.y )
	      .on('end', () => this.setState( { y: newProps.y } ));
	  }
	  
	  render() {
	    return (
	      <circle cx={this.state.x} cy={this.state.y} ref="circle" r="5" />
	    )
	  }
	}

	class App extends Component {
	  constructor() {
	    super();
	    
	    this.state = { y: 10 };
	  }
	  componentDidMount() {
	    setTimeout(() => this.setState( { y: 200 } ), 1000 );
	  }
	  
	  render() {
	    
	    return (
	      <svg width="100%" height="800">
	        <Circle x={40} y={this.state.y} />
	      </svg>
	    )
	  }
	}

	ReactDOM.render(<App />, document.getElementById('app'));

// Module 5: Final Project (Shiny scatterplot)

