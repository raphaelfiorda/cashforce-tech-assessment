import instance from './instance';

export const getOrders = async () => {
  const response = await instance({
    method: 'get',
    url: '/'
  });

  return response.data;
}