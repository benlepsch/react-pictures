import { React } from 'react';

function PageNotFound() {
    document.title = 'Page not found';

    return (
        <>
            <h2>Page not found :(</h2>
            <p>try clicking one of the links at the top to go to a real page</p>
        </>
    );
}

export default PageNotFound;
