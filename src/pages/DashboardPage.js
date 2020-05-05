import React from 'react';
import Upload from '../components/Upload';

function DashBoardPage() {
    window.sessionStorage.setItem('isHomepage', false);

    return (
        <div className="container">
            <h1>DashboardPage</h1>
            <Upload />

        </div>
    );

}

export default DashBoardPage;