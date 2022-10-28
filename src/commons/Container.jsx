import React from 'react';

function Container({title, children}) {
    return (
        <section className="container">
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

export default Container;