import { React } from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        color: props.curMode === "light" ? "black" : "white",
      }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                color: props.curMode === "light" ? "black" : "white",
                backgroundColor: props.curMode === "dark" ? "black" : "white",
              }}
            >
              <strong>About Textra</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.curMode === "light" ? "black" : "white",
                backgroundColor: props.curMode === "dark" ? "black" : "white",
              }}
            >
              Textra is a utility app to shape your text in a way you want
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                color: props.curMode === "light" ? "black" : "white",
                backgroundColor: props.curMode === "dark" ? "black" : "white",
              }}
            >
              <strong>Coded By</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.curMode === "light" ? "black" : "white",
                backgroundColor: props.curMode === "dark" ? "black" : "white",
              }}
            >
              Developed by Umair Tahir
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
