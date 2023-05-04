import React from 'react'
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export const BlogSearch = (props) => {
    const [searchEntry, setSearchEntry] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        props.onUpdate(searchEntry);
    };

    const searchKeyHandler = (event) => {
        setSearchEntry(event.target.value);
    };

    return (
        <div>
            <form
                onSubmit={submitHandler}>
                <input
                    type="text"
                    maxlength="20"
                    placeholder="Search blogs by keywords"
                    onChange={searchKeyHandler}
                    value={searchEntry}
                />
                <button
                type="submit"><BiSearchAlt /></button>
            </form>
        </div>
    )
}
