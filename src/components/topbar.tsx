import styled from "styled-components";

const Styledtopbar = styled.div`
  background-color: #e53170;
  padding: 5px;
  display: flex;
  gap: 25px;
  align-items: center;
  width: 100vw;
  height: 70px;
  & > a {
    color: #a7a9be;
    text-decoration: none;
    font-weight: bold;
  }
`;

export default function Topbar({ children }) {
  return <Styledtopbar>{children}</Styledtopbar>;
}
