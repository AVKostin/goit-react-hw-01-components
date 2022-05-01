import styled from '@emotion/styled';

export const OnlineLabel = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${p => (p.isOnline ? '#3fe84f' : '#e01a16')};
    border-radius: 50%;
    margin-right: 10px;
`;

export default OnlineLabel;