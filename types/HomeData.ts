export interface SummaryItem {
  id: string;
  title: string;
  value: string | number;
  subtitle: string;
  imageUrl: string;
  onPress?: () => void;
}

export interface DeveloperItem {
  id: number;
  title: string;
  type: string;
  imageUrl: string;
}

export interface ActivityItemType {
  id: number;
  icon: string;
  text: string;
  time: string;
}
