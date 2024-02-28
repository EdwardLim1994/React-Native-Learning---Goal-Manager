import { isEmpty } from "lodash";
import { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	Platform,
	useWindowDimensions,
	Keyboard,
	Modal,
	Image,
} from "react-native";

import ListItem from "./components/ListItem";
import GoalInput from "./components/GoalInput";
import { GeneralButton } from "./components/GeneralButton";

export default function App() {
	const windowHeight = useWindowDimensions().height;
	const [goals, setGoals] = useState<string[]>([]);

	const [open, setOpen] = useState<boolean>(false);

	function addGoal(input: string) {
		if (!input) return;
		setGoals((currentGoals) => [...currentGoals, input]);
		Keyboard.dismiss();
	}

	function removeGoal(key: number) {
		setGoals((currentGoals) => currentGoals.filter((g, i) => i != key));
	}

	return (
		<View
			style={{ ...styles.container, minHeight: Math.round(windowHeight) }}
		>
			<View style={styles.appTitleContainer}>
				<Image
					source={require("./assets/favicon.png")}
					style={{ width: 40, height: 40 }}
				/>
				<Text style={styles.appTitle}>Goal Manager</Text>
			</View>
			<View style={{ marginVertical: 8 }}>
				<GeneralButton onPress={() => setOpen(true)}>
					Create new Goal
				</GeneralButton>
			</View>
			<Modal visible={open} animationType='slide'>
				<View style={{ backgroundColor: "#9fe8f5", height: "100%" }}>
					<GoalInput
						onDismiss={() => setOpen(false)}
						onAddGoal={addGoal}
					/>
				</View>
			</Modal>
			<View style={styles.listWrapper}>
				{isEmpty(goals) ? (
					<Text style={{ ...styles.title, ...styles.bottomSpacing }}>
						No Goal yet
					</Text>
				) : (
					<FlatList
						contentContainerStyle={styles.listContainer}
						data={goals}
						renderItem={({ item, index }) => (
							<ListItem
								index={index}
								text={item}
								removeGoal={(index) => removeGoal(index)}
							/>
						)}
					/>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appTitleContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		columnGap: 16,
		justifyContent: "center",
		marginTop: Platform.OS == "android" ? 0 : 12,
		marginBottom: Platform.OS == "android" ? 18 : 2,
	},
	appTitle: {
		textAlign: "center",
		fontSize: 26,
		color: "#000000",
		fontWeight: "900",
	},
	container: {
		height: "100%",
		paddingVertical: 60,
		paddingHorizontal: 32,
		backgroundColor: "#b6e9f2",
	},

	listWrapper: {
		flex: 8,
		marginTop: 8,
		backgroundColor: "#78d9eb",
		paddingVertical: 16,
		paddingHorizontal: 18,
		borderRadius: 16,
	},
	listContainer: {
		rowGap: 16,
	},

	title: {
		fontSize: 24,
		fontWeight: "700",
		textAlign: "center",
	},
	bottomSpacing: {
		marginBottom: 8,
	},
});
