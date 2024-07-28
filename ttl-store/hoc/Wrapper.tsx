// Desc: This is a HOC that wraps each section of the page.
function SectionWrapper<P extends object>(
  Component: React.ComponentType<P>,
  id: string
): React.ComponentType<P> {
  return function Wrapper(props: P): JSX.Element {
    return (
      <section className="relative text-gray-50 px-8" id={id}>
        <Component {...props} />
      </section>
    );
  };
}


export default SectionWrapper;
