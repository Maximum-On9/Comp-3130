import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function AppButton({ color = "primary", icon, title, onPress }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.touchable}>
			<View
				style={[styles.container, { backgroundColor: colors[color] }]}
			>
				{icon && <MaterialCommunityIcons name={icon} size={50} />}
				{title && <AppText style={styles.text}>{title}</AppText>}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		borderRadius: 10,
		justifyContent: "center",
		padding: 10
	},
	text: {
		textTransform: "uppercase"
	},
	touchable: {
		margin: 5
	}
});

export default AppButton;
