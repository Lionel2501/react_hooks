import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUsers, postUser, deleteUser, updateUser } from '../actions/index'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Addform from '../components/AddForm';
import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    const [modalEdit, setModalEdit] = useState(false);
    const [ state, setState] = useState({
        name:'',
        email: ''
    });
    const [id, setId] = useState('');

    const { name, email } = state;
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    const handleInput = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value});
    }

    const handleDeleteUser = (id) => {
        if(window.confirm('Are you sur to delete this user ?')){
            dispatch(deleteUser(id));
            navigate('/mockapi');
        }
    } 

    const handleEditUser = (e) => {
        e.preventDefault();
        console.log('handle edit', id)
        if(!name || !email){
            setError('You must complete all fields');
        } else {
            dispatch(updateUser(state, id));
            setModalEdit(!modalEdit);
            setState({name:'', email:''})
        }
    }

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const toggleModalEdit = (id) =>{
        setModalEdit(!modalEdit);
        setId(id);
        let user = users.find(element => element.id == id)
        setState({ ...state, name: user.name, email: user.email});
    } 

    return (
        <div className="App">
        <h1>Mock Api</h1>
        <Link to="/addform">Insert</Link>
            {
                modalEdit &&
                <form noValidate onSubmit={handleEditUser}>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={handleInput} />
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={handleInput} />
                    <button type='submit'>Edit user</button>
                </form>
            }
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>index</TableCell>
                        <TableCell align="right">Ids</TableCell>
                        <TableCell align="right">Names</TableCell>
                        <TableCell align="right">Emails</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map((user, i) => (
                        <TableRow
                        key={user.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="right">{i}</TableCell>
                        <TableCell align="right">{user.id}</TableCell>
                        <TableCell align="right">{user.name}</TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                        <TableCell align="right" >
                        <Button variant="outlined" onClick={() => toggleModalEdit(user.id)}>Editar</Button></TableCell>
                        <TableCell align="right">
                        <Button variant="outlined" onClick={() => handleDeleteUser(user.id)}>Borrar</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Routes>
                <Route path="mockapi/addform" element={ <Addform/> } />
            </Routes>
        </div>
    );
}

export default App;