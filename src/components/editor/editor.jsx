import ReactQuill from "react-quill";
import './editor.css';

const Editor = () => {
    const modules = {
        toolbar: {
            container: [
                ["bold", "italic", "underline"],
                [{ 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ color: [] }],
            ],
        },
    };
    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "align",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "background",
        "color",
        "link",
        "image",
        "video",
        "width",
    ];
    return(
        <div className="testCon">
            <ReactQuill formats={formats} modules={modules}/>
        </div>
    )
}
export default Editor;