import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  emptyText: {
    fontWeight: "bold",
    fontSize: 14,
  },

  counters: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 4,
  },

  inputwrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -25,
    paddingHorizontal: 24,
  },

  produtos: {
    color: "#31C667",
    fontWeight: "bold",
    fontSize: 16,
  },

  finalizados: {
    color: "#7a4a9e",
    fontWeight: "bold",
    fontSize: 16,
  },

  top: {
    backgroundColor: "#7a4a9e",
    flexDirection: "row",
    height: 173,
    justifyContent: "center",
    alignItems: "center",
  },

  Title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFF",
  },

  bottom: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f2f2f2",
  },

  emptyListView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  emptyIcon: {
    width: 64,
    height: 64,
    marginBottom: 16,
    resizeMode: "contain",
  },

  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    paddingHorizontal: 16,
    height: 54,
    borderWidth: 0.5,
    borderColor: "#7A4A9E",
  },

  addButton: {
    marginLeft: 8,
    width: 54,
    height: 54,
    backgroundColor: "#31C667",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  addIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: "#fff",
  },
  productContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  borderRadius: 8,
  padding: 12,
  marginBottom: 8,
  borderWidth: 1,
  borderColor: "#ccc",
},
circleWrapper: {
  marginRight: 12,
},
circle: {
  width: 20,
  height: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: "#31C667",
},
name: {
  flex: 1,
  fontSize: 16,
  color: "#000",
},
nameFinished: {
  flex: 1,
  fontSize: 16,
  color: "#808080",
  textDecorationLine: "line-through",
},


});
