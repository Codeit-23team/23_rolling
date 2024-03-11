import ReactQuill from 'react-quill';
import './editor.css';
import styles from '../../pages/post/id/message/index.module.css';

const Editor = ({ type, editorData, setEditorData }) => {
  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline'],
        [{ align: 'center' }, { align: 'right' }, { align: 'justify' }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }],
      ],
    },
  };
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'background',
    'color',
    'link',
    'image',
    'video',
    'width',
  ];
  const handleChange = (value) => {
    setEditorData(value);
  };
  return (
    <div className="editorCon">
      <strong className={styles.formTitle}>{type}</strong>
      <ReactQuill value={editorData} onChange={handleChange} formats={formats} modules={modules} />
    </div>
  );
};
export default Editor;
