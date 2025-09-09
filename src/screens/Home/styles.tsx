import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
    container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  infocontainer:{
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center"
  },

  emptyText : {
    fontWeight: "bold",
    fontSize: 14
    
  },
  inputwrapper: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
        position: "absolute",
        top: "21%", 
        width: "100%",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0}
    
    },

  top: {
    backgroundColor: "#7a4a9e",
    flexDirection: "row",
    height:173,
    justifyContent: "center",
    alignItems: "center"
  },
  Title: {
    fontWeight: "bold",
    fontSize: 18,
    color:"#FFF",
  },
  bottom : {
    padding: 24,
    height: 649,
    backgroundColor: "#f2f2f2"
  },
    emptyListView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        paddingVertical: 28,
        paddingHorizontal: 20,
        flexDirection: "column",
        gap: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: {width: 0, height: 0}
    },

   input: {
        display: "flex",
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        marginRight: 4,
        fontSize: 16,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        padding: 16,
        height: 54,
        width: 289,
        borderWidth: 0.5,
        borderColor: "#7A4A9E",
        

    },
  button : {
    display: "flex",
    height: 45,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: 345,
    borderRadius: 5

  }

})
