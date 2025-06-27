import { useEffect, useState } from "react";
import { fetchUserProfile } from "../Services/mockUserProfile";

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
}

export default function useUserProfile() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProfile = async () => {
    setLoading(true);
    const data = await fetchUserProfile(); // 👈 simulate API call
    setUser(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { user, loading, refetch: fetchProfile };
}
