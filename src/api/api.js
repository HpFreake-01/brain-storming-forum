import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":"d376bb9a-6209-4aa9-a1f9-09b6111e847f",
        'Content-Type': 'application/json'
    },
    baseURL: 'http://localhost:8080/'
})

export const questionsAPi = {
    getQuestions(currentPage, pageSize){
        return instance.get(`questions?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data;
            })
    },
    getQuestionArticle(id){
        return instance.get(`questions/${id}?expand=answer`)
            .then(response =>{
                return response.data
            })
    },
    postQuestion(data){
        return instance.post(`questions`,{
            body_question: data.body_question,
            question_title: data.question_title, 
            tag: data.tag
        })
    },
    postAnswer(data, id){
        return instance.post(`answers`,{
            body_answer:data.body_answer,
            question_id: id
        })
    },
    deleteQuestion(id){
        return instance.delete(`questions/${id}`);
    }
}
export const authApi = {
    login(email, password) {
        return instance.post(`login`,{email, password})
    },
}
let email = 'example@gmail.com'
let password = 'root12root'
authApi.login(email, password)

//&count=${pageSize}
//