package football.news.dto

data class AiNewsAnalysis(

    val title: String,

    val translatedContent: String,

    val tags: List<String>,

    val player: String?
)