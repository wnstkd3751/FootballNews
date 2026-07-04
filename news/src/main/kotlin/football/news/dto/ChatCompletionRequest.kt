package football.news.dto

data class ChatCompletionRequest(
    val model: String,
    val messages: List<ChatMessage>,
    val temperature: Double = 0.2
)

data class ChatMessage(
    val role: String,
    val content: String
)