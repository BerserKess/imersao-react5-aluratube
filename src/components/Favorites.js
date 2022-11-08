import styled from "styled-components";

export const StyledFavorites = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .favorite-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
        align-items: center;
    }
    .favorite-content{
        display: flex;
        margin: 0 10px;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border-color: 2px solid #00008B;
    }
`