// client.js
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const PH_API_HOST = 'https://api.producthunt.com/v2/api/graphql';
const TOKEN = '0G5f8cuvXeZcVvmScZV-XL_ZLf8LzoWbMwhZAjS5nIk';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: PH_API_HOST,
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  }),
});


export default client;