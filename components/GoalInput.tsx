import {
	Text,
	View,
	TextInput,
	Button,
	StyleSheet,
	Platform,
	Modal,
	Pressable,
} from "react-native";
import { useState } from "react";

import { AddButton } from "./GeneralButton";

type props = {
	onAddGoal: (input: string) => void;
	onDismiss: () => void;
};

export default function GoalInput(props: props) {
	const [input, setInput] = useState<string>("");

	function onAddNewGoal() {
		props.onAddGoal(input);
		props.onDismiss();
		setInput("");
	}

	function onModalDismiss() {
		props.onDismiss();
		setInput("");
	}

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.inputTitle}>Create new Goal</Text>
			<TextInput
				style={styles.textInput}
				placeholder='Add your goal'
				value={input}
				onChangeText={setInput}
			/>
			<AddButton onPress={onAddNewGoal}>Add Goal</AddButton>
			<Pressable
				onPress={onModalDismiss}
				style={({ pressed }) => pressed && styles.onPressEffect}
			>
				<Text style={{ color: "blue", fontSize: 16 }}>Cancel</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		marginBottom: 8,
		rowGap: 12,
		alignItems: "center",
		paddingHorizontal: 36,
	},
	inputTitle: {
		fontWeight: "700",
		fontSize: 28,
		marginBottom: 12,
	},
	textInput: {
		width: "100%",
		paddingHorizontal: 18,
		borderRadius: 10,
		marginRight: 8,
		fontSize: 16,
		paddingVertical: Platform.OS == "ios" ? 12 : 6,
		backgroundColor: "#4fc6db",
	},
	onPressEffect: {
		opacity: 0.6,
	},
});
