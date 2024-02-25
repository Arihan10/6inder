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
    Typography,
    Divider
} from "@mui/material";
import userService from "../../services/UserService";
import RentalService from "../../services/RentalService";


export default function SettingPage() {

    const [email, setEmail] = useState('')

    useEffect(() => {
        const storedEmail = sessionStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);
    let rentals

    async function getListing() {
        try {
            let userResponse = await userService.GetUserByEmail(email);
            // DO NOT REMOVE THIS LINE OR SYSTEM IS FUCKED I HAVE NO IDEA WHY BUT YEAH
            console.log(userResponse);
            if (userResponse && userResponse.data && userResponse.data._id) {
                let response = await userService.GetUserById(userResponse.data._id);
                if (response && response && response.data.rentals) {
                    rentals = response.data.rentals;
                    console.log("This is the rentals")
                    console.log(rentals)
                }
            } else {
                console.error('User response is undefined or missing _id');
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }

        // let response = await RentalService.PostRental(formData);
    }

    useEffect(() => {
        getListing()
    }, []);

    return (
        <>
            <Box id={'main'} className={"flex flex-row w-full h-screen"}>
                <Box id={"leftSidebar"} className={'w-1/5 border-amber-100'}
                     sx={{padding: '3em', color: 'black'}}>

                    {/*<Button className={"animate__animated animate__bounce"}*/}
                    <a href={'/swipeproperty'}>
                        <Button className={""}

                                variant="contained"
                                sx={{width: '100%', height: 46, textTransform: "none", borderRadius: 2, mb: '2em'}}
                                disabled={false}
                        >
                            Start matching
                        </Button>
                    </a>


                    <a href={'/property'}>
                        <Button
                            variant="contained"
                            sx={{width: '100%', height: 46, textTransform: "none", borderRadius: 2}}
                            disabled={false}
                        >
                            List property
                        </Button>
                    </a>
                </Box>

                <Divider orientation="vertical"/>

                <Box id={"rightPage"} className={'w-4/5 p-28 pt-2'}>
                    <Box className={"flex flex-row flex-wrap p-8"} sx={{justifyContent: 'space-between'}}>


                        {/*RENTALS START HERE*/}
                        <Box className={"mb-6"}>
                            <Card sx={{width: "25em"}}>
                                <CardMedia
                                    component="img"
                                    alt="Yosemite National Park"
                                    image="yosemite.jpeg"
                                />
                                <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>
                                    <Stack direction="column" spacing={0.5} useFlexGap>
                                        <Typography>Yosemite National Park, California, USA</Typography>
                                        <Stack direction="row" spacing={1} useFlexGap>
                                            {/*<Chip*/}
                                            {/*    size="small"*/}
                                            {/*    label={active ? 'Active' : 'Inactive'}*/}
                                            {/*    color={active ? 'success' : 'default'}*/}
                                            {/*/>*/}
                                        </Stack>
                                    </Stack>

                                    <Box>
                                        <a href={'/swipeuser'}>

                                            <Button
                                                variant="contained"
                                                sx={{
                                                    width: '100%',
                                                    height: 40,
                                                    textTransform: "none",
                                                    borderRadius: 2,
                                                    mb: 1
                                                }}
                                                // onClick={}
                                                disabled={false}
                                            >
                                                Swipe property
                                            </Button>
                                        </a>

                                        <Button
                                            variant="contained"
                                            sx={{width: '100%', height: 40, textTransform: "none", borderRadius: 2}}
                                            // onClick={}
                                            disabled={false}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </Stack>
                            </Card>
                        </Box>
                        {/*RENTALS END HERE*/}


                    </Box>


                </Box>

            </Box>
        </>
    );
}