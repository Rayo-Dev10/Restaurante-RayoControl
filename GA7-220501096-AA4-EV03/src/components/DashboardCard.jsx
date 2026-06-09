export default function DashboardCard({ title, value, description }) {
  return (
    <article className="dashboard-card">
      <span>{title}</span>
      <strong>{value}</strong>
      <p>{description}</p>
    </article>
  );
}
