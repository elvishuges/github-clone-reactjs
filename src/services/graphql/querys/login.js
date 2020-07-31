
import {
    gql,
} from "@apollo/client";


const login = gql`
{
  rates(currency: "USD") {
    currency
    rate
  }
}
`