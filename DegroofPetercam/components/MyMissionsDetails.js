import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AvatarContainer from '../components/Avatar/AvatarContainer';

import ButtonApp from "../components/Avatar/Button";
import Map from "../components/Map/Map";
import MyDatePicker from "../components/DatePicker/DatePicker";
import { FormLabel, Input, FormInput } from "react-native-elements";
export default class MyMissionsDetails extends React.Component {
	render() {
		return (
			<ScrollView style={{ padding: 20 }}>
				<View marginTop={10}>
					<AvatarContainer />
				</View>
				<View style={{ flexDirection: "row", justifyContent: "space-around" }} marginTop={10} >
					<View style={{
						borderWidth: 1, borderRadius: 5, borderColor: "#DDDDDD", shadowOffset: { width: 3, height: 3 }, shadowColor: "#DDDDDD",
						shadowOpacity: 1.0
					}}>
						<MyDatePicker />
					</View>
					<ButtonApp title={"SUBMIT DATE"} />

				</View>
				<View marginTop={10}>
					<Text style={styles.label}>Address</Text>
					<Text>
						Cantersteen 10, 1000 Bruxelles
					</Text>
					<Text style={styles.label}>Telephone</Text>
					<Text>
						+32 487 44 80 49
					</Text>
				</View>
				<View style={{ alignItems: "center" }} marginTop={10} >
					<Map />
				</View>
				<View style={{ marginTop: 300 }}>
					<Text style={styles.label}>Nota bene</Text>
				</View>
				<View>
					<Text>
						bla bla
					</Text>
				</View>

			</ScrollView>
		)
	}
}
const styles = StyleSheet.create({
	label: {
		color: "#50C285",
		paddingTop: 5,
		fontWeight: "bold"

	}
});


