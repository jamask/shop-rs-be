import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import data from './mockproductlist';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const productId = event['pathParameters']['productId'];
  let result;
  for (let product of data) {
    if (product.id == productId) {
      result = product;
      break;
    }
  }
  return formatJSONResponse({
    'data': result,
  });
};

export const main = middyfy(getProductsById);