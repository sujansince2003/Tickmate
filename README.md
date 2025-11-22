# Todo App - React Native

A beautiful, modern todo application built with React Native and Expo, featuring real-time synchronization, dark mode support, and a sleek gradient-based UI.

## 🚀 Tech Stack

### Core Technologies

- **React Native** (0.81.5) - Cross-platform mobile framework
- **Expo** (~54.0.23) - Development platform and toolchain
- **TypeScript** (5.9.2) - Type-safe JavaScript
- **Expo Router** (~6.0.14) - File-based routing system

### Backend & Database

- **Convex** (1.29.3) - Real-time backend-as-a-service with automatic database synchronization

### UI & Styling

- **Expo Linear Gradient** (15.0.7) - Beautiful gradient backgrounds
- **React Navigation** (7.x) - Navigation library with bottom tabs
- **Ionicons** (@expo/vector-icons) - Icon library
- **AsyncStorage** - Persistent local storage for theme preferences

### Additional Libraries

- **React Native Gesture Handler** - Touch gesture system
- **React Native Reanimated** - Animation library
- **React Native Safe Area Context** - Safe area handling
- **Expo Haptics** - Haptic feedback support

## 📐 Architecture

### Project Structure

```
rn/
├── app/                    # Expo Router file-based routes
│   ├── _layout.tsx        # Root layout with providers
│   └── (tabs)/            # Tab navigation group
│       ├── _layout.tsx    # Tab layout configuration
│       ├── index.tsx      # Home screen (todos list)
│       └── settings.tsx  # Settings screen
├── components/            # Reusable UI components
│   ├── TodoItem.tsx      # Individual todo item with edit/delete
│   ├── TodoInput.tsx     # Add new todo input
│   ├── Header.tsx        # Home screen header
│   ├── HeaderSettings.tsx
│   ├── ProgressStats.tsx # Statistics cards
│   ├── SettingsPreferences.tsx
│   ├── Clear.tsx         # Clear all todos component
│   ├── EmptyState.tsx    # Empty list state
│   └── LoadingSpinner.tsx
├── convex/               # Convex backend functions
│   ├── schema.ts         # Database schema definition
│   └── todos.ts          # CRUD operations (queries & mutations)
├── hooks/                # Custom React hooks
│   └── useTheme.tsx      # Theme context and hook
└── assets/               # Static assets
    └── styles/          # Style definitions
        ├── home.style.ts
        └── setting.style.ts
```

### Architecture Patterns

1. **File-Based Routing**: Expo Router automatically generates routes from the file structure
2. **Context API**: Theme management using React Context (`ThemeProvider`)
3. **Component Composition**: Modular, reusable components
4. **Real-time Sync**: Convex automatically syncs data across all clients
5. **Type Safety**: Full TypeScript coverage with Convex-generated types

### Data Flow

```
User Action → Component → Convex Mutation/Query → Database
                ↓
         Real-time Update → All Connected Clients
```

## 🛣️ Routes

The app uses Expo Router's file-based routing system:

- **`/`** (Home Tab) - Main todo list screen
  - Display all todos
  - Add new todos
  - Edit, delete, and toggle todos
- **`/settings`** (Settings Tab) - Settings and preferences
  - Progress statistics
  - Theme preferences (Dark Mode)
  - Clear all todos

### Navigation Structure

```
RootLayout (Stack)
  └── (tabs) (Tabs)
      ├── index (Home)
      └── settings (Settings)
```

## ⚙️ Setup Steps

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Expo CLI (installed globally or via npx)
- Convex account (free tier available)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd rn
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Convex**

   ```bash
   npx convex dev
   ```

   This will:
   - Create a Convex project (if not already created)
   - Generate the Convex URL
   - Deploy your backend functions

4. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```env
   EXPO_PUBLIC_CONVEX_URL=your-convex-url-here
   ```

   You'll get this URL from the Convex dashboard after running `npx convex dev`

