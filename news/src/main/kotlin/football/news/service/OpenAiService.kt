package football.news.service

import com.fasterxml.jackson.databind.ObjectMapper
import football.news.dto.AiNewsAnalysis
import football.news.dto.ChatCompletionResponse
import org.springframework.beans.factory.annotation.Value
import org.springframework.http.MediaType
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.beans.factory.annotation.Qualifier

@Service
class OpenAiService(

    @Qualifier("openAiWebClient")
    private val webClient: WebClient,

    private val objectMapper: ObjectMapper
) {

    @Value("\${openai.api-key}")
    lateinit var apiKey: String

    @Value("\${openai.model}")
    lateinit var model: String

    fun analyze(

        content: String

    ): AiNewsAnalysis {

        val prompt = """
You are a football transfer journalist.

Analyze the tweet below.

Return ONLY JSON.

{
  "title":"",
  "translatedContent":"",
  "tags":[],
  "player":""
}

Rules:

1. title must be Korean.
2. translatedContent must be natural Korean.
3. tags should be football keywords.
4. player should be the main player.
5. Return ONLY JSON.

Tweet:

$content
""".trimIndent()

        val body = mapOf(

            "model" to model,

            "messages" to listOf(

                mapOf(
                    "role" to "user",
                    "content" to prompt
                )

            ),

            "temperature" to 0.2
        )

        val response = webClient.post()

            .uri("/chat/completions")

            .header("Authorization", "Bearer $apiKey")

            .contentType(MediaType.APPLICATION_JSON)

            .bodyValue(body)

            .retrieve()

            .bodyToMono(ChatCompletionResponse::class.java)

            .block()

        val json =
            response!!.choices.first().message.content

        return objectMapper.readValue(
            json,
            AiNewsAnalysis::class.java
        )
    }
}