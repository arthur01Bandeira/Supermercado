import { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Product } from "../../components/Product";

export function Home() {
  const [products, setProducts] = useState<string[]>([]);
  const [finished, setFinished] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState("");

  function handleAddProduct() {
    if (newProduct.trim().length === 0) return;
    setProducts((prev) => [...prev, newProduct]);
    setNewProduct("");
  }

  function handleRemove(product: string, isFinished = false) {
    if (isFinished) {
      setFinished((prev) => prev.filter((item) => item !== product));
    } else {
      setProducts((prev) => prev.filter((item) => item !== product));
    }
  }

  function handleToggleFinish(product: string) {
    if (products.includes(product)) {
      setProducts((prev) => prev.filter((item) => item !== product));
      setFinished((prev) => [...prev, product]);
    } else {
      setFinished((prev) => prev.filter((item) => item !== product));
      setProducts((prev) => [...prev, product]);
    }
  }

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.top}>
        <Text style={styles.Title}>Lista de Compras</Text>
      </View>

      {/* Input + Add Button */}
      <View style={styles.inputwrapper}>
        <TextInput
          style={styles.input}
          placeholder="Adicione um novo produto"
          placeholderTextColor="#808080"
          value={newProduct}
          onChangeText={setNewProduct}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
          <Image
            source={require("../../../assets/plus.png")}
            style={styles.addIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Bottom List Section */}
      <View style={styles.bottom}>
        {/* Counters */}
        <View style={styles.counters}>
          <Text style={styles.produtos}>
            Produtos <Text style={{ color: "#000" }}>{products.length}</Text>
          </Text>
          <Text style={styles.finalizados}>
            Finalizados <Text style={{ color: "#000" }}>{finished.length}</Text>
          </Text>
        </View>

        {/* Products List */}
        <FlatList
          data={[...products, ...finished]} 
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Product
              name={item}
              isFinished={finished.includes(item)}
              onRemove={() => handleRemove(item, finished.includes(item))}
              onToggleFinish={() => handleToggleFinish(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyListView}>
              <Image
                source={require("../../../assets/shopping_list.png")}
                style={styles.emptyIcon}
              />
              <Text style={styles.emptyText}>Sua lista está vazia</Text>
              <Text style={{ color: "#808080", fontSize: 12 }}>
                Adicione produtos e organize suas compras
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default Home; 

