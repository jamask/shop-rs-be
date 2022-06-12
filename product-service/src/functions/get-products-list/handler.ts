import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import data from './mockproductlist';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  return formatJSONResponse({
    data,
  });
};

export const main = middyfy(getProductsList);