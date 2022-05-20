import styled from "styled-components"

export const Container = styled.header`
    width: 100%;
    height: 60px;
    padding: ${({ theme }) => theme.metrics.padding};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 1px #eee;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 1;
`

export const Title = styled.h1`
    font-size: 24px;
`

export const BackButton = styled.button`
    display: flex;
    margin-right:  ${({ theme }) => theme.metrics.padding};
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
`

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const RightContainer = styled(LeftContainer)`
    justify-content: flex-end;
`


export const ProfilePic = styled.img`
    width: 40px;
    height: 40px;
    margin-right:  ${({ theme }) => theme.metrics.padding};
    border-radius: 50px;
`