import styled from "styled-components";

const css = {
  FormContainer: styled.div`
    top: 100px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 600px;
    height: auto;
    border-radius: 8px;
    min-height: 60px;
    box-shadow: 0px 0px 3px grey;
    margin: 40px auto 40px;
    padding: 20px;
    :last-child{
      margin-bottom: 0px;
    }
  `,
  Input: styled.input`
    display: block;
    position: relative;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: rgb(229,229,229);
    border-radius: 4px;
    padding-left: 14px;
    margin-bottom: 10px;
  `,
  Button: styled.span`
    display: block;
    position: relative;
    width: 220px;
    height: 44px;
    line-height: 42px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.backgroundColor};
  `
}

export default css