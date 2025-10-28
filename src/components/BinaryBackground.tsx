export const BinaryBackground = () => {
  const binaryStrings = Array.from({ length: 20 }, () => 
    Array.from({ length: 80 }, () => Math.random() > 0.5 ? '1' : '0').join('')
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-5 z-0">
      <div className="absolute inset-0 font-mono text-xs text-primary leading-relaxed">
        {binaryStrings.map((str, i) => (
          <div key={i} className="whitespace-nowrap">
            {str}
          </div>
        ))}
      </div>
    </div>
  );
};
