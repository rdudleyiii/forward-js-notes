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
	// Props vs State.
	// React is Just JavaScript.
	// React is Functional.

// Module 3: D3.js 101

// Module 4: D3 + React Integration

// Module 5: Final Project (Shiny scatterplot)

