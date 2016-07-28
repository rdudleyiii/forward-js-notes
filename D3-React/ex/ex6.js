// Ex 6

/**
*  Without looking at the prior example, create a
*  "Pets" component that renders a just a "Cats"
*  component with a button to increment the cat
*  count and renders the current count.
*/



/**
*  Tests that you're rendering the element correctly. Don't change. 
*/
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