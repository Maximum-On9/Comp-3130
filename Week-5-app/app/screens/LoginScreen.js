import React from "react";
import { StyleSheet } from "react-native";
import * as yup from "yup";

import AppButton from "../components/AppButton";
import AppForm from "../components/AppForm";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";

const users = [
	{
		username: "user1",
		password: "password1"
	},
	{
		username: "user2",
		password: "password2"
	},
	{
		username: "user3",
		password: "password3"
	}
];

const validationSchema = yup.object().shape({
	username: yup.string().required().label("Username"),
	password: yup.string().required().label("Password")
});

const validateUser = ({ username, password }) => {
	return (
		users.filter(
			(user) => user.username === username && user.password === password
		).length > 0
	);
};

function LoginScreen({ navigation }) {
	return (
		<AppScreen style={styles.container}>
			<AppText style={styles.text}>Login</AppText>
			<AppForm
				initialValues={{ username: "", password: "" }}
				onSubmit={(values, { resetForm }) => {
					if (validateUser(values)) {
						resetForm();
						navigation.navigate("Stacks");
					} else {
						resetForm();
						alert("Invalid credentials!");
					}
				}}
				validationSchema={validationSchema}
			>
				{({ errors, handleChange, handleSubmit, touched, values }) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoFocus={true}
							errors={errors.username}
							name="username"
							onChangeText={handleChange("username")}
							placeholder="Username"
							style={[styles.input, { marginBottom: 20 }]}
							touched={touched.username}
							value={values.username}
						/>
						<AppTextInput
							errors={errors.password}
							name="password"
							onChangeText={handleChange("password")}
							placeholder="Password"
							secureTextEntry={true}
							style={[styles.input, { marginBottom: 20 }]}
							touched={touched.password}
							value={values.password}
						/>
						<AppButton
							color="white"
							onPress={handleSubmit}
							title="Submit"
						/>
					</>
				)}
			</AppForm>
		</AppScreen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		paddingLeft: 20,
		paddingRight: 20
	},
	input: {
		marginHorizontal: 50
	},
	text: {
		fontSize: 48,
		fontWeight: "bold",
		marginBottom: 50,
		marginLeft: 50,
		marginTop: 120
	}
});

export default LoginScreen;
