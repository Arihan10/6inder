import React from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
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
                        height: "60vh",
                        width: '40vh',
                        justifyContent: "space-evenly",
                    }}
                >
                    <Typography component="h2" variant="h2" sx={{textAlign: "center"}}>
                        Enter all required information
                    </Typography>
                    <Box sx={{display: "flex", alignItems: "center", mb: 2}}>
                        <Typography component="p" variant="body1" sx={{textAlign: "center", ml: 1}}>
                            Sign up form
                        </Typography>
                    </Box>

                    {/* TAKE IN NAME */}
                    <TextField
                        id="name"
                        label="Full name"
                        variant="outlined"
                        sx={{width: 400}}
                    />

                    {/* TAKE IN EMAIL */}
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        sx={{width: 400}}
                    />

                    {/* TAKE IN USERNAME */}
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        sx={{width: 400}}
                    />


                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                            variant="standard"
                        />
                    </Grid>

                    {/* TAKE IN BIO */}
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input
                            type="file"
                            hidden
                        />
                    </Button>


                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="landlord" value="yes"/>}
                            label="I am a home owner looking to rent"
                            onChange={() => setRenter(!renter)}
                        />
                    </Grid>


                    <Button
                        variant="contained"
                        sx={{width: 400, height: 46, textTransform: "none", borderRadius: 2}}
                        // onClick={}
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