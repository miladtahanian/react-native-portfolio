import {
  Linking,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { colors, commanyStyles, typography } from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Footer() {
  const { fontScale } = useWindowDimensions();

  const year = new Date().getFullYear();

  const openLinkedIn = () =>
    Linking.openURL("https://www.linkedin.com/in/milad-tahanian-5a32a3303/");

  const openSourceCode = () =>
    Linking.openURL("https://github.com/miladtahanian");

  return (
    <View style={styles.container}>
      <View style={[commanyStyles.row, { gap: 8, marginBottom: 16 }]}>
        <Ionicons
          name="logo-linkedin"
          size={22}
          color={colors.white}
          onPress={openLinkedIn}
        />
        <Ionicons
          name="logo-github"
          size={22}
          color={colors.white}
          onPress={openSourceCode}
        />
      </View>
      <Text style={[typography(fontScale).sp, { textAlign: "center" }]}>
        © {year} Milad Tahanian. Built with React Native for Web{" "}
        <Ionicons
          name="logo-react"
          size={20}
          color={colors.tint}
          style={{
            marginTop: 2,
            marginRight: 8,
          }}
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 550,
    marginTop: 150,
    marginBottom: 50,
    alignItems: "center",
    paddingHorizontal: 16,
  },
});
