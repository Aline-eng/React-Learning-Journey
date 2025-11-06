import React from "react";
import "./index.css";

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new formData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(formData)
    const out = document.getElementById("output");
    if (out) {
        out.textContent = `Submitted: ${email} / ${"*".repeat(String(password ?? "").length)}`;
    } else {
        alert(`Submitted: ${email}`);
    }
    formData.reset();
}
    
function Signup() {
    return (
        <section className="section">
            <h1 className="title">Signup form</h1>
            <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                <label className="label" htmlFor="email">Email:</label>
                <input className="input" id="email" type="email" name="email" placeholder="aline@gmail.com" required/> <br />
                <p className="hint">We'll never share your email.</p>
                </div>
                <div className="field">
                <label className="label" htmlFor="password">Password:</label>
                <input className="input" id="password" type="password" name="password" minLength={6} required/> <br />
                </div>
                <button className="button" type="submit">Submit</button>
            </form>
            <p id="output" className="hint" aria-live="polite"></p>
        </section>
    );
}
export default Signup