import Tag from './Tag/Tag.js';
import React from 'react';
import t from './Tags.module.css';

const Tags = () => {
    return (
        <div>
            <div className={t.input_wrapper}>
                <input className={t.block_input} placeholder='Search...'/>
                <button className={t.input_button}>Search by #Tag</button>
            </div>
            <div className={t.container}>
                <Tag/>
                <Tag/>
                <Tag/>
                <Tag/>
            </div>
            <div className={t.container}>
                <Tag/>
                <Tag/>
                <Tag/>
                <Tag/>
            </div>
        </div>
    )
}

export default Tags;
