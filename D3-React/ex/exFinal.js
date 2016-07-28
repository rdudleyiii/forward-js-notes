
const Component = React.Component;
const PropTypes = React.PropTypes;

class Scatter extends Component {
  constructor( props ) {
    super( props );
    
    this.xScale = d3.scaleLinear();
    this.yScale = d3.scaleLinear();
    this.updateD3( props );
  }
  
  updateD3(props) {
    this.xScale.domain(d3.extent(props.data, d => d.x))
               .range([0, props.width]);
    
    this.yScale.domain(d3.extent(props.data, d => d.y))
               .range([0, props.height]);
  }
  
  componentWillReceiveProps( newProps ) {
	    this.updateD3( newProps );
  }
	    
  render() {
    const circles = this.props.data.map(({x, y}) => (
      <circle cx={this.xScale(x)} cy={this.yScale(y)} r={2} />
    ));
    
    const transform = `translate(${this.props.x}, ${this.props.y})`;
    
    return (
      <g transform={transform}>{circles}</g>
    );
  }
}

Scatter.defaultProps = { 
  x: 0, 
  y: 0 
};

Scatter.propTypes = { 
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired, 
  data: PropTypes.array.isRequired
};


class App extends Component {
  constructor(props) {
    super()
    
    this.state = {
      data: this._getData()
    }
  }
  
  _getData() {
    const random = d3.randomUniform(1, 5);
    return d3.range(500).map(_ => ({x: random(),
                                    y: random()}));
  }
  
  render() {
    return (
      <svg width="100%" height="500">
        <Scatter data={this.state.data} 
                     x={100} 
                     y={10}
                     width={600}
                     height={300} />
        <Scatter data={this._getData()} 
                     x={800} 
                     y={10}
                     width={200}
                     height={100} />
      </svg>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));