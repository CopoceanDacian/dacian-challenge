import React, { useState } from 'react';


const Table = (props: any) => {

    const { data } = props;

    return (
        <>
            <section className="table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                    {data.map((item: any, idx: any) => {
                        <tr>
                            <td key={idx}>{item.name}</td>
                            <td key={idx}>{item.birthday}</td>
                            <td key={idx}>{item.start}</td>
                            <td key={idx}>{item.end}</td>
                        </tr>
                    })}
                </table>
            </section>

        </>
    );
}

export default Table;
