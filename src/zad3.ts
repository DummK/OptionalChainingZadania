type ApiResponse<T> = {
    data?: T,
    error?: {
        message:string,
    }
}

type BlogPost = {
    title?: string,
    body?: string,
    author?: {
        name: string,
        surname: string,
        age: number
    }
    comments?: {
        nickname: string,
        message: string,
    }
}
function processBlogPost(apiResponse:ApiResponse<BlogPost[]>) {
    if(apiResponse.error) {
        console.error("BŁĄD " + apiResponse.error.message)
        return
    }
    if(!apiResponse.data?.length) {
        console.log("Brak danych w tablicy")
        return
    }

    apiResponse?.data?.forEach((post: BlogPost) => {
        console.log("==============================")
        console.log("Autor: ")
        if(post.author) {
            console.log(post.author.name)
            console.log(post.author.surname)
            console.log(post.author.age)
        }
        console.log("Tytuł: " + (post.title || "Brak danych"));
        console.log("Treść: " + (post.body || "Brak danych"));
        console.log("Komentarze: " + (post.comments || "Brak danych"));
        console.log("==============================")
    })
}

let r1: ApiResponse<BlogPost[]> = {
    data:[
        {
            title: "Blebleble",
        },
        {
            title: "babababab",
            body: "sljhhfgjkshfjs",
            author: {
                name: "EEEEEEE",
                surname: "aaaaaaaaaaaaaa",
                age: 12
            }
        }
    ]
}
let r2: ApiResponse<BlogPost[]> = {}
let r3: ApiResponse<BlogPost[]> = {
    data:[],
    error: {
        message: "sbandfbsalfs"
    }
}

processBlogPost(r1)
processBlogPost(r2)
processBlogPost(r3)

