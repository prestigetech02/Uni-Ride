import { Loading, EmptyState, ErrorState } from "./States.jsx"
import { Button } from "./Button.jsx"

export function DataTable({
  columns,
  rows = [],
  loading = false,
  error = null,
  onRetry,
  emptyMessage = "No records found",
  page = 1,
  pageCount = 1,
  onPageChange,
  filters,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      {filters && <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 p-4">{filters}</div>}

      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorState message={error} onRetry={onRetry} />
      ) : rows.length === 0 ? (
        <EmptyState message={emptyMessage} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                {columns.map((c) => (
                  <th key={c.key} className="px-4 py-3 font-medium">{c.header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row, i) => (
                <tr key={row.id ?? i} className="hover:bg-gray-50">
                  {columns.map((c) => (
                    <td key={c.key} className="px-4 py-3">{c.render ? c.render(row) : row[c.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {pageCount > 1 && !loading && !error && (
        <div className="flex items-center justify-between border-t border-gray-200 p-4 text-sm">
          <span className="text-gray-500">Page {page} of {pageCount}</span>
          <div className="flex gap-2">
            <Button variant="secondary" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>Previous</Button>
            <Button variant="secondary" disabled={page >= pageCount} onClick={() => onPageChange(page + 1)}>Next</Button>
          </div>
        </div>
      )}
    </div>
  )
}
