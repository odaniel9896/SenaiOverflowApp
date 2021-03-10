import React from "react";
import { Content, TextInputLogin, Label } from "./styles";
import { Container, ToolBar, TextToolBar } from "../../styles/stylesGlobal";
import { Alert, StatusBar, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import Button from "../../components/Button";
import { api } from "../../services/api";

function Login({ navigation }) {
	StatusBar.setBackgroundColor(colors.primary);

	const [login, setLogin] = useState({
		email: "",
		password: "",
	});

	const handleEmail = (e) => {
		setLogin({ ...login, email: e });
	};

	const handlePassword = (e) => {
		setLogin({ ...login, password: e });
	};

	const handleSubmit = async () => {
		try {
			const response = await api.post("/sessions", login);

			signIn(response.data);

			navigation.navigate("Home");
		} catch (error) {
			console.log(error);
			if (error.response) {
				Alert.alert("Ops", error.response.data.error);
			}
		}
	};

	return (
		<Container>
			<ToolBar>
				<TextToolBar>Faça o Login</TextToolBar>
			</ToolBar>
			<Content>
				<Label>E-mail</Label>
				<TextInputLogin
					placeholderTextColor={colors.lightTransparent}
					autoCompleteType="email"
					placeholder="Digite o seu e-mail"
					onChangeText={handleEmail}
				/>
				<Label>Senha</Label>
				<TextInputLogin
					placeholderTextColor={colors.lightTransparent}
					autoCompleteType="password"
					placeholder="Digite sua senha"
					secureTextEntry={true}
					onChangeText={handlePassword}
				/>
				<Button
					handlePress={handleSubmit}
					text="Entrar"
					disabled={login.email === "" || login.password === ""}
					style={{ width: "96%" }}
				/>
			</Content>
		</Container>
	);
}

export default Login;
