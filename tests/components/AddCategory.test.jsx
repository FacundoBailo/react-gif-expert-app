const { render, screen, fireEvent } = require("@testing-library/react");
const { default: AddCategory } = require("../../src/components/AddCategory");


describe('probando <AddCategory/>', () => { 

    const inputValue = 'Goku';


    test('debe hacer match con el snapshot', () => { 

        const { container } = render( <AddCategory onNewCategory={() => {}}/> );

        expect( container ).toMatchSnapshot();

     })

     test('debe cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={() => {}}/> );

        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } } )

        expect( input.value ).toBe('Goku');

      })

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        render( <AddCategory onNewCategory={() => {}}/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } )
        fireEvent.submit( form );
        //screen.debug()

        expect( input.value ).toBe('');

    })

 })