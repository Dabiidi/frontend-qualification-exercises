import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const createApolloClient = () => {
 return new ApolloClient({
  uri: "https://report.development.opexa.io/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjakp0ZFdQaGhkUHlYU25SdSIsInJvbGUiOiJBRE1JTiIsImp0aSI6ImE4MjFlYjM1Y2NmZjI0NjAwNjI0ZGFjYSIsImlwQWRkcmVzcyI6IjE0My40NC4xOTIuMTA3IiwibG9jYXRpb24iOiJDYWdheWFuIGRlIE9ybywgUGhpbGlwcGluZXMiLCJwbGF0Zm9ybSI6IjEydXd1UkNjWXAxY1dpWHpQWSIsImlhcCI6IjIwMjQtMDQtMjRUMDA6MTc6MjAuMDI4KzAwOjAwIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTcxMzkxNzg3MCwiZXhwIjoxNzc2OTg5ODcwfQ.UfB36fjFrYvg8TV9VYEtNfG6CzRlz9pnjKnqfru-1Hc",
  },
 });
}

export const GET_MEMBERS = gql`
  query ($first: Int, $after: Cursor, $filter: MemberFilterInput) {
    members(first: $first, after: $after, filter: $filter) {
      edges {
        node {
          id
          ... on Member {
            name
            verificationStatus
            wallet {
              balance
            }
            emailAddress
            mobileNumber
            domain
            dateTimeCreated
            dateTimeLastActive
            status
        
          }
        }
      }
      
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;


export const getByName = gql `query MembersByName($search: String!) {
  membersByName(search: $search, first: 20) {
    id
    ... on Member {
      name
      verificationStatus
      wallet {
        balance
      }
      emailAddress
      mobileNumber
      domain
      dateTimeCreated
      dateTimeLastActive
      status
  
    }
  }
}`

export const getByEmail = gql ` query MembersByEmailAddress($search: String!) {
  membersByEmailAddress(search: $search, first: 20) {
    id
    name
    emailAddress
    mobileNumber
    domain
  }
}`

export const getByMobileNumber = gql `query MembersByMobileNumber($search: String!) {
  membersByMobileNumber(search: $search, first: 20) {
    id
    name
    mobileNumber
    domain
  }
}`

export const getByDomain = gql `query MembersByDomain($search: String!) {
  membersByDomain(search: $search, first: 20) {
    id
    name
    mobileNumber
    domain
  }
}
`
