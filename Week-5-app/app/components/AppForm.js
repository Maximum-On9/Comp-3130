import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";

function AppForm({ children, initialValues, onSubmit, validationSchema }) {
	return (
		<View style={styles.container}>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{children}
			</Formik>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 50
	}
});

export default AppForm;
