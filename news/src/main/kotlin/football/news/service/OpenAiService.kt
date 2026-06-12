@Service
class OpenAiService(

    private val webClient: WebClient
) {

    fun analyze(
        content: String
    ): AiNewsAnalysis {

        val prompt = """
You are a football transfer journalist.

Analyze the tweet below.

Return ONLY JSON.

{
  "title": "",
  "translatedContent": "",
  "tags": [],
  "player": ""
}

Rules:

1. title must be Korean.
2. translatedContent must be natural Korean.
3. tags should be football related keywords.
4. player should be the main player mentioned.
5. Return JSON only.

Tweet:

{tweet}
""".trimIndent()

        ...
    }
}