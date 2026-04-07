export default function SectionContainer({ children, bg = 'var(--bg-deep)', maxWidth = '720px', id }) {
  return (
    <section
      id={id}
      style={{ backgroundColor: bg }}
      className="w-full"
    >
      <div
        className="mx-auto"
        style={{
          maxWidth,
          padding: '96px 20px',
        }}
      >
        {children}
      </div>
    </section>
  );
}
