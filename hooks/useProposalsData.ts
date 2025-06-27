import { useEffect, useMemo, useState } from "react";
import { fetchProposals } from "../Services/proposalsApi";
import { Proposal } from "../types/ProposalTypes";

export default function useProposalsData() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // Load mock API data
  useEffect(() => {
    const loadProposals = async () => {
      setLoading(true);
      const data = await fetchProposals();
      setProposals(data);
      setLoading(false);
    };
    loadProposals();
  }, []);

  // Filter based on search query + category
  const filtered = useMemo(() => {
    return proposals.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.type.toLowerCase().includes(query.toLowerCase());

      const matchesCategory = categoryFilter
        ? p.category === categoryFilter
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [query, categoryFilter, proposals]);

  return {
    loading,
    query,
    setQuery,
    categoryFilter,
    setCategoryFilter,
    proposals: filtered,
  };
}
