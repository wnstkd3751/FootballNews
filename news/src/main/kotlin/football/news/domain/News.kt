package football.news.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "news")
data class News(

    @Id
    val id: String? = null,

    val tweetId: String,

    val author: String,

    val content: String,

    val reliability: String,

    val url: String,

    val createdAt: String,

    val breaking: Boolean
)