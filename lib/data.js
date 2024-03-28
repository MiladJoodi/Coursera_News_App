import { Uni } from "./Models";
import { connectToDb } from "./utils"


export const getPost = async ()=>{
    try {
        connectToDb();
        const uni = await Uni.find();
        return uni;
    } catch (error) {
        console.log(error)
        throw new Error("Faild to fetch.")
    }
}



export const SliderImages = [
    { url: "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg" },
    { url: "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_" },
    { url: "https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg" },
    { url: "https://imageio.forbes.com/specials-images/imageserve/64e6668d9ed8aec53b4af6bf/The-University-of-California--Los-Angeles-campus-/0x0.jpg?format=jpg&height=1080&width=1080" },
    { url: "https://marvel-b1-cdn.bc0a.com/f00000000277771/www.bsu.edu/-/media/www/images/news/articles/2023/ball-state-alderdice-gates_2022-web.jpg?h=2345&iar=0&w=4467&sc_lang=en&hash=EEF92398EF55BF8B96D1D9244C530A25DA975A50" },
    { url: "https://cdn.britannica.com/51/117451-050-1527F56C/Carnegie-Library-Syracuse-University-New-York.jpg" },
]

export const unis = [
    {
        id: 1,
        title: "Heidelberg University",
        desc: "Founded in 1386, Heidelberg University is Germany's most ancient university and widely considered to be among the most prestigious.",
        image: "https://www.studying-in-germany.org/wp-content/uploads/2013/11/most-employable-degrees-in-germany.jpg",
        address: "Dessauer Str. 3-5, 10963 Berlin, Germany Albertus-Magnus-Platz",
        slug: "heidelberg-university",
        rank: 87,
        images: [
            "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg",
            "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_",
            "https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg",
            "https://imageio.forbes.com/specials-images/imageserve/64e6668d9ed8aec53b4af6bf/The-University-of-California--Los-Angeles-campus-/0x0.jpg?format=jpg&height=1080&width=1080",
            "https://marvel-b1-cdn.bc0a.com/f00000000277771/www.bsu.edu/-/media/www/images/news/articles/2023/ball-state-alderdice-gates_2022-web.jpg?h=2345&iar=0&w=4467&sc_lang=en&hash=EEF92398EF55BF8B96D1D9244C530A25DA975A50",
            "https://cdn.britannica.com/51/117451-050-1527F56C/Carnegie-Library-Syracuse-University-New-York.jpg",
            "https://finlandq.com/wp-content/uploads/2023/08/72107776.jpg"
        ]
    },
    {
        id: 2,
        title: "Leipzig University",
        desc: "A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study.",
        image: "https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/306/wide_fullhd_germany-brandenburger-tor.jpg",
        address: "Am Schwarzenberg-Campus 1, 21073 Hamburg, Germany",
        slug: "leipzig-university",
        rank: 479,
        images: [
            "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg",
            "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_",
            "https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg",
            "https://imageio.forbes.com/specials-images/imageserve/64e6668d9ed8aec53b4af6bf/The-University-of-California--Los-Angeles-campus-/0x0.jpg?format=jpg&height=1080&width=1080",
            "https://marvel-b1-cdn.bc0a.com/f00000000277771/www.bsu.edu/-/media/www/images/news/articles/2023/ball-state-alderdice-gates_2022-web.jpg?h=2345&iar=0&w=4467&sc_lang=en&hash=EEF92398EF55BF8B96D1D9244C530A25DA975A50",
            "https://cdn.britannica.com/51/117451-050-1527F56C/Carnegie-Library-Syracuse-University-New-York.jpg",
            "https://finlandq.com/wp-content/uploads/2023/08/72107776.jpg"
        ]
    },
    {
        id: 3,
        title: "University of Rostock",
        desc: "A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study.",
        image: "https://erudera.com/media/images/berlin_germany.2e16d0ba.fill-40000x30000.jpg",
        address: "Ernst-Abbe-Platz 8, 07743 Jena, Germany",
        slug: "rostock-university",
        rank: 761,
        images: [
            "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg",
            "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_",
            "https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg",
            "https://imageio.forbes.com/specials-images/imageserve/64e6668d9ed8aec53b4af6bf/The-University-of-California--Los-Angeles-campus-/0x0.jpg?format=jpg&height=1080&width=1080",
            "https://marvel-b1-cdn.bc0a.com/f00000000277771/www.bsu.edu/-/media/www/images/news/articles/2023/ball-state-alderdice-gates_2022-web.jpg?h=2345&iar=0&w=4467&sc_lang=en&hash=EEF92398EF55BF8B96D1D9244C530A25DA975A50",
            "https://cdn.britannica.com/51/117451-050-1527F56C/Carnegie-Library-Syracuse-University-New-York.jpg",
            "https://finlandq.com/wp-content/uploads/2023/08/72107776.jpg"
        ]
    },
    {
        id: 4,
        title: "University of Greifswald",
        desc: "The University of Greifswald is the smallest among the oldest universities of Germany.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Unibibliothek_Freiburg.JPG",
        address: "Albertus-Magnus-Platz, 50923 Köln, Germany",
        slug: "greifswald-university",
        rank: 401,
        images: [
            "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg",
            "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_",
            "https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg",
            "https://imageio.forbes.com/specials-images/imageserve/64e6668d9ed8aec53b4af6bf/The-University-of-California--Los-Angeles-campus-/0x0.jpg?format=jpg&height=1080&width=1080",
            "https://marvel-b1-cdn.bc0a.com/f00000000277771/www.bsu.edu/-/media/www/images/news/articles/2023/ball-state-alderdice-gates_2022-web.jpg?h=2345&iar=0&w=4467&sc_lang=en&hash=EEF92398EF55BF8B96D1D9244C530A25DA975A50",
            "https://cdn.britannica.com/51/117451-050-1527F56C/Carnegie-Library-Syracuse-University-New-York.jpg",
            "https://finlandq.com/wp-content/uploads/2023/08/72107776.jpg"
        ]
    },
    {
        id: 5,
        title: "University of Freiburg",
        desc: "The University of Freiburg features a modern library finished in December 2015.",
        image: "https://www.studying-in-germany.org/wp-content/uploads/2013/11/most-employable-degrees-in-germany.jpg",
        address: "Wilhelmsplatz 1, 37073 Göttingen, Germany",
        slug: "freiburg-university",
        rank: 192,
        images: [
            "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg",
            "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_",
            "https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg",
            "https://imageio.forbes.com/specials-images/imageserve/64e6668d9ed8aec53b4af6bf/The-University-of-California--Los-Angeles-campus-/0x0.jpg?format=jpg&height=1080&width=1080",
            "https://marvel-b1-cdn.bc0a.com/f00000000277771/www.bsu.edu/-/media/www/images/news/articles/2023/ball-state-alderdice-gates_2022-web.jpg?h=2345&iar=0&w=4467&sc_lang=en&hash=EEF92398EF55BF8B96D1D9244C530A25DA975A50",
            "https://cdn.britannica.com/51/117451-050-1527F56C/Carnegie-Library-Syracuse-University-New-York.jpg",
            "https://finlandq.com/wp-content/uploads/2023/08/72107776.jpg"
        ]
    },
    {
        id: 6,
        title: "University of Munich",
        desc: "A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study.",
        image: "https://abroadadmissioncouncil.com/images/pages/study%20abroad/04.jpg",
        address: "Neuer Graben 29, 49074 Osnabrück, Germany",
        slug: "munich-university",
        rank: 37,
        images: [
            "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg",
            "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_",
            "https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg",
            "https://imageio.forbes.com/specials-images/imageserve/64e6668d9ed8aec53b4af6bf/The-University-of-California--Los-Angeles-campus-/0x0.jpg?format=jpg&height=1080&width=1080",
            "https://marvel-b1-cdn.bc0a.com/f00000000277771/www.bsu.edu/-/media/www/images/news/articles/2023/ball-state-alderdice-gates_2022-web.jpg?h=2345&iar=0&w=4467&sc_lang=en&hash=EEF92398EF55BF8B96D1D9244C530A25DA975A50",
            "https://cdn.britannica.com/51/117451-050-1527F56C/Carnegie-Library-Syracuse-University-New-York.jpg",
            "https://finlandq.com/wp-content/uploads/2023/08/72107776.jpg"
        ]
    },
    {
        id: 7,
        title: "University of Tübingen",
        desc: "A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study.",
        image: "https://galvanizetestprep.com/wp-content/uploads/2022/03/Top-Universities-in-Germany-for-CS-1.jpeg",
        address: "Museumstraße 39, 22765 Hamburg, Germany",
        slug: "tubingan-university",
        rank: 213,
        images: [
            "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg",
            "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_",
            "https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg",
            "https://imageio.forbes.com/specials-images/imageserve/64e6668d9ed8aec53b4af6bf/The-University-of-California--Los-Angeles-campus-/0x0.jpg?format=jpg&height=1080&width=1080",
            "https://marvel-b1-cdn.bc0a.com/f00000000277771/www.bsu.edu/-/media/www/images/news/articles/2023/ball-state-alderdice-gates_2022-web.jpg?h=2345&iar=0&w=4467&sc_lang=en&hash=EEF92398EF55BF8B96D1D9244C530A25DA975A50",
            "https://cdn.britannica.com/51/117451-050-1527F56C/Carnegie-Library-Syracuse-University-New-York.jpg",
            "https://finlandq.com/wp-content/uploads/2023/08/72107776.jpg"
        ]
    },
]