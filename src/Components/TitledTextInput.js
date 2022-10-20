import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border-radius: 24px;
  border: solid #e2e8f0 1px;
  background-color: #f8fafc;
  color: #666787;
  &:hover {
    background-color: #d9e2efb8;
  }
`;

function TitledTextInput({ title, def }) {
  const Title =
    title === undefined ? (
      <div></div>
    ) : (
      <div className="caption" style={{ color: "#94A3B8" }}>
        {title}
      </div>
    );
  return (
    <div className="d-flex flex-column gap-2">
      {Title}
      <Input className="p-2" defaultValue={def}></Input>
    </div>
  );
}

export default TitledTextInput;
