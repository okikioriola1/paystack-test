import styled from 'styled-components/macro'

export const FormWrapper = styled.div`


`

export const MainForm= styled.form`

    display: flex;
    flex-direction: column;
    
    input{
        background:none;
        border:none;
        border-bottom: 1px solid #BA68C8;
        padding: 1rem 0.7rem 1rem 0;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: rgba(23, 23, 23, 0.6);
        margin: 0 2rem;
        outline:none;
        
    }
    button{
        width: 181px;
        height: 70px;
        background: #BA68C8;
        border-radius: 10px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #F9F7F7;
        outline: none;
        border: 1px solid #BA68C8;
        margin: 2rem auto;

    }



`