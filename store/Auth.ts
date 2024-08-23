import create from "zustand";
import * as SecureStore from "expo-secure-store";

interface AuthState {
  token: string | null;
  userName: string | null;
  password: string | null;

  loadToken: () => Promise<void>;
  setToken: (
    token: string,
    userName: string,
    password: string
  ) => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  userName: "",
  password: "",

  loadToken: async () => {
    const token = await SecureStore.getItemAsync("userToken");

    set({ token });
  },

  setToken: async (token, userName, password) => {
    await SecureStore.setItemAsync("userToken", token);
    set({ token, userName, password });
  },
}));

export default useAuthStore;
