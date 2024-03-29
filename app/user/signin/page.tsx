import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    TextField,
    useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Unstable_Grid2";
import Head from "next/head";
import { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

export const metadata: Metadata = {
    title: "User Signin Page",
};
const inter = Vazirmatn({ subsets: ["latin"] });

const SigninPage = () => {
    return (
        <>
            <FormControl sx={{ padding: 2 }} className={inter.className}>
                <Grid container direction={"column"} spacing={1}>
                    <Grid>
                        <TextField
                            id="username"
                            label="نام کاربری"
                            variant="outlined"
                            type="email"
                            size="small"
                            aria-describedby="my-helper-text"
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            id="password"
                            label="رمز عبور"
                            variant="outlined"
                            size="small"
                            aria-describedby="my-helper-text"
                        />

                        <FormHelperText id="my-helper-text">
                            We'll never share your email.
                        </FormHelperText>
                    </Grid>
                    <Grid>
                        <Button type="button" variant="contained">
                            Signin
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>
        </>
    );
};

export default SigninPage;
