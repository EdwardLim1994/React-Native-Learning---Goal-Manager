import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

type Props = {
	children: string | JSX.Element | JSX.Element[];
	onPress: () => void;
};

export const DeleteButton = (props: Props) => {
	return (
		<View style={styles.deleteButton}>
			<Pressable
				onPress={props.onPress}
				style={({ pressed }) => pressed && styles.onPressEffect}
			>
				<Text style={styles.deleteButtonText}>
					{props.children ?? "Delete"}
				</Text>
			</Pressable>
		</View>
	);
};

export const AddButton = (props: Props) => {
	return (
		<View style={styles.addButton}>
			<Pressable
				onPress={props.onPress}
				style={({ pressed }) => pressed && styles.onPressEffect}
			>
				<Text style={styles.addButtonText}>
					{props.children ?? "Add"}
				</Text>
			</Pressable>
		</View>
	);
};

export const GeneralButton = (props: Props) => {
	return (
		<View style={styles.generalButton}>
			<Pressable
				onPress={props.onPress}
				style={({ pressed }) => pressed && styles.onPressEffect}
			>
				<Text style={styles.generalButtonText}>
					{props.children ?? "Button"}
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	generalButton: {
		width: "100%",
		padding: Platform.OS == "android" ? 12 : 16,
		backgroundColor: "blue",
		borderRadius: 16,
	},
	generalButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 16,
	},
	deleteButton: {
		backgroundColor: "red",
		padding: Platform.OS == "android" ? 12 : 16,
		borderRadius: 16,
	},
	deleteButtonText: {
		color: "white",
	},
	addButton: {
		backgroundColor: "green",
		padding: Platform.OS == "android" ? 12 : 16,
		borderRadius: 16,
		width: "100%",
	},
	addButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 14,
	},
	onPressEffect: {
		opacity: 0.6,
	},
});
