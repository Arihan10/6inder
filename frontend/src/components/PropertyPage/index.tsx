import * as React from 'react';
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
import userService from "../../services/UserService";
import RentalService from "../../services/RentalService";
import UserService from "../../services/UserService"


export default function PropertyPage() {

    const [email, setEmail] = useState('')

    useEffect(() => {
        const storedEmail = sessionStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const [formData, setFormData] = useState({
        owner: "",
        address: "",
        price: 0,
        lookFor: "",
        images: [],
        city: "",
        country: "",
        description: "",
    });
    const handleChange = (event) => {
        const {id, value} = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    async function createProperty() {
        console.log(formData);

        try {
            let userResponse = await userService.GetUserByEmail(email);
            console.log(userResponse);
            if (userResponse && userResponse.data && userResponse.data._id) {
                formData.owner = userResponse.data._id;
            } else {
                console.error('User response is undefined or missing _id');
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }

        let response = await RentalService.PostRental(formData);
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
                        height: "60vh",
                        width: '40vw',
                        justifyContent: "space-evenly",
                    }}
                >
                    <React.Fragment>
                        <Typography variant="h6" gutterBottom>
                            Creating a property
                        </Typography>

                        <FormGroup>
                            <Grid container spacing={3}>
                                {/*<Grid item xs={12} sm={6}>*/}
                                {/*    <TextField*/}
                                {/*        required*/}
                                {/*        id="firstName"*/}
                                {/*        name="firstName"*/}
                                {/*        label="First name"*/}
                                {/*        fullWidth*/}
                                {/*        autoComplete="given-name"*/}
                                {/*        variant="standard"*/}
                                {/*    />*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={12} sm={6}>*/}
                                {/*    <TextField*/}
                                {/*        required*/}
                                {/*        id="lastName"*/}
                                {/*        name="lastName"*/}
                                {/*        label="Last name"*/}
                                {/*        fullWidth*/}
                                {/*        autoComplete="family-name"*/}
                                {/*        variant="standard"*/}
                                {/*    />*/}
                                {/*</Grid>*/}


                                {/*Controller for renter/landlord*/}

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="shipping address-line1"
                                        variant="standard"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="price"
                                        name="price"
                                        label="Monthly rent"
                                        fullWidth
                                        autoComplete="shipping address-line1"
                                        variant="standard"
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                {/*LOOKING FOR */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="lookFor"
                                        name="lookFor"
                                        label="Look for.."
                                        fullWidth
                                        autoComplete="shipping address-line1"
                                        variant="standard"
                                        value={formData.lookFor}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                {/*IMAGES GOES HERE*/}

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        variant="standard"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                {/*<Grid item xs={12} sm={6}>*/}
                                {/*    <TextField*/}
                                {/*        id="state"*/}
                                {/*        name="state"*/}
                                {/*        label="State/Province/Region"*/}
                                {/*        fullWidth*/}
                                {/*        variant="standard"*/}
                                {/*    />*/}
                                {/*</Grid>*/}

                                {/*<Grid item xs={12} sm={6}>*/}
                                {/*    <TextField*/}
                                {/*        required*/}
                                {/*        id="zip"*/}
                                {/*        name="zip"*/}
                                {/*        label="Zip / Postal code"*/}
                                {/*        fullWidth*/}
                                {/*        autoComplete="shipping postal-code"*/}
                                {/*        variant="standard"*/}
                                {/*    />*/}
                                {/*</Grid>*/}
                                <Grid item xs={12} sm={6}>
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

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="description"
                                        name="description"
                                        label="Description"
                                        fullWidth
                                        variant="standard"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                {/*<Grid item xs={12}>*/}
                                {/*    <FormControlLabel*/}
                                {/*        control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}*/}
                                {/*        label="Use this address for payment details"*/}
                                {/*    />*/}
                                {/*</Grid>*/}
                            </Grid>
                            <Button
                                variant="contained"
                                sx={{width: "100%", height: 46, textTransform: "none", borderRadius: 2}}
                                onClick={() => createProperty()}
                                disabled={false}
                            >
                                List property
                                {/*{<CircularProgress size={15} sx={{ml: 1, color: "#000", opacity: 0.5}}/>}*/}
                            </Button>
                        </FormGroup>
                    </React.Fragment>
                </Box>
            </Box>
        </>

    );
}