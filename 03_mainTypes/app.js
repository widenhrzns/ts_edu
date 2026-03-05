"use strict";
/* Запрос */
// {
//     "topicId": 5,
//     "status": "published" // "draft", "deleted"
// }
Object.defineProperty(exports, "__esModule", { value: true });
/* Ответ */
// [
//     {
//         "question": "Как осуществляется доставка?",
//         "answer": "быстро!",
//         "tags": [
//             "popular",
//             "new"
//         ],
//         "likes": 3,
//         "status": "published"
//     }
// ]
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus[QuestionStatus["PUBLISHED"] = 1] = "PUBLISHED";
    QuestionStatus[QuestionStatus["DRAFT"] = 2] = "DRAFT";
    QuestionStatus[QuestionStatus["DELETED"] = 3] = "DELETED";
})(QuestionStatus || (QuestionStatus = {}));
async function getFaqs(req) {
    const res = await fetch("/faqs", {
        method: "POST",
        body: JSON.stringify(req),
    });
    const data = await res.json();
    return data;
}
getFaqs({
    topicId: 5,
    status: QuestionStatus.PUBLISHED,
});
//# sourceMappingURL=app.js.map