
import {
    gql,
} from "@apollo/client";


const LOGIN = gql`
{
  rates(currency: "USD") {
    currency
    rate
  }
}
`

export {
  LOGIN,
}