import TextBox from "./TextBox";

const ResolveQuesiton = () => {
  return <div>
    <h1>Resolve Question</h1>
    <TextBox initialText="Yes" isReadOnly={true} textFunction={ () => false }/>
  </div>;
};

export default ResolveQuesiton;
