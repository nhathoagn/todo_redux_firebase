import React from "react";

function NoteList() {
    return (
        <div id="noteList" role="tablist" aria-multiselectable="true">
            <div className="card">
                <div className="card-header" role="tab" id="note01">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1"
                           aria-expanded="true" aria-controls="noteContent1">
                            Ghi Chú Ngày 21/06/2020
                        </a>
                    </h5>
                </div>
                <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note01">
                    <div className="card-body">
                        Section 1 content
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="note02">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#noteContent2"
                           aria-expanded="true" aria-controls="noteContent2">
                            Ghi Chú Ngày 22/06/2020
                        </a>
                    </h5>
                </div>
                <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="note02">
                    <div className="card-body">
                        Section 2 content
                    </div>
                </div>
            </div>

        </div>
    )
}
export default NoteList
