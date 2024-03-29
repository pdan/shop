import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/app/layout/default";
import { AppProps } from "next/app";

export default function Application({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
