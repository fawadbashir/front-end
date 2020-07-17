import { createMuiTheme } from '@material-ui/core/styles'

export const companyTheme = createMuiTheme({
    
  palette: {
    
      
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#ff9800',
    }
  },
  typography : {
    tab : {
      fontWeight : 700,
      fontSize : '1rem',
      textTransform: 'none'
  },
  h3 : {
    color : 'white'
  }

}
})

