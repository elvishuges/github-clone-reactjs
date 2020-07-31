import {
    gql,
} from "@apollo/client";

const dashboard = gql`
{
  dashboard() {
    user
    projects
    notification
  }
}
`