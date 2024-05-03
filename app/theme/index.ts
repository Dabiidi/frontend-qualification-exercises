import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";


 const theme = extendTheme({
    colors: {
        brand: {
          900: "#0A1117",
          100:""
        
        },
        neutrals:{
            500:'#A3A3A3',
            400:'#C2C2C2',
            600:'#7A7A7A',
            800:'#2E2E2E'
        },
        dropdown:{
            background:"#0A1117",
            listColor:"#FBBD2C"

        },
        fonts:{
          100:' #667085'
        },
        headerColor:"#0B1D26",
        tableColor:"#0A1117",
        neutralWhite:"#ffffff",
        tableBorderColor:'#2E2E2E',

      },

  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  components: {
    Table: {
      variants: {
        striped: {
          tbody: {
            "tr:nth-of-type(odd)": {
              background: "gray.100",
            },
          },
        },
      },
    },
  },
  
});


interface ThStyle {
  p: number;
  style: React.CSSProperties;
}

export const thStyle: ThStyle = {
  p: 4,
  style: { textTransform: "none" },
};


export default theme;
