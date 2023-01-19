import React from "react";
import ArticleItem, { ArticleItemProps } from "../articleItem/ArticleItem";
import ArticleCover from '../../public/images/article-mock.png'
import Link from "next/link";


const articleInfos : ArticleItemProps[] = [
    {   
        articleID: '1',
        articleCover: ArticleCover.src,
        articleTitle: "Novos pokémon",
        articleAuthor: "Gabriel Jesus",
        articleDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        articleViews: 43563,
    },
    {   
        articleID: '2',
        articleCover: ArticleCover.src,
        articleTitle: "Novos pokémon",
        articleAuthor: "Gabriel Jesus",
        articleDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
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
                <ul className="divide-y-2 divide-system-gray-100">
                    <>
                        {articleInfos.map((item, index)=>{
                            return(
                                <li key={index}>
                                    <ArticleItem
                                        articleAuthor={item.articleAuthor}
                                        articleCover={item.articleCover}
                                        articleTitle={item.articleTitle}
                                        articleViews={item.articleViews}
                                        articleID={item.articleID}
                                        articleDesc={item.articleDesc}
                                        />
                                </li>
                            )
                        })}
                    </>
                </ul>
                <div className="art-footer" >
                    <Link className="block text-center" href={'#'}>Ver mais...</Link>
                </div>
            </section>
        </>
    )
}

export default ArticleList;