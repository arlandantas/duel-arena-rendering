import TextAreaCodeEditor from '@uiw/react-textarea-code-editor';
import './style.css';

type Props = {
  code: string
  setCode: Function
  style?: object
};

function CodeEditor (props: Props) {
  return (
    <div className='CodeEditor'>
      <TextAreaCodeEditor
        className='TextAreaCodeEditor'
        value={props.code}
        language="js"
        placeholder="Enter your AI code."
        onChange={(evt) => props.setCode(evt.target.value)}
        style={props.style}
      />
    </div>
  );
}

export default CodeEditor;