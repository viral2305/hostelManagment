import React, {useState} from "react";
import CustomInput from "../component/CustomInput";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Card from "@mui/material/Card";
import {makeStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {useNavigate} from "react-router-dom";


const useStyle = makeStyles({

    singIn: {
        backgroundColor: "rgb(133, 244, 255,0.2) !important",
        width: "400px",
        height: "500px",
        margin: "10% auto",

        // backgroundImage: `url(${"https://image.shutterstock.com/image-illustration/doodle-260nw-562636255.jpg"})`

    },
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column !important"

    },
    hr: {

        width: "90%",
    },
    hr2: {
        marginTop: "50px",
        width: "90%",
    }
});

export default function Login() {
    const classes = useStyle();
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    const handleChange = (e) => {

        setUser({...user, [e.target.name]: e.target.value})
        console.log("user", user)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3333/user`, user);
        } catch (error) {
            console.log("something is wrong");
        }
    }

    const handleClick = () => {
        // navigate('/login')
    }

    return (
        <>

            <Card className={classes.singIn}>

                <Grid className={classes.wrapper}>

                    <Typography sx={{fontSize: 35}} color="rgb(66, 194, 255)" pt={3} pb={3} w={100}>
                       Sign-In
                    </Typography>
                    <hr className={classes.hr} color="rgb(133, 244, 255,0.5)" size={"1"}/>

                    <Grid item xs={12} mt={3} mb={4}>

                        <CustomInput id={"standard-email-input"} label={"E-mail"} type={"email"}
                                     variant={"standard"} handlechange={(e) => handleChange(e)} name={"email"}
                                     required={true} autofocus={true}
                        />
                    </Grid>
                    <Grid item xs={12} mb={4}>
                        <CustomInput id={"standard-password-input"} label={"Password"} type={"password"}
                                     autocomplete={"current-password"} variant={"standard"} required={true}
                                     handlechange={(e) => handleChange(e)} name={"password"}/>
                    </Grid>
                    <Grid item xs={12} mb={4}>
                        <Button variant="contained" size="medium" onClick={e => handleSubmit(e)}>
                            Submit
                        </Button>
                    </Grid>
                    <hr className={classes.hr2} color="rgb(133, 244, 255,0.5)" size={"1"} />

                    <Typography sx={{fontSize: 15}} color="black" pt={3} pb={3} w={100}>
                        Don't have an accoutn?<Link href="http://localhost:3000/" underline="hover" onClick={handleClick}>Please sing-Up

                    </Link>
                    </Typography>
                </Grid>
            </Card>

        </>
    )
}