import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "../screens/Home/styles"

type Props = {
  name: string;
  isFinished: boolean;
  onRemove: () => void;
  onToggleFinish: () => void;
};

export function Product({ name, isFinished, onRemove, onToggleFinish }: Props) {
  return (
    <View style={styles.productContainer}>
      {/* Toggle Finish */}
      <TouchableOpacity onPress={onToggleFinish} style={styles.circleWrapper}>
        {isFinished ? (
          <Image
            source={require("../../assets/check.png")}
            style={{ width: 20, height: 20, tintColor: "#7A4A9E" }}
          />
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>

      {/* Product Name */}
      <Text style={isFinished ? styles.nameFinished : styles.name}>
        {name}
      </Text>

      {/* Delete Button */}
      <TouchableOpacity onPress={onRemove}>
        <Image
          source={require("../../assets/trash.png")}
          style={{ width: 20, height: 20, tintColor: "#000" }}
        />
      </TouchableOpacity>
    </View>
  );
}
