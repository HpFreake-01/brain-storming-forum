import React from 'react'
import t from './Tag.module.css'

const Tag = () => {
    return (
        <div className={t.tag_item}>
              <nav className={t.tag_title}>#Tag1 #Tag2 #Tag3</nav>  
              <nav className={t.teg_otem_description}> Feugiat ipsum nunc scelerisque feugiat lorem. Egestas pretium nisi, natoque porttitor eget enim mauris duis.</nav>
              <hr/>
              <nav className={t.views}>views 0</nav>
        </div>
    )
}

export default Tag;
