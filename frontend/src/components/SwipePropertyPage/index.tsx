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


export default function SwipePropertyPage() {
    const [swipe, setSwipe] = useState(0)

    // const [leftSwipe, setLeftSwipe] = useState(false)
    // const [rightSwipe, setRightSwipe] = useState(false)
    // console.log(leftSwipe);
    // useEffect(() => {
    //
    //     // load data
    //     console.log("left swipe");
    //     // setLeftSwipe(false);
    // }, [leftSwipe]);
    //
    // useEffect(() => {
    //
    //     // load data
    //     console.log("right swipe");
    //     // setRightSwipe(false);
    // }, [rightSwipe]);

    useEffect(() => {
        //     -1 = left
        //     0 = no swipe
        //     1 = right swipe

    }, [swipe]);


    // @ts-ignore
    return (
        <>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </head>

            <Box className={'flex flex-row h-screen w-full'}>
                <Box className={'w-1/3 flex h-screen'} sx={{border: 2}}>
                    <Box className={'m-auto'}>
                        <Button
                            variant="contained"
                            sx={{width: '10em', height: '10em', textTransform: "none", borderRadius: 45}}
                            onClick={() => setSwipe(-1)}
                            disabled={false}
                        >
                            Login
                            {/*{<CircularProgress size={15} sx={{ml: 1, color: "#000", opacity: 0.5}}/>}*/}
                        </Button>
                    </Box>
                </Box>

                <Box className={'w-1/3 flex'} sx={{border: 2}}>
                    <Box className={'m-auto'}>
                        <Box className={"mb-6"}>
                            {swipe === 0 ?
                                <Card sx={{width: "100%"}}>
                                    <CardMedia
                                        component="img"
                                        alt="Yosemite National Park"
                                        image="yosemite.jpeg"
                                    />
                                    <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>
                                        <Stack direction="column" spacing={0.5} useFlexGap>
                                            <Typography>Yosemite National Park, California, USA</Typography>
                                        </Stack>

                                        <Box>
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
                                </Card> :
                                <Card
                                    className={swipe === 1 ? "animate__animated animate__fadeOutBottomRight" : "animate__animated animate__fadeOutBottomLeft"}
                                    sx={{width: "100%"}}>
                                    <CardMedia
                                        component="img"
                                        alt="Yosemite National Park"
                                        image="yosemite.jpeg"
                                    />
                                    <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>
                                        <Stack direction="column" spacing={0.5} useFlexGap>
                                            <Typography>Yosemite National Park, California, USA</Typography>
                                        </Stack>

                                        <Box>
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
                                </Card>}
                        </Box>
                    </Box>
                </Box>

                <Box className={'w-1/3 flex h-screen'} sx={{border: 2}}>
                    <Box className={'m-auto'}>
                        <Button
                            variant="contained"
                            sx={{width: '10em', height: '10em', textTransform: "none", borderRadius: 45}}
                            onClick={() => setSwipe(1)}
                            disabled={false}
                        >
                            Login
                            {/*{<CircularProgress size={15} sx={{ml: 1, color: "#000", opacity: 0.5}}/>}*/}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}