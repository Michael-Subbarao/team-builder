import React, {useState} from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label

const Form = (props) =>{

    const change = event =>{
        const { name, value } = event.target;
        props.change(name,value)
    }

    const submit = event => {
        event.preventDefault();
    }
    return(
        <form>

        </form>
    )

}