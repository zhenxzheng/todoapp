// import React from 'react';
// import ReactDom from 'react-dom';
// import { 
//   renderIntoDocument,
//   scryRenderedDOMComponentsWithTag,
//   Simulate
// } from 'react-addons-test-utils';
// import Counter from '../../src/components/TodoApp';
// import { expect } from 'chai';

// describe('Counter', () => {
//   it('renders a number', () => {
//     const component = renderIntoDocument (
//       <Counter value={2}/>
//     );

//     const numberTag = scryRenderedDOMComponentsWithTag(component, 'h1');
//     expect(numberTag.length).to.equal(1);
//     expect(numberTag[0].textContent).to.equal('2');
//   });

//   it('renders a pair of buttons', () => {
//     const component = renderIntoDocument(
//       <Counter value={2}/>
//     );

//     const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
//     expect(buttons.length).to.equal(2);
//     expect(buttons[0].textContent).to.equal('+');
//     expect(buttons[1].textContent).to.equal('-');
//   });

//   it('increments the number', () => {
//     let value = 2;
//     const increment = () => value += 1;
//     const component = renderIntoDocument(
//       <Counter 
//         value={value}
//         onIncrement={increment}
//       />
//     );

//     const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
//     Simulate.click(buttons[0]);
//     Simulate.click(buttons[0]);

//     expect(value).to.equal(4);
//   });

//   it('decrements the number', () => {
//     let value = 2;
//     const decrement = () => value -= 1;
//     const component = renderIntoDocument(
//       <Counter 
//         value={value}
//         onDecrement={decrement}
//       />
//     );

//     const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
//     Simulate.click(buttons[1]);
//     Simulate.click(buttons[1]);

//     expect(value).to.equal(0);
//   });
// });