import { supabase } from "@/lib/supabase/client";
import { IProjectItem } from "@/types/projects";
import { create } from "zustand";

interface ProjectsStoreType {
  data: IProjectItem[];
  isLoading: boolean;
  isError: boolean;
  getData: () => void;
}

export const useProjectStore = create<ProjectsStoreType>((set) => ({
  data: [],
  isLoading: false,
  isError: false,
  getData: async () => {
    try {
      set({ isLoading: true });
      const { data, error } = await supabase.from("projects").select("*");

      if (error && error.code !== "PGRST116") {
        set({ isLoading: false });

        throw new Error("Gagal mengambil data");
      }

      set({ data, isLoading: false });
    } catch (err: any) {
      console.log(err);
      set({ isError: true });
    }
  },
  deleteData: async (id: string) => {
    try {
      set({ isLoading: true });
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) {
        set({ isLoading: false });
        throw new Error("Vaild remove project");
      }
      set({ isLoading: false, isError: false });
    } catch (err: any) {
      console.log(err);
      set({ isError: false });
    }
  },
}));
