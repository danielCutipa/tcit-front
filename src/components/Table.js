import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #dee2e6;
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.05);
  th,
  td {
    padding: 0.75rem;
    text-align: left;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
  th {
    font-weight: 700;
  }
  thead {
    th {
      color: #495057;
      background-color: #e9ecef;
      border-color: #dee2e6;
    }
  }
  tbody {
    tr {
      &:nth-of-type(odd) {
        td,
        th {
          background-color: #f6f8fa;
        }
      }
    }
  }
`
