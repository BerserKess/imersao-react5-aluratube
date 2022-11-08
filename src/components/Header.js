import styled from "styled-components";

export const StyledHeader = styled.header`
    margin-top: 50px;
    .banner {
    width: 100%;
    height: 200px;
    background-image: url('./banner3.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #8B0000;
  }
  .user-info {
    margin-top: -35px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .user-info h2{
    margin-top: 20px;
  }
`;
