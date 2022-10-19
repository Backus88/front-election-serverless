/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createElectionPartial = /* GraphQL */ `
  mutation CreateElectionPartial(
    $input: CreateElectionPartialInput!
    $condition: ModelElectionPartialConditionInput
  ) {
    createElectionPartial(input: $input, condition: $condition) {
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
export const updateElectionPartial = /* GraphQL */ `
  mutation UpdateElectionPartial(
    $input: UpdateElectionPartialInput!
    $condition: ModelElectionPartialConditionInput
  ) {
    updateElectionPartial(input: $input, condition: $condition) {
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
export const deleteElectionPartial = /* GraphQL */ `
  mutation DeleteElectionPartial(
    $input: DeleteElectionPartialInput!
    $condition: ModelElectionPartialConditionInput
  ) {
    deleteElectionPartial(input: $input, condition: $condition) {
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
