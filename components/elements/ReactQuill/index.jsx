import React, { Component } from 'react'
import "./quill.snow.scss";
import './quill.bubble.scss';
const quillModules = {
    toolbar: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
        ],
        ["link"],
        ["clean"]
    ]
};
const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
];
export default class ReactQuillEditor extends Component {
    constructor(props) {
        super(props)
        if (typeof window !== 'undefined') {
            this.ReactQuill = require('react-quill')
        }
    }

    render() {
        const ReactQuill = this.ReactQuill
        if (typeof window !== 'undefined' && ReactQuill) {
            return (
                <ReactQuill
                    onChange={this.props.onChange}
                    theme="snow"
                    value={this.props.value}
                    modules={quillModules}
                    formats={quillFormats}
                />
            )
        } else {
            return <textarea />;
        }
    }
}