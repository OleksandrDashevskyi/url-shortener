import React from 'react';

function LinkCard({link}) {
    return (
        <>
            <h2>Link</h2>
            <p>Your link: <a href={link.to} target="_blank" rel="noopener, noreferrer">{link.to}</a></p>
            <p>From where: <a href={link.to} target="_blank" rel="noopener, noreferrer">{link.from}</a></p>
            <p>Number of link clicks: <strong>{link.clicks}</strong></p>
            <p>Date created: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    );
}

export default LinkCard;