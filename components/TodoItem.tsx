import { createHomeStyles } from "@/assets/styles/home.style";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
type todoType = Doc<"todos">;

const TodoItem = ({ todo }: { todo: todoType }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);
  async function handleCompleteTodo(id: Id<"todos">) {
    try {
      await toggleTodo({ id: id });
    } catch (error) {
      Alert.alert("Error", "Failed to toggle todo");
      console.log(error);
    }
  }

  async function handleDeleteTodo(id: Id<"todos">) {
    try {
      Alert.alert(
        "Delete Todo?",
        "Are you sure you want to delete this todo?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            style: "destructive",
            onPress: async () => {
              await deleteTodo({ id });
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert("Error", "Failed to delete todo");
      console.log(error);
    }
  }

  async function handleUpdateTodo(id: Id<"todos">, title: string) {
    try {
      await updateTodo({ id, title });
    } catch (error) {
      Alert.alert("Error", "Failed to update todo");
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
        <View style={homeStyles.todoTextContainer}>
          {isEditing ? (
            <TextInput
              style={homeStyles.input}
              placeholder="Add a new todo"
              placeholderTextColor={colors.textMuted}
              value={editedTitle}
              onChangeText={(text) => setEditedTitle(text)}
              onSubmitEditing={() =>
                handleUpdateTodo(todo._id as Id<"todos">, editedTitle)
              }
              multiline={true}
            />
          ) : (
            <Text
              style={[
                homeStyles.todoText,
                todo.isCompleted && {
                  textDecorationLine: "line-through",
                  color: colors.textMuted,
                  opacity: 0.5,
                },
              ]}
            >
              {todo.title}
            </Text>
          )}

          {isEditing ? (
            <>
              <View
                style={[
                  homeStyles.todoActions,
                  { marginTop: 10, marginLeft: 10 },
                ]}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    handleUpdateTodo(todo._id as Id<"todos">, editedTitle);
                    setIsEditing(false);
                  }}
                >
                  <LinearGradient
                    colors={colors.gradients.warning}
                    style={homeStyles.actionButton}
                  >
                    <Ionicons name="checkmark" size={14} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setIsEditing(false)}
                >
                  <LinearGradient
                    colors={colors.gradients.danger}
                    style={homeStyles.actionButton}
                  >
                    <Ionicons name="close" size={14} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={homeStyles.todoActions}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setIsEditing(true)}
                >
                  <LinearGradient
                    colors={colors.gradients.warning}
                    style={homeStyles.actionButton}
                  >
                    <Ionicons name="pencil" size={14} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleDeleteTodo(todo._id as Id<"todos">)}
                >
                  <LinearGradient
                    colors={colors.gradients.danger}
                    style={homeStyles.actionButton}
                  >
                    <Ionicons name="trash" size={14} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default TodoItem;
