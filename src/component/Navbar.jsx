import { AppBar , Box , Toolbar , Typography , Button } from "@mui/material"
import { NavLink } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar()
{
    return (
        <>
            <Box sx = {{flexgrow:1}}>
                <AppBar position = "static" color = "secondary" style={{ background: 'white',paddingTop:'10px',paddingBottom:'10px' }}>
                    <Toolbar>
                        <Typography variant = 'h5' component = "div" sx = {{flexGrow:1 , color : 'black'}}>
                            Cyber 
                            <br/>Platform
                        </Typography>
                        <div className="buttons" style={{display:'flex',
                        justifyContent:'space-around' , width:'60vw'}}>
                        <Button  component = {NavLink} to = "/" variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color : 'black',borderRadius:'20px'}}>Home</Button>
                        <Button component = {NavLink} to = "/categories"  variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color: 'black',borderRadius:'20px',padding:'3px'}}>Categories</Button>
                        <Button component = {NavLink} to = "/courses"  variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color : 'black',borderRadius:'20px'}}>Courses</Button>
                        <Button component = {NavLink} to = "/forum"  variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color: 'black',borderRadius:'20px'}}>Forum</Button>
                        <Button component = {NavLink} to = "/blog"  variant = "outlined"  style={({ isActive }) => { return { borderColor: isActive ? '#00B5E2' : 'white' } }} sx = {{color : 'black',borderRadius:'20px'}}>Blog</Button>
                        <Button component = {NavLink} to = "/login"  sx = {{color : 'black',borderRadius:'20px'}}><Avatar src="/broken-image.jpg" /></Button>
                        

                                     
         </div>
                        

                    </Toolbar>
                    
                </AppBar>
            </Box>
        </>
    )
}