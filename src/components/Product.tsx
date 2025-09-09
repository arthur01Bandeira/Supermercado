import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"

interface Props {
    name: string;
    finalized: boolean,
    onRemove: () => void;
    onToggle: () => void;
}