import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";

import { SignupFormData, signupSchema } from "../schemas/signupSchema";

export default function SignupScreen() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(data: SignupFormData) {
    console.log("First name:", data.firstName);
    console.log("Last name:", data.lastName);
    console.log("Email:", data.email);

    router.push({
      pathname: "/confirmation",
      params: {
        firstName: data.firstName,
      },
    });
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Create an Account</Text>

      <Text style={styles.label}>First Name</Text>

      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter first name"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            autoCapitalize="words"
          />
        )}
      />

      {errors.firstName && (
        <Text style={styles.error}>{errors.firstName.message}</Text>
      )}

      <Text style={styles.label}>Last Name</Text>

      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter last name"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            autoCapitalize="words"
          />
        )}
      />

      {errors.lastName && (
        <Text style={styles.error}>{errors.lastName.message}</Text>
      )}

      <Text style={styles.label}>Email</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        )}
      />

      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={styles.label}>Password</Text>

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        )}
      />

      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      <Text style={styles.label}>Confirm Password</Text>

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Re-enter password"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        )}
      />

      {errors.confirmPassword && (
        <Text style={styles.error}>{errors.confirmPassword.message}</Text>
      )}

      <Pressable
        style={[styles.button, isSubmitting && styles.buttonDisabled]}
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#1E293B",
  },

  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#64748B",
    marginBottom: 24,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    color: "#334155",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 6,
  },

  error: {
    color: "#DC2626",
    fontSize: 13,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
