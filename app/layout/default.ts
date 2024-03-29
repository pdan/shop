'use client';
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
    },
    components: {
        MuiGrid2: {
            defaultProps: {
                // all grids under this theme will apply
                // negative margin on the top and left sides.
                disableEqualOverflow: true,
            },
        },
    },
});