5. **Start the development server**

   ```bash
   npm start
   # or
   npx expo start
   ```

6. **Run on your device/emulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your physical device

### Additional Commands

```bash
# Run on specific platform
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser

# Linting
npm run lint
```

## ✨ Features

### Core Todo Features

- ✅ **Add Todos** - Create new tasks with a simple input
- ✏️ **Edit Todos** - Inline editing with save/cancel options
- 🗑️ **Delete Todos** - Remove tasks with confirmation dialog
- ☑️ **Toggle Completion** - Mark todos as complete/incomplete
- 🧹 **Clear All** - Bulk delete all todos with confirmation

### UI/UX Features

- 🎨 **Beautiful Gradients** - Modern gradient-based design throughout
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 💾 **Persistent Theme** - Theme preference saved locally
- 📊 **Progress Statistics** - Real-time stats showing:
  - Total Tasks
  - Completed Tasks
  - Active Tasks
- 🎯 **Empty State** - Friendly message when no todos exist
- ⚡ **Real-time Sync** - Changes sync instantly across devices
- 🔄 **Loading States** - Smooth loading indicators

### Technical Features

- 📱 **Cross-platform** - Works on iOS, Android, and Web
- 🔒 **Type Safety** - Full TypeScript coverage
- 🚀 **Optimistic Updates** - Fast, responsive UI
- 🎭 **Error Handling** - User-friendly error alerts
- ♿ **Accessibility** - Proper accessibility labels

## 🌟 Special Highlights

### 1. **Real-time Synchronization**

- Powered by Convex, all changes sync instantly across all connected devices
- No manual refresh needed - see updates in real-time

### 2. **Modern Gradient Design**

- Every UI element uses beautiful linear gradients
- Dynamic gradient colors that adapt to theme
- Smooth visual transitions

### 3. **Type-Safe Backend**

- Convex generates TypeScript types automatically
- End-to-end type safety from database to UI
- IntelliSense support for all data operations

### 4. **File-Based Routing**

- Expo Router provides Next.js-like routing
- Automatic route generation
- Type-safe navigation

### 5. **Persistent Theme System**

- Theme preference stored in AsyncStorage
- Survives app restarts
- Context-based theme management

### 6. **Optimized Performance**

- FlatList for efficient todo rendering
- Lazy loading and virtualization
- Optimized re-renders with React hooks

### 7. **Developer Experience**

- Hot reloading with Expo
- TypeScript for better DX
- ESLint for code quality
- Clear component structure

## 📱 Platform Support

- ✅ iOS (Simulator & Physical Device)
- ✅ Android (Emulator & Physical Device)
- ✅ Web (Browser)

## 🔧 Development Workflow

1. **Making Changes**
   - Edit files in `app/` for routes
   - Edit files in `components/` for UI components
   - Edit files in `convex/` for backend logic

2. **Backend Changes**
   - Modify `convex/schema.ts` for database schema
   - Add queries/mutations in `convex/todos.ts`
   - Convex auto-deploys on save (when `npx convex dev` is running)

3. **Styling**
   - Theme-aware styles in `assets/styles/`
   - Uses theme colors from `useTheme()` hook
   - Responsive design considerations

4. **Testing**
   - Test on multiple devices/platforms
   - Verify real-time sync across devices
   - Test theme switching and persistence

## 📝 Database Schema

```typescript
todos: {
  _id: Id<"todos">,
  title: string,
  isCompleted: boolean
}
```

## 🎨 Theme System

The app supports two themes:

- **Light Mode**: Clean, bright interface
- **Dark Mode**: Easy on the eyes, modern dark interface

Theme includes:

- Background gradients
- Surface colors
- Text colors (primary and muted)
- Border colors
- Status bar styling
- Icon colors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

[Add your license here]

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Backend powered by [Convex](https://convex.dev)
- Icons from [Ionicons](https://ionic.io/ionicons)

---

Made with ❤️ using React Native and Expo
