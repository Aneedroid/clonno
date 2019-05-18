import http from '../../../../../client/javascripts/api/http';

import { getClonnoData } from '../../../../../client/javascripts/api/clonno';

jest.mock('../../../../../client/javascripts/api/http');

describe('api/clonno', () => {
  beforeEach(() => {
    http.get.mockClear();
  });

  test('should fetch clonno details', async () => {
    http.get.mockResolvedValue({
      status: 200,
      data: {
        boards: [{
          title: 'Superhero',
          lists:[],  
        }],
      },
    });

    const data = await getClonnoData();

    expect(http.get).toHaveBeenCalledWith('/clonno');
    expect(data.boards[0].title).toStrictEqual('Superhero');
  });

  test('should return empty if API call fails', async () => {
    http.get.mockRejectedValue(new Error('Async error'));

    const data = await getClonnoData();

    expect(http.get).toHaveBeenCalledWith('/clonno');
    expect(data).toStrictEqual({});
  });
});
