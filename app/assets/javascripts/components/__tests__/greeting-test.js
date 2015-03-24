jest.dontMock('../greeting.js.jsx');

var React     = require('react/addons');
var Greeting  = require('../greeting.js.jsx');
var TestUtils = React.addons.TestUtils;

describe("Greeting", function () {
  describe('when called with props name="Bob"', function () {
    it("renders text 'Hi Bob!'", function () {
      var comp = TestUtils.renderIntoDocument(<Greeting name="Bob" />);
      var node = React.findDOMNode(comp);
      expect(node.textContent).toBe('Hi Bob!');
    });
  });
});
