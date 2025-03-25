"use client";

interface Query {
  id: number;
  query: string;
  createdAt: string;
}

interface RecentQueriesProps {
  queries: Query[];
  onSelectQuery: (query: string) => void;
}

export default function RecentQueries({
  queries,
  onSelectQuery,
}: RecentQueriesProps) {
  if (queries.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-8">
      <h3 className="text-lg font-semibold mb-3">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {queries.map((query) => (
          <button
            key={query.id}
            onClick={() => onSelectQuery(query.query)}
            className="px-3 py-1 bg-white border border-gray-300 rounded-full
                      text-sm hover:bg-gray-100 transition-colors"
          >
            {query.query}
          </button>
        ))}
      </div>
    </div>
  );
}
