import React, {useState} from "react";

function NoteForm() {
    const [state, setState] = useState({
     noteTitle: '',
        noteContent: ''
    });
    const isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setState({
            [name]: value
        })
    }
    return(
        <div className="col-4">
            <h3> Sửa Nội Dung Note</h3>
            <div className="form-group">
                <label htmlFor="noteTitle">Tiêu Đề Note</label>
                <input onChange={ (event) => isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle"
                       aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note"/>
                    <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
            </div>
            <div className="form-group">
                <label htmlFor="noteContent">Nội dung Note</label>
                <textarea onChange={ (event) => isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent"
                          aria-describedby="helpIdNoteContent" placeholder="Tiêu đề note"></textarea>
                <small id="helpIdNoteContent" className="form-text text-muted">Điền tiêu đề vào đây</small>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Lưu</button>
        </div>
    )
}
export default NoteForm
