import { createHomeStyles } from "@/assets/styles/home.style";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";
type todoType = Doc<"todos">;

const TodoItem = ({ todo }: { todo: todoType }) => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  async function handleCompleteTodo(id: Id<"todos">) {
    try {
      await toggleTodo({ id: todo._id });
    } catch (error) {
      Alert.alert("Error", "Failed to toggle todo");
      console.log(error);
    }
  }
  return (
    <View style={homeStyles.todoItemWrapper}>
      <LinearGradient
        colors={colors.gradients.surface}
        style={homeStyles.todoItem}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          style={homeStyles.checkbox}
          activeOpacity={0.7}
          onPress={() => handleCompleteTodo(todo._id as Id<"todos">)}
        >
          <LinearGradient
            colors={
              todo.isCompleted
                ? colors.gradients.success
                : colors.gradients.muted
            }
            style={[
              homeStyles.checkboxInner,
              { borderColor: todo.isCompleted ? "transparent" : colors.border },
            ]}
          >
            {todo.isCompleted && (
              <Ionicons name="checkmark" size={18} color="#fff" />
            )}
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default TodoItem;
