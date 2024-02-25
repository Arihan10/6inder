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
import userService from '../../services/UserService';
import rentalService from '../../services/RentalService';

export default function SwipePropertyPage() {
    const [swipe, setSwipe] = useState(0)

    const [email, setEmail] = useState('')
    const [messages, setMessages] = useState<any>([])

    const [curental, setCurental] = useState<any>({})


    useEffect(() => {
        const storedEmail = sessionStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);


    useEffect(() => {
        loadData();
    }, []); // Pass an empty array to only call the function once on mount.

    async function loadData() {
        console.log("fuck this"); 
        
        let userData = await userService.GetUserByEmail("sofwarearihan@gmail.com")

        console.log(userData); 

        if (userData && userData.data && userData.data._id) {
            let userIdData = await userService.GetUserById(userData.data._id); 

            if (userIdData && userIdData.data) {
                let sysMsg = `
                You are a system that matches a renter to potential renter properties, similar to Tinder.
    
                The following is some information about the renter:
                Bio: "${userData?.data.bio}"
                City: "${userData?.data.city}"
                Country: "${userData?.data.country}"
    
                The following is a list of rental properties they have REJECTED so far:
                `
    
                var i = 0
                for (const rental of userIdData?.data.rejected) {
                    i++
                    sysMsg += `
                    ${i}. 
                    City: "${rental.city}"
                    Country: "${rental.city}"
                    Price: "${rental.price}"
                    Looking For: "${rental.lookFor}"
                    Description: "${rental.description}"
                    `
                }
    
                sysMsg += `
    
                The following is a list of rental properties they have ACCEPTED so far:
                `
    
                i = 0
                for (const rental of userIdData?.data.accepted) {
                    i++
                    sysMsg += `
                    ${i}. 
                    City: "${rental.city}"
                    Country: "${rental.city}"
                    Price: "${rental.price}"
                    Looking For: "${rental.lookFor}"
                    Description: "${rental.description}"
                    `
                }
    
                sysMsg += `
                The following is a list of AVAILABLE rental properties:
                `
                
                let allRentals = await rentalService.GetRentals()

                if (allRentals && allRentals.data && allRentals.data.rentals) {
                    for (const rental of allRentals?.data.rentals) {
                        i++
                        sysMsg += `
                        ${i}. 
                        City: "${rental.city}"
                        Country: "${rental.city}"
                        Price: "${rental.price}"
                        Looking For: "${rental.lookFor}"
                        Description: "${rental.description}"
                        `
                    }
        
                    sysMsg += `
                    You will repeatedly suggest ONE rental property to be shown to the renter, by picking its appropriate index.
        
                    The renter will then indicate a yes/no as to whether they dislike the suggested property, and re-iterate its information.
        
                    You will then pick a new rental property for them.
                    `
        
                    let msgs = [{ role: "system", content: sysMsg }]

                    console.log(messages); 
        
                    let firstResponse = await userService.InitLLM(messages)

                    if (firstResponse && firstResponse.data) {
                        console.log(firstResponse); 
                        
                        msgs.push({ role: "assistant", content: firstResponse.data.content })

                        setCurental( rentalService.GetRentalById(allRentals[firstResponse.data.content]._id) );

                        setMessages(msgs)
                    }
                }
            }
        }
    }

    useEffect(() => {
        //     -1 = left
        //     0 = no swipe
        //     1 = right swipe

        if (swipe == -1) {
            let msg = messages; 
            msg.push({ role: "user", message: "rejected" })

            setMessages(msg);

            (async () => {
                let firstResponse = await userService.InitLLM(messages)

            if (firstResponse && firstResponse.data) {
                console.log(firstResponse); 
                
                msg.push({ role: "assistant", content: firstResponse.data.content })

                setMessages(msg)
            } })();
        } else if (swipe == 1) {
            let msg = messages; 
            msg.push({ role: "user", message: "rejected" })

            setMessages(msg);

            (async () => {
                let firstResponse = await userService.InitLLM(messages)

            if (firstResponse && firstResponse.data) {
                console.log(firstResponse); 
                
                msg.push({ role: "assistant", content: firstResponse.data.content })

                setMessages(msg)
            } })();
        }

    }, [swipe]);


    // @ts-ignore
    return (
        <>

            <Box className={'flex flex-row h-screen w-full'}>
                <Box className={'w-1/3 flex h-screen'} sx={{}}>
                    <Box className={'m-auto'}>
                        <Button
                            variant="contained"
                            sx={{width: '10em', height: '10em', textTransform: "none", borderRadius: 45}}
                            onClick={() => setSwipe(-1)}
                            disabled={false}
                        >
                            Swipe Left
                            {/*{<CircularProgress size={15} sx={{ml: 1, color: "#000", opacity: 0.5}}/>}*/}
                        </Button>
                    </Box>
                </Box>

                <Box className={'w-1/3 flex'} sx={{}}>
                    <Box className={'m-auto rounded-lg'}>
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
                                            <Typography>{}</Typography>
                                            <Typography>$100,000</Typography>

                                        </Stack>

                                        <Box>
                                            {/*<Button*/}
                                            {/*    variant="contained"*/}
                                            {/*    sx={{*/}
                                            {/*        width: '100%',*/}
                                            {/*        height: 40,*/}
                                            {/*        textTransform: "none",*/}
                                            {/*        borderRadius: 2,*/}
                                            {/*        mb: 1*/}
                                            {/*    }}*/}
                                            {/*    // onClick={}*/}
                                            {/*    disabled={false}*/}
                                            {/*>*/}
                                            {/*    Swipe property*/}
                                            {/*</Button>*/}

                                        </Box>

                                    </Stack>
                                    <Stack direction="row" alignItems="center" spacing={3} p={2} useFlexGap>
                                        <Typography>
                                            description goes here laskdjf;alskdjfasldkjfal;sdkjfa;ls asldkfja;slkdjfas
                                            df asdl; fjkasd fasd fas df asdf asd f r egh wert gwe rftg werg wd sfg sdf
                                            gs dfg sdf gs dfg sd fg er gsdfgsdf gsd fg sdfgsd fgsd fgsd fgsdfg sdfg
                                        </Typography>

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
                                            <Typography>{curental.address}</Typography>
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

                <Box className={'w-1/3 flex h-screen'} sx={{}}>
                    <Box className={'m-auto'}>
                        <Button
                            variant="contained"
                            sx={{width: '10em', height: '10em', textTransform: "none", borderRadius: 45}}
                            onClick={() => setSwipe(1)}
                            disabled={false}
                        >
                            Swipe Right
                            {/*{<CircularProgress size={15} sx={{ml: 1, color: "#000", opacity: 0.5}}/>}*/}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}