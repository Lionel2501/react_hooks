import React from 'react'

const EditForm = () => {
    return (
        <div>
            <h1>Edit form</h1>
            <form>
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

export default EditForm
