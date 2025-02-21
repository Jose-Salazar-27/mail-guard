export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      disposable_email_domains: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      plans: {
        Row: {
          id: number;
          max_requests: number | null;
          name: string;
        };
        Insert: {
          id?: number;
          max_requests?: number | null;
          name: string;
        };
        Update: {
          id?: number;
          max_requests?: number | null;
          name?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          id: string;
          last_payment: string | null;
          plan_id: number | null;
          requests: number;
          disposable_requests: number;
        };
        Insert: {
          id: string;
          last_payment?: string | null;
          plan_id?: number | null;
          requests: number;
          disposable_requests: number;
        };
        Update: {
          id?: string;
          last_payment?: string | null;
          plan_id?: number | null;
          requests: number;
          disposable_requests: number;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "profiles_plan_id_fkey";
            columns: ["plan_id"];
            referencedRelation: "plans";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
