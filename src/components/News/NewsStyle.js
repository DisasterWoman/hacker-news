import styled from "styled-components";

export const NewsWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const NewsTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #000;
    background-color: #fff;
    text-decoration: none;
  }
`;

export const NewsMeta = styled.div`
  font-style: italic;

  > span:first-child {
    margin-right: 10px;
  }

  > span:not(:first-child):before {
    content: '•'
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const NewsMetaElement = styled.span`
  font-weight: bold;
  color: ${(props) => props.color};
`;
