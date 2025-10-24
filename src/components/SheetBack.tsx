import "./SheetBack.css";

type SheetBackProps = {
  title: string;
  color: string;
  includeMargins: boolean;
};

export const SheetBack = ({ title, color, includeMargins }: SheetBackProps) => {
  return (
    <div
      className="sheet-backing"
      style={{
        transform: includeMargins ? "scale(0.952)" : undefined,
      }}
    >
      <div className="sheet-background">
        <h1>{title}</h1>
      </div>
      <div
        className="sheet-back-overlay"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};
