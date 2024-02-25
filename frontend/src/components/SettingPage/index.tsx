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


export default function SettingPage() {
    const active = true;

    return (
        <>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </head>

            <Box id={'main'} className={"flex flex-row w-full h-screen"}>
                <Box id={"leftSidebar"} className={'w-1/5 border-amber-100'}
                     sx={{padding: '3em', color: 'black'}}>

                    {/*<Button className={"animate__animated animate__bounce"}*/}
                    <Button className={""}

                            variant="contained"
                            sx={{width: '100%', height: 46, textTransform: "none", borderRadius: 2, mb: '2em'}}
                        // onClick={}
                            disabled={false}
                    >
                        Start matching
                    </Button>

                    <Button
                        variant="contained"
                        sx={{width: '100%', height: 46, textTransform: "none", borderRadius: 2}}
                        // onClick={}
                        disabled={false}
                    >
                        List property
                    </Button>


                </Box>
                <Divider orientation="vertical"/>

                <Box id={"rightPage"} className={'w-4/5 p-28 pt-2'}>
                    <Box className={"flex flex-row flex-wrap p-8"} sx={{justifyContent: 'space-between'}}>

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
                            </Card>
                        </Box>


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
                            </Card>
                        </Box>
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
                            </Card>
                        </Box>
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
                            </Card>
                        </Box>


                    </Box>


                </Box>

            </Box>
        </>
    );
}