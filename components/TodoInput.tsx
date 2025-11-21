import { createHomeStyles } from "@/assets/styles/home.style";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

const TodoInput = () => {
  const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);
  const [todo, setTodo] = useState("");
  const addTodo = useMutation(api.todos.addTodo);

  async function addTodoHandler() {
    if (!todo.trim()) {
      return;
    }
    try {
      await addTodo({ title: todo.trim() ?? "" });
      setTodo("");
    } catch (error) {
      Alert.alert("Error", "Failed to add todo");
      console.log(error);
    }
  }
  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          style={homeStyles.input}
          placeholder="Add a new todo"
          placeholderTextColor={colors.textMuted}
          value={todo}
          onChangeText={setTodo}
          onSubmitEditing={addTodoHandler}
          //   multiline={true}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={!todo.trim()}
          onPress={addTodoHandler}
        >
          <LinearGradient
            colors={
              todo.trim() ? colors.gradients.primary : colors.gradients.muted
            }
            style={[
              homeStyles.addButton,
              !todo.trim() && homeStyles.addButtonDisabled,
            ]}
          >
            <Ionicons name="add-outline" size={24} color={"#ffffff"} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoInput;
