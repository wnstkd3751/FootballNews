@Document("news")
data class News(

    @Id
    val id: String? = null,

    val tweetId: String,

    val author: String,

    val content: String,

    val reliability: String,

    val url: String,

    val createdAt: String,

    val breaking: Boolean,

    val breakingType: BreakingType,

    // AI 생성
    val title: String? = null,

    val translatedContent: String? = null,

    val tags: List<String> = emptyList(),

    val player: String? = null
)