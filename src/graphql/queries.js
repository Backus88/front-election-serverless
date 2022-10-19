/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getElectionPartial = /* GraphQL */ `
  query GetElectionPartial($id: ID!) {
    getElectionPartial(id: $id) {
      id
      uf
      updateTime
      fetchTime
      votesCount
      votesProportion
      bolsonaro
      lula
      createdAt
      updatedAt
    }
  }
`;
export const listElectionPartials = /* GraphQL */ `
  query ListElectionPartials(
    $filter: ModelElectionPartialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listElectionPartials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        uf
        updateTime
        fetchTime
        votesCount
        votesProportion
        bolsonaro
        lula
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
