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


export default function AddressForm() {

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
                        width: '40vw',
                        justifyContent: "space-evenly",
                    }}
                >
                    <React.Fragment>
                        <Typography variant="h6" gutterBottom>
                            Shipping address
                        </Typography>

                        <FormGroup>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First name"
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last name"
                                        fullWidth
                                        autoComplete="family-name"
                                        variant="standard"
                                    />
                                </Grid>


                                {/*Controller for renter/landlord*/}

                                {renter ?
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="address1"
                                            name="address1"
                                            label="Address line 1"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            variant="standard"
                                        />
                                    </Grid>
                                    : <Grid item xs={12}>
                                        <TextField
                                            disabled
                                            required
                                            id="address1"
                                            name="address1"
                                            label="Address line 1"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            variant="standard"
                                        />
                                    </Grid>}


                                {/*<Grid item xs={12}>*/}
                                {/*    <TextField*/}
                                {/*        id="address2"*/}
                                {/*        name="address2"*/}
                                {/*        label="Address line 2"*/}
                                {/*        fullWidth*/}
                                {/*        autoComplete="shipping address-line2"*/}
                                {/*        variant="standard"*/}
                                {/*    />*/}
                                {/*</Grid>*/}
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
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip / Postal code"
                                        fullWidth
                                        autoComplete="shipping postal-code"
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
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                                        label="Use this address for payment details"
                                    />
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </React.Fragment>
                </Box>
            </Box>
        </>

    );
}