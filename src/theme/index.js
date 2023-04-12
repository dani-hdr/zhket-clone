const { createTheme } = require("@mui/material");
import NextLink from 'next/link';
import { forwardRef } from 'react';
const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
});

const theme = createTheme({
    direction:'rtl',
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    'box-shadow':'none',
                     '&:hover':{'box-shadow':'none'}
                }
            }
        },
        MuiLink: {
            defaultProps: {
                component: LinkBehaviour
            }
        },
    },
    shadows:[
        "",
        "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        " rgba(0, 0, 0, 0.24) 0px 3px 8px"
    ],
    palette:{
       
        primary:{
            main:'#FEA000',
            dark:'#e59000',
            contrastText:'#fff'
        },
        secondary:{
            main:'#ff5c62',
            dark:'#ff2931',
            contrastText:'#fff',
        },
        text:{
            primary:'#8A8D90',
            secondary:'#9EAAC4',
            disabled:'#C3C3C3'

        }
        
    },
    typography:{
        fontFamily:['vazir','sans-serif'].join(','),
        fontWeightLight:300,
        fontWeightThin:100,
    }
})

export default theme