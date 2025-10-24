import "./SheetBack.css";

type SheetBackProps = {
  title: string;
  color: string;
  includeMargins: boolean;
};

export const SheetBack = ({ title, color, includeMargins }: SheetBackProps) => {
  const renderTitle = () => {
    const parts = title.split("&");
    return parts.map((part, index) => (
      <>
        {part}
        {index < parts.length - 1 && (
          <span className="ampersand">&</span>
        )}
      </>
    ));
  };

  return (
    <div
      className="sheet-backing"
      style={{
        transform: includeMargins ? "scale(0.952)" : undefined,
      }}
    >
      <div className="sheet-background">
        <h1>{renderTitle()}</h1>
      </div>
      <div
        className="sheet-back-overlay"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};
