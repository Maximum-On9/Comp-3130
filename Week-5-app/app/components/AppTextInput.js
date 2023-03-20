import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function AppTextInput({ errors, style, touched, ...otherProps }) {
	return (
		<>
			<TextInput
				style={[styles.container, { marginBottom: errors ? 0 : 20 }]}
				{...otherProps}
			/>
			{errors && touched && (
				<AppText style={styles.errorText}>{errors}</AppText>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		borderColor: colors.black,
		height: 50,
		borderWidth: 2,
		borderRadius: 10,
		padding: 10
	},
	errorText: {
		color: colors.error
	}
});

export default AppTextInput;
