// hooks/useMyLandData.ts
import { useState } from "react";

export interface LandItem {
  id: number;
  title: string;
  status: "Active" | "Draft" | "Under Review";
  acres: number;
  imageUrl: string;
}

const mockLandData: LandItem[] = [
  {
    id: 1,
    title: "Serene Valley Estate",
    status: "Active",
    acres: 123,
    imageUrl:
      "https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 2,
    title: "Whispering Pines Retreat",
    status: "Under Review",
    acres: 456,
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 3,
    title: "Golden Fields Farm",
    status: "Active",
    acres: 789,
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=60",
  },
];

export default function useMyLandData() {
  const [tab, setTab] = useState<"Active" | "Draft">("Active");

  const filteredLand = mockLandData.filter((land) =>
    tab === "Draft" ? land.status === "Draft" : land.status !== "Draft"
  );

  return { tab, setTab, filteredLand };
}
