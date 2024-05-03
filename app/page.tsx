"use client"
import { ApolloProvider } from "@apollo/client";
import TableComponent from "./components/Tables";

import { createApolloClient } from "./lib/apolloClient";

export default function Home() {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <TableComponent />
    </ApolloProvider>
  );
}

