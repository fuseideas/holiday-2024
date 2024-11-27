// src/queries/holiday.js
import { gql } from "@apollo/client";



export const GET_ALL_HOLIDAYS = gql`
  query GetAllHolidays {
    holidays(first: 100, where:{ orderby: { field: DATE, order: ASC } }) {
      nodes {
        id
        title
        slug
        date
        holidayAcf{
          enabled
        }
      }
    }
  }
`;



export const GET_HOLIDAY_BY_ID = gql`
  query GetHoliday($id: ID!) {
    holiday(id: $id) {
      slug
      title
      uri
      content
      holidayAcf {
        video
        windowOpenCopy
        enabled
        image {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
