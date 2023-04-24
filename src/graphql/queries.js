/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLessonPlan = /* GraphQL */ `
  query GetLessonPlan($id: ID!) {
    getLessonPlan(id: $id) {
      id
      title
      subtitle
      synopsis
      objective
      status
      content
      cover
      publishedAt
      archivedAt
      createdAt
      updatedAt
    }
  }
`;
export const listLessonPlans = /* GraphQL */ `
  query ListLessonPlans(
    $filter: ModelLessonPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        synopsis
        objective
        status
        content
        cover
        publishedAt
        archivedAt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
