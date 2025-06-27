import { useEffect, useState } from "react";
import mockData from "../data/homeMock.json";
import {
  ActivityItemType,
  DeveloperItem,
  SummaryItem,
} from "../types/HomeData";

export default function useHomeData() {
  const [summary, setSummary] = useState<SummaryItem[]>([]);
  const [developers, setDevelopers] = useState<DeveloperItem[]>([]);
  const [activities, setActivities] = useState<ActivityItemType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSummary(
        mockData.summary.map((item) => ({
          ...item,
          id: item.id.toString(),
          image: item.imageUrl,
        }))
      );
      setDevelopers(mockData.developers);
      setActivities(mockData.activities);
      setLoading(false);
    }, 500);
  }, []);

  return { summary, developers, activities, loading };
}
