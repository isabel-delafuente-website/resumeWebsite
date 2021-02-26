import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    container : {
        backgroundColor: "#F5F5F6",
        boxShadow: "-20px 20px 100px #b1bfca",
        flexGrow: 1,
    },
    header : {
        backgroundColor: "#304ffe",
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
    innerPaper: {
        padding: theme.spacing(1)
    }
  }));