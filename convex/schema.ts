import { defineSchema, defineTable } from "convex/server";

import { Infer, v } from "convex/values";


const todoSchema = v.object({
    title: v.string(),
    isCompleted: v.boolean()
});

export default defineSchema({
    todos: defineTable(todoSchema)
})


export type TodoType = Infer<typeof todoSchema>;


// or to get  type we can use 

// type todoType = Doc<"todos">;