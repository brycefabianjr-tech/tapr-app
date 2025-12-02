app/
  ├── navigation/
  │   ├── RootNavigator.js
  │   ├── RiderStack.js
  │   ├── DriverStack.js
  │   └── HotshotStack.js
  └── screens/
      ├── rider/
      ├── driver/
      ├── hotshot/
      └── auth/
          ├── Login.js          # ⬅️ new file
          └── DriverSignup.js
// Login.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // For now, just log to console
    console.log("Email:", email);
    console.log("Password:", password);
    // Later: call your backend / Firebase / Supabase, etc.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TapR</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    backgroundColor: "#111827",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: "#fff",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#374151",
  },
  button: {
    width: "100%",
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
  },
  linkText: {
    color: "#60a5fa",
    marginTop: 16,
  },
});
