import { View, Text, Button, StyleSheet } from "react-native";
import { DeleteButton } from "./GeneralButton";

type props = {
	index: number;
	text: string;
	removeGoal: (index: number) => void;
};
export default function ListItem(props: props) {
	return (
		<View style={styles.listItem} key={props.index}>
			<Text style={styles.listItemText}>{props.text}</Text>
			<DeleteButton onPress={() => props.removeGoal(props.index)}>
				Delete
			</DeleteButton>
		</View>
	);
}

const styles = StyleSheet.create({
	listItem: {
		flex: 1,
		flexDirection: "row",
		rowGap: 4,
		alignItems: "center",
		justifyContent: "space-between",
	},
	listItemText: {
		fontSize: 18,
		fontWeight: "500",
	},
});
