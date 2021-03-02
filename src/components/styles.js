import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    container : {
        backgroundColor: "#F5F5F6",
        boxShadow: "-20px 20px 100px #b1bfca",
        flexGrow: 1,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: theme.spacing(1)
    },
    header : {
        backgroundColor: "#26c6da",
        textAlign: "center",
        color: "white",
        width: "100%",
    },
    resumeBody : {

    },
    row : {
        marginTop: theme.spacing(1),
    },
    item : {
        width: "100%",
        boxSizing: "border-box",
    },

    paper: {
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
    },
    button: {
        backgroundColor: '#26c6da',
        color: 'white',
        fontStyle: "normal",
        fontWeight: "bold",
    },
    innerPaper: {
        padding: theme.spacing(1)
    },
    progress: {
        backgroundColor: "#26c6da",
    },
    contact: {
        textAlign: "center",
        fontStyle: "italic",
    }


  }));