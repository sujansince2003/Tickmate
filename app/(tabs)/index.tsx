import { createHomeStyles } from "@/assets/styles/home.style";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Keyboard, Pressable, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);

  const isLoading = todos === undefined;

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <Pressable
        style={{ flex: 1 }}
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <SafeAreaView style={homeStyles.safeArea}>
          <Header homeStyles={homeStyles} />
          <TodoInput />

          {/* {todos &&
            todos?.map((todo) => <TodoItem key={todo._id} todo={todo} />)} */}
          {/* better to use FlatList then mapping items */}
          {/* <TouchableOpacity onPress={toggleDarkMode}>
            <Text>Toggle Dark Mode</Text>
          </TouchableOpacity> */}

          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem key={item._id} todo={item} />}
            keyExtractor={(item) => item._id.toString()}
            style={homeStyles.todoList}
            contentContainerStyle={homeStyles.todoListContent}
            ListEmptyComponent={<EmptyState />}
          />
        </SafeAreaView>
      </Pressable>
    </LinearGradient>
  );
}
