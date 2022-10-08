import styled from "styled-components";

const AppStyle = styled.div`
    background-color: #d85c27;
    min-height: 100vh;
    text-align: center;
    .inputs{
        min-height: 8rem;
        padding: 1rem 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        input{
            background-color: #fff;
            border: black 1px solid;
            padding-left: 6px;
            height: 2rem;
            border-radius:0.2rem;
        }
        button{
            height: 2rem;
        }
        
    }
`;


export default AppStyle;