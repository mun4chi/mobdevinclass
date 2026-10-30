import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ConfirmationScreen() {
  const { firstName } = useLocalSearchParams<{
    firstName?: string;
  }>();

  const router = useRouter();

  const displayName = Array.isArray(firstName) ? firstName[0] : firstName;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Successful</Text>

      <Text style={styles.message}>
        Account created for {displayName || "you"}!
      </Text>

      <Text style={styles.description}>
        Your form has been submitted successfully.
      </Text>

      <Pressable style={styles.button} onPress={() => router.replace("/")}>
        <Text style={styles.buttonText}>Back to Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1E293B",
    marginBottom: 12,
  },

  message: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
    color: "#334155",
  },

  description: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 24,
  },

  button: {
    backgroundColor: "#338f4f",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
