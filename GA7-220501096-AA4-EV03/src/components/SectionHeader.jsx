export default function SectionHeader({ title, description }) {
  return (
    <section className="section-header">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}
