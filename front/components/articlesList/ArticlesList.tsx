import React from "react";
import ArticleItem, { ArticleItemProps } from "../articleItem/ArticleItem";


const articleInfos : ArticleItemProps[] = [
    {
    articleCover: "string",
    articleTitle: "Novos pokémon",
    articleAuthor: "Gabriel Jesus",
    articleDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi suscipit doloribus blanditiis iste quo atque dolore temporibus accusamus? Sapiente iusto omnis, deserunt doloribus consequatur ex culpa nisi velit saepe nam.",
    articleViews: 43563,
    },
    {
        articleCover: "string",
        articleTitle: "Novos pokémon",
        articleAuthor: "Gabriel Jesus",
        articleDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi suscipit doloribus blanditiis iste quo atque dolore temporibus accusamus? Sapiente iusto omnis, deserunt doloribus consequatur ex culpa nisi velit saepe nam.",
        articleViews: 43563,
    }
]


export interface ArticleListProps{
    topicTitle: string
    articleInfosx?:ArticleItemProps[]
}

const ArticleList: React.FC<ArticleListProps> = ({topicTitle})=>{
    return (
        <>
            <section className="art-container">
                <div className="art-title">
                    <h3 className="art-title-txt">
                        {topicTitle}
                    </h3>
                </div>

                <ul>
                    <>
                        {articleInfos.map((item, index)=>{
                            return(
                                <li key={index}>
                                    <ArticleItem
                                        articleAuthor={item.articleAuthor}
                                        articleCover={item.articleCover}
                                        articleDesc={item.articleDesc}
                                        articleTitle={item.articleTitle}
                                        articleViews={item.articleViews}
                                        />
                                </li>
                            )
                        })}
                    </>
                </ul>
            </section>
        </>
    )
}

export default ArticleList;