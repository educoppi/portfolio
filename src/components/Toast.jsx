export default function Toast({ toast }) {
  return (
    <div className="toast-region" role="status" aria-live="polite">
      {toast && (
        <div key={toast.key} className="toast">
          {toast.message}
        </div>
      )}
    </div>
  )
}
