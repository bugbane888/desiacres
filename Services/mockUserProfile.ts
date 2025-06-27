import { UserProfile } from "../hooks/useUserProfile";

// Mock  Data
const MOCK_USER_PROFILE: UserProfile = {
  id: 1,
  name: "Amelia Johnson",
  email: "amelia.johnson@example.com",
  phone: "+91 9876543210",
  role: "Land Owner",
  avatar: "https://randomuser.me/api/portraits/women/65.jpg",
};

// ⏳ Simulated API request
export function fetchUserProfile(): Promise<UserProfile> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_USER_PROFILE);
    }, 700); // 700ms delay
  });
}
