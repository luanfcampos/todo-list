import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done} : ContainerProps)=>(
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    flex: 1;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
        width: 90%;
    }
    .Button {
        background-color:#17181f;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:10px 10px;
        text-decoration:none;
        border-radius: 15px;
    }
    .Button:hover {
        background-color:#20212C;
    }
    .Button:active {
        position:relative;
        top:1px;
    }
    
    `
))
