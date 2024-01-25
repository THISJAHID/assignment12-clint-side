

import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotoAlbum from 'react-photo-album';

const getArticles = async ({ pageParam = 0 }) => {
    // const res = await fetch(`https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`);
    const res = await fetch(`https://api.pexels.com/v1/search/?page=5&per_page=150&query=fitness`, {
        headers: {
            Authorization: 'AW50Kaw8VQ8sdc3a98fU610IgcgcAb8TzHr1HwCKEtTGgiJ17pyX9s3G',
        },
    });
    const data = await res.json();

    return { ...data, prevOffset: pageParam }


}
const Blog = () => {

    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ["articles"],
        queryFn: getArticles,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
                return false;
            }
            return lastPage.prevOffset + 10;
        }

    })



    const articles = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.photos]
    }, [])
    return (
        <div>

            <div>
                <div className="bg-black h-96 grid justify-center bg-[url('https://preview.colorlib.com/theme/gymlife/img/hero/hero-1.jpg.webp')] bg-cover ">

                    <h2 className="text-[250px] text-center font-bold bg-clip-text text-transparent bg-cover font-[teko] bg-[url('https://preview.colorlib.com/theme/crossbody/images/bg_1.jpg.webp')] uppercase">Gallary</h2>

                </div>
            </div>
            <InfiniteScroll
                dataLength={articles ? articles.length : 0}
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loading={<div>Loading...☝️</div>}
            >
                <div className="w-11/12 mx-auto grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
                    {articles &&
                        articles.map((article, idx) => {
                            return (
                                <div className='' key={idx}>


                                    {console.log(article.height)}
                                    <PhotoAlbum layout="rows" photos={[
                                        {
                                            src: article.src.original,
                                            width: article.width,
                                            height: article.height,

                                        }
                                    ]} />




                                </div>
                            )
                        })

                    }

                </div>

            </InfiniteScroll>
        </div>
    );
};

export default Blog;