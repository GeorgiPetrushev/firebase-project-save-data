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
    .main{
        font-size: 2rem;
        .user{
            color: white;
            padding-bottom: 1rem;
            margin-bottom: 3rem;
            border-bottom: 1px black solid;
            width: 700px;
            margin: auto;
        }
        .main-buttons{
           button{
            margin-left:1.5rem;
            height: 2rem;
            border-radius: 0.3rem;
            transition: 400ms;
            border: none;
            &:hover{
                color: white;
                background-color: black;
            }
           }
        }
    }
`;


export default AppStyle;