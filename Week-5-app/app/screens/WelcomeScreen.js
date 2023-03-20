import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";

function WelcomeScreen({ navigation }) {
	return (
		<AppScreen>
			<ImageBackground
				blurRadius={20}
				source={require("../../assets/background.jpg")}
				style={styles.background}
			>
				<AppText style={styles.header}>Stacks</AppText>
				<View style={styles.buttonContainer}>
					<AppButton
						onPress={() => navigation.navigate("Login")}
						title="Login"
					/>
					<AppButton title="Regsiter" />
				</View>
			</ImageBackground>
		</AppScreen>
	);
}

const styles = StyleSheet.create({
	background: {
		alignItems: "center",
		flex: 1,
		justifyContent: "space-between",
		resizeMode: "center"
	},
	buttonContainer: {
		marginBottom: 120,
		paddingHorizontal: 50,
		width: "100%"
	},
	header: {
		fontSize: 48,
		fontWeight: "bold",
		marginTop: 120
	}
});

export default WelcomeScreen;
