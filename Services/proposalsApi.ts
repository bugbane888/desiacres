// services/proposalsApi.ts
import { Proposal } from "../types/ProposalTypes";

const MOCK_PROPOSALS: Proposal[] = [
  {
    id: 1,
    title: "Greenfield Properties",
    type: "Residential Development",
    category: "Residential",
    imageUrl: "https://picsum.photos/id/1018/400/300",
    description: "A modern residential project in an emerging neighborhood.",
  },
  {
    id: 2,
    title: "Urban Growth Partners",
    type: "Mixed-Use Development",
    category: "Mixed-Use",
    imageUrl: "https://picsum.photos/id/1028/400/300",
    description: "Combines commercial and residential units in one hub.",
  },
  {
    id: 3,
    title: "Sustainable Living Inc.",
    type: "Eco-Friendly Housing",
    category: "Eco",
    imageUrl: "https://picsum.photos/id/1043/400/300",
    description: "Focused on sustainable and green energy housing.",
  },
  {
    id: 4,
    title: "Community Builders LLC",
    type: "Community Center Project",
    category: "Community",
    imageUrl: "https://picsum.photos/id/1050/400/300",
    description: "A center to support local community events and services.",
  },
  {
    id: 5,
    title: "Innovative Spaces Ltd.",
    type: "Commercial Property",
    category: "Commercial",
    imageUrl: "https://picsum.photos/id/1035/400/300",
    description: "Prime space for modern businesses and startups.",
  },
];

/** Simulates a network request */
export function fetchProposals(): Promise<Proposal[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PROPOSALS), 800);
  });
}
