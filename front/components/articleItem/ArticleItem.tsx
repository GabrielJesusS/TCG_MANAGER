export interface ArticleItemProps{
    articleCover: string
    articleTitle: React.ReactNode
    articleAuthor: React.ReactNode
    articleDesc: React.ReactNode
    articleViews: number
}

const ArticleItem: React.FC<ArticleItemProps> = ({articleAuthor, articleCover, articleDesc, articleTitle, articleViews})=>{

    return(
        <div className="art-item-container">
            <div className="art-cover">
                <img src={articleCover} alt="" />
                <p><span>{articleViews}</span> views</p>
            </div>
            <div className="art-item-infos">
                <h4 className="art-item-title">
                    {articleTitle}
                </h4>
                <p className="art-item-author" >Criado por <span>{articleAuthor}</span></p>
                <p className="art-item-desc" >{articleDesc}</p>
            </div>
        </div>
    )
}

export default ArticleItem;