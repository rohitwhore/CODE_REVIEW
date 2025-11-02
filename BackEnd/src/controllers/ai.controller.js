const aiService = require("../services/ai.service")


module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if(!code){
        return res.status(400).send("Code is required");
    }

    const response = await aiService(code);

    res.send(response);
}






// controllers/ai.controller.js
// const aiService = require("../services/ai.service");

// module.exports.getReview = async (req, res) => {
//   const code = req.body.code;
//   if (!code) return res.status(400).send("code required");

//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
//   res.setHeader("Transfer-Encoding", "chunked");

//   const stream = await aiService(code);

//   for await (const chunk of stream.stream()) {
//     res.write(chunk.text());
//   }

//   res.end();
// };



