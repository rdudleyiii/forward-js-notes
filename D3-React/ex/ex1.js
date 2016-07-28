// Ex 1

<div id="app"></div>
// *  Create a React component that renders any element with an id of 'my-component'
class FirstComponent extends React.Component {
  render() {
    return <div id="my-component"></div>
  }
}

ReactDOM.render( <FirstComponent />, document.getElementById('app'));

// *  Tests that you're rendering the element correctly. Don't change. 
describe('Basic Example', function() {
  it('should render the right component', () => {
    const element = document.getElementById('my-component');
    expect(element).not.toBe(null);
  });
});