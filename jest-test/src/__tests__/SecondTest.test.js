import { create } from 'react-test-renderer';
import ComponentWithProps from '../Components/ComponentWithProps';
import '@testing-library/jest-dom'

describe("Testing ComponentWithProps", () => {

    const props = { 
        headerText:`A header`,
        contentProp: `Some Content`,
        numericProp: 100, 
        valueProp: 10000, 
        expressionProp: 2+2, 
        functionProp: () =>`hello world`,
        objectProp:{
            key1: `key1 value`,
            key2: 2,
            key3: [`key3`,`array`,`values`]
        },
        arrayProp:[1, 2, 'hello']
    }

    let componentToTest; 

    beforeEach( () => {
        const TestInstance = create(<ComponentWithProps {...props}/>)
        componentToTest = TestInstance.root;
    });
    

    test.skip("Test HeaderProp", () => {
        const header1 = componentToTest.findByType('h1');
        console.log(header1.children)
        expect(header1.children).toEqual([props.headerText]);
    });

    test.skip("Test NumberProp", () => {
        const numericp = componentToTest.findByProps({className: 'number'});
        console.log(numericp.children)
        expect(numericp.children).toContain([props.numericProp].toString());
    });

    test.skip("Test ValueProp", () => {
        const valued = componentToTest.findByProps({className: 'bigNumber'});
        console.log(valued.children)
        expect(valued.children).toContain([props.valueProp].toString());
    });

    test.skip("Test ExpressionProp", () => {
        const expression = componentToTest.findByProps({className: 'expressed'});
        console.log(expression.children)
        expect(expression.children).toContain(2+2);
    });

    test.skip("Testing a Function", () => {
        const afunction = componentToTest.findByProps({className: 'function'});
        expect(afunction).toReturn("hello world")
    })
})