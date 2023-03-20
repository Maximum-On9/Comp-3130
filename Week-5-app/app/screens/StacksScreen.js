import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import colors from "../config/colors";

function StacksScreen() {
	return (
		<AppScreen style={styles.container}>
			<View style={styles.headerContainer}>
				<AppText style={styles.header}>Stacks</AppText>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton
					icon="plus"
					onPress={() => console.log("Adding a stack to the list")}
				/>
			</View>
		</AppScreen>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 50
	},
	container: {
		backgroundColor: colors.primary,
		justifyContent: "space-between"
	},
	header: {
		fontSize: 36,
		fontWeight: "bold"
	},
	headerContainer: {
		marginLeft: 50,
		marginTop: 50
	}
});

export default StacksScreen;
