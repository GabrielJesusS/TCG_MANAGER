export interface ArticleItemProps{
    articleID: string;
    articleCover: string
    articleTitle: React.ReactNode
    articleAuthor: React.ReactNode
    articleDesc: React.ReactNode
    articleViews: number
}

const ArticleItem: React.FC<ArticleItemProps> = ({articleID, articleAuthor, articleCover, articleDesc, articleTitle, articleViews})=>{

    return(
        <div className="art-item-container">
            <div className="art-cover-container">
                <div className="art-cover">
                    <img className="art-cover-image" src={articleCover} alt="" />
                </div>
                <p className="art-views"><span>{articleViews}</span> views</p>
            </div>
            <div className="art-item-infos">
                <h4 className="art-item-title">
                    <a href={'/'+articleID}>{articleTitle}</a>
                </h4>
                <p className="art-item-author" >Criado por <span className="art-author-name">{articleAuthor}</span></p>
                <p className="art-item-desc">{articleDesc}</p>
            </div>
        </div>
    )
}

export default ArticleItem;