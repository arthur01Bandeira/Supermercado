import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
//import { Product } from "../../components/Product";
import { styles } from "./styles"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.Title}>Lista de Compras</Text>
      </View>
      
      <View style={styles.bottom}>
        <View>

        </View>
      </View>
      <View style={styles.emptyListView}>

      </View>
      <View style={styles.inputwrapper}>
        <TextInput
                
            style={styles.input}
            placeholder="Adicione um novo produto"
            placeholderTextColor={"#808080"}
            //value={newProduct}
            //onChangeText={setNewProduct}
        />
      </View>

    </View>
  );
}

