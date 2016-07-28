// *  Write a component that reuses the "Cats" component and then render that component to the DOM.

class Cats extends React.Component {
  render() {
    return <ul id="my-cats">
      <li>Chia</li>
      <li>Flaco</li>
    </ul>
  }
}


// *  Tests that you're rendering the element correctly. Don't change. 
describe('Exercise Tests', function() {
  it('should render the right component', () => {
    const element = document.getElementById('my-cats');
    expect(element).not.toBe(null);
  });
});