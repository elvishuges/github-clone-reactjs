import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function exchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  const { user,token } = data;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if(token){
    return token // retornando apenas token para test
  }
}

export default exchangeRates