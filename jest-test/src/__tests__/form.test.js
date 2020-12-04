import '@testing-library/jest-dom';
import UserForm from '../Components/UserForm';
import {render} from '@testing-library/react';


describe("Mock Functions for User Form", () => { 

    //const instance = create(<UserForm/>);
    const firstname = 'Sheraz';
    const surname = 'Shahid';
    const myNum = '12345678';

    const mockSubmit = jest.fn();

    test("Testing User Input Function", () => {
        const {container} = render(<UserForm submit={mockSubmit}/>);
        const enterName = container.querySelector(`[name="firstName"]`);

        expect(enterName.value).toEqual(``);

        userEvent.type(enterName, firstname);

        expect(enterName.value).toEqual(firstname);
    })
});