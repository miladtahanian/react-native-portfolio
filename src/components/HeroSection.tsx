import { Dimensions, Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, commanyStyles, typography } from "../styles";
import Button from "./Button";
import CodeBlock from "./CodeBlock";

export default function HeroSection(props: { scrollToPortfolio: () => void }) {
  const { height, width, fontScale } = Dimensions.get("window");

  const bigTitleStyle = [
    typography(fontScale).h2,
    { lineHeight: 55 / fontScale },
  ];

  return (
    <View style={[styles.container]}>
      <CodeBlock name="AboutMe">
        <View style={{ flex: 1, marginVertical: 24 }}>
          <Text style={bigTitleStyle}>
            Hi! My name is
            <Text style={[typography(fontScale).h1, { color: colors.orange }]}>
              {"\n"}
              Milad Tahanian.
            </Text>
          </Text>
          <Text style={bigTitleStyle}>I'm an {"\n"}ardent React-Native Developer
          </Text>
          <Text style={[typography(fontScale).p, { marginTop: 24 }]}>
            I build cross-platform mobile apps and games with React Native and Expo.
          </Text>
        </View>
      </CodeBlock>
      <View style={[styles.buttons, { gap: width < 400 ? 8 : 16 }]}>
        <Button
          title="Get In Touch"
          onPress={props.scrollToPortfolio}
          color={colors.dark}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    maxWidth: 550,
    paddingHorizontal: 16,
    marginBottom: 150,
    marginTop: 60,
  },
  buttons: {
    ...commanyStyles.row,
    marginTop: 32,
    flexWrap: "wrap",
  },
});
