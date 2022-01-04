import React, {useState} from 'react';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux'
import { postUser } from '../actions/index';
import { useNavigate } from 'react-router-dom';


const AddForm = () => {
    const navigate = useNavigate();

    const [ state, setState] = useState({
        name:'',
        email: ''
    });

    const { name, email } = state;
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const handleInput = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email){
            setError('please enter all fields');
        } else {
            dispatch(postUser(state));
            navigate('/mockapi');
        }    
    }

    return (
        <div>
            <Button variant="outlined" onClick={() => {navigate('/mockapi')}}>Volver</Button>
            <h1>Add user</h1>
            <form noValidate onSubmit={handleSubmit}>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input type="text" name="name" onChange={handleInput}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input type="email" name="email" onChange={handleInput} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <Button type='submit' variant="outlined">Add</Button>
            </form>
        </div>
    )
}

export default AddForm
