import {
  Linking,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { colors, commanyStyles, typography } from "../styles";
import Button from "./Button";
import CodeBlock from "./CodeBlock";

export default function Contact() {
  const { fontScale } = useWindowDimensions();

  const openTelegram = () => Linking.openURL("https://t.me/miladtahanian");
  const openGithub = () => Linking.openURL("http://github.com/miladtahanian");
  const openLinkedIn = () =>
    Linking.openURL("https://www.linkedin.com/in/milad-tahanian-5a32a3303/");
  const openInstagram = () =>
    Linking.openURL("https://instagram.com/tahanianmilad");
  const openEmail = () =>
    Linking.openURL("mailto:miladtahanianofficial@gmail.com");
  const openPhone = () => Linking.openURL("tel:+989128051137");

  return (
    <View style={styles.container}>
      <CodeBlock name="GetInTouch">
        <View style={styles.innerContainer}>
          <Text style={typography(fontScale).p}>
            Whether you want to build a new mobile app from scratch, update an
            existing app, or troubleshoot technical issues, I'm here to help.
          </Text>
          <Text style={typography(fontScale).p}>Send me a message on:</Text>
          <View style={[commanyStyles.row, { gap: 16 }]}>
            <Button
              title="@ Email"
              onPress={openEmail}
              color={colors.red}
              bgColor={colors.dark}
              borderColor={colors.white}
            />
            <Button
              title="Telegram"
              onPress={openTelegram}
              color={colors.green}
              bgColor={colors.dark}
              borderColor={colors.white}
            />
            <Button
              title="Instagram"
              onPress={openInstagram}
              color={colors.green}
              bgColor={colors.dark}
              borderColor={colors.white}
            />
            <Button
              title="LinkedIn"
              onPress={openLinkedIn}
              color={colors.green}
              bgColor={colors.dark}
              borderColor={colors.white}
            />
            <Button
              title="Github"
              onPress={openGithub}
              color={colors.green}
              bgColor={colors.dark}
              borderColor={colors.white}
            />
            <Button
              title="or Call me!"
              onPress={openPhone}
              color={colors.green}
              bgColor={colors.dark}
              borderColor={colors.white}
            />
          </View>
        </View>
      </CodeBlock>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 550,
    paddingHorizontal: 16,
    marginTop: 150,
  },
  innerContainer: {
    flex: 1,
    marginVertical: 24,
    gap: 32,
  },
});
