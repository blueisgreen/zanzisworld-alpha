/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLessonPlan = /* GraphQL */ `
  mutation CreateLessonPlan(
    $input: CreateLessonPlanInput!
    $condition: ModelLessonPlanConditionInput
  ) {
    createLessonPlan(input: $input, condition: $condition) {
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
export const updateLessonPlan = /* GraphQL */ `
  mutation UpdateLessonPlan(
    $input: UpdateLessonPlanInput!
    $condition: ModelLessonPlanConditionInput
  ) {
    updateLessonPlan(input: $input, condition: $condition) {
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
export const deleteLessonPlan = /* GraphQL */ `
  mutation DeleteLessonPlan(
    $input: DeleteLessonPlanInput!
    $condition: ModelLessonPlanConditionInput
  ) {
    deleteLessonPlan(input: $input, condition: $condition) {
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
