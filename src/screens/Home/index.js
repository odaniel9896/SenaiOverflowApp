import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import {
	Container,
	ToolBar,
	TextToolBar,
	ImageLogo,
	LoadingFeed,
	IconSignOut,
} from "./styles";
import colors from "../../styles/colors";
import CardQuestion from "../../components/CardQuestion";
import imgLogo from "../../../assets/logo.png";

function Home({ navigation }) {
	StatusBar.setBackgroundColor(colors.primary);

	const [isLoadingFeed, setIsLoadingFeed] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [totalQuestions, setTotalQuestions] = useState(0);
	const [page, setPage] = useState(1);

	const loadQuestions = async (reload) => {
		//se já tiver buscando, não busca de novo
		if (isLoadingFeed) return;

		//se tiver chego no fim, não busca de novo
		if (totalQuestions > 0 && totalQuestions == questions.length) return;

		setIsLoadingFeed(true);

		const response = await api.get("/feed", {
			params: { page },
		});

		setPage(page + 1);

		setQuestions([...questions, ...response.data]);

		setTotalQuestions(response.headers["x-total-count"]);

		console.log(totalQuestions);

		setIsLoadingFeed(false);
	};

	// useEffect(() => {
	// 	loadQuestions();
	// }, []);

	useEffect(() => {
		if (questions.length === 0) {
			loadQuestions();
		}
	}, [questions]);

	const handleSignOut = () => {
		signOut();
		navigation.navigate("Login");
	};

	const handleRefresh = () => {
		setPage(1);
		setQuestions([]);
	};

	return (
		<Container>
			<ToolBar>
				<TouchableOpacity
					onPress={handleRefresh}
					style={{ position: "absolute", left: 4 }}
				>
					<ImageLogo source={imgLogo} />
				</TouchableOpacity>
				<TextToolBar>SENAI OVERFLOWWWW</TextToolBar>
				<TouchableOpacity
					onPress={handleRefresh}
					style={{ position: "absolute", right: 4 }}
				>
					<IconSignOut onPress={handleSignOut} name="sign-out" />
				</TouchableOpacity>
			</ToolBar>
			<FlatList
				data={questions}
				style={{ width: "100%" }}
				onEndReachedThreshold={() => loadQuestions()}
				onEndReachedThreshold={0.2}
				keyExtractor={(question) => String(question.id)}
				renderItem={({ item: question }) => (
					<CardQuestion question={question} />
				)}
			/>
			{isLoadingFeed && <LoadingFeed size="large" color={colors.primary} />}
		</Container>
	);
}

export default Home;
