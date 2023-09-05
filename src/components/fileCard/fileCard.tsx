import "./fileCard.css";

interface FileCardProps {
  fileName: string;
  onClick: () => void;
}

export const FileCard: React.FC<FileCardProps> = ({
  fileName = "",
  onClick,
}) => {
  return (
    <div className="fileCard-container">
      <div>{fileName}</div>
      <div>
        <button onClick={onClick}>Download</button>
      </div>
    </div>
  );
};
