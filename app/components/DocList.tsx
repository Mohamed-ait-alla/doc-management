import Link from "next/link";
import React from "react";

const DocList = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Resume</td>
                        <td>2025/10/16</td>
                        <td>
                           <Link href="#">
                                View
                           </Link>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DocList;