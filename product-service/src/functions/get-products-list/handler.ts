import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Client } from 'pg';

const {PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD} = process.env;

const dbOptions = {
  host: PG_HOST,
  port: Number(PG_PORT),
  database: PG_DATABASE, 
  user: PG_USERNAME, 
  password: PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 5000
};



import schema from './schema';
// import data from './mockproductlist';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  const client = new Client(dbOptions);
  await client.connect();

  try {

    const { rows: items } = await client.query('select p.id, s.count, p.price, p.title, p.description from products p left join stocks s on p.id = s.product_id;');
    console.log('Get products: ', items);
    return formatJSONResponse({
      items,
    });

  } catch (err) {
    console.error('Error: ', err);
    return formatJSONResponse({
      'result': 'Error',
    });
  } finally {
    client.end();
  }

};

export const main = middyfy(getProductsList);