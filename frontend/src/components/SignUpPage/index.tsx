import React from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import userService from "../../services/UserService";
import {
    Stack,
    Paper,
    Link,
    Card,
    CardMedia,
    Switch,
    Chip,
    Rating,
    Grid,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Box,
    Button,
    CircularProgress,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";


export default function SignUpPage() {

    const [renter, setRenter] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        first: "",
        last: "",
        bio: "",
        role: 0,
        city: "",
        country: ""
    });

    const handleChange = (event) => {
        const {id, value} = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    async function signup() {
        console.log(formData);

        let response = await userService.SignUp(formData);
        sessionStorage.setItem('email', formData.email);
    }

    return (
        <>
            <Box
                component="main"
                sx={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "80vh",
                        width: '30vw',
                        justifyContent: "space-evenly",
                    }}
                >
                    <Typography component="h2" variant="h2" sx={{textAlign: "center"}}>
                        Sign up
                    </Typography>
                    <Box sx={{display: "flex", alignItems: "center", mb: 2}}>
                        <Typography component="p" variant="body1" sx={{textAlign: "center", ml: 1}}>
                            Fill out all fields
                        </Typography>
                    </Box>

                    {/*USERNAME*/}
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        sx={{width: "100%"}}
                        value={formData.username}
                        onChange={handleChange}
                    />

                    {/* TAKE IN EMAIL */}
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        sx={{width: "100%"}}
                        value={formData.email}
                        onChange={handleChange}
                    />


                    {/* TAKE IN NAME */}
                    <TextField
                        id="first"
                        label="First name"
                        variant="outlined"
                        sx={{width: "100%"}}
                        value={formData.first}
                        onChange={handleChange}
                    />

                    <TextField
                        id="last"
                        label="Last name"
                        variant="outlined"
                        sx={{width: "100%"}}
                        value={formData.last}
                        onChange={handleChange}
                    />


                    {/* BIO */}
                    <TextField
                        id="bio"
                        label="Bio"
                        variant="outlined"
                        sx={{width: "100%"}}
                        value={formData.bio}
                        onChange={handleChange}

                    />


                    <Grid item xs={12} sm={6} className={"w-11/12"}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="standard"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} className={"w-11/12"}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                            variant="standard"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/*/!* TAKE IN BIO *!/*/}
                    {/*<Button*/}
                    {/*    variant="contained"*/}
                    {/*    component="label"*/}
                    {/*>*/}
                    {/*    Upload File*/}
                    {/*    <input*/}
                    {/*        type="file"*/}
                    {/*        hidden*/}
                    {/*    />*/}
                    {/*</Button>*/}


                    <Button
                        variant="contained"
                        sx={{width: "100%", height: 46, textTransform: "none", borderRadius: 2}}
                        onClick={() => signup()}
                        disabled={false}
                    >
                        Login
                        {/*{<CircularProgress size={15} sx={{ml: 1, color: "#000", opacity: 0.5}}/>}*/}
                    </Button>
                </Box>
            </Box>
        </>
    );
}