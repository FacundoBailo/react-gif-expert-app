import { screen, render } from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('Testando componente GifItem', () => { 

    const title = 'Dragon Ball Z';
    const url = 'https://dragonballz.com/dbz.jpg';

    test('deberia de hacer match con el snapshot', () => { 

      const { container } = render(<GifItem title={title } url={ url }/>);

      expect( container ).toMatchSnapshot();

     })

    test('debe mostrar la imagen con el URL y el ALT indicado', () => { 
 
      render(<GifItem title={title } url={ url }/>);

      const { src, alt } = screen.getByRole('img');
 
      expect( src ).toBe( url );
      expect( alt ).toBe( alt );
 
    }) 

    test('debe mostrar el titulo en el componente', () => { 

      render(<GifItem title={title } url={ url }/>);
      expect(screen.getByText( title )).toBeTruthy();

    })
     
 })