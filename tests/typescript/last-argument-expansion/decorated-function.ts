const Counter = decorator("my-counter")(
  (props: { initialCount?: number; label?: string }) => {
    const p = useDefault(props, {
      initialCount: 0,
      label: "Counter",
    });

    const [s, set] = useState({ count: p.initialCount });
    const onClick = () => set("count", (it) => it + 1);

    return () => (
      <button onclick={onClick}>
        {p.label}: {s.count}
      </button>
    );
  }
);
