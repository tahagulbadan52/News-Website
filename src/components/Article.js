import React from 'react';
import pic1 from '../assets/pic1.jpg';
import './article.scss'

function Article() {
    return (
        <div className="article">
            <img src={pic1} alt="Article cover" className="article__img"/>
            <div className="article__category">
                <div className="article__category--item">
                    Politics
                </div>
            </div>
            <div className="article__title">India rejects reference to J&K in China-Pakistan joint statement.</div>
            <div className="article__btn-panel">
                <button className="article__btn article__btn--original">Original Article</button>
                <button className="article__btn article__btn--summary">Read Summary</button>
            </div>

        </div>
    )
}

export default Article;
