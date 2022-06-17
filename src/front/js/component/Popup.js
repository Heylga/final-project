import React from 'react'

function Popup() {
  return (
    <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
        </button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Which of your books on offer would you like to swap for this book?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <ul>
                        <li>Book one</li>
                        <li>Book two</li>
                        <li>Book three</li>
                        <li>Book four</li>
                    </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-success">Confirm</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popup