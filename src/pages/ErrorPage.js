import React from "react";

export default function ErrorPage() {
    window.sessionStorage.setItem('isHomepage', false);
    return (
        <div>
            <h1>Hello from the error page</h1>
        </div>
    )
}