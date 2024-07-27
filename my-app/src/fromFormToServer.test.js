const fromFormToServer = require('./fromFormToServer')

describe('fromFormToServer', () => {
  it('should convert a domestic juridical person correctly', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: true,
      title: 'Example Company',
      tin: '1234567890'
    };
    
    const result = fromFormToServer(personInForm);
    expect(result).toEqual({
      type: 'juridical',
      tin: '1234567890',
      name: null,
      foreign_tin: null,
      company_title: 'Example Company'
    });
  });

  it('should convert a domestic physical person correctly', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: false,
      title: 'John Doe',
      tin: '0987654321'
    };
    
    const result = fromFormToServer(personInForm);
    expect(result).toEqual({
      type: 'physical',
      tin: '0987654321',
      name: 'John Doe',
      foreign_tin: null,
      company_title: null
    });
  });

  it('should convert a foreign juridical person correctly', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: true,
      title: 'Foreign Corp',
      tin: 'A123456789'
    };
    
    const result = fromFormToServer(personInForm);
    expect(result).toEqual({
      type: 'foreign_juridical',
      tin: null,
      name: null,
      foreign_tin: 'A123456789',
      company_title: 'Foreign Corp'
    });
  });

  it('should convert a foreign physical person correctly', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: false,
      title: 'Jane Doe',
      tin: 'B987654321'
    };
    
    const result = fromFormToServer(personInForm);
    expect(result).toEqual({
      type: 'foreign_physical',
      tin: null,
      name: 'Jane Doe',
      foreign_tin: 'B987654321',
      company_title: null
    });
  });

  it('should handle edge case where title is empty', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: true,
      title: '',
      tin: '1234567890'
    };
    
    const result = fromFormToServer(personInForm);
    expect(result).toEqual({
      type: 'juridical',
      tin: '1234567890',
      name: null,
      foreign_tin: null,
      company_title: ''
    });
  });

  it('should handle edge case where tin is empty for foreign person', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: false,
      title: 'Jane Doe',
      tin: ''
    };
    
    const result = fromFormToServer(personInForm);
    expect(result).toEqual({
      type: 'foreign_physical',
      tin: null,
      name: 'Jane Doe',
      foreign_tin: '',
      company_title: null
    });
  });
});
