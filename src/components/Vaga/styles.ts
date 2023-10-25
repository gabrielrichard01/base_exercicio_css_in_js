import styled from 'styled-components'

export const VagaList = styled.li`
  border: 1px solid #a7727d;
  background-color: #f9f5e7;
  color: #a7727d;
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: #a7727d;
    color: #f9f5e7;
  }
`

export const VagaTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: #f9f5e7);
  background-color: #a7727d;
  color: #f9f5e7;
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  :hover {
    border-color: #a7727d;
    background-color: #f9f5e7;
    color: #a7727d;
  }

  @media (max-width: 768px) {
    display: block;
  }
`
