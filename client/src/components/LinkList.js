import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Link} from "react-router-dom";

function LinkList({links}) {
    if (!links.length) {
        return <p className="center">No links available</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>No</th>
                <th>Original</th>
                <th>Shortened</th>
                <th>Open</th>
            </tr>
            </thead>

            <tbody>
            {links.map((link, index) => {
                return (
                    <tr key={uuidv4()}>
                        <td>{index + 1}</td>
                        <td>{link.from}</td>
                        <td>{link.to}</td>
                        <td>
                            <Link to={`/detail/${link._id}`} >Open</Link>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default LinkList;