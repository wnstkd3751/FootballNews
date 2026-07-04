package football.news.dto

data class ChatCompletionResponse(

    val choices: List<Choice>
)

data class Choice(

    val message: Message
)

data class Message(

    val content: String
)