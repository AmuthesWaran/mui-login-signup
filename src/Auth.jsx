import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'



const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    console.log(isSignUp);

    return (
    <div>
        <form>
            <Box 
            display = "flex" 
            flexDirection={"column"} 
            maxWidth={400} 
            alignItems={'center'} 
            justifyContent={'center'} 
            margin='auto'
            mt={5}
            p={3}
            borderRadius={5}
            boxShadow = {'5px 5px 10px #ccc'}

            sx={{":hover":
            {
                boxShadow: '5px 5px 20px #ccc'
            }
        }}


            >
                <Typography variant='h3' padding={3} textAlign="center" >
                {isSignUp ? "Sign Up Page" : "Login Page" }
                        
                </Typography>

                {isSignUp && (
                    <TextField margin="normal" varient='outlined' placeholder='First Name' type={"text"}/> )}
                {isSignUp && (
                    <TextField margin="normal" varient='outlined' placeholder='Last Name' type={"text"}/> )}    

                {isSignUp && (
                    <TextField margin="normal" varient='outlined' placeholder='UserName' type={"text"}/> )}
                
                <TextField margin="normal" varient='outlined' placeholder='Email' type={"email"} />
                
                <TextField margin="normal" varient='outlined' placeholder='Password' type={"password"} />

                {isSignUp && (
                    <TextField margin="normal" varient='outlined' placeholder='Confirm Password' type={"password"}/> )}

                <Button sx={{marginTop:3, borderRadius: 3 }} variant='contained' color="warning" >
                    {isSignUp ? "Sign Up" : "Login" }
                    
                    </Button>
                <Typography sx={{marginTop:3}} variant='h6' textAlign="center" >
                        
                        {isSignUp ? "Already a User? Please Log in" : "New User? Sign Up" }
                        
                        
                </Typography>
                <Button onClick={()=>setIsSignUp(!isSignUp)} >
                {isSignUp ? "Login" : "Sign Up" }
                </Button>
            </Box>

        </form>


    </div>
  )
}

export default Auth